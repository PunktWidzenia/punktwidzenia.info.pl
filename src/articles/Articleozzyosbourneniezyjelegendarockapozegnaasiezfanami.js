import Head from "next/head";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articleozzyosbourneniezyjelegendarockapozegnaasiezfanami() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <Head>
        <title>☠️ Ozzy Osbourne nie żyje – legenda rocka pożegnała się z fanami</title>
        <meta name="description" content="Ozzy Osbourne zmarł w wieku 76 lat. Ostatni koncert zagrał 5 lipca w Birmingham. Świat muzyki w żałobie." />
        <meta property="og:title" content="☠️ Ozzy Osbourne nie żyje – legenda rocka pożegnała się z fanami" />
        <meta property="og:description" content="Ozzy Osbourne zmarł w wieku 76 lat. Ostatni koncert zagrał 5 lipca w Birmingham. Świat muzyki w żałobie." />
        <meta property="og:image" content="https://punktwidzenia.info.pl/ozzy-osbourne-nie-zyje-legenda-rocka-pozegnaa-sie-z-fanami.webp" />
        <meta property="og:url" content="https://punktwidzenia.info.pl/ozzy-osbourne-nie-zyje-legenda-rocka-pozegnaa-sie-z-fanami" />
        <script type="application/ld+json">{
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: '☠️ Ozzy Osbourne nie żyje – legenda rocka pożegnała się z fanami',
            image: ['https://punktwidzenia.info.pl/ozzy-osbourne-nie-zyje-legenda-rocka-pozegnaa-sie-z-fanami.webp'],
            datePublished: '2025-07-23',
            author: { '@type': 'Organization', name: 'Punkt Widzenia' },
            publisher: {
              '@type': 'Organization',
              name: 'Punkt Widzenia',
              logo: { '@type': 'ImageObject', url: 'https://punktwidzenia.info.pl/logo.png' }
            },
            description: 'Ozzy Osbourne zmarł w wieku 76 lat. Ostatni koncert zagrał 5 lipca w Birmingham. Świat muzyki w żałobie.'
          })
        }</script>
      </Head>

      <article className="space-y-6">
        <Image
          src={"/ozzy-osbourne-nie-zyje-legenda-rocka-pozegnaa-sie-z-fanami.webp"}
          alt={"☠️ Ozzy Osbourne nie żyje – legenda rocka pożegnała się z fanami"}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Georges Biard / CC BY-SA 3.0</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚰️ Legenda rocka odeszła</h2>
            <p>Ozzy Osbourne, ikona heavy metalu i współzałożyciel Black Sabbath, zmarł 22 lipca 2025 roku w wieku 76 lat. Informację potwierdziła rodzina, podkreślając, że legendarny muzyk opuścił świat otoczony bliskimi.</p>

            <h2 className="text-xl font-semibold">🎵 Ostatni występ legendy</h2>
            <p>Jego ostatnie i symboliczne pożegnanie z fanami miało miejsce 5 lipca 2025 roku na stadionie Villa Park w Birmingham podczas charytatywnego koncertu „Back to the Beginning”. Osbourne wystąpił na nim razem z pierwotnym składem Black Sabbath — zasiadając na tronie ze względu na stan zdrowia.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🙏 Pożegnanie w Birmingham</h2>
            <p>30 lipca w rodzinnym Birmingham ma się odbyć publiczna procesja pożegnalna, której przewodnim motywem będzie „Black Sabbath Bridge” i murale pamięci. </p>

            <h2 className="text-xl font-semibold">🤟 Hommage środowiska muzycznego</h2>
            <p>Śmierć Ozzy’ego skłoniła środowisko rockowe do licznych manifestacji żalu i podziwu. Członkowie Black Sabbath nazwywali go bratem, a Królewskie Gwardie w Buckingham zagrały „Paranoid” jako hołd. Pantera odwołała koncert, aby uczcić pamięć muzyka.</p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/ozzy-osbourne-nie-zyje-legenda-rocka-pozegnaa-sie-z-fanami" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleozzyosbourneniezyjelegendarockapozegnaasiezfanami;
