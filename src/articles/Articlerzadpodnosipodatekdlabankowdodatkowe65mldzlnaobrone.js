import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlerzadpodnosipodatekdlabankowdodatkowe65mldzlnaobrone() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"💰 Rząd podnosi podatek dla banków – dodatkowe 6,5 mld zł na obronę"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-21T10:00:00.000Z"}>{"2025-08-21"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/rzad-podnosi-podatek-dla-bankow-dodatkowe-65-mld-zl-na-obrone.webp"}
    alt={"💰 Rząd podnosi podatek dla banków – dodatkowe 6,5 mld zł na obronę"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Kancelaria Prezesa Rady Ministrów / gov.pl / CC BY 3.0 PL</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">📊 Największa podwyżka CIT w historii sektora bankowego</h2>
            <p>Od 2026 roku banki w Polsce zapłacą 30% podatku CIT zamiast dotychczasowych 19%. Rząd tłumaczy, że dodatkowe wpływy są niezbędne do finansowania zwiększonego budżetu na obronność, który ma wynieść nawet 5% PKB.</p>

            <h2 className="text-xl font-semibold">💵 6,5 miliarda złotych na armię</h2>
            <p>Według wyliczeń Ministerstwa Finansów, zmiana przyniesie państwu 6,5 mld złotych w samym 2026 roku i ponad 20 mld złotych w ciągu dekady. To kwota, która ma zostać przeznaczona na modernizację armii i zwiększenie bezpieczeństwa kraju.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">⚖️ Argumenty rządu i obawy sektora</h2>
            <p>Władze podkreślają, że banki od lat notują rekordowe zyski, dlatego mogą ponieść większe obciążenia podatkowe. Z kolei przedstawiciele sektora ostrzegają, że wyższy CIT może przełożyć się na droższe kredyty i gorszą dostępność finansowania dla gospodarki.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Projekt zakłada stopniowe obniżanie stawki CIT w kolejnych latach – do 26% w 2027 roku i 23% w latach następnych. To ma być kompromis między potrzebami obronnymi a stabilnością systemu bankowego.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/rzad-podnosi-podatek-dla-bankow-dodatkowe-65-mld-zl-na-obrone" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlerzadpodnosipodatekdlabankowdodatkowe65mldzlnaobrone;
