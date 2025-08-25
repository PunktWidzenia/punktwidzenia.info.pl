import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlepolskoirlandzkaakcjarozbijaganginarkotykowewarte240mln() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🚔 Polsko-irlandzka akcja rozbija gangi narkotykowe warte 240 mln €"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-24T10:00:00.000Z"}>{"2025-08-24"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/polsko-irlandzka-akcja-rozbija-gangi-narkotykowe-warte-240-mln.webp"}
    alt={"🚔 Polsko-irlandzka akcja rozbija gangi narkotykowe warte 240 mln €"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🌍 Skala międzynarodowej operacji</h2>
            <p>Irlandzka policja Garda, przy wsparciu polskich i europejskich służb, przeprowadziła akcję wymierzoną w gangi narkotykowe powiązane z Polską. Zlikwidowano szlak, którym przez Irlandię przerzucano ogromne ilości narkotyków na rynek europejski.</p>

            <h2 className="text-xl font-semibold">💊 Zabezpieczone narkotyki i broń</h2>
            <p>Podczas działań skonfiskowano ponad 800 kg narkotyków oraz siedem sztuk broni palnej. W Irlandii zatrzymano 13 osób, a w Polsce wszczęto postępowania wobec 170 podejrzanych. Łączna wartość przejętego majątku wyniosła ponad 11 mln euro.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">👮 Współpraca transgraniczna</h2>
            <p>Operacja jest przykładem skutecznej współpracy policji krajów UE w walce z przestępczością zorganizowaną. Dzięki wymianie informacji i wspólnym działaniom udało się rozbić jedną z największych sieci narkotykowych działających w Europie.</p>

            <h2 className="text-xl font-semibold">⚖️ Konsekwencje dla polskiej przestępczości</h2>
            <p>Eksperci oceniają, że cios w szlaki narkotykowe poważnie osłabi wpływy polskich gangów w Europie Zachodniej. Procesy sądowe i konfiskata mienia mają być sygnałem, że transgraniczne grupy przestępcze nie mogą czuć się bezkarne.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/polsko-irlandzka-akcja-rozbija-gangi-narkotykowe-warte-240-mln" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlepolskoirlandzkaakcjarozbijaganginarkotykowewarte240mln;
