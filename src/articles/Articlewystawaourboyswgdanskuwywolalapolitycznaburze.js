import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlewystawaourboyswgdanskuwywolalapolitycznaburze() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🏛️ Wystawa „Our Boys” w Gdańsku wywołała polityczną burzę"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-20T10:00:00.000Z"}>{"2025-08-20"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/wystawa-our-boys-w-gdansku-wywolala-polityczna-burze.webp"}
    alt={"🏛️ Wystawa „Our Boys” w Gdańsku wywołała polityczną burzę"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">📷 Trudna historia na fotografiach i pamiątkach</h2>
            <p>Ekspozycja „Our Boys” prezentuje zdjęcia, dokumenty i osobiste pamiątki rodzin Polaków z Pomorza, którzy podczas II wojny światowej byli wcielani do Wehrmachtu. Wystawa ukazuje dramatyczne wybory – służbę w niemieckiej armii w zamian za bezpieczeństwo bliskich i możliwość przeżycia.</p>

            <h2 className="text-xl font-semibold">⚖️ Spór o pamięć i narrację</h2>
            <p>Dla wielu mieszkańców Pomorza to historia rodzin, które przez dekady milczały o wojennych losach. Krytycy wystawy, głównie z obozu politycznego PiS, twierdzą, że ekspozycja „zaciera różnicę między ofiarą a katem”. Zwolennicy wskazują natomiast na potrzebę uczciwego, pełnego obrazu historii.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🗣️ Głos historyków</h2>
            <p>Eksperci podkreślają, że problem przymusowej służby w Wehrmachcie dotyczył tysięcy Polaków i nie można go pomijać w debacie publicznej. Ich zdaniem to właśnie brak rozmowy o trudnych tematach prowadzi do uproszczonych i spolaryzowanych ocen.</p>

            <h2 className="text-xl font-semibold">🌍 Historia lokalna a pamięć narodowa</h2>
            <p>Wystawa wywołała pytania o to, jak łączyć perspektywę regionalną z ogólnonarodową narracją historyczną. Czy w Polsce jest miejsce na opowieści o „szarej strefie” wojny – gdzie nie ma jednoznacznych bohaterów ani zdrajców? Dyskusja wokół „Our Boys” pokazuje, że temat wciąż budzi ogromne emocje.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/wystawa-our-boys-w-gdansku-wywolala-polityczna-burze" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlewystawaourboyswgdanskuwywolalapolitycznaburze;
