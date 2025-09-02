import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlepolskastawianaenergetykewiatrowanabaltykumiliardoweinwestycjeiambitnecele() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🌊 Polska stawia na energetykę wiatrową na Bałtyku – miliardowe inwestycje i ambitne cele"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-02T10:00:00.000Z"}>{"2025-09-02"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/polska-stawia-na-energetyke-wiatrowa-na-baltyku-miliardowe-inwestycje-i-ambitne-cele.webp"}
    alt={"🌊 Polska stawia na energetykę wiatrową na Bałtyku – miliardowe inwestycje i ambitne cele"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Fxp42 / Wikimedia Commons / CC-BY-SA-3.0</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚡ Baltic Power – początek transformacji</h2>
            <p>Projekt Baltic Power to jedna z największych inwestycji energetycznych w historii Polski. Powstanie 76 turbin o łącznej wartości 4,7 mld euro. Farmy wiatrowe na Bałtyku mają zapewnić prąd dla setek tysięcy gospodarstw domowych.</p>

            <h2 className="text-xl font-semibold">🌍 Polska nadrabia zaległości</h2>
            <p>Choć Polska późno weszła w wyścig o energię z morza, tempo inwestycji jest imponujące. Eksperci podkreślają, że to kluczowy krok w stronę dekarbonizacji gospodarki i uniezależnienia od paliw kopalnych.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🤝 Wsparcie zagranicznych inwestorów</h2>
            <p>Polski rynek offshore przyciąga partnerów z Niemiec, Norwegii i Danii. Wspólne projekty z globalnymi firmami mają zapewnić dostęp do najnowszych technologii oraz know-how, przyspieszając rozwój sektora.</p>

            <h2 className="text-xl font-semibold">🔮 Ambitne plany do 2040 r.</h2>
            <p>Rząd przewiduje, że do 2030 roku moc zainstalowana w morskich farmach wiatrowych wyniesie 6 GW, a dekadę później – aż 18 GW. To pozwoli Polsce stać się jednym z liderów energetyki odnawialnej w Europie.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/polska-stawia-na-energetyke-wiatrowa-na-baltyku-miliardowe-inwestycje-i-ambitne-cele" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlepolskastawianaenergetykewiatrowanabaltykumiliardoweinwestycjeiambitnecele;
