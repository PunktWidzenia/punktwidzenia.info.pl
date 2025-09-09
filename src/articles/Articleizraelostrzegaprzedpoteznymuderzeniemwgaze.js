import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articleizraelostrzegaprzedpoteznymuderzeniemwgaze() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"💥 Izrael ostrzega przed „potężnym uderzeniem” w Gazę"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-09T10:00:00.000Z"}>{"2025-09-09"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/izrael-ostrzega-przed-poteznym-uderzeniem-w-gaze.webp"}
    alt={"💥 Izrael ostrzega przed „potężnym uderzeniem” w Gazę"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Giorgio Montersino / Wikimedia Commons / CC-BY-SA 2.0</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚔️ Ostateczne ostrzeżenie Izraela</h2>
            <p>Izraelskie władze wydały Hamasowi jasny komunikat – jeśli organizacja nie uwolni zakładników i nie zaprzestanie działań zbrojnych, wkrótce nastąpi „potężne uderzenie” na Strefę Gazy. Zapowiadane działania obejmują intensywne bombardowania oraz możliwą operację lądową.</p>

            <h2 className="text-xl font-semibold">🏚️ Sytuacja humanitarna w Strefie Gazy</h2>
            <p>Mieszkańcy Gazy mierzą się z tragicznymi warunkami – brakuje prądu, wody i leków. Organizacje humanitarne ostrzegają, że kolejna eskalacja może doprowadzić do katastrofy humanitarnej na niespotykaną dotąd skalę.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌍 Reakcja międzynarodowa</h2>
            <p>Społeczność międzynarodowa apeluje o powściągliwość i przestrzeganie prawa humanitarnego. ONZ oraz Unia Europejska ponawiają wezwania do zawieszenia broni, jednak jak dotąd bez skutku. Stany Zjednoczone podkreślają prawo Izraela do samoobrony, jednocześnie wyrażając obawy o los ludności cywilnej.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Eksperci wskazują, że eskalacja konfliktu może mieć poważne konsekwencje nie tylko dla Bliskiego Wschodu, ale i dla całej Europy – grożą kolejne fale migracji oraz wzrost ryzyka ataków terrorystycznych. Izrael stoi przed wyborem: jak przeprowadzić operację militarną, nie pogłębiając kryzysu humanitarnego.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/izrael-ostrzega-przed-poteznym-uderzeniem-w-gaze" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleizraelostrzegaprzedpoteznymuderzeniemwgaze;
