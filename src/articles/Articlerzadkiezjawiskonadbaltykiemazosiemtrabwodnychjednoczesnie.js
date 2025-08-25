import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlerzadkiezjawiskonadbaltykiemazosiemtrabwodnychjednoczesnie() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🌪️ Rzadkie zjawisko nad Bałtykiem – aż osiem trąb wodnych jednocześnie"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-23T10:00:00.000Z"}>{"2025-08-23"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/rzadkie-zjawisko-nad-baltykiem-az-osiem-trab-wodnych-jednoczesnie.webp"}
    alt={"🌪️ Rzadkie zjawisko nad Bałtykiem – aż osiem trąb wodnych jednocześnie"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🌊 Spektakl natury na Bałtyku</h2>
            <p>Mieszkańcy wybrzeża mogli obserwować niezwykły fenomen – nad morzem uformowało się kilka spiralnych lejów, a w pewnym momencie jednocześnie widocznych było aż osiem trąb wodnych.</p>

            <h2 className="text-xl font-semibold">📸 Rzadkość na skalę światową</h2>
            <p>Trąby wodne pojawiają się sporadycznie, zazwyczaj pojedynczo. Tak duże skupisko – kilka lejów w tym samym czasie i miejscu – to ewenement, który rzadko trafia do obserwacji meteorologów.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌡️ Zmiany klimatu a ekstremalne zjawiska</h2>
            <p>Eksperci zwracają uwagę, że ocieplenie klimatu zwiększa częstotliwość gwałtownych zjawisk pogodowych, w tym trąb wodnych. Bałtyk, choć dotąd stosunkowo spokojny, coraz częściej staje się areną takich wydarzeń.</p>

            <h2 className="text-xl font-semibold">🚢 Bezpieczna obserwacja</h2>
            <p>Choć trąby wodne wyglądają widowiskowo, mogą być niebezpieczne dla jednostek pływających. Służby apelują, by w takich sytuacjach zachować dystans i podziwiać je wyłącznie z brzegu.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/rzadkie-zjawisko-nad-baltykiem-az-osiem-trab-wodnych-jednoczesnie" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlerzadkiezjawiskonadbaltykiemazosiemtrabwodnychjednoczesnie;
