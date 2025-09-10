import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlepolskazestrzelilarosyjskiedronynajpowazniejszaeskalacjaodiiwojnyswiatowej() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🛡️ Polska zestrzeliła rosyjskie drony – najpoważniejsza eskalacja od II wojny światowej"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-10T10:00:00.000Z"}>{"2025-09-10"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/polska-zestrzelila-rosyjskie-drony-najpowazniejsza-eskalacja-od-ii-wojny-swiatowej.webp"}
    alt={"🛡️ Polska zestrzeliła rosyjskie drony – najpoważniejsza eskalacja od II wojny światowej"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🚨 Naruszenie polskiego nieba</h2>
            <p>Podczas jednego z największych ataków Rosji na Ukrainę, kilka dronów bojowych wleciało w polską przestrzeń powietrzną. Siły obrony powietrznej natychmiast zareagowały, zestrzeliwując intruzów. Po raz pierwszy od początku wojny działania Polski były wspierane przez sojusznicze jednostki NATO, które monitorowały sytuację w czasie rzeczywistym.</p>

            <h2 className="text-xl font-semibold">🗣️ Reakcja władz</h2>
            <p>Premier Donald Tusk oświadczył, że Polska znalazła się „najbliżej otwartego konfliktu od czasów II wojny światowej”. Podkreślił, że każdy kolejny incydent tego typu zwiększa ryzyko eskalacji na niespotykaną dotąd skalę. Ministerstwo Obrony potępiło działania Rosji, nazywając je „prowokacją militarną przeciw całemu NATO”.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🤝 NATO w gotowości</h2>
            <p>Warszawa uruchomiła procedurę z art. 4 Traktatu Północnoatlantyckiego, wzywając do konsultacji wszystkich sojuszników. Oznacza to, że sytuacja została uznana za realne zagrożenie bezpieczeństwa całego sojuszu. W komunikacie NATO potwierdzono, że incydent traktowany jest bardzo poważnie, a kraje członkowskie są gotowe na kolejne kroki w obronie wschodniej flanki.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Eksperci ostrzegają, że kolejne naruszenia przestrzeni powietrznej mogą doprowadzić do bezpośredniej konfrontacji między NATO a Rosją. To scenariusz, którego dotąd starano się unikać, ograniczając działania do wsparcia Ukrainy. W opinii analityków, Polska może stać się centralnym punktem napięć, a każdy następny incydent będzie zwiększał ryzyko otwartego starcia.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/polska-zestrzelila-rosyjskie-drony-najpowazniejsza-eskalacja-od-ii-wojny-swiatowej" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlepolskazestrzelilarosyjskiedronynajpowazniejszaeskalacjaodiiwojnyswiatowej;
