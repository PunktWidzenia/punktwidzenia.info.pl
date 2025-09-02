"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import NextImage from "next/image";

const DRAFT_KEY = "article-draft-v1";

// ——— Daty / walidacja ———
const isYMD = (v) => /^\d{4}-\d{2}-\d{2}$/.test(String(v || ""));
const getTodayLocal = () => {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};
const toIso = (d) => (isYMD(d) ? new Date(`${d}T12:00:00`).toISOString() : "");

// ——— Obrazki / skalowanie ———
const MAX_MASTER_WIDTH = 1920;

// Konwersja canvas → blob URL
function canvasToBlobUrl(canvas, mime, quality) {
  return new Promise((resolve) => {
    if (canvas.toBlob) {
      canvas.toBlob((blob) => {
        if (!blob) return resolve({ url: "", blob: null });
        const url = URL.createObjectURL(blob);
        resolve({ url, blob });
      }, mime, quality);
    } else {
      const dataUrl = canvas.toDataURL(mime, quality);
      resolve({ url: dataUrl, blob: null });
    }
  });
}

// ——— Helpery do zapisu przez API ———
async function blobUrlToDataUrl(blobUrl) {
  const resp = await fetch(blobUrl);
  const blob = await resp.blob();
  return await new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(blob);
  });
}

async function saveArticleToServer({ jsFilename, jsCode, imgFilename, imgBlobUrl }) {
  const imgDataUrl = await blobUrlToDataUrl(imgBlobUrl);
  const res = await fetch("/api/save-article", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsFilename, jsCode, imgFilename, imgDataUrl }),
  });
  if (!res.ok) throw new Error("Błąd zapisu na serwerze");
  return res.json();
}

