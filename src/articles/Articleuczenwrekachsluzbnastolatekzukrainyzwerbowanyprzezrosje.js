import Head from "next/head";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articleuczenwrekachsluzbnastolatekzukrainyzwerbowanyprzezrosje() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <Head>
        <title>{"🚨 Uczeń w rękach służb – nastolatek z Ukrainy zwerbowany przez Rosję"}</title>
        <meta name="description" content={"Polska policja zatrzymała 17-letniego obywatela Ukrainy podejrzanego o planowany akt wandalizmu na zlecenie rosyjskich służb."} />
        <meta property="og:title" content={"🚨 Uczeń w rękach służb – nastolatek z Ukrainy zwerbowany przez Rosję"} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={"Polska policja zatrzymała 17-letniego obywatela Ukrainy podejrzanego o planowany akt wandalizmu na zlecenie rosyjskich służb."} />
        <meta property="og:image" content={"https://punktwidzenia.info.pl/uczen-w-rekach-sluzb-nastolatek-z-ukrainy-zwerbowany-przez-rosje.webp"} />
        <meta property="og:url" content={"https://punktwidzenia.info.pl/uczen-w-rekach-sluzb-nastolatek-z-ukrainy-zwerbowany-przez-rosje"} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={"https://punktwidzenia.info.pl/uczen-w-rekach-sluzb-nastolatek-z-ukrainy-zwerbowany-przez-rosje"} />
        <script type="application/ld+json">{
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: "🚨 Uczeń w rękach służb – nastolatek z Ukrainy zwerbowany przez Rosję",
            image: ["https://punktwidzenia.info.pl/uczen-w-rekach-sluzb-nastolatek-z-ukrainy-zwerbowany-przez-rosje.webp"],
            datePublished: "2025-08-14",
            author: { '@type': 'Organization', name: 'Punkt Widzenia' },
            publisher: {
              '@type': 'Organization',
              name: 'Punkt Widzenia',
              logo: { '@type': 'ImageObject', url: 'https://punktwidzenia.info.pl/logo.png' }
            },
            description: "Polska policja zatrzymała 17-letniego obywatela Ukrainy podejrzanego o planowany akt wandalizmu na zlecenie rosyjskich służb."
          })
        }</script>
      </Head>

      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"🚨 Uczeń w rękach służb – nastolatek z Ukrainy zwerbowany przez Rosję"}
    </h1>
  </header>

        <NextImage
          src={"/uczen-w-rekach-sluzb-nastolatek-z-ukrainy-zwerbowany-przez-rosje.webp"}
          alt={"🚨 Uczeń w rękach służb – nastolatek z Ukrainy zwerbowany przez Rosję"}
          width={311}
          height={163}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🕵️ Zatrzymanie w ostatniej chwili</h2>
            <p>Policja we współpracy z ABW zatrzymała 17-letniego obywatela Ukrainy, który – według ustaleń śledczych – planował zniszczenie pomnika upamiętniającego ofiary sowieckich zbrodni w Polsce. Funkcjonariusze przechwycili go jeszcze przed dokonaniem czynu.</p>

            <h2 className="text-xl font-semibold">🇷🇺 Ślady rosyjskiej operacji hybrydowej</h2>
            <p>Z dotychczasowych ustaleń wynika, że nastolatek miał zostać zwerbowany przez osoby powiązane z rosyjskimi strukturami wywiadowczymi. Otrzymał szczegółowe instrukcje oraz obietnicę wynagrodzenia w zamian za wykonanie aktu wandalizmu. Śledczy podkreślają, że podobne działania są elementem wojny informacyjnej i psychologicznej prowadzonej przez Kreml.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🛡 Kontekst bezpieczeństwa wewnętrznego</h2>
            <p>Eksperci ostrzegają, że takie incydenty mają na celu nie tylko fizyczne niszczenie miejsc pamięci, ale przede wszystkim wywoływanie napięć społecznych między Polakami a Ukraińcami. Władze apelują o czujność i zgłaszanie wszelkich podejrzanych działań, szczególnie w kontekście symbolicznych miejsc i rocznic historycznych.</p>

            <h2 className="text-xl font-semibold">⚖ Dalsze kroki i możliwe konsekwencje</h2>
            <p>Nastolatkowi grozi odpowiedzialność karna za zniszczenie mienia o szczególnym znaczeniu historycznym oraz działanie na rzecz obcego wywiadu. Prokuratura rozważa postawienie zarzutów o charakterze szpiegowskim, co – mimo młodego wieku sprawcy – może skutkować surowym wyrokiem.</p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/uczen-w-rekach-sluzb-nastolatek-z-ukrainy-zwerbowany-przez-rosje" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleuczenwrekachsluzbnastolatekzukrainyzwerbowanyprzezrosje;
