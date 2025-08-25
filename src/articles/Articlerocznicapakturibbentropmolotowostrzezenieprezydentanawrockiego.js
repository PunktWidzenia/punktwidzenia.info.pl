import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlerocznicapakturibbentropmolotowostrzezenieprezydentanawrockiego() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"📜 Rocznica Paktu Ribbentrop–Mołotow – ostrzeżenie prezydenta Nawrockiego"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-24T10:00:00.000Z"}>{"2025-08-24"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/rocznica-paktu-ribbentropmolotow-ostrzezenie-prezydenta-nawrockiego.webp"}
    alt={"📜 Rocznica Paktu Ribbentrop–Mołotow – ostrzeżenie prezydenta Nawrockiego"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🕰️ Historyczna data</h2>
            <p>23 sierpnia 1939 roku Niemcy i Związek Sowiecki podpisały pakt Ribbentrop–Mołotow. W tajnym protokole podzielono Europę Środkowo-Wschodnią na strefy wpływów, co otworzyło drogę do wybuchu II wojny światowej i okupacji Polski.</p>

            <h2 className="text-xl font-semibold">🇵🇱 Słowa prezydenta Nawrockiego</h2>
            <p>Prezydent Karol Nawrocki, odnosząc się do rocznicy, nazwał pakt symbolem „chorych marzeń o imperium”. Podkreślił, że pamięć o ofiarach i zdradzie dwóch totalitaryzmów powinna być przestrogą dla współczesnej Europy.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">⚠️ Aktualne odniesienia</h2>
            <p>Nawrocki zwrócił uwagę, że współczesna Rosja nadal posługuje się imperialną retoryką i metodami agresji. Zaznaczył, że historia nie może być zapomniana, bo mechanizmy znane z 1939 roku powracają dziś w innej formie.</p>

            <h2 className="text-xl font-semibold">🌍 Znaczenie dla Europy</h2>
            <p>Wystąpienie prezydenta łączy historyczną refleksję z aktualną sytuacją geopolityczną. To przypomnienie, że suwerenność państw Europy Środkowej nie może być przedmiotem kompromisów mocarstw.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/rocznica-paktu-ribbentropmolotow-ostrzezenie-prezydenta-nawrockiego" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlerocznicapakturibbentropmolotowostrzezenieprezydentanawrockiego;
