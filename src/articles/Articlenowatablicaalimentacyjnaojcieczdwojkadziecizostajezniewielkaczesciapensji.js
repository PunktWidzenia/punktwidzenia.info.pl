import Head from "next/head";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articlenowatablicaalimentacyjnaojcieczdwojkadziecizostajezniewielkaczesciapensji() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <Head>
        <title>💥 Nowa tablica alimentacyjna. Ojciec z dwójką dzieci zostaje z niewielką częścią pensji!</title>
        <meta name="description" content="Ministerstwo wprowadza tablicę alimentacyjną. Przykład ojca z dwójką dzieci pokazuje, że po alimentach może mu zostać mniej niż 2500 zł miesięcznie. Zobacz szczegóły!" />
        <meta property="og:title" content="💥 Nowa tablica alimentacyjna. Ojciec z dwójką dzieci zostaje z niewielką częścią pensji!" />
        <meta property="og:description" content="Ministerstwo wprowadza tablicę alimentacyjną. Przykład ojca z dwójką dzieci pokazuje, że po alimentach może mu zostać mniej niż 2500 zł miesięcznie. Zobacz szczegóły!" />
        <meta property="og:image" content="https://punktwidzenia.info.pl/nowa-tablica-alimentacyjna-ojciec-z-dwojka-dzieci-zostaje-z-niewielka-czescia-pensji.webp" />
        <meta property="og:url" content="https://punktwidzenia.info.pl/nowa-tablica-alimentacyjna-ojciec-z-dwojka-dzieci-zostaje-z-niewielka-czescia-pensji" />
        <script type="application/ld+json">{
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: '💥 Nowa tablica alimentacyjna. Ojciec z dwójką dzieci zostaje z niewielką częścią pensji!',
            image: ['https://punktwidzenia.info.pl/nowa-tablica-alimentacyjna-ojciec-z-dwojka-dzieci-zostaje-z-niewielka-czescia-pensji.webp'],
            datePublished: '2025-07-24',
            author: { '@type': 'Organization', name: 'Punkt Widzenia' },
            publisher: {
              '@type': 'Organization',
              name: 'Punkt Widzenia',
              logo: { '@type': 'ImageObject', url: 'https://punktwidzenia.info.pl/logo.png' }
            },
            description: 'Ministerstwo wprowadza tablicę alimentacyjną. Przykład ojca z dwójką dzieci pokazuje, że po alimentach może mu zostać mniej niż 2500 zł miesięcznie. Zobacz szczegóły!'
          })
        }</script>
      </Head>

      <article className="space-y-6">
        <Image
          src={"/nowa-tablica-alimentacyjna-ojciec-z-dwojka-dzieci-zostaje-z-niewielka-czescia-pensji.webp"}
          alt={"💥 Nowa tablica alimentacyjna. Ojciec z dwójką dzieci zostaje z niewielką częścią pensji!"}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
        />
        
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">📌 Czym jest tablica alimentacyjna?</h2>
            <p>Ministerstwo Sprawiedliwości opublikowało tzw. tablicę alimentacyjną. To dokument, który pokazuje, ile powinny wynosić alimenty — w zależności od tego:<br />• ile ktoś zarabia brutto,<br />• ile ma dzieci,<br />• w jakim wieku są dzieci.<br />Nie jest to prawo, ale wskazówka dla sędziów i mediatorów. Problem w tym, że wyliczenia budzą ogromne emocje.<br /></p>

            <h2 className="text-xl font-semibold">🧮 Brutto to nie netto!</h2>
            <p>Tablica opiera się na dochodzie brutto, czyli przed opodatkowaniem. A przecież to, co trafia na konto (netto) jest znacznie niższe. Dla wielu ludzi różnica może wynosić nawet 2–3 tysiące złotych!<br /></p>
            <AdSlot />

            <h2 className="text-xl font-semibold">👨‍👧‍👦 Przykład: ojciec, dwójka dzieci, 8 i 12 lat</h2>
            <p>Załóżmy, że rozwiedziony ojciec ma dwójkę dzieci: córkę w wieku 8 lat i syna w wieku 12 lat. Zarabia 8 900 zł brutto miesięcznie, czyli około 6 400 zł netto. Alimenty mogą wynieść nawet 4 000 zł, co zostawia ojcu tylko około 2 400 zł na życie.<br /></p>

            <h2 className="text-xl font-semibold">🧨 Dlaczego wybuchła burza?</h2>
            <p>Kwoty z tablicy alimentacyjnej wywołały szok. Nie uwzględniają kredytów, wynajmu ani innych kosztów życia. Wielu rodziców uważa, że pozostają im środki niepozwalające na przetrwanie.<br /></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/nowa-tablica-alimentacyjna-ojciec-z-dwojka-dzieci-zostaje-z-niewielka-czescia-pensji" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlenowatablicaalimentacyjnaojcieczdwojkadziecizostajezniewielkaczesciapensji;
