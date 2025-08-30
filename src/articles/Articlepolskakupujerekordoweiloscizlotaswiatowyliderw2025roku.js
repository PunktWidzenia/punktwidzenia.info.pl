import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlepolskakupujerekordoweiloscizlotaswiatowyliderw2025roku() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🪙 Polska kupuje rekordowe ilości złota – światowy lider w 2025 roku"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-30T10:00:00.000Z"}>{"2025-08-30"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/polska-kupuje-rekordowe-ilosci-zlota-swiatowy-lider-w-2025-roku.webp"}
    alt={"🪙 Polska kupuje rekordowe ilości złota – światowy lider w 2025 roku"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Złoto w sztabach / Domena publiczna</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">📈 Rekordowe zakupy NBP</h2>
            <p>Narodowy Bank Polski w pierwszych miesiącach 2025 roku powiększył rezerwy o 48,6 ton złota. To najwyższy wynik globalnie, wyprzedzający takie potęgi jak Chiny czy Indie.</p>

            <h2 className="text-xl font-semibold">💰 Powody gromadzenia złota</h2>
            <p>Eksperci wskazują, że w obliczu napięć geopolitycznych i niepewności gospodarczej złoto staje się bezpieczną przystanią. Polska chce wzmocnić stabilność waluty oraz zabezpieczyć rezerwy przed wahaniami kursów i inflacją.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌍 Polska na tle świata</h2>
            <p>Według danych międzynarodowych instytucji finansowych, globalny popyt na złoto utrzymuje się na bardzo wysokim poziomie. Polska jednak zdominowała ranking, pokazując, że kraj traktuje ten kruszec jako strategiczny filar bezpieczeństwa.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Analitycy przewidują, że trend zakupów może być kontynuowany w kolejnych kwartałach. NBP zapowiada dalsze wzmacnianie rezerw złota, aby zbudować jeszcze większą odporność polskiej gospodarki.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/polska-kupuje-rekordowe-ilosci-zlota-swiatowy-lider-w-2025-roku" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlepolskakupujerekordoweiloscizlotaswiatowyliderw2025roku;
