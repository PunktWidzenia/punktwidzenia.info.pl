"use client";
import { useState, useEffect, useRef } from "react";
import NextImage from "next/image";
const DRAFT_KEY = "article-draft-v1";

export default function ArticleGenerator() {
    const toIso = (d) => {
    // d = "YYYY-MM-DD" → bezpiecznie na południe dnia, by uniknąć krawędzi TZ
    try { return new Date(`${d}T12:00:00`).toISOString(); } catch { return d; }
  };
  const [date, setDate] = useState(() => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`; // YYYY-MM-DD (lokalnie)
  });
  const [isoDate, setIsoDate] = useState("");
  useEffect(() => { setIsoDate(toIso(date)); }, [date]);
  const js = (val) => JSON.stringify(String(val ?? ""));

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [caption, setCaption] = useState("");
  const [articleId, setArticleId] = useState("");
  const [sections, setSections] = useState([
    { heading: "", paragraph: "" },
    { heading: "", paragraph: "" },
    { heading: "", paragraph: "" },
    { heading: "", paragraph: "" },
  ]);
  const [generatedCode, setGeneratedCode] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
const [preview311, setPreview311] = useState("");
const [preview1080, setPreview1080] = useState("");
const [previewOG, setPreviewOG] = useState("");
  const [articleObjectCode, setArticleObjectCode] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [titleError, setTitleError] = useState("");
  const [toastMsg, setToastMsg] = useState("");
const toastTimerRef = useRef(null);
const closeBtnRef = useRef(null);
const previewBtnRef = useRef(null);
const lastActiveRef = useRef(null);
const closePreview = () => {
  setPreviewOpen(false);
  (lastActiveRef.current || previewBtnRef.current)?.focus?.();
};

function showToast(msg) {
  setToastMsg(msg);
  if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
  toastTimerRef.current = setTimeout(() => setToastMsg(""), 2000);
}

  // Limit długości opisu SEO
const MAX_DESC = 160;

// Setter z twardym przycięciem
function handleDescriptionChange(e) {
  const v = String(e.target.value ?? "");
  setDescription(v.length <= MAX_DESC ? v : v.slice(0, MAX_DESC));
}
function handleTitleChange(e) {
  const v = e.target.value;
  setTitle(v);
  if (!v.trim()) {
    setTitleError("Podaj tytuł — bez niego nie wygenerujemy pliku ani slugu.");
  } else {
    setTitleError("");
  }
}

  // Ref do sprzątania URL-i blobów
  const downloadUrlRef = useRef(null);

  const escapeHtml = (text) =>
    String(text ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/`/g, "&#96;");

  const formatParagraph = (text) => {
    const lines = String(text ?? "")
      .trim()
      .split("\n")
      .map((l) => l.trim());
    if (lines.length > 1 && lines.every((l) => l.startsWith("- "))) {
      const items = lines.map((l) => `<li>${escapeHtml(l.slice(2))}</li>`).join("\n");
return `<ul className="list-disc pl-6 space-y-1">\n${items}\n</ul>`;
    }
    return `<p>${escapeHtml(text).replace(/\n/g, "<br />")}</p>`;
  };

  // lastArticleId – inicjalizacja jednokrotna
  useEffect(() => {
    const stored = localStorage.getItem("lastArticleId");
    if (stored) {
      setArticleId(stored);
    } else {
      localStorage.setItem("lastArticleId", "1");
      setArticleId("1");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);

    if (typeof d.title === "string") setTitle(d.title);
    if (d.title && d.title.trim()) setTitleError("");
    if (typeof d.description === "string") setDescription(d.description);
    if (typeof d.caption === "string") setCaption(d.caption);
    if (typeof d.articleId === "string") setArticleId(d.articleId);
    if (typeof d.date === "string") setDate(d.date);

    if (Array.isArray(d.sections) && d.sections.length) {
      // zabezpieczenie, żeby zawsze były 4 sekcje (jak w Twoim UI)
      const base = [{heading:"",paragraph:""},{heading:"",paragraph:""},{heading:"",paragraph:""},{heading:"",paragraph:""}];
      const merged = base.map((s, i) => ({ ...s, ...(d.sections[i] || {}) }));
      setSections(merged);
    }
  } catch {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

useEffect(() => {
  const payload = {
    title,
    description,
    caption,
    articleId,
    date,
    sections,
  };
  const t = setTimeout(() => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(payload));
    } catch {}
  }, 500);
  return () => clearTimeout(t);
}, [title, description, caption, articleId, date, sections]);

