import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlekrwawyksiezycjuz7wrzesniajednoznajdluzszychzacmienwostatnichlatach() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🌕 „Krwawy księżyc” już 7 września – jedno z najdłuższych zaćmień w ostatnich latach"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-01T10:00:00.000Z"}>{"2025-09-01"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/krwawy-ksiezyc-juz-7-wrzesnia-jedno-z-najdluzszych-zacmien-w-ostatnich-latach.webp"}
    alt={"🌕 „Krwawy księżyc” już 7 września – jedno z najdłuższych zaćmień w ostatnich latach"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Jacek Rużyczka / Wikimedia Commons / CC-BY-SA-4.0</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🔭 Najdłuższe zaćmienie od lat</h2>
            <p>Astronomowie zapowiadają, że zaćmienie Księżyca 7 września potrwa aż 82 minuty. To sprawia, że będzie jednym z najdłuższych w ostatnich latach, co czyni je wyjątkowym wydarzeniem dla obserwatorów nieba.</p>

            <h2 className="text-xl font-semibold">🌍 Gdzie będzie widoczne?</h2>
            <p>„Krwawy księżyc” zobaczą mieszkańcy Europy, Bliskiego Wschodu, Afryki oraz Azji. W Polsce zjawisko będzie doskonale widoczne w drugiej połowie nocy z 6 na 7 września. Całkowite zaćmienie potrwa ponad godzinę – jeśli niebo będzie bezchmurne, mieszkańcy całego kraju będą mogli podziwiać pełną fazę.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">📸 Skąd nazwa „krwawy księżyc”?</h2>
            <p>Podczas zaćmienia Księżyc przybiera intensywnie czerwoną barwę. To efekt załamania promieni słonecznych w atmosferze Ziemi. Czerwone światło dociera na powierzchnię Księżyca, tworząc charakterystyczną, mistyczną poświatę.</p>

            <h2 className="text-xl font-semibold">🕒 Jak się przygotować?</h2>
            <p>Do obserwacji nie są potrzebne teleskopy ani specjalistyczny sprzęt. Wystarczy otwarta przestrzeń i bezchmurne niebo. Eksperci radzą, by fotografowie przygotowali aparaty ze statywami – to szansa na niezwykłe ujęcia nieba.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/krwawy-ksiezyc-juz-7-wrzesnia-jedno-z-najdluzszych-zacmien-w-ostatnich-latach" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlekrwawyksiezycjuz7wrzesniajednoznajdluzszychzacmienwostatnichlatach;
