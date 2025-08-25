import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlewroclawnaliscienajpiekniejszychmiasteuropy() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🏙️ Wrocław na liście najpiękniejszych miast Europy"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-23T10:00:00.000Z"}>{"2025-08-23"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/wroclaw-na-liscie-najpiekniejszych-miast-europy.webp"}
    alt={"🏙️ Wrocław na liście najpiękniejszych miast Europy"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Marek Śliwecki / Wikimedia Commons / CC BY-SA 4.0</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🌉 „Wenecja Polski” przyciąga turystów</h2>
            <p>Wrocław, położony nad Odrą i jej licznymi kanałami, ponownie zdobywa uznanie zagranicznych mediów. Autorzy zestawień turystycznych podkreślają jego unikalny klimat — malownicze mosty, starówkę i architekturę, która zachwyca różnorodnością.</p>

            <h2 className="text-xl font-semibold">🏛️ Zabytki i atmosfera miasta</h2>
            <p>Stolica Dolnego Śląska słynie z Ostrowa Tumskiego, Hali Stulecia wpisanej na listę UNESCO, a także z niezliczonych mostów i krasnali. To miasto, w którym historia przeplata się z nowoczesnością, tworząc wyjątkową atmosferę.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🍴 Smaki i kultura</h2>
            <p>Wrocław kusi również bogatą ofertą kulinarną i kulturalną. Turystów przyciągają nie tylko pierogi i lokalne browary, ale też festiwale muzyczne, teatralne i filmowe, które sprawiają, że miasto tętni życiem przez cały rok.</p>

            <h2 className="text-xl font-semibold">🌍 Międzynarodowe uznanie</h2>
            <p>Dzięki unikalnemu charakterowi Wrocław znalazł się w rankingu „must-see” europejskich destynacji. Coraz częściej bywa wskazywany jako alternatywa dla bardziej zatłoczonych miast Zachodu, przyciągając turystów autentycznością i gościnnością.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/wroclaw-na-liscie-najpiekniejszych-miast-europy" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlewroclawnaliscienajpiekniejszychmiasteuropy;
