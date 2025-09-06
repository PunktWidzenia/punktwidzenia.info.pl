import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlepolskastawianawlasnyprzemyslamunicji() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"💥 Polska stawia na własny przemysł amunicji"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-06T10:00:00.000Z"}>{"2025-09-06"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/polska-stawia-na-wlasny-przemysl-amunicji.webp"}
    alt={"💥 Polska stawia na własny przemysł amunicji"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Marta Branco / Pexels</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🏭 Nowe inwestycje PGZ</h2>
            <p>Polski Holding Zbrojeniowy ogłosił plan budowy dwóch zakładów produkcyjnych – pierwszy będzie wytwarzał pociski, a drugi proch. To odpowiedź na rosnące zapotrzebowanie związane z wojną w Ukrainie i koniecznością uzupełniania zapasów.</p>

            <h2 className="text-xl font-semibold">🌍 Partnerzy zagraniczni</h2>
            <p>Do projektu zaproszono firmy z Francji, Niemiec, Korei Południowej i Turcji. Ostatecznie wybranych zostanie dwóch partnerów, którzy dostarczą technologię i know-how. Współpraca ma zapewnić szybkie uruchomienie produkcji na dużą skalę.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">📈 Cel strategiczny</h2>
            <p>Polska przeznacza obecnie aż 4,7% PKB na obronność. Nowe fabryki mają zaspokoić krajowe potrzeby, ale również umożliwić eksport do sojuszników w NATO i UE. Rząd podkreśla, że projekt pozwoli uniezależnić się od zagranicznych dostawców, co w obecnej sytuacji geopolitycznej jest kluczowe.</p>

            <h2 className="text-xl font-semibold">🔮 Wnioski i perspektywy</h2>
            <p>Budowa zakładów warta 2,4 mld zł to strategiczny krok w kierunku wzmocnienia polskiego przemysłu obronnego. Eksperci wskazują, że Polska może stać się regionalnym centrum produkcji amunicji, co dodatkowo wzmocni jej pozycję w Europie i zwiększy znaczenie w NATO.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/polska-stawia-na-wlasny-przemysl-amunicji" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlepolskastawianawlasnyprzemyslamunicji;
