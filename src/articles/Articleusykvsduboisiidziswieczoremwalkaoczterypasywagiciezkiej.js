import Head from "next/head";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articleusykvsduboisiidziswieczoremwalkaoczterypasywagiciezkiej() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <Head>
        <title>🔥 Usyk vs Dubois II. Dziś wieczorem walka o cztery pasy wagi ciężkiej!</title>
        <meta name="description" content="19 lipca 2025 na Wembley dojdzie do długo wyczekiwanego rewanżu: Oleksandr Usyk zmierzy się z Danielem Duboisem o niedyskusyjne mistrzostwo świata wagi ciężkiej. Emocje gwarantowane!" />
        <meta property="og:title" content="🔥 Usyk vs Dubois II. Dziś wieczorem walka o cztery pasy wagi ciężkiej!" />
        <meta property="og:description" content="19 lipca 2025 na Wembley dojdzie do długo wyczekiwanego rewanżu: Oleksandr Usyk zmierzy się z Danielem Duboisem o niedyskusyjne mistrzostwo świata wagi ciężkiej. Emocje gwarantowane!" />
        <meta property="og:image" content="https://punktwidzenia.info.pl/usyk-vs-dubois-ii-dzis-wieczorem-walka-o-cztery-pasy-wagi-ciezkiej.webp" />
        <meta property="og:url" content="https://punktwidzenia.info.pl/usyk-vs-dubois-ii-dzis-wieczorem-walka-o-cztery-pasy-wagi-ciezkiej" />
        <script type="application/ld+json">{
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: '🔥 Usyk vs Dubois II. Dziś wieczorem walka o cztery pasy wagi ciężkiej!',
            image: ['https://punktwidzenia.info.pl/usyk-vs-dubois-ii-dzis-wieczorem-walka-o-cztery-pasy-wagi-ciezkiej.webp'],
            datePublished: '2025-07-19',
            author: { '@type': 'Organization', name: 'Punkt Widzenia' },
            publisher: {
              '@type': 'Organization',
              name: 'Punkt Widzenia',
              logo: { '@type': 'ImageObject', url: 'https://punktwidzenia.info.pl/logo.png' }
            },
            description: '19 lipca 2025 na Wembley dojdzie do długo wyczekiwanego rewanżu: Oleksandr Usyk zmierzy się z Danielem Duboisem o niedyskusyjne mistrzostwo świata wagi ciężkiej. Emocje gwarantowane!'
          })
        }</script>
      </Head>

      <article className="space-y-6">
        <Image
          src={"/usyk-vs-dubois-ii-dzis-wieczorem-walka-o-cztery-pasy-wagi-ciezkiej.webp"}
          alt={"🔥 Usyk vs Dubois II. Dziś wieczorem walka o cztery pasy wagi ciężkiej!"}
            width={1200}
  height={630}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
        />
        
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🥊 Wielki rewanż na Wembley</h2>
            <p>Już dziś wieczorem w Londynie Oleksandr Usyk i Daniel Dubois zmierzą się w jednym z najważniejszych starć dekady. Stawką jest pełna unifikacja pasów mistrza świata wagi ciężkiej: WBA, WBO, IBF i WBC.<br /></p>

            <h2 className="text-xl font-semibold">💣 Historia z niedomkniętym rozdziałem</h2>
            <p>W 2023 roku doszło między nimi do kontrowersyjnego starcia. Dubois trafił Usyka ciosami w okolice pasa, które uznano za nielegalne. Walka zakończyła się zwycięstwem Ukraińca, ale niesmak pozostał. Dzisiejszy rewanż ma rozstrzygnąć wszystko.<br /></p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌍 Pojedynek, który śledzi cały świat</h2>
            <p>Wembley Stadium zapełni się po brzegi. Gala będzie transmitowana do ponad 150 krajów. To jedno z tych wydarzeń, które wykraczają poza sport – to walka o honor, prestiż i miejsce w historii.<br /></p>

            <h2 className="text-xl font-semibold">⏱️ Gdzie i kiedy oglądać?</h2>
            <p>Walka wieczoru przewidziana jest około godziny 23:00 czasu polskiego. Transmisja w Polsce dostępna będzie w usłudze PPV na platformie DAZN oraz u wybranych dostawców telewizji kablowej.<br /></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/usyk-vs-dubois-ii-dzis-wieczorem-walka-o-cztery-pasy-wagi-ciezkiej" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleusykvsduboisiidziswieczoremwalkaoczterypasywagiciezkiej;
