import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articleogolnokrajowaawariapradunakubiemilionybezdostepudoenergii() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"⚡ Ogólnokrajowa awaria prądu na Kubie – miliony bez dostępu do energii"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-11T10:00:00.000Z"}>{"2025-09-11"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/ogolnokrajowa-awaria-pradu-na-kubie-miliony-bez-dostepu-do-energii.webp"}
    alt={"⚡ Ogólnokrajowa awaria prądu na Kubie – miliony bez dostępu do energii"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: FRANCE 24 English / YouTube</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🌑 Blackout na całej wyspie</h2>
            <p>Kuba doświadczyła ogólnokrajowej awarii energetycznej, która sparaliżowała życie mieszkańców. Miliony osób zostało pozbawionych dostępu do prądu. W Hawanie i innych dużych miastach zgasły światła, a transport publiczny i usługi komunalne zostały sparaliżowane.</p>

            <h2 className="text-xl font-semibold">🏥 Skutki dla społeczeństwa</h2>
            <p>Awaria miała szczególnie dotkliwe konsekwencje dla szpitali i innych placówek medycznych. W wielu miejscach konieczne było użycie generatorów awaryjnych. Mieszkańcy donoszą, że przerwy w dostawie prądu utrudniają także dostęp do wody pitnej, internetu i łączności telefonicznej.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">⚙️ Próby przywrócenia energii</h2>
            <p>Władze Kuby poinformowały, że przywracanie prądu przebiega stopniowo, jednak wciąż duża część wyspy pozostaje bez energii. Rząd tłumaczy awarię problemami technicznymi w krajowej sieci przesyłowej, która od dawna boryka się z niedoinwestowaniem i awaryjnością.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Eksperci podkreślają, że kryzys energetyczny na Kubie nie jest zjawiskiem nowym – wyspa od lat zmaga się z niedoborem paliw i przestarzałą infrastrukturą. Ostatnia awaria to jednak największy blackout od kilku lat i sygnał, że modernizacja systemu energetycznego jest konieczna.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/ogolnokrajowa-awaria-pradu-na-kubie-miliony-bez-dostepu-do-energii" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleogolnokrajowaawariapradunakubiemilionybezdostepudoenergii;
