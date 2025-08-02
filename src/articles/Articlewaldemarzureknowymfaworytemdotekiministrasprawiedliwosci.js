import Head from "next/head";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articlewaldemarzureknowymfaworytemdotekiministrasprawiedliwosci() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <Head>
        <title>⚖️ Waldemar Żurek nowym faworytem do teki ministra sprawiedliwości?</title>
        <meta name="description" content="Waldemar Żurek może zastąpić Adama Bodnara na stanowisku ministra sprawiedliwości. Kim jest niezależny sędzia, który pojawił się w politycznych spekulacjach?" />
        <meta property="og:title" content="⚖️ Waldemar Żurek nowym faworytem do teki ministra sprawiedliwości?" />
        <meta property="og:description" content="Waldemar Żurek może zastąpić Adama Bodnara na stanowisku ministra sprawiedliwości. Kim jest niezależny sędzia, który pojawił się w politycznych spekulacjach?" />
        <meta property="og:image" content="https://punktwidzenia.info.pl/waldemar-zurek-nowym-faworytem-do-teki-ministra-sprawiedliwosci.webp" />
        <meta property="og:url" content="https://punktwidzenia.info.pl/waldemar-zurek-nowym-faworytem-do-teki-ministra-sprawiedliwosci" />
        <script type="application/ld+json">{
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: '⚖️ Waldemar Żurek nowym faworytem do teki ministra sprawiedliwości?',
            image: ['https://punktwidzenia.info.pl/waldemar-zurek-nowym-faworytem-do-teki-ministra-sprawiedliwosci.webp'],
            datePublished: '2025-07-22',
            author: { '@type': 'Organization', name: 'Punkt Widzenia' },
            publisher: {
              '@type': 'Organization',
              name: 'Punkt Widzenia',
              logo: { '@type': 'ImageObject', url: 'https://punktwidzenia.info.pl/logo.png' }
            },
            description: 'Waldemar Żurek może zastąpić Adama Bodnara na stanowisku ministra sprawiedliwości. Kim jest niezależny sędzia, który pojawił się w politycznych spekulacjach?'
          })
        }</script>
      </Head>

      <article className="space-y-6">
        <Image
          src={"/waldemar-zurek-nowym-faworytem-do-teki-ministra-sprawiedliwosci.webp"}
          alt={"⚖️ Waldemar Żurek nowym faworytem do teki ministra sprawiedliwości?"}
            width={1200}
  height={630}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Platforma Obywatelska RP, CC BY-SA 2.0, via Wikimedia Commons</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🧑‍⚖️ Kim jest Waldemar Żurek?</h2>
            <p>Sędzia Waldemar Żurek od lat znany jest jako jeden z najbardziej zaangażowanych obrońców niezależności sądownictwa w Polsce. Były rzecznik Krajowej Rady Sądownictwa zasłynął z publicznych wystąpień przeciwko reformom Zbigniewa Ziobry i stał się symbolem sprzeciwu wobec upolityczniania wymiaru sprawiedliwości.</p>

            <h2 className="text-xl font-semibold">📢 Spekulacje na scenie politycznej</h2>
            <p>W ostatnich dniach media obiegły informacje, jakoby Waldemar Żurek miał zostać nowym ministrem sprawiedliwości w miejsce Adama Bodnara. Choć nie ma jeszcze oficjalnego potwierdzenia, niektórzy politycy koalicji rządzącej nie wykluczają takiego scenariusza. „Potrzeba mocnego głosu środowiska sędziowskiego” – mówi anonimowy polityk.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🧩 Zmiana kursu w Ministerstwie Sprawiedliwości?</h2>
            <p>Adam Bodnar jako minister zasłynął z łagodnego, choć konsekwentnego stylu przywracania ładu konstytucyjnego. Pojawienie się nazwiska Żurka w kontekście jego ewentualnej dymisji może sugerować, że część rządzących oczekuje bardziej stanowczej polityki wobec sędziów powołanych przez tzw. neo-KRS.</p>

            <h2 className="text-xl font-semibold">🗳️ Reakcje opinii publicznej i środowisk prawniczych</h2>
            <p>Na wieść o możliwej nominacji Żurka zareagowały już środowiska sędziowskie. „To byłby jasny sygnał, że rząd traktuje poważnie głos niezależnych sędziów” – stwierdziła jedna z przedstawicielek Iustitii. W sieci nie brakuje również głosów poparcia – internauci komentują: „wreszcie ktoś z jajami”.<br /><br /></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/waldemar-zurek-nowym-faworytem-do-teki-ministra-sprawiedliwosci" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlewaldemarzureknowymfaworytemdotekiministrasprawiedliwosci;
