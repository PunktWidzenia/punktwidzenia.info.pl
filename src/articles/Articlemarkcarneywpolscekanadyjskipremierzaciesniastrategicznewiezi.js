import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlemarkcarneywpolscekanadyjskipremierzaciesniastrategicznewiezi() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🤝 Mark Carney w Polsce – kanadyjski premier zacieśnia strategiczne więzi"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-24T10:00:00.000Z"}>{"2025-08-24"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/mark-carney-w-polsce-kanadyjski-premier-zaciesnia-strategiczne-wiezi.webp"}
    alt={"🤝 Mark Carney w Polsce – kanadyjski premier zacieśnia strategiczne więzi"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Bank Anglii / Flickr / CC BY 2.0</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🇨🇦 Wizyta w Warszawie</h2>
            <p>Mark Carney spotka się z polskimi władzami, aby omówić kwestie obronne, gospodarcze i energetyczne. Polska, jako ważny partner NATO i jedna z najszybciej rozwijających się gospodarek UE, jest kluczowym punktem jego europejskiej trasy.</p>

            <h2 className="text-xl font-semibold">🔋 Energetyka i surowce strategiczne</h2>
            <p>Kanada podkreśla znaczenie współpracy w zakresie dostaw surowców oraz rozwoju zielonej energii. W Berlinie rozmowy mają dotyczyć przede wszystkim sektora energetycznego i dywersyfikacji łańcuchów dostaw.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🪖 NATO i bezpieczeństwo regionalne</h2>
            <p>Podczas wizyty w Rydze Carney spotka się z żołnierzami kanadyjskimi stacjonującymi w ramach sił NATO. Kanada konsekwentnie wspiera wschodnią flankę sojuszu i wzmacnia swoje zaangażowanie w bezpieczeństwo regionu.</p>

            <h2 className="text-xl font-semibold">🌍 Wspólne stanowisko wobec Ukrainy</h2>
            <p>Carney podkreślił, że przyszłość Ukrainy nie może być rozstrzygana bez udziału samej Ukrainy i Europy. Kanada zapowiada dalsze wsparcie polityczne, militarne i gospodarcze dla Kijowa.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/mark-carney-w-polsce-kanadyjski-premier-zaciesnia-strategiczne-wiezi" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlemarkcarneywpolscekanadyjskipremierzaciesniastrategicznewiezi;
