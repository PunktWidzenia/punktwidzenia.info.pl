import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlepolacymasowozapisujasienaszkoleniawojskowe() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🪖 Polacy masowo zapisują się na szkolenia wojskowe"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-13T10:00:00.000Z"}>{"2025-09-13"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/polacy-masowo-zapisuja-sie-na-szkolenia-wojskowe.webp"}
    alt={"🪖 Polacy masowo zapisują się na szkolenia wojskowe"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Mariusz Cieszewski / Flickr / Domena publiczna</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">📊 Rekordowe zainteresowanie</h2>
            <p>Od początku 2025 roku ponad 20 000 osób w Polsce zapisało się na ochotnicze szkolenia wojskowe. To wynik zbliżony do rekordu z ubiegłego roku, co pokazuje, że zainteresowanie obronnością nie słabnie.</p>

            <h2 className="text-xl font-semibold">🇵🇱 Wydatki na obronność</h2>
            <p>Polska przeznacza obecnie 4,7% PKB na obronność – najwięcej spośród wszystkich krajów NATO. Środki trafiają m.in. na modernizację armii, zakup nowoczesnego uzbrojenia oraz rozbudowę systemów obrony powietrznej.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">👥 Dlaczego Polacy się szkolą?</h2>
            <p>Według ekspertów to bezpośrednia odpowiedź na rosnące zagrożenie ze strony Rosji i ostatnie naruszenia polskiej przestrzeni powietrznej przez drony. Wielu uczestników podkreśla, że chce nauczyć się podstaw obrony i być gotowym do działania w razie kryzysu.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Resort obrony planuje dalsze rozszerzanie programów szkoleniowych. W przyszłości szkolenia mogą być organizowane nie tylko w weekendy, ale również w formie krótkich kursów dla pracowników firm i instytucji publicznych.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/polacy-masowo-zapisuja-sie-na-szkolenia-wojskowe" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlepolacymasowozapisujasienaszkoleniawojskowe;
