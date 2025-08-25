import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articleukrainskiobywateloskarzonyoprobezamachupaczkabombawpolsce() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <Head>
        <title>{"📰 Ukraiński obywatel oskarżony o próbę zamachu paczką-bombą w Polsce"}</title>
        <meta name="description" content={"ABW zatrzymała obywatela Ukrainy podejrzanego o wysłanie paczki-bomby. Grozi mu dożywocie. Trwają ustalenia motywów i powiązań."} />
        <meta property="og:title" content={"📰 Ukraiński obywatel oskarżony o próbę zamachu paczką-bombą w Polsce"} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={"ABW zatrzymała obywatela Ukrainy podejrzanego o wysłanie paczki-bomby. Grozi mu dożywocie. Trwają ustalenia motywów i powiązań."} />
        <meta property="og:image" content={"https://punktwidzenia.info.pl/ukrainski-obywatel-oskarzony-o-probe-zamachu-paczka-bomba-w-polsce.webp"} />
        <meta property="og:url" content={"https://punktwidzenia.info.pl/ukrainski-obywatel-oskarzony-o-probe-zamachu-paczka-bomba-w-polsce"} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={"https://punktwidzenia.info.pl/ukrainski-obywatel-oskarzony-o-probe-zamachu-paczka-bomba-w-polsce"} />
        <script type="application/ld+json">{
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: "📰 Ukraiński obywatel oskarżony o próbę zamachu paczką-bombą w Polsce",
            image: ["https://punktwidzenia.info.pl/ukrainski-obywatel-oskarzony-o-probe-zamachu-paczka-bomba-w-polsce.webp"],
            datePublished: "2025-08-11",
            author: { '@type': 'Organization', name: 'Punkt Widzenia' },
            publisher: {
              '@type': 'Organization',
              name: 'Punkt Widzenia',
              logo: { '@type': 'ImageObject', url: 'https://punktwidzenia.info.pl/logo.png' }
            },
            description: "ABW zatrzymała obywatela Ukrainy podejrzanego o wysłanie paczki-bomby. Grozi mu dożywocie. Trwają ustalenia motywów i powiązań."
          })
        }</script>
      </Head>

      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"📰 Ukraiński obywatel oskarżony o próbę zamachu paczką-bombą w Polsce"}
    </h1>
  </header>

        <NextImage
          src={"/ukrainski-obywatel-oskarzony-o-probe-zamachu-paczka-bomba-w-polsce.webp"}
          alt={"📰 Ukraiński obywatel oskarżony o próbę zamachu paczką-bombą w Polsce"}
          width={311}
          height={163}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Agencja Bezpieczeństwa Wewnętrznego / gov.pl</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🚨 Przechwycenie niebezpiecznej przesyłki</h2>
            <p>Agencja Bezpieczeństwa Wewnętrznego poinformowała, że udało się przechwycić paczkę zawierającą materiały wybuchowe, nadaną za pośrednictwem jednej z firm kurierskich. Ładunek został wykryty podczas rutynowej kontroli bezpieczeństwa, co zapobiegło potencjalnej tragedii.</p>

            <h2 className="text-xl font-semibold">🕵️‍♂️ Kim jest zatrzymany?</h2>
            <p>Podejrzanym jest 34-letni obywatel Ukrainy, który od kilku miesięcy przebywał na terenie Polski. Według wstępnych ustaleń mógł on mieć kontakty z osobami powiązanymi z przestępczością zorganizowaną lub obcymi służbami wywiadowczymi. ABW nie ujawnia na razie szczegółów śledztwa.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">⚖️ Zarzuty i możliwa kara</h2>
            <p>Prokuratura postawiła mężczyźnie zarzut dokonania czynu o charakterze terrorystycznym, który w polskim prawie zagrożony jest karą dożywotniego pozbawienia wolności. Sprawa prowadzona jest w trybie szczególnej wagi, a materiał dowodowy objęto klauzulą niejawności.</p>

            <h2 className="text-xl font-semibold">🌍 Reakcje i konsekwencje dyplomatyczne</h2>
            <p>Polskie Ministerstwo Spraw Zagranicznych przekazało stronie ukraińskiej oficjalną notę informacyjną. Podkreślono, że incydent ma charakter jednostkowy i nie powinien wpływać na relacje bilateralne. Jednocześnie zapowiedziano wzmocnienie kontroli przesyłek w strategicznych punktach kraju.</p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/ukrainski-obywatel-oskarzony-o-probe-zamachu-paczka-bomba-w-polsce" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleukrainskiobywateloskarzonyoprobezamachupaczkabombawpolsce;
