import Head from "next/head";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articletragediawdziwnowku16latekzaginawbatykumimoczerwonejflagi() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <Head>
        <title>🆘 Tragedia w Dziwnówku: 16-latek zaginął w Bałtyku mimo czerwonej flagi</title>
        <meta name="description" content="Mimo wyraźnego zakazu kąpieli, dwóch nastolatków weszło do wzburzonego morza. Jeden z nich nie wrócił – trwają poszukiwania, a ratownicy walczą z żywiołem." />
        <meta property="og:title" content="🆘 Tragedia w Dziwnówku: 16-latek zaginął w Bałtyku mimo czerwonej flagi" />
        <meta property="og:description" content="Mimo wyraźnego zakazu kąpieli, dwóch nastolatków weszło do wzburzonego morza. Jeden z nich nie wrócił – trwają poszukiwania, a ratownicy walczą z żywiołem." />
        <meta property="og:image" content="https://punktwidzenia.info.pl/tragedia-w-dziwnowku-16-latek-zagina-w-batyku-mimo-czerwonej-flagi.webp" />
        <meta property="og:url" content="https://punktwidzenia.info.pl/tragedia-w-dziwnowku-16-latek-zagina-w-batyku-mimo-czerwonej-flagi" />
        <script type="application/ld+json">{
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: '🆘 Tragedia w Dziwnówku: 16-latek zaginął w Bałtyku mimo czerwonej flagi',
            image: ['https://punktwidzenia.info.pl/tragedia-w-dziwnowku-16-latek-zagina-w-batyku-mimo-czerwonej-flagi.webp'],
            datePublished: '2025-07-30',
            author: { '@type': 'Organization', name: 'Punkt Widzenia' },
            publisher: {
              '@type': 'Organization',
              name: 'Punkt Widzenia',
              logo: { '@type': 'ImageObject', url: 'https://punktwidzenia.info.pl/logo.png' }
            },
            description: 'Mimo wyraźnego zakazu kąpieli, dwóch nastolatków weszło do wzburzonego morza. Jeden z nich nie wrócił – trwają poszukiwania, a ratownicy walczą z żywiołem.'
          })
        }</script>
      </Head>

      <article className="space-y-6">
        <Image
          src={"/tragedia-w-dziwnowku-16-latek-zagina-w-batyku-mimo-czerwonej-flagi.webp"}
          alt={"🆘 Tragedia w Dziwnówku: 16-latek zaginął w Bałtyku mimo czerwonej flagi"}
            width={1200}
  height={630}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Grzegorz Saczyło / Wikimedia Commons / CC BY-SA 4.0</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🚩 Zignorowali czerwone flagi</h2>
            <p>Dwaj bracia postanowili wejść do wody mimo wywieszonej czerwonej flagi – oznaczającej absolutny zakaz kąpieli. Warunki były wyjątkowo niebezpieczne: silny wiatr, wysokie fale i prądy wsteczne, które błyskawicznie oddzieliły ich od brzegu.<br /></p>

            <h2 className="text-xl font-semibold">🛟 Dramatyczna walka o życie</h2>
            <p>Jednemu z chłopców udało się powrócić na brzeg i zawiadomić służby ratunkowe. Drugi – 16-latek – został porwany przez fale. Ratownicy z Dziwnówka rozpoczęli akcję poszukiwawczą z użyciem łańcucha życia, łodzi i skuterów wodnych, ale musieli ją przerwać z powodu pogarszającej się pogody.<br /></p>
            <AdSlot />

            <h2 className="text-xl font-semibold">⚠️ Wypadek podczas akcji ratunkowej</h2>
            <p>Podczas jednej z prób poszukiwań doszło do niebezpiecznego zdarzenia – łódź ratownicza przewróciła się, a ratownicy zostali zmuszeni do powrotu na brzeg. To tylko potwierdza skalę zagrożenia, jakie stwarzało wczorajsze morze.<br /></p>

            <h2 className="text-xl font-semibold">🔍 Poszukiwania trwają</h2>
            <p>Dziś rano działania zostały wznowione. W akcję zaangażowano specjalistyczne jednostki z nurkami z Szczecina. Mimo że upłynęło kilkanaście godzin od zaginięcia, ratownicy nie tracą nadziei i przeczesują kolejne odcinki brzegu oraz strefy przybrzeżne.<br /></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/tragedia-w-dziwnowku-16-latek-zagina-w-batyku-mimo-czerwonej-flagi" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articletragediawdziwnowku16latekzaginawbatykumimoczerwonejflagi;
