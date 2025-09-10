import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlefrancjawkryzysiepolitycznymtrzecipremierwciaguroku() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🇫🇷 Francja w kryzysie politycznym – trzeci premier w ciągu roku"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-10T10:00:00.000Z"}>{"2025-09-10"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/francja-w-kryzysie-politycznym-trzeci-premier-w-ciagu-roku.webp"}
    alt={"🇫🇷 Francja w kryzysie politycznym – trzeci premier w ciągu roku"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Flickr / Domena publiczna</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🏛️ Dymisja premiera</h2>
            <p>François Bayrou ogłosił rezygnację po przegranym głosowaniu nad wotum zaufania w parlamencie. Jego rząd nie zdołał utrzymać większości, co zmusiło go do ustąpienia ze stanowiska.</p>

            <h2 className="text-xl font-semibold">🔁 Trzeci premier w 2025 roku</h2>
            <p>To już trzeci raz w ciągu roku, kiedy Francja traci szefa rządu. Taka częsta zmiana władzy to rzadkość nawet w polityce francuskiej, znanej z burzliwych debat i trudnych koalicji. Kryzys osłabia stabilność polityczną i gospodarczą jednego z najważniejszych państw Unii Europejskiej.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">👥 Społeczne napięcia</h2>
            <p>Po dymisji w wielu miastach zapowiedziano demonstracje. Minister spraw wewnętrznych ogłosił mobilizację nawet 80 tys. policjantów i żandarmów, aby zapewnić porządek. Atmosfera w kraju staje się coraz bardziej napięta, a obywatele oczekują realnych rozwiązań gospodarczych i politycznych.</p>

            <h2 className="text-xl font-semibold">🌍 Skutki dla Europy</h2>
            <p>Francja jest kluczowym graczem w Unii Europejskiej. Niestabilność polityczna w Paryżu może utrudnić podejmowanie wspólnych decyzji w UE, a także wpłynąć na kurs euro i politykę gospodarczą całego regionu.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/francja-w-kryzysie-politycznym-trzeci-premier-w-ciagu-roku" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlefrancjawkryzysiepolitycznymtrzecipremierwciaguroku;