export default function ArticleGenerator() {
  const [date, setDate] = useState(() => getTodayLocal());
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
  const [articleObjectCode, setArticleObjectCode] = useState("");
  const [masterUrl, setMasterUrl] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [titleError, setTitleError] = useState("");
  const [toastMsg, setToastMsg] = useState("");

  const toastTimerRef = useRef(null);
  const closeBtnRef = useRef(null);
  const previewBtnRef = useRef(null);
  const lastActiveRef = useRef(null);
  const downloadUrlRef = useRef(null);
  const sectionRefs = useRef([]);

  const baseFileName = useMemo(() => {
    const s = String(title || "")
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/ł/g, "l")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    return s || "artykul";
  }, [title]);

  const canGenerate = Boolean(title.trim() && description.trim());

  function showToast(msg) {
    setToastMsg(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToastMsg(""), 2000);
  }

  // Limit SEO
  const MAX_DESC = 160;
  function handleDescriptionChange(e) {
    const v = String(e.target.value ?? "");
    setDescription(v.length <= MAX_DESC ? v : v.slice(0, MAX_DESC));
  }
  function handleTitleChange(e) {
    const v = e.target.value;
    setTitle(v);
    if (!v.trim()) setTitleError("Podaj tytuł — bez niego nie wygenerujemy pliku ani slugu.");
    else setTitleError("");
  }

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

  // lastArticleId
  useEffect(() => {
    const stored = localStorage.getItem("lastArticleId");
    if (stored) setArticleId(stored);
    else {
      localStorage.setItem("lastArticleId", "1");
      setArticleId("1");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // auto-save
  useEffect(() => {
    const payload = {
      title, description, caption, articleId,
      date: isYMD(date) ? date : getTodayLocal(),
      sections,
    };
    const t = setTimeout(() => {
      try { localStorage.setItem(DRAFT_KEY, JSON.stringify(payload)); } catch {}
    }, 500);
    return () => clearTimeout(t);
  }, [title, description, caption, articleId, date, sections]);

  // Sprzątanie blobów
  useEffect(() => {
    return () => {
      if (masterUrl && masterUrl.startsWith("blob:")) URL.revokeObjectURL(masterUrl);
      if (imagePreviewUrl && imagePreviewUrl.startsWith("blob:")) URL.revokeObjectURL(imagePreviewUrl);
    };
  }, [masterUrl, imagePreviewUrl]);

  // Sprzątanie linku do .js
  useEffect(() => {
    return () => {
      if (downloadUrlRef.current) {
        URL.revokeObjectURL(downloadUrlRef.current);
        downloadUrlRef.current = null;
      }
    };
  }, []);

  // Sprzątanie timera toasta
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
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/ł/g, "l")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  // focus/scroll lock dla modala
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
    setTimeout(() => closeBtnRef.current?.focus(), 0);
  }, [previewOpen]);

  const closePreview = () => {
    setPreviewOpen(false);
    (lastActiveRef.current || previewBtnRef.current)?.focus?.();
  };

  // GŁÓWNY efekt generujący komponent i obiekt articles
  useEffect(() => {
    const slugified = slugifyTitle(title);
    const imagePath = `/${slugified}.webp`;
    const ogAbsUrl = `https://punktwidzenia.info.pl/${slugified}.webp`;

    setSlug(slugified);

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

    const jsCode = `import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function ${componentName}() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {${js(title)}}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={${js(isoDate)}}>{${js(getTodayLocal())}} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={${js(imagePath)}}
    alt={${js(title)}}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

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

    const idParsed = parseInt(articleId, 10);
    const idValue = Number.isFinite(idParsed) ? idParsed : 0;

    const objectCode = `{
  id: ${!isNaN(idValue) ? idValue : 0},
  link: ${js("/" + slugified)},
  img: ${js(imagePath)},
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

    function addSection() {
  setSections((prev) => {
    const next = [...prev, { heading: "", paragraph: "" }];
    // Po dodaniu — fokus na nowy nagłówek
    const newIndex = next.length - 1;
    // odroczone, aby DOM zdążył się zrenderować
    setTimeout(() => {
      sectionRefs.current?.[newIndex]?.focus?.();
      // przewiń do nowej sekcji
      sectionRefs.current?.[newIndex]?.scrollIntoView?.({ behavior: "smooth", block: "center" });
    }, 0);
    return next;
  });
}

  // CZYSZCZENIE formularza – tylko istniejące stany
  const clearForm = () => {
    if (masterUrl && masterUrl.startsWith("blob:")) URL.revokeObjectURL(masterUrl);
    if (imagePreviewUrl && imagePreviewUrl.startsWith("blob:")) URL.revokeObjectURL(imagePreviewUrl);
    if (downloadUrlRef.current) {
      URL.revokeObjectURL(downloadUrlRef.current);
      downloadUrlRef.current = null;
    }

    setMasterUrl("");
    setImagePreviewUrl("");
    setTitle("");
    setSlug("");
    setDescription("");
    setCaption("");
    setDate(getTodayLocal());
    setSections([
      { heading: "", paragraph: "" },
      { heading: "", paragraph: "" },
      { heading: "", paragraph: "" },
      { heading: "", paragraph: "" },
    ]);
    setGeneratedCode("");
    setArticleObjectCode("");
    setDownloadLink("");
    localStorage.removeItem(DRAFT_KEY);
    setPreviewOpen(false);
  };

  function openPreviewModal() {
    if (!imagePreviewUrl) {
      showToast("Brak wygenerowanego obrazu");
      return;
    }
    lastActiveRef.current = document.activeElement;
    setPreviewOpen(true);
  }

  function downloadUrlAs(filename, url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  }

  const downloadImage = () => {
    if (!imagePreviewUrl) {
      showToast("Brak wygenerowanego obrazu");
      return;
    }
    downloadUrlAs(`${baseFileName}.webp`, imagePreviewUrl);
    setTimeout(() => showToast(`Pobrano: ${baseFileName}.webp`), 600);
  };

async function saveViaApi() {
  if (!generatedCode) { showToast("Brak wygenerowanego kodu .js"); return; }
  if (!imagePreviewUrl) { showToast("Brak wygenerowanego obrazu"); return; }

  try {
    const jsFilename = `Article${slug.replace(/-/g, "")}.js`;
    const imgFilename = `${baseFileName}.webp`;

    await saveArticleToServer({
      jsFilename,
      jsCode: generatedCode,
      imgFilename,
      imgBlobUrl: imagePreviewUrl,
    });

    showToast(`Zapisano: A/${jsFilename} oraz B/${imgFilename}`);

    // automatyczne podbicie ID (tak jak miałeś przy „Pobierz plik .js”)
    const currentId = parseInt(articleId, 10);
    if (!isNaN(currentId)) {
      const nextId = currentId + 1;
      localStorage.setItem("lastArticleId", nextId.toString());
      setArticleId(nextId.toString());
    } else {
      localStorage.setItem("lastArticleId", "1");
      setArticleId("1");
    }
  } catch (e) {
    showToast("Błąd: nie udało się zapisać na serwerze");
  }
}

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    const okTypes = ["image/jpeg","image/png","image/webp","image/gif","image/avif"];
    if (!okTypes.includes(file.type)) {
      showToast("Nieobsługiwany typ pliku");
      return;
    }
    const MAX_MB = 10;
    if (file.size > MAX_MB * 1024 * 1024) {
      showToast(`Plik za duży (> ${MAX_MB} MB)`);
      return;
    }

    const fr = new FileReader();
    fr.onload = () => {
      const img = new Image();
      img.decoding = "async";
      img.onload = async () => {
        try {
          // 1) „master” (zabezpieczenie: max 1920 px szer.)
          const scale = img.width > MAX_MASTER_WIDTH ? MAX_MASTER_WIDTH / img.width : 1;
          const mW = Math.round(img.width * scale);
          const mH = Math.round(img.height * scale);
          const masterCanvas = document.createElement("canvas");
          masterCanvas.width = mW; masterCanvas.height = mH;
          const mctx = masterCanvas.getContext("2d");
          mctx.imageSmoothingEnabled = true;
          mctx.imageSmoothingQuality = "high";
          mctx.drawImage(img, 0, 0, mW, mH);

          // 2) Zrób pojedynczy WEBP z mastera
          const { url: webpUrl } = await canvasToBlobUrl(masterCanvas, "image/webp", 0.85);

          if (masterUrl) URL.revokeObjectURL(masterUrl);
          setMasterUrl(URL.createObjectURL(file));
          setImagePreviewUrl(webpUrl);

          showToast(`Zapisz do /public: ${baseFileName}.webp`);
        } catch {
          showToast("Błąd przetwarzania obrazu");
        }
      };
      img.onerror = () => showToast("Nie udało się wczytać obrazu");
      img.src = fr.result;
    };
    fr.onerror = () => showToast("Błąd odczytu pliku");
    fr.readAsDataURL(file);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4" aria-hidden={previewOpen ? "true" : undefined}>
      <h1 className="text-2xl font-bold">Generator artykułu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <input
            type="text"
            placeholder="Tytuł artykułu"
            value={title}
            onChange={handleTitleChange}
            aria-invalid={!!titleError}
            aria-describedby={titleError ? "title-error" : undefined}
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
          value={date || getTodayLocal()}
          onChange={(e) => setDate(isYMD(e.target.value) ? e.target.value : getTodayLocal())}
          max={getTodayLocal()}
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
          <div id="seo-desc-counter" className="text-xs text-gray-500 dark:text-gray-400">
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
          onChange={(e) => {
            const onlyDigits = e.target.value.replace(/\D/g, "");
            setArticleId(onlyDigits);
          }}
          className="border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
        />

        <div className="sm:col-span-2 space-y-2">
          <label className="block">Wybierz plik obrazu</label>
          <input
            type="file"
            accept="image/*,.jpg,.jpeg,.png,.webp,.avif"
            onChange={handleFileChange}
            className="border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
          />
          {imagePreviewUrl && (
            <NextImage
              src={imagePreviewUrl}
              alt="Podgląd obrazu"
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
      ref={(el) => { sectionRefs.current[index] = el; }}   // ← DODANE
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
    />
  </div>
))}
      </div>

<div>
  <button
    type="button"
    onClick={addSection}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    aria-label="Dodaj jedną sekcję artykułu"
    title="Dodaj 1 sekcję"
  >
    ➕ Dodaj 1 sekcję
  </button>
</div>

      <div className="flex gap-4 flex-wrap">
      <button
  type="button"
  onClick={saveViaApi}
  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
  disabled={!generatedCode || !imagePreviewUrl || !canGenerate}
>
  Zapisz na serwer (A/B)
</button>
        <button
          type="button"
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
          <button
            type="button"
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
            disabled={!downloadLink || !canGenerate}
          >
            Pobierz plik .js
          </button>
        )}

        <button
          type="button"
          ref={previewBtnRef}
          onClick={openPreviewModal}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 disabled:opacity-50"
          disabled={!imagePreviewUrl || !canGenerate}
        >
          Podgląd obrazu
        </button>

        <button
          type="button"
          onClick={downloadImage}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 disabled:opacity-50"
          disabled={!imagePreviewUrl || !canGenerate}
        >
          Pobierz obraz
        </button>
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

      {previewOpen && imagePreviewUrl && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
          onKeyDown={(e) => {
            if (e.key === "Escape") closePreview();
            if (e.key !== "Tab") return;
            const root = e.currentTarget;
            const focusables = root.querySelectorAll(
              'button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
          }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={closePreview} aria-hidden="true" />
          <div className="relative z-10 max-w-5xl w-[90%] bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Podgląd obrazu</h3>
              <button
                type="button"
                ref={closeBtnRef}
                onClick={closePreview}
                className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                Zamknij
              </button>
            </div>
            <img src={imagePreviewUrl} alt="Podgląd obrazu" className="w-full h-auto rounded" />
          </div>
        </div>
      )}
    </div>
  );
}
