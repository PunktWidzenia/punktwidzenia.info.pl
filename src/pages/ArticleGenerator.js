import { useState, useEffect } from "react";
import Image from "next/image";

export default function ArticleGenerator() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
const [date, setDate] = useState(() => {
  const today = new Date();
  return today.toISOString().slice(0, 10); // format: YYYY-MM-DD
});
  const [img, setImg] = useState("");
  const [imgFilename, setImgFilename] = useState("");
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
  const [articleObjectCode, setArticleObjectCode] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  const escapeHtml = (text) => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const formatParagraph = (text) => {
    const lines = text.trim().split("\n").map((l) => l.trim());
    if (lines.length > 1 && lines.every((l) => l.startsWith("- "))) {
      const items = lines.map((l) => `<li>${escapeHtml(l.slice(2))}</li>`).join("\n");
      return `<ul className=\"list-disc pl-6 space-y-1\">\n${items}\n</ul>`;
    } else {
      return `<p>${escapeHtml(text).replace(/\n/g, "<br />")}</p>`;
    }
  };

  useEffect(() => {
  const stored = localStorage.getItem("lastArticleId");
  if (stored) {
    setArticleId(stored);
  } else {
    setArticleId("1");
    localStorage.setItem("lastArticleId", "1");
  }
}, []);

      useEffect(() => {
  const storedId = localStorage.getItem("lastArticleId");
  if (storedId && !articleId) {
    setArticleId(storedId);
  }
}, []);

  useEffect(() => {
    const slugified = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    setSlug(slugified);
    setImg(`/${slugified}.webp`);
    setImgFilename(`${slugified}.webp`);

    const formattedSections = sections
      .map((s, i) => {
        let txt = `            <h2 className=\"text-xl font-semibold\">${s.heading}</h2>\n            ${formatParagraph(s.paragraph)}`;
        if (i === 1 || i === 3) {
          txt += "\n            <AdSlot />";
        }
        return txt;
      })
      .join("\n\n");

    const jsCode = `import Head from "next/head";
import Link from "next/link";
import AdSlot from \"@/components/AdSlot\";
import RelatedArticles from \"@/components/RelatedArticles\";
import Image from "next/image";

function Article${slugified.replace(/-/g, "")}() {
  return (
    <main className=\"px-4 pt-10 pb-20 max-w-3xl mx-auto\">
      <Head>
        <title>${title}</title>
        <meta name=\"description\" content=\"${description}\" />
        <meta property=\"og:title\" content=\"${title}\" />
        <meta property=\"og:description\" content=\"${description}\" />
        <meta property=\"og:image\" content=\"https://punktwidzenia.info.pl${img}\" />
        <meta property=\"og:url\" content=\"https://punktwidzenia.info.pl/${slug}\" />
        <script type=\"application/ld+json\">{
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: '${title}',
            image: ['https://punktwidzenia.info.pl${img}'],
            datePublished: '${date}',
            author: { '@type': 'Organization', name: 'Punkt Widzenia' },
            publisher: {
              '@type': 'Organization',
              name: 'Punkt Widzenia',
              logo: { '@type': 'ImageObject', url: 'https://punktwidzenia.info.pl/logo.png' }
            },
            description: '${description}'
          })
        }</script>
      </Head>

      <article className=\"space-y-6\">
        <Image
          src={\"${img}\"}
          alt={\"${title}\"}
          loading=\"lazy\"
          fetchPriority=\"low\"
          className=\"w-full h-auto rounded\"
        />
        ${caption ? `<p className=\"text-sm text-gray-500 dark:text-gray-400\">${caption}</p>` : ""}
        <div className=\"space-y-6\">
${formattedSections}
        </div>
        <p className=\"text-sm text-gray-500 border-t pt-6 dark:text-gray-400\">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current=\"/${slug}\" />
        <Link href=\"/\" className=\"text-red-500 hover:underline block mt-10\">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Article${slugified.replace(/-/g, "")};
`;

const idValue = parseInt(articleId, 10);
const objectCode = `{
  id: ${!isNaN(idValue) ? idValue : 0},
  link: "/${slug}",
  img: "${img}",
  title: "${title}",
  description: "${description}",
  date: "${date}",
  component: "Article${slugified.replace(/-/g, "")}"
}`;

const blob = new Blob([jsCode], { type: "text/javascript;charset=utf-8" });
    const downloadUrl = URL.createObjectURL(blob);
    setDownloadLink(downloadUrl);

    setGeneratedCode(jsCode);
    setArticleObjectCode(objectCode);
  }, [title, slug, date, img, description, caption, sections, articleId]);

  const clearForm = () => {
    setTitle("");
    setSlug("");
    setDate("");
    setImg("");
    setImgFilename("");
    setDescription("");
    setCaption("");
    setArticleId("");
    setSections([
      { heading: "", paragraph: "" },
      { heading: "", paragraph: "" },
      { heading: "", paragraph: "" },
      { heading: "", paragraph: "" },
    ]);
    setGeneratedCode("");
    setArticleObjectCode("");
    setThumbnailUrl("");
  };

const resizeAndDownload = (format, callback) => {
  if (!thumbnailUrl) return;
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = () => {
    const canvas = document.createElement("canvas");

    if (format === "webp") {
      canvas.width = 1200;
      canvas.height = 630;
      canvas.getContext("2d").drawImage(img, 0, 0, 1200, 630);
    } else {
      const side = Math.min(img.width, img.height);
      const sx = (img.width - side) / 2;
      const sy = (img.height - side) / 2;
      canvas.width = 1080;
      canvas.height = 1080;
      canvas.getContext("2d").drawImage(img, sx, sy, side, side, 0, 0, 1080, 1080);
    }

    canvas.toBlob(
      (blob) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${slug}.${format}`;
        a.click();
        if (typeof callback === "function") callback(); // <-- uruchamia następne
      },
      format === "webp" ? "image/webp" : "image/jpeg",
      0.75
    );
  };
  img.src = thumbnailUrl;
};

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailUrl(URL.createObjectURL(file));
      alert(`Zapisz plik lokalnie jako: ${slug}.webp i przenieś do folderu /public`);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Generator artykułu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Tytuł artykułu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
        />
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
        <input
          type="text"
          placeholder="Opis artykułu (SEO)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
        />
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
            accept="image/*"
            onChange={handleFileChange}
            className="border p-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white"
          />
          {thumbnailUrl && (
            <Image
              src={thumbnailUrl}
              alt="Podgląd miniatury"
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
  <button
    onClick={() => {
      navigator.clipboard.writeText(articleObjectCode)
        .then(() => alert("Skopiowano do schowka"))
        .catch(() => alert("Nie udało się skopiować"));
    }}
    className="bg-blue-500 text-white px-4 py-2 rounded"
  >
    Kopiuj
  </button>
  <button
    onClick={clearForm}
    className="bg-gray-300 text-black px-4 py-2 rounded"
  >
    Wyczyść formularz
  </button>
{downloadLink && (
<button
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
  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
>
  Pobierz plik .js
</button>
)}
  {thumbnailUrl && (
    <>
<button
  onClick={() => {
    resizeAndDownload("webp", () => {
      setTimeout(() => resizeAndDownload("jpg"), 300); // opóźnienie, żeby browser nie zablokował 2 pobrań naraz
    });
  }}
  className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
>
  Pobierz obrazy
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
    </div>
  );
}
