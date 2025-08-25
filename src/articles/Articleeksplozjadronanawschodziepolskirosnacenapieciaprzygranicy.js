import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articleeksplozjadronanawschodziepolskirosnacenapieciaprzygranicy() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🚨 Eksplozja drona na wschodzie Polski – rosnące napięcia przy granicy"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-20T10:00:00.000Z"}>{"2025-08-20"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/eksplozja-drona-na-wschodzie-polski-rosnace-napiecia-przy-granicy.webp"}
    alt={"🚨 Eksplozja drona na wschodzie Polski – rosnące napięcia przy granicy"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">📍 Wydarzenie w rejonie Osin</h2>
            <p>Na polu w okolicach miejscowości Osiny w województwie lubelskim doszło do eksplozji niezidentyfikowanego obiektu, którym najprawdopodobniej był dron. Fala uderzeniowa zniszczyła szyby w kilku budynkach i uszkodziła fragment upraw, jednak w zdarzeniu nikt nie ucierpiał.</p>

            <h2 className="text-xl font-semibold">🕵️‍♂️ Śledztwo służb</h2>
            <p>Na miejscu pracują eksperci wojskowi i policja. Wstępne ustalenia wskazują na obiekt latający, który mógł pochodzić z terytorium Ukrainy lub Białorusi. Trwa analiza szczątków maszyny oraz badanie możliwych śladów sabotażu.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🇵🇱 Reakcja władz</h2>
            <p>Ministerstwo Obrony Narodowej poinformowało, że zdarzenie traktowane jest jako „poważne naruszenie bezpieczeństwa”. Polska domaga się wyjaśnień od partnerów międzynarodowych i wzmacnia monitoring przestrzeni powietrznej wzdłuż wschodniej granicy.</p>

            <h2 className="text-xl font-semibold">🌍 Szerszy kontekst napięć</h2>
            <p>Eksplozja wpisuje się w serię incydentów z udziałem dronów, które w ostatnich miesiącach pojawiały się w rejonach przygranicznych. Władze podkreślają, że Polska, jako członek NATO, pozostaje w stałej koordynacji z sojusznikami i jest przygotowana na dalsze prowokacje.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/eksplozja-drona-na-wschodzie-polski-rosnace-napiecia-przy-granicy" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleeksplozjadronanawschodziepolskirosnacenapieciaprzygranicy;
