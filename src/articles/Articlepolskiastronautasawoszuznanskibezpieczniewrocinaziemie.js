import Head from "next/head";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articlepolskiastronautasawoszuznanskibezpieczniewrocinaziemie() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <Head>
        <title>Polski astronauta Sławosz Uznański bezpiecznie wrócił na Ziemię!</title>
        <meta name="description" content="Sławosz Uznański, uczestnik misji Axiom Mission 4, bezpiecznie wrócił na Ziemię po pobycie na Międzynarodowej Stacji Kosmicznej." />
        <meta property="og:title" content="Polski astronauta Sławosz Uznański bezpiecznie wrócił na Ziemię!" />
        <meta property="og:description" content="Sławosz Uznański, uczestnik misji Axiom Mission 4, bezpiecznie wrócił na Ziemię po pobycie na Międzynarodowej Stacji Kosmicznej." />
        <meta property="og:image" content="https://punktwidzenia.info.pl/polski-astronauta-sawosz-uznanski-bezpiecznie-wroci-na-ziemie.webp" />
        <meta property="og:url" content="https://punktwidzenia.info.pl/polski-astronauta-sawosz-uznanski-bezpiecznie-wroci-na-ziemie" />
        <script type="application/ld+json">{
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: 'Polski astronauta Sławosz Uznański bezpiecznie wrócił na Ziemię!',
            image: ['https://punktwidzenia.info.pl/polski-astronauta-sawosz-uznanski-bezpiecznie-wroci-na-ziemie.webp'],
            datePublished: '2025-07-16',
            author: { '@type': 'Organization', name: 'Punkt Widzenia' },
            publisher: {
              '@type': 'Organization',
              name: 'Punkt Widzenia',
              logo: { '@type': 'ImageObject', url: 'https://punktwidzenia.info.pl/logo.png' }
            },
            description: 'Sławosz Uznański, uczestnik misji Axiom Mission 4, bezpiecznie wrócił na Ziemię po pobycie na Międzynarodowej Stacji Kosmicznej.'
          })
        }</script>
      </Head>

      <article className="space-y-6">
        <Image
          src={"/polski-astronauta-sawosz-uznanski-bezpiecznie-wroci-na-ziemie.webp"}
          alt={"Polski astronauta Sławosz Uznański bezpiecznie wrócił na Ziemię!"}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
        />
        
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🚀 Historyczny powrót polskiego astronauty</h2>
            <p>Sławosz Uznański powrócił na Ziemię po pobycie na pokładzie Międzynarodowej Stacji Kosmicznej jako uczestnik misji Axiom Mission 4. Kapsuła z załogą wodowała u wybrzeży Florydy, a wydarzenie to zostało okrzyknięte jednym z największych sukcesów w historii polskiego udziału w programach kosmicznych.<br /></p>

            <h2 className="text-xl font-semibold">🧪 Eksperymenty i badania w mikrograwitacji</h2>
            <p>Misja miała charakter naukowy i edukacyjny. Uznański prowadził na ISS eksperymenty biologiczne i fizyczne dla Europejskiej Agencji Kosmicznej, badając wpływ mikrograwitacji na organizm człowieka oraz testując nowoczesne urządzenia telemetryczne i pomiarowe.<br /></p>
            <AdSlot />

            <h2 className="text-xl font-semibold">📡 Edukacyjne transmisje z orbity</h2>
            <p>Podczas pobytu w kosmosie Uznański łączył się z uczniami i nauczycielami z całej Polski. Transmisje na żywo były częścią kampanii „Kosmos dla edukacji”, realizowanej wspólnie z Ministerstwem Edukacji i Polską Agencją Kosmiczną. Inicjatywa spotkała się z ogromnym zainteresowaniem.<br /></p>

            <h2 className="text-xl font-semibold">🇵🇱 Co dalej po powrocie do kraju?</h2>
            <p>Po przejściu badań adaptacyjnych astronauta rozpocznie cykl wykładów i spotkań z młodzieżą. Został także zaproszony na Kongres Innowacji i Nauki jako gość honorowy. Jego udział w misji to ważny krok dla całego polskiego sektora kosmicznego.<br /></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/polski-astronauta-sawosz-uznanski-bezpiecznie-wroci-na-ziemie" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlepolskiastronautasawoszuznanskibezpieczniewrocinaziemie;
