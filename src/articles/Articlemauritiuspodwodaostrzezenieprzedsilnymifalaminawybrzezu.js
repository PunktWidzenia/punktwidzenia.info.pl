import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articlemauritiuspodwodaostrzezenieprzedsilnymifalaminawybrzezu() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"🌊 Mauritius pod wodą? Ostrzeżenie przed silnymi falami na wybrzeżu"}
    </h1>
  </header>

        <Image
          src={"/mauritius-pod-woda-ostrzezenie-przed-silnymi-falami-na-wybrzezu.webp"}
          alt={"🌊 Mauritius pod wodą? Ostrzeżenie przed silnymi falami na wybrzeżu"}
width={311}
  height={163}          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Simisa / Wikimedia Commons / CC BY-SA 3.0</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚠️ Alert pogodowy w rejonie wybrzeża</h2>
            <p>Mauritius ogłosił oficjalne ostrzeżenie przed silnymi falami (ang. heavy swell warning), które mają uderzać w wybrzeże wyspy przez najbliższe godziny. Meteorolodzy ostrzegają przed gwałtownym wzrostem poziomu morza oraz możliwością zalewania nabrzeżnych dróg i plaż.<br /></p>

            <h2 className="text-xl font-semibold">🏖️ Zakaz wchodzenia do wody</h2>
            <p>Władze apelują do turystów i mieszkańców o bezwzględne unikanie kąpieli oraz spacerów przy brzegu oceanu. Fale mogą osiągać wysokość kilku metrów i stanowią realne zagrożenie nawet dla osób znajdujących się na suchym lądzie – w tym kierowców i rowerzystów poruszających się przy wybrzeżu.<br /></p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🚫 Ruch morski ograniczony</h2>
            <p>W związku z ostrzeżeniem lokalne władze zawiesiły część połączeń promowych i transportowych na morzu. Rybacy zostali wezwani do nieopuszczania portów, a operatorzy turystyczni wstrzymali rejsy rekreacyjne do odwołania. Obowiązują również zakazy cumowania przy molo.<br /></p>

            <h2 className="text-xl font-semibold">🌐 Zagrożenie czasowe, ale realne</h2>
            <p>Choć ostrzeżenie ma charakter krótkoterminowy, obowiązuje na całym południowym i wschodnim wybrzeżu wyspy. Meteorolodzy przewidują, że sytuacja ustabilizuje się w ciągu 24–36 godzin, jednak apelują o monitorowanie komunikatów i stosowanie się do poleceń służb.<br /></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/mauritius-pod-woda-ostrzezenie-przed-silnymi-falami-na-wybrzezu" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlemauritiuspodwodaostrzezenieprzedsilnymifalaminawybrzezu;
