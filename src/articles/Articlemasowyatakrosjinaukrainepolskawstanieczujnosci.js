import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlemasowyatakrosjinaukrainepolskawstanieczujnosci() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"💥 Masowy atak Rosji na Ukrainę – Polska w stanie czujności"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-22T10:00:00.000Z"}>{"2025-08-22"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/masowy-atak-rosji-na-ukraine-polska-w-stanie-czujnosci.webp"}
    alt={"💥 Masowy atak Rosji na Ukrainę – Polska w stanie czujności"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Główna Dyrekcja Państwowej Służby ds. Sytuacji Nadzwyczajnych Ukrainy w Kijowie / Wikimedia Commons / CC BY 4.0</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🚀 Rekordowy ostrzał dronów i rakiet</h2>
            <p>Rosja zaatakowała Ukrainę z niespotykaną dotąd intensywnością – użyto ponad 570 dronów oraz około 40 pocisków balistycznych i manewrujących. Celem były głównie zachodnie regiony Ukrainy.</p>

            <h2 className="text-xl font-semibold">🏭 Zniszczona fabryka w zachodniej części kraju</h2>
            <p>W wyniku uderzenia zniszczono amerykańską fabrykę produkującą części maszyn. Potwierdzono śmierć jednej osoby i co najmniej 15 rannych. Straty materialne są ogromne.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">✈️ Polska reaguje na granicy</h2>
            <p>W odpowiedzi na eskalację Polska poderwała myśliwce do ochrony swojej przestrzeni powietrznej. Wojsko monitoruje sytuację, a systemy obronne pozostają w gotowości.</p>

            <h2 className="text-xl font-semibold">🌍 Kontekst międzynarodowy</h2>
            <p>Atak odbył się w czasie rozmów pokojowych, co wielu analityków interpretuje jako celową prowokację. NATO zapewnia, że będzie wspierać Ukrainę i dbać o bezpieczeństwo wschodniej flanki.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/masowy-atak-rosji-na-ukraine-polska-w-stanie-czujnosci" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlemasowyatakrosjinaukrainepolskawstanieczujnosci;
