import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlezolnierzrannyprzygranicyzbialorusianapietasytuacjawrejonieczeremchy() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🚨 Żołnierz ranny przy granicy z Białorusią – napięta sytuacja w rejonie Czeremchy"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-26T10:00:00.000Z"}>{"2025-08-26"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/zolnierz-ranny-przy-granicy-z-bialorusia-napieta-sytuacja-w-rejonie-czeremchy.webp"}
    alt={"🚨 Żołnierz ranny przy granicy z Białorusią – napięta sytuacja w rejonie Czeremchy"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Ministerstwo Obrony Narodowej / gov.pl</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🪖 Incydent w rejonie Czeremchy</h2>
            <p>W poniedziałek w pobliżu miejscowości Czeremcha doszło do niebezpiecznego incydentu na granicy polsko-białoruskiej. Polski żołnierz został ranny i trafił do szpitala. Wojsko nie ujawnia szczegółów dotyczących okoliczności zdarzenia, ale potwierdzono, że sytuacja miała miejsce podczas działań patrolowych.</p>

            <h2 className="text-xl font-semibold">🗣️ Reakcja ministra obrony</h2>
            <p>Minister obrony Władysław Kosiniak-Kamysz odniósł się do zdarzenia, podkreślając, że bezpieczeństwo żołnierzy jest priorytetem. Zapowiedział wzmocnienie zabezpieczeń granicy oraz wsparcie dla rannych i ich rodzin. Zaznaczył, że incydent jest kolejnym dowodem na trudną i nieprzewidywalną sytuację w tym regionie.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🚧 Granica pod presją</h2>
            <p>Od miesięcy granica polsko-białoruska jest miejscem napięć związanych z próbami nielegalnego przekraczania linii granicznej i działaniami służb białoruskich. Regularnie dochodzi do prowokacji i niebezpiecznych sytuacji, w których polscy żołnierze i funkcjonariusze Straży Granicznej muszą reagować.</p>

            <h2 className="text-xl font-semibold">🌍 Szerszy kontekst</h2>
            <p>Eksperci podkreślają, że wydarzenia takie jak ten incydent wpisują się w szerszą strategię presji hybrydowej stosowanej przez Mińsk i wspieranej przez Moskwę. Polska granica z Białorusią pozostaje jednym z najważniejszych punktów zapalnych bezpieczeństwa w regionie.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/zolnierz-ranny-przy-granicy-z-bialorusia-napieta-sytuacja-w-rejonie-czeremchy" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlezolnierzrannyprzygranicyzbialorusianapietasytuacjawrejonieczeremchy;
