import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articleinpostpodostrzaemrekordowypodatekekspansjawhiszpaniiibuntkurierow() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"📦 InPost pod ostrzałem: rekordowy podatek, ekspansja w Hiszpanii i bunt kurierów"}
    </h1>
  </header>

        <Image
          src={"/inpost-pod-ostrzaem-rekordowy-podatek-ekspansja-w-hiszpanii-i-bunt-kurierow.webp"}
          alt={"📦 InPost pod ostrzałem: rekordowy podatek, ekspansja w Hiszpanii i bunt kurierów"}
width={311}
  height={163}          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: DMCGN / Wikimedia Commons (CC BY 4.0)</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">💥 Podatkowy kolos czy wyjątek?</h2>
            <p>Rafał Brzoska ujawnił, że InPost zapłacił 375 mln zł podatku CIT – więcej niż wszyscy zagraniczni konkurenci razem wzięci. Podkreślił, że firmy działające w Polsce powinny tu też płacić podatki. Wpis Brzoski wywołał falę reakcji – od pochwał po zarzuty o PR-owe zagranie.<br /></p>

            <h2 className="text-xl font-semibold">🎯 Hiszpańska ofensywa logistyczna</h2>
            <p>InPost sfinalizował przejęcie hiszpańskiego operatora Sending. Do końca 2025 roku firma planuje mieć ponad 4000 paczkomatów na Półwyspie Iberyjskim. Równolegle rozwija się też we Francji, Wielkiej Brytanii i Włoszech.<br /></p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🗣️ Kurierzy na skraju wytrzymałości</h2>
            <p>Nowe umowy w InPost zakładają potrącenia za stare auta i kary za opóźnienia. Kurierzy skarżą się, że po odliczeniach zostaje im 1000–2000 zł. W sieci krąży nagranie kuriera z Wielkopolski, a internauci mówią o wyzysku pod przykrywką nowoczesności.<br /></p>

            <h2 className="text-xl font-semibold">🏆 Co dalej z InPostem?</h2>
            <p>Mimo sukcesów zagranicznych InPost musi zadbać o relacje z kurierami w Polsce. Coraz więcej mówi się o konieczności interwencji regulatora. Firma musi zdecydować, czy chce być tylko technologicznym liderem, czy także odpowiedzialnym pracodawcą.<br /></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/inpost-pod-ostrzaem-rekordowy-podatek-ekspansja-w-hiszpanii-i-bunt-kurierow" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleinpostpodostrzaemrekordowypodatekekspansjawhiszpaniiibuntkurierow;
