import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articlecoldplayikorporacyjnaburzakamerauchwyciaceoiszefowahr() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"🎥 Coldplay i korporacyjna burza. Kamera uchwyciła CEO i szefową HR"}
    </h1>
  </header>

        <Image
          src={"/coldplay-i-korporacyjna-burza-kamera-uchwycia-ceo-i-szefowa-hr.webp"}
          alt={"🎥 Coldplay i korporacyjna burza. Kamera uchwyciła CEO i szefową HR"}
width={311}
  height={163}          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Źródło: YouTube / materiały z koncertu – wykorzystane zgodnie z prawem cytatu</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🎶 Zwykły koncert, niezwykła reakcja</h2>
            <p>W trakcie koncertu Coldplay w Monachium, realizator transmisji pokazał publiczność – w tym dwie konkretne osoby: Andy’ego Byrona, CEO firmy Astronomer, oraz Kristin Cabot, szefową działu HR. Krótki fragment z ich udziałem momentalnie trafił do sieci i wywołał burzliwą reakcję internautów.<br /></p>

            <h2 className="text-xl font-semibold">👔 Relacja służbowa pod lupą</h2>
            <p>Byron i Cabot są zawodowo powiązani, a ich wspólna obecność na wydarzeniu rozrywkowym stała się podstawą do publicznej dyskusji o granicach relacji w strukturach firmowych. Choć firma nie odniosła się oficjalnie do sytuacji, w komentarzach pojawiają się pytania o przejrzystość i etykę wewnętrzną.<br /></p>
            <AdSlot />

            <div className="w-full max-w-sm mx-auto" style={{ position: 'relative', paddingTop: '177.77%' }}>
  <iframe
    src="https://www.youtube.com/embed/xL8gdhw4q5I"
    title="Coldplay CEO moment"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    className="rounded"
  />
</div>

            <h2 className="text-xl font-semibold">📺 Wszystko uchwycone na wizji</h2>
            <p>Klip z koncertu, zarejestrowany przez jednego z widzów, obiegł media społecznościowe. Obraz nie sugeruje żadnego niestosownego zachowania – to jednak wystarczyło, by rozpętać debatę.<br /></p>

            <h2 className="text-xl font-semibold">💬 Co mówią eksperci?</h2>
            <p>Specjaliści ds. HR podkreślają, że relacje między osobami z różnych szczebli hierarchii mogą budzić kontrowersje, nawet jeśli są zgodne z regulaminem firmy. – „Kluczowa jest transparentność i jasna polityka etyczna” – tłumaczy jeden z analityków.<br /></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/coldplay-i-korporacyjna-burza-kamera-uchwycia-ceo-i-szefowa-hr" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlecoldplayikorporacyjnaburzakamerauchwyciaceoiszefowahr;
