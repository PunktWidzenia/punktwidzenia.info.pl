import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articleukrainskiwkazdejszkolerzadanalizujekontrowersyjnyprojektustawy() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"📚 Ukraiński w każdej szkole? Rząd analizuje kontrowersyjny projekt ustawy"}
    </h1>
  </header>

        <Image
          src={"/ukrainski-w-kazdej-szkole-rzad-analizuje-kontrowersyjny-projekt-ustawy.webp"}
          alt={"📚 Ukraiński w każdej szkole? Rząd analizuje kontrowersyjny projekt ustawy"}
width={311}
  height={163}          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: ArturM / Wikimedia Commons / CC BY-SA 3.0</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🏫 Projekt pod lupą resortu edukacji</h2>
            <p>Ministerstwo Edukacji Narodowej prowadzi wewnętrzne analizy dotyczące ewentualnego wprowadzenia języka ukraińskiego jako przedmiotu obowiązkowego w wybranych klasach szkół podstawowych i średnich. Program miałby ruszyć pilotażowo w 2026 roku w miastach o największej liczbie uczniów pochodzenia ukraińskiego.</p>

            <h2 className="text-xl font-semibold">🗣️ Argument: integracja i praktyka</h2>
            <p>Zwolennicy projektu podkreślają, że nauka języka ukraińskiego sprzyja integracji społecznej, przełamuje bariery między uczniami i ułatwia komunikację w wielokulturowych klasach. Podkreślają też, że Polska i Ukraina są dziś silnie powiązane, a język naszych sąsiadów staje się coraz bardziej obecny w przestrzeni publicznej.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">⚠️ Krytyka i oskarżenia o ustępstwa</h2>
            <p>Przeciwnicy uważają pomysł za niebezpieczny precedens. Padają zarzuty o „ideologiczną uległość”, „zanikanie polskiej tożsamości” i „kulturowe podporządkowanie”. Pojawiają się też pytania, dlaczego zamiast wymagać nauki języka polskiego przez dzieci ukraińskie, państwo chce narzucić odwrotny kierunek.</p>

            <h2 className="text-xl font-semibold">📅 Co dalej z ustawą?</h2>
            <p>Na razie projekt nie trafił do Sejmu i nie jest oficjalnym punktem obrad. MEN prowadzi konsultacje wewnętrzne i zleciło analizę społeczną. Decyzje mają zapaść do końca roku szkolnego 2025/2026. Tymczasem temat zdążył już podzielić opinię publiczną i rozpalić debatę w mediach.</p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/ukrainski-w-kazdej-szkole-rzad-analizuje-kontrowersyjny-projekt-ustawy" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleukrainskiwkazdejszkolerzadanalizujekontrowersyjnyprojektustawy;
