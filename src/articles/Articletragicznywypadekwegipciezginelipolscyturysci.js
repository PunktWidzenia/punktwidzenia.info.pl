import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articletragicznywypadekwegipciezginelipolscyturysci() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <Head>
        <title>🚨 Tragiczny wypadek w Egipcie – zginęli polscy turyści</title>
        <meta name="description" content="Polska matka i dziecko zginęli w wypadku autokaru w okolicach Marsa Alam. Ministerstwo Spraw Zagranicznych potwierdza tragedię." />
        <meta property="og:title" content="🚨 Tragiczny wypadek w Egipcie – zginęli polscy turyści" />
        <meta property="og:description" content="Polska matka i dziecko zginęli w wypadku autokaru w okolicach Marsa Alam. Ministerstwo Spraw Zagranicznych potwierdza tragedię." />
        <meta property="og:image" content="https://punktwidzenia.info.pl/tragiczny-wypadek-w-egipcie-zgineli-polscy-turysci.webp" />
        <meta property="og:url" content="https://punktwidzenia.info.pl/tragiczny-wypadek-w-egipcie-zgineli-polscy-turysci" />
        <script type="application/ld+json">{
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: '🚨 Tragiczny wypadek w Egipcie – zginęli polscy turyści',
            image: ['https://punktwidzenia.info.pl/tragiczny-wypadek-w-egipcie-zgineli-polscy-turysci.webp'],
            datePublished: '2025-07-29',
            author: { '@type': 'Organization', name: 'Punkt Widzenia' },
            publisher: {
              '@type': 'Organization',
              name: 'Punkt Widzenia',
              logo: { '@type': 'ImageObject', url: 'https://punktwidzenia.info.pl/logo.png' }
            },
            description: 'Polska matka i dziecko zginęli w wypadku autokaru w okolicach Marsa Alam. Ministerstwo Spraw Zagranicznych potwierdza tragedię.'
          })
        }</script>
      </Head>

      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"🚨 Tragiczny wypadek w Egipcie – zginęli polscy turyści"}
    </h1>
  </header>

        <Image
          src={"/tragiczny-wypadek-w-egipcie-zgineli-polscy-turysci.webp"}
          alt={"🚨 Tragiczny wypadek w Egipcie – zginęli polscy turyści"}
width={311}
  height={163}          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Hatem Moushir, Wikimedia Commons, CC BY-SA 4.0</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚠️ Co się wydarzyło?</h2>
            <p>Z dostępnych informacji wynika, że doszło do wypadku z udziałem autobusu turystycznego. Na pokładzie znajdowały się osoby podróżujące w ramach wycieczki zorganizowanej. Wśród ofiar znalazła się kobieta oraz jej dziecko – oboje byli obywatelami Polski.<br /><br />🔍 Okoliczności tragedii nie są jeszcze znane. Nie wiadomo, czy pojazd zderzył się z innym autem, czy też doszło do utraty kontroli nad kierownicą. Lokalne służby prowadzą postępowanie wyjaśniające.<br /></p>

            <h2 className="text-xl font-semibold">🇵🇱 Reakcja polskich władz</h2>
            <p>Rzecznik MSZ potwierdził, że polski konsulat w Egipcie został poinformowany o wypadku i podjął działania mające na celu pomoc rodzinie ofiar oraz ustalenie szczegółów. Służby konsularne pozostają w kontakcie z lokalnymi władzami.<br /><br />🕯️ Tragedia poruszyła opinię publiczną. Internauci wyrażają kondolencje, a biura podróży monitorują sytuację w regionie Marsa Alam. To nie pierwszy raz, gdy egipskie drogi okazują się śmiertelnie niebezpieczne.<br /></p>
            <AdSlot />

            <h2 className="text-xl font-semibold">📉 Zagrożenia na drogach w Egipcie</h2>
            <p>Egipt od lat zmaga się z problemem wysokiej liczby wypadków drogowych. Główne przyczyny to zły stan dróg, nadmierna prędkość oraz niewystarczająca kontrola pojazdów turystycznych. Wypadki z udziałem autobusów nie należą do rzadkości – niestety tym razem ofiarami padli polscy obywatele.<br /></p>

            <h2 className="text-xl font-semibold"></h2>
            <p></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/tragiczny-wypadek-w-egipcie-zgineli-polscy-turysci" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articletragicznywypadekwegipciezginelipolscyturysci;
