import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articletragicznetrzesienieziemiwafganistaniesetkiofiaritysiacerannych() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🌍 Tragiczne trzęsienie ziemi w Afganistanie – setki ofiar i tysiące rannych"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-01T10:00:00.000Z"}>{"2025-09-01"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/tragiczne-trzesienie-ziemi-w-afganistanie-setki-ofiar-i-tysiace-rannych.webp"}
    alt={"🌍 Tragiczne trzęsienie ziemi w Afganistanie – setki ofiar i tysiące rannych"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Tasnim News Agency / CC-BY-4.0</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚠️ Katastrofa naturalna o ogromnej sile</h2>
            <p>We wschodnich prowincjach Afganistanu doszło do potężnego trzęsienia ziemi. Wstrząsy zrujnowały wiele miejscowości, niszcząc budynki mieszkalne, szkoły i meczety.</p>

            <h2 className="text-xl font-semibold">👥 Dramat ludności cywilnej</h2>
            <p>Według lokalnych władz zginęło około 800 osób, a ponad 2 500 zostało rannych. Liczba ofiar może rosnąć, bo ratownicy wciąż przeszukują gruzowiska. Setki rodzin straciły dach nad głową i potrzebują pilnej pomocy.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🚑 Akcje ratunkowe i pomoc humanitarna</h2>
            <p>Na miejsce skierowano zespoły ratownicze oraz służby medyczne. Organizacje humanitarne apelują o wsparcie – potrzeba leków, namiotów, wody pitnej i żywności. Utrudnieniem są zniszczone drogi i ryzyko kolejnych wstrząsów wtórnych.</p>

            <h2 className="text-xl font-semibold">🌐 Reakcje świata</h2>
            <p>Tragedia spotkała się z falą współczucia i deklaracjami pomocy międzynarodowej. ONZ, Unia Europejska i sąsiednie państwa zapowiedziały wsparcie finansowe i techniczne dla poszkodowanych.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/tragiczne-trzesienie-ziemi-w-afganistanie-setki-ofiar-i-tysiace-rannych" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articletragicznetrzesienieziemiwafganistaniesetkiofiaritysiacerannych;
