import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlekosiniakkamyszwolynwarunkiemakcesjiukrainydoue() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🌍 Kosiniak-Kamysz: Wołyń warunkiem akcesji Ukrainy do UE"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-26T10:00:00.000Z"}>{"2025-08-26"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/kosiniak-kamysz-wolyn-warunkiem-akcesji-ukrainy-do-ue.webp"}
    alt={"🌍 Kosiniak-Kamysz: Wołyń warunkiem akcesji Ukrainy do UE"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Apilek / Wikimedia Commons / CC BY-SA 3.0</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🗣️ Stanowisko wicepremiera</h2>
            <p>Wicepremier i minister obrony Władysław Kosiniak-Kamysz podczas rozmowy z mediami jasno podkreślił, że Polska będzie sprzeciwiać się akcesji Ukrainy do Unii Europejskiej, jeśli Kijów nie uzna zbrodni wołyńskiej za ludobójstwo i nie uczci pamięci ofiar.</p>

            <h2 className="text-xl font-semibold">⚖️ Historyczne obciążenie</h2>
            <p>Rzeź wołyńska z lat 1943–1945 to jedna z najtragiczniejszych kart w relacjach polsko-ukraińskich. Szacuje się, że w wyniku czystek etnicznych dokonanych przez UPA życie straciło od 50 do 100 tysięcy Polaków. Temat od dekad pozostaje nierozliczoną raną między oboma narodami.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🇪🇺 Perspektywa integracji</h2>
            <p>Ukraina od czasu rosyjskiej agresji intensywnie zabiega o przyspieszenie procesu akcesyjnego do UE. Wymogi dotyczące praworządności i reform gospodarczych są formalnie podstawą negocjacji, ale – jak wskazuje Kosiniak-Kamysz – kwestie pamięci historycznej również stają się warunkiem politycznym.</p>

            <h2 className="text-xl font-semibold">🔥 Gorąca debata polityczna</h2>
            <p>Słowa wicepremiera wywołały szeroką dyskusję w Polsce i na Ukrainie. Zwolennicy tego stanowiska podkreślają konieczność obrony prawdy historycznej, natomiast krytycy ostrzegają, że stawianie sprawy Wołynia jako „warunku wstępnego” może opóźnić proces integracji Ukrainy z UE i osłabić jej pozycję wobec Rosji.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/kosiniak-kamysz-wolyn-warunkiem-akcesji-ukrainy-do-ue" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlekosiniakkamyszwolynwarunkiemakcesjiukrainydoue;
