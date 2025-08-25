import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articlegrozneburzeiupanadpolskaimgwostrzeganiemalpoowekraju() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"🌩️ Groźne burze i upał nad Polską – IMGW ostrzega niemal połowę kraju"}
    </h1>
  </header>

        <Image
          src={"/grozne-burze-i-upa-nad-polska-imgw-ostrzega-niemal-poowe-kraju.webp"}
          alt={"🌩️ Groźne burze i upał nad Polską – IMGW ostrzega niemal połowę kraju"}
width={311}
  height={163}          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: IMGW‑PIB / Polskie Radio 24, CC‑BY‑SA.</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚠️ IMGW wydaje pomarańczowe i żółte alerty pogodowe</h2>
            <p>Instytut Meteorologii i Gospodarki Wodnej wydał dziś ostrzeżenia 1. i 2. stopnia. Pomarańczowe alerty obowiązują w województwach: podlaskim, mazowieckim, lubelskim i podkarpackim. W tych regionach prognozowane są gwałtowne burze z gradem, silny wiatr do 80 km/h oraz intensywne opady deszczu – nawet do 45 l/m². Alerty obowiązują w godzinach popołudniowych i wieczornych.</p>

            <h2 className="text-xl font-semibold">🌡️ Upały do 31°C – niebezpieczna pogoda także w centrum kraju</h2>
            <p>IMGW ostrzega również przed wysokimi temperaturami. W niektórych częściach kraju, zwłaszcza na Lubelszczyźnie i Mazowszu, termometry mogą wskazywać dziś nawet 31°C. Mieszkańcy są proszeni o unikanie nadmiernej ekspozycji na słońce, nawadnianie organizmu i ograniczenie wysiłku fizycznego w godzinach szczytu.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌊 Alert RCB: „Nie zbliżaj się do wezbranych rzek”</h2>
            <p>Rządowe Centrum Bezpieczeństwa wysłało alert SMS do mieszkańców powiatów: kłodzkiego, ząbkowickiego i karkonoskiego. W związku z intensywnymi opadami deszczu w nocy i rano mogą wystąpić lokalne wezbrania rzek oraz podtopienia. RCB apeluje, by nie wchodzić do wód i nie zbliżać się do koryt rzek – nawet jeśli wydają się bezpieczne.</p>

            <h2 className="text-xl font-semibold">🚨 Co robić w razie burzy? IMGW przypomina zasady</h2>
            <p>W przypadku wystąpienia burzy należy unikać otwartych przestrzeni, nie korzystać z urządzeń elektrycznych i unikać przebywania pod drzewami. Zaleca się zabezpieczenie przedmiotów na balkonach i posesjach oraz unikanie jazdy samochodem przez zalane ulice. IMGW zachęca do bieżącego śledzenia prognoz i komunikatów lokalnych służb.</p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/grozne-burze-i-upa-nad-polska-imgw-ostrzega-niemal-poowe-kraju" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlegrozneburzeiupanadpolskaimgwostrzeganiemalpoowekraju;
