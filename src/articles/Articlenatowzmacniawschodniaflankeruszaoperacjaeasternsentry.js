import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlenatowzmacniawschodniaflankeruszaoperacjaeasternsentry() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🛡️ NATO wzmacnia wschodnią flankę – rusza operacja „Eastern Sentry”"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-12T10:00:00.000Z"}>{"2025-09-12"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/nato-wzmacnia-wschodnia-flanke-rusza-operacja-eastern-sentry.webp"}
    alt={"🛡️ NATO wzmacnia wschodnią flankę – rusza operacja „Eastern Sentry”"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Needpix / Domena publiczna</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🌍 Nowa misja sojuszu</h2>
            <p>Po zestrzeleniu rosyjskich dronów nad Polską NATO ogłosiło rozpoczęcie operacji „Eastern Sentry”. Jej celem jest wzmocnienie obrony powietrznej i granic wschodniej flanki sojuszu, zwłaszcza w Polsce, Litwie, Łotwie i Estonii.</p>

            <h2 className="text-xl font-semibold">✈️ Kto bierze udział?</h2>
            <p>Do operacji dołączają m.in. Dania, Niemcy, Francja i Wielka Brytania. Na polskich lotniskach pojawią się dodatkowe myśliwce, systemy obrony powietrznej oraz wojska wspierające. To jasny sygnał, że NATO traktuje rosyjskie działania jako poważne zagrożenie.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🇵🇱 Reakcja Polski</h2>
            <p>Premier Donald Tusk i minister Radosław Sikorski podkreślili, że Polska oczekuje solidarności sojuszniczej i konkretnego wsparcia. „Nie był to przypadek, to była celowa prowokacja” – powiedział szef rządu, odnosząc się do incydentów z dronami.</p>

            <h2 className="text-xl font-semibold">🔮 Co oznacza „Eastern Sentry”?</h2>
            <p>Eksperci wskazują, że operacja to nie tylko symboliczny gest, ale realne wzmocnienie obrony regionu. Zwiększona obecność wojsk NATO ma odstraszać Rosję przed kolejnymi prowokacjami i dać mieszkańcom wschodniej Europy poczucie bezpieczeństwa.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/nato-wzmacnia-wschodnia-flanke-rusza-operacja-eastern-sentry" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlenatowzmacniawschodniaflankeruszaoperacjaeasternsentry;
