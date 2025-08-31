import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articleuedziekujepolscezaochronewschodniejgranicy() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🛡️ UE dziękuje Polsce za ochronę wschodniej granicy"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-31T10:00:00.000Z"}>{"2025-08-31"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/ue-dziekuje-polsce-za-ochrone-wschodniej-granicy.webp"}
    alt={"🛡️ UE dziękuje Polsce za ochronę wschodniej granicy"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Dati Bendo / Wikimedia Commons / CC-BY-4.0</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🇪🇺 Wizyta przewodniczącej Komisji Europejskiej</h2>
            <p>Szefowa KE udała się na wschodnią granicę Polski, gdzie spotkała się z funkcjonariuszami Straży Granicznej i wojska. Podziękowała im za determinację w ochronie granicy Unii Europejskiej.</p>

            <h2 className="text-xl font-semibold">🧱 Granica jako linia bezpieczeństwa Europy</h2>
            <p>Podczas wizyty podkreślono, że Polska pełni rolę tarczy chroniącej całą Wspólnotę przed presją migracyjną i działaniami destabilizacyjnymi reżimu w Mińsku oraz Moskwie. Wskazano, że wschodnia granica to dziś jeden z najważniejszych punktów obronnych UE.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🤝 Wsparcie finansowe i polityczne</h2>
            <p>Komisja Europejska zapowiedziała dalsze finansowanie projektów infrastrukturalnych i technologicznych na granicy. Mają one usprawnić kontrolę, zwiększyć bezpieczeństwo i poprawić warunki pracy służb.</p>

            <h2 className="text-xl font-semibold">🔮 Symboliczny wymiar wizyty</h2>
            <p>Podróż szefowej KE miała też wymiar polityczny – pokazanie solidarności z Polską w obliczu zagrożeń hybrydowych. Jej słowa jasno wskazują, że Polska stała się jednym z filarów bezpieczeństwa europejskiego.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/ue-dziekuje-polsce-za-ochrone-wschodniej-granicy" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleuedziekujepolscezaochronewschodniejgranicy;