// Sprzątanie blobów TYLKO przy odmontowaniu komponentu
useEffect(() => {
  return () => {
    if (thumbnailUrl) {
      URL.revokeObjectURL(thumbnailUrl);
    }
    if (downloadUrlRef.current) {
      URL.revokeObjectURL(downloadUrlRef.current);
      downloadUrlRef.current = null;
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

// Sprzątanie timera toasta TYLKO przy odmontowaniu komponentu
useEffect(() => {
  return () => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
  };
}, []);

function slugifyTitle(t) {
  return String(t || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // usuń diakrytyki
    .replace(/ł/g, "l")                               // polskie wyjątki
    .replace(/[^a-z0-9\s-]/g, "")                     // usuń znaki inne niż a-z, 0-9, spacja, myślnik
    .trim()
    .replace(/\s+/g, "-")                             // spacje → myślniki
    .replace(/-+/g, "-");                             // sklej wielokrotne "-"
}

useEffect(() => {
  if (!previewOpen) return;
  const onKey = (e) => { if (e.key === "Escape") closePreview(); };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, [previewOpen]);

useEffect(() => {
  if (!previewOpen) return;
  const prev = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  return () => { document.body.style.overflow = prev; };
}, [previewOpen]);

useEffect(() => {
  if (!previewOpen) return;
  // po otwarciu modala ustaw focus na przycisku Zamknij
  setTimeout(() => closeBtnRef.current?.focus(), 0);
}, [previewOpen]);

useEffect(() => {
  const slugified = slugifyTitle(title);
  // Zawsze aktualizuj slug do wyświetlenia w polu (nawet bez opisu)
  setSlug(slugified);

  // Brak tytułu/opisu albo slug po normalizacji pusty? — nie generujemy plików
  if (!title.trim() || !description.trim() || !slugified) {
    setGeneratedCode("");
    setArticleObjectCode("");
    if (downloadUrlRef.current) {
      URL.revokeObjectURL(downloadUrlRef.current);
      downloadUrlRef.current = null;
    }
    setDownloadLink("");
    return;
  }
  const imgPath = `/${slugified}.webp`;

  const descSafe = description.length > MAX_DESC ? description.slice(0, MAX_DESC) : description;
    const formattedSections = sections
  .map((s, i) => {
    let txt =
      `            <h2 className="text-xl font-semibold">${escapeHtml(s.heading)}</h2>\n` +
      `            ${formatParagraph(s.paragraph)}`;
    if (i === 1 || i === 3) txt += "\n            <AdSlot />";
    return txt;
  })
  .join("\n\n");

    const componentName = `Article${slugified.replace(/-/g, "")}`;
    const safeSections = formattedSections.replace(/\$\{/g, "\\${");

    const jsCode = `import Head from "next/head";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function ${componentName}() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <Head>
        <title>{${js(title)}}</title>
        <meta name="description" content={${js(descSafe)}} />
        <meta property="og:title" content={${js(title)}} />
        <meta property="article:published_time" content={${js(isoDate)}} />
        <meta property="article:modified_time" content={${js(isoDate)}} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Punkt Widzenia" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={${js(descSafe)}} />
        <meta property="og:image" content={${js(
          "https://punktwidzenia.info.pl/" + slugified + ".webp"
        )}} />
        <meta property="og:url" content={${js(
          "https://punktwidzenia.info.pl/" + slugified
        )}} />
        <meta property="og:image:alt" content={${js(title)}} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={${js(title)}} />
      <meta name="twitter:description" content={${js(descSafe)}} />
      <meta name="twitter:image" content={${js(
        "https://punktwidzenia.info.pl/" + slugified + ".webp"
      )}} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={${js("https://punktwidzenia.info.pl/" + slugified)}} />
<script
   type="application/ld+json"
   dangerouslySetInnerHTML={{
     __html: JSON.stringify({
       '@context': 'https://schema.org',
       '@type': 'NewsArticle',
       headline: ${js(title)},
       image: [${js("https://punktwidzenia.info.pl/" + slugified + ".webp")}],
       datePublished: ${js(isoDate)},
       dateModified: ${js(isoDate)},
       mainEntityOfPage: ${js("https://punktwidzenia.info.pl/" + slugified)},
       articleSection: 'news',
       author: { '@type': 'Organization', name: 'Punkt Widzenia' },
       publisher: {
         '@type': 'Organization',
         name: 'Punkt Widzenia',
         logo: { '@type': 'ImageObject', url: 'https://punktwidzenia.info.pl/logo.png' }
       },
       description: ${js(descSafe)}
     })
   }}
 />      </Head>

      <article className="space-y-6">
        <NextImage
          src={${js("/" + slugified + ".webp")}}
          alt={${js(title)}}
          width={311}
          height={163}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        ${caption ? `<p className="text-sm text-gray-500 dark:text-gray-400">${escapeHtml(caption)}</p>` : ""}
        <div className="space-y-6">
${safeSections}
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/${slugified}" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default ${componentName};
`;

    const idValue = parseInt(articleId, 10);
const objectCode = `{
  id: ${!isNaN(idValue) ? idValue : 0},
  link: ${js("/" + slugified)},
  img: ${js(imgPath)},
  title: ${js(title)},
  description: ${js(descSafe)},
  date: ${js(date)},
  component: ${js(componentName)}
},`;

    const blob = new Blob([jsCode], { type: "text/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    if (downloadUrlRef.current) URL.revokeObjectURL(downloadUrlRef.current);
    downloadUrlRef.current = url;
    setDownloadLink(url);

    setGeneratedCode(jsCode);
    setArticleObjectCode(objectCode);
  }, [title, date, isoDate, description, caption, sections, articleId]);

  const clearForm = () => {
    setTitle("");
    setSlug("");
    setDescription("");
    setCaption("");
    setSections([
      { heading: "", paragraph: "" },
      { heading: "", paragraph: "" },
      { heading: "", paragraph: "" },
      { heading: "", paragraph: "" },
    ]);
    setGeneratedCode("");
    setArticleObjectCode("");
    if (thumbnailUrl) URL.revokeObjectURL(thumbnailUrl);
    setThumbnailUrl("");
    if (downloadUrlRef.current) {
      URL.revokeObjectURL(downloadUrlRef.current);
      downloadUrlRef.current = null;
    }
    setDownloadLink("");
    localStorage.removeItem(DRAFT_KEY);
    setPreview311("");
    setPreview1080("");
    setPreviewOpen(false);
  };

function drawCover(ctx, img, targetW, targetH) {
  // centralny crop z zachowaniem proporcji ("cover")
  const sRatio = img.width / img.height;
  const tRatio = targetW / targetH;

  let sx, sy, sw, sh;
  if (sRatio > tRatio) {
    // źródło szersze – utnij boki
    sh = img.height;
    sw = Math.floor(sh * tRatio);
    sx = Math.floor((img.width - sw) / 2);
    sy = 0;
  } else {
    // źródło wyższe – utnij górę/dół
    sw = img.width;
    sh = Math.floor(sw / tRatio);
    sx = 0;
    sy = Math.floor((img.height - sh) / 2);
  }

  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, targetW, targetH);
}

function makePreviewDataURL(img, w, h, mime = "image/webp", quality = 0.8) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return ""; // 👈 guard
  canvas.width = w;
  canvas.height = h;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  drawCover(ctx, img, w, h);
  return canvas.toDataURL(mime, quality);
}

function openPreviewModal() {
  lastActiveRef.current = document.activeElement;
  if (!thumbnailUrl) return;
  const img = new window.Image();
  img.crossOrigin = "anonymous";
  img.decoding = "async";
  img.onload = () => {
    try {
      const url311 = makePreviewDataURL(img, 311, 163, "image/webp", 0.8);
      const url1080 = makePreviewDataURL(img, 1080, 1080, "image/jpeg", 0.8);
      const urlOG = makePreviewDataURL(img, 1200, 630, "image/jpeg", 0.8);
      setPreview311(url311);
      setPreview1080(url1080);
      setPreviewOG(urlOG);
      setPreviewOpen(true);
    } catch {
      showToast("Nie udało się wygenerować podglądu");
    }
  };
  img.onerror = () => showToast("Błąd wczytywania miniatury");
  img.src = thumbnailUrl;
}

const resizeAndDownload = (variant, callback) => {
  if (!thumbnailUrl || typeof window === "undefined") return;

  const img = new window.Image();
  img.crossOrigin = "anonymous";
  img.decoding = "async";

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) { showToast("Canvas 2D niedostępny"); return; }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // warianty i nazwy
    let w = 1080, h = 1080, mime = "image/jpeg", filename = `${slug}.jpg`;
    if (variant === "webp") {
      w = 311; h = 163; mime = "image/webp"; filename = `${slug}.webp`;
    } else if (variant === "og") {
      w = 1200; h = 630; mime = "image/jpeg"; filename = `${slug}-og.jpg`;
    } else if (variant === "jpg") {
      w = 1080; h = 1080; mime = "image/jpeg"; filename = `${slug}.jpg`;
    }

    canvas.width = w;
    canvas.height = h;
    drawCover(ctx, img, w, h);

    const quality = 0.8;

    const save = (blobOrDataUrl) => {
      const a = document.createElement("a");
      if (blobOrDataUrl instanceof Blob) {
        const href = URL.createObjectURL(blobOrDataUrl);
        a.href = href;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(href);
      } else {
        a.href = blobOrDataUrl;
        a.download = filename;
        a.click();
      }
      if (typeof callback === "function") callback();
    };

    if (canvas.toBlob) {
      canvas.toBlob((blob) => blob && save(blob), mime, quality);
    } else {
      save(canvas.toDataURL(mime, quality));
    }
  };

  img.src = thumbnailUrl;
};

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const okTypes = ["image/jpeg","image/png","image/webp","image/gif","image/avif"];
    if (!okTypes.includes(file.type)) {
      showToast("Nieobsługiwany typ pliku");
      e.target.value = "";
      return;
    }
    const MAX_MB = 10;
    if (file.size > MAX_MB * 1024 * 1024) {
      showToast(`Plik za duży (> ${MAX_MB} MB)`);
      e.target.value = "";
      return;
    }
      if (thumbnailUrl) URL.revokeObjectURL(thumbnailUrl);
      const url = URL.createObjectURL(file);
      setThumbnailUrl(url);
      e.target.value = "";
showToast(`Zapisz ${slug || "miniatura"}.webp do /public`);
    }
  };

  return (
   <div
   className="p-4 max-w-4xl mx-auto space-y-4"
   aria-hidden={previewOpen ? "true" : undefined}
>
      <h1 className="text-2xl font-bold">Generator artykułu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1">
  <input
    type="text"
    placeholder="Tytuł artykułu"
    value={title}
    onChange={handleTitleChange}
    aria-invalid={!!titleError}
    aria-describedby="title-error"
    className={`border p-2 rounded w-full bg-white text-black dark:bg-gray-800 dark:text-white ${titleError ? "border-red-500" : ""}`}
  />
  {titleError && (
    <div id="title-error" className="text-xs text-red-600">
      {titleError}
    </div>
  )}
</div>
        <input
          type="text"
          placeholder="Slug (URL)"
          value={slug}
          readOnly
          className="border p-2 rounded bg-gray-100 cursor-not-allowed dark:bg-gray-700 dark:text-white"
        />
        <input
          type="date"
          placeholder="Data publikacji"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
        />
<div className="space-y-1">
  <input
    type="text"
    placeholder="Opis artykułu (SEO)"
    value={description}
    onChange={handleDescriptionChange}
    aria-describedby="seo-desc-counter"
    maxLength={MAX_DESC}
    className="border p-2 rounded w-full bg-white text-black dark:bg-gray-800 dark:text-white"
  />
  <div
    id="seo-desc-counter"
    className="text-xs text-gray-500 dark:text-gray-400"
  >
    {description.length} / {MAX_DESC} (zalecane ≤ {MAX_DESC})
  </div>
</div>
        <input
          type="text"
          placeholder="Podpis pod zdjęciem (opcjonalnie)"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
        />
        <input
          type="text"
          placeholder="ID artykułu (np. 12)"
          value={articleId}
          onChange={(e) => setArticleId(e.target.value)}
          className="border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
        />
        <div className="sm:col-span-2 space-y-2">
          <label className="block">Wybierz plik miniatury</label>
          <input
            type="file"
            accept="image/*,.jpg,.jpeg,.png,.webp,.avif"
            onChange={handleFileChange}
            className="border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
          />
          {thumbnailUrl && (
            <NextImage
              src={thumbnailUrl}
              alt="Podgląd miniatury"
              width={200}
              height={150}
              unoptimized
              className="w-48 h-auto border rounded"
            />
          )}
        </div>
      </div>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="space-y-2">
            <input
              type="text"
              placeholder={`Nagłówek sekcji ${index + 1}`}
              value={section.heading}
              onChange={(e) => {
                const newSections = [...sections];
                newSections[index].heading = e.target.value;
                setSections(newSections);
              }}
              className="border p-2 rounded w-full bg-white text-black dark:bg-gray-800 dark:text-white"
            />
            <textarea
              placeholder={`Treść sekcji ${index + 1}`}
              value={section.paragraph}
              onChange={(e) => {
                const newSections = [...sections];
                newSections[index].paragraph = e.target.value;
                setSections(newSections);
              }}
              className="border p-2 rounded w-full bg-white text-black dark:bg-gray-800 dark:text-white"
              rows={4}
            ></textarea>
          </div>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap">
        <button type="button"
        disabled={!articleObjectCode.trim()}
onClick={() => {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(articleObjectCode)
      .then(() => showToast("Skopiowano do schowka"))
      .catch(() => showToast("Nie udało się skopiować"));
  } else {
    try {
      const ta = document.createElement("textarea");
      ta.value = articleObjectCode;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast("Skopiowano do schowka");
    } catch {
      showToast("Brak dostępu do schowka");
    }
  }
}}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Kopiuj
        </button>

        <button type="button" onClick={clearForm} className="bg-gray-300 text-black px-4 py-2 rounded">
          Wyczyść formularz
        </button>

        {downloadLink && (
          <button type="button"
            onClick={() => {
              const link = document.createElement("a");
              link.href = downloadLink;
              link.download = `Article${slug.replace(/-/g, "")}.js`;
              link.click();

              const currentId = parseInt(articleId, 10);
              if (!isNaN(currentId)) {
                const nextId = currentId + 1;
                localStorage.setItem("lastArticleId", nextId.toString());
                setArticleId(nextId.toString());
              } else {
                localStorage.setItem("lastArticleId", "1");
                setArticleId("1");
              }
            }}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50"
            disabled={!downloadLink}
          >
            Pobierz plik .js
          </button>
        )}

{thumbnailUrl && (
  <>
    <button type="button" ref={previewBtnRef}
      onClick={openPreviewModal}
      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 disabled:opacity-50"
      disabled={!thumbnailUrl || !slug || !title.trim()}
      title={!thumbnailUrl ? "Brak miniatury" : !slug ? "Brak slugu" : !title.trim() ? "Brak tytułu" : ""}
    >
      Podgląd obrazów
    </button>

    <button type="button"
      onClick={() => {
        resizeAndDownload("webp", () => {
          setTimeout(() => resizeAndDownload("jpg"), 300);
        });
      }}
      className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 disabled:opacity-50"
      disabled={!thumbnailUrl || !slug || !title.trim()}
      title={!thumbnailUrl ? "Brak miniatury" : !slug ? "Brak slugu" : !title.trim() ? "Brak tytułu" : ""}
    >
      Pobierz obrazy
    </button>

    <button
   type="button"
   onClick={() => resizeAndDownload("og")}
   className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-800 disabled:opacity-50"
   disabled={!thumbnailUrl || !slug || !title.trim()}
   title="Pobierz obraz 1200×630 (OG)"
 >
   Pobierz OG 1200×630
 </button>
  </>
)}
      </div>

      {generatedCode && (
        <>
          <h2 className="text-xl font-semibold mt-6">Kod komponentu</h2>
          <pre className="p-4 whitespace-pre-wrap mt-4 rounded bg-gray-100 text-black dark:bg-gray-800 dark:text-white">
            {generatedCode}
          </pre>

          <h2 className="text-xl font-semibold mt-6">Obiekt do tablicy articles</h2>
          <pre className="p-4 whitespace-pre-wrap mt-4 rounded bg-gray-100 text-black dark:bg-gray-800 dark:text-white">
            {articleObjectCode}
          </pre>
        </>
      )}
{toastMsg && (
  <div
    role="status"
    aria-live="polite"
    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 rounded px-4 py-2 shadow bg-black text-white text-sm"
  >
    {toastMsg}
  </div>
)}

{previewOpen && (
  <div
    role="dialog"
    aria-modal="true"
    aria-labelledby="preview-title"
    aria-describedby="preview-desc"
    className="fixed inset-0 z-50 flex items-center justify-center"
    onKeyDown={(e) => {
      if (e.key !== "Tab") return;
      const root = e.currentTarget;
      const focusables = root.querySelectorAll(
        'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }}
  >
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/60"
      onClick={closePreview}
      aria-hidden="true"
    />

    {/* Dialog */}
    <div className="relative z-10 max-w-5xl w-[90%] bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 id="preview-title" className="text-lg font-semibold">
          Podgląd wygenerowanych obrazów
        </h3>
        <button
          type="button"
          ref={closeBtnRef}
          onClick={closePreview}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") closePreview();
          }}
          aria-label="Zamknij podgląd"
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          Zamknij
        </button>
      </div>

      <p id="preview-desc" className="sr-only">
        Podgląd trzech kadrów: 311×163 (WEBP), 1080×1080 (JPG) i 1200×630 (OG, JPG).
      </p>

      {/* GRID — tu wcześniej brakowało otwarcia i zamknięcia */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded p-3">
          <div className="text-sm mb-2">311 × 163 (WEBP)</div>
          {preview311 ? (
            <img
              src={preview311}
              alt="Podgląd 311×163"
              loading="lazy"
              className="w-full h-auto rounded"
            />
          ) : (
            <div className="text-sm text-gray-500">Brak podglądu</div>
          )}
        </div>

        <div className="border rounded p-3">
          <div className="text-sm mb-2">1080 × 1080 (JPG)</div>
          {preview1080 ? (
            <img
              src={preview1080}
              alt="Podgląd 1080×1080"
              loading="lazy"
              className="w-full h-auto rounded"
            />
          ) : (
            <div className="text-sm text-gray-500">Brak podglądu</div>
          )}
        </div>

        <div className="border rounded p-3">
          <div className="text-sm mb-2">1200 × 630 (OG, JPG)</div>
          {previewOG ? (
            <img
              src={previewOG}
              alt="Podgląd 1200×630"
              loading="lazy"
              className="w-full h-auto rounded"
            />
          ) : (
            <div className="text-sm text-gray-500">Brak podglądu</div>
          )}
        </div>
      </div>
      {/* /GRID */}
    </div>
  </div>
)}
</div>
  );
}