import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlewroclawwalczyzkomaramiprzyuzyciudronowpierwszetakierozwiazaniewpolsce() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🛰️ Wrocław walczy z komarami przy użyciu dronów – pierwsze takie rozwiązanie w Polsce"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-27T10:00:00.000Z"}>{"2025-08-27"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/wroclaw-walczy-z-komarami-przy-uzyciu-dronow-pierwsze-takie-rozwiazanie-w-polsce.webp"}
    alt={"🛰️ Wrocław walczy z komarami przy użyciu dronów – pierwsze takie rozwiązanie w Polsce"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: PxHere / CC0</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🌆 Innowacyjny projekt we Wrocławiu</h2>
            <p>Władze Wrocławia rozpoczęły pionierski program walki z komarami przy użyciu dronów. Bezzałogowce wyposażone w specjalne systemy rozpyłowe działają w trudno dostępnych terenach, takich jak rozlewiska czy parki nad Odrą.</p>

            <h2 className="text-xl font-semibold">🦟 Jak działają drony na komary</h2>
            <p>Drony rozprowadzają preparaty biologiczne, które hamują rozwój larw komarów w wodzie. Środek nie szkodzi innym zwierzętom ani ludziom, co odróżnia tę metodę od tradycyjnych oprysków chemicznych. Dzięki temu akcja ma charakter ekologiczny i bezpieczny.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">💡 Ekologia i bezpieczeństwo</h2>
            <p>Nowa metoda pozwala ograniczyć zużycie środków chemicznych, a przy tym zmniejsza koszty i ryzyko dla pracowników. Drony mogą działać w miejscach, do których trudno dotrzeć tradycyjnym sprzętem.</p>

            <h2 className="text-xl font-semibold">🔮 Możliwości na przyszłość</h2>
            <p>Jeśli projekt okaże się skuteczny, władze zapowiadają rozszerzenie działań na kolejne dzielnice. Inicjatywa może stać się wzorem dla innych polskich miast, które każdego lata zmagają się z plagą komarów.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/wroclaw-walczy-z-komarami-przy-uzyciu-dronow-pierwsze-takie-rozwiazanie-w-polsce" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlewroclawwalczyzkomaramiprzyuzyciudronowpierwszetakierozwiazaniewpolsce;
