import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlefrancjawysylamysliwcerafaledoochronypolski() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"✈️ Francja wysyła myśliwce Rafale do ochrony Polski"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-12T10:00:00.000Z"}>{"2025-09-12"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/francja-wysyla-mysliwce-rafale-do-ochrony-polski.webp"}
    alt={"✈️ Francja wysyła myśliwce Rafale do ochrony Polski"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: USAFE AFAFRICA / Wikimedia Commons / CC-BY 2.0</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🇫🇷 Decyzja Paryża</h2>
            <p>Prezydent Emmanuel Macron ogłosił wysłanie trzech myśliwców Rafale do Polski. To bezpośrednia reakcja na niedawne naruszenia polskiego nieba przez rosyjskie drony. Francja podkreśla, że bezpieczeństwo Polski to bezpieczeństwo całej Europy, a NATO pozostaje zjednoczone wobec zagrożeń.</p>

            <h2 className="text-xl font-semibold">✈️ Wsparcie dla sojuszników</h2>
            <p>Rafale to jedne z najnowocześniejszych maszyn w arsenale Francji. Mają wspierać polskie siły powietrzne w patrolach i reagowaniu na potencjalne incydenty. Decyzja ma także znaczenie symboliczne – pokazuje gotowość Paryża do szybkiej reakcji w ramach sojuszu.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌍 Międzynarodowy kontekst</h2>
            <p>Incydenty z dronami naruszającymi polską przestrzeń powietrzną wywołały alarm w NATO i ONZ. Polska uruchomiła konsultacje w trybie art. 4 Traktatu Północnoatlantyckiego, a Rada Bezpieczeństwa ONZ ma zająć się sprawą na nadzwyczajnym posiedzeniu.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Eksperci wskazują, że obecność francuskich Rafale w Polsce to sygnał odstraszający wobec Rosji, ale też próba uspokojenia nastrojów społecznych. W przyszłości można spodziewać się większej rotacji wojsk sojuszniczych w regionie oraz intensywniejszych ćwiczeń obronnych przy wschodniej flance NATO.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/francja-wysyla-mysliwce-rafale-do-ochrony-polski" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlefrancjawysylamysliwcerafaledoochronypolski;
