import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlepolakzatrzymanynabialorusipodzarzutemszpiegostwa() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🚨 Polak zatrzymany na Białorusi pod zarzutem szpiegostwa"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-05T10:00:00.000Z"}>{"2025-09-05"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/polak-zatrzymany-na-bialorusi-pod-zarzutem-szpiegostwa.webp"}
    alt={"🚨 Polak zatrzymany na Białorusi pod zarzutem szpiegostwa"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Artur Widak / NurPhoto / CC-BY-SA 3.0 PL</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🕵️‍♂️ Zatrzymanie w Mińsku</h2>
            <p>Białoruskie media państwowe poinformowały o zatrzymaniu Polaka, któremu zarzuca się działalność szpiegowską. Według relacji miał mieć przy sobie dokumenty związane z planowanymi ćwiczeniami wojskowymi Białorusi i Rosji.</p>

            <h2 className="text-xl font-semibold">⚖️ Kontekst polityczny</h2>
            <p>To kolejny incydent pogarszający relacje Warszawy i Mińska. Władze białoruskie regularnie oskarżają Zachód o ingerencję w swoje sprawy wewnętrzne, a Polska jest wskazywana jako jedno z głównych źródeł „zagrożenia”.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌍 Tło regionalne</h2>
            <p>Zatrzymanie wpisuje się w szerszy kontekst napięć militarnych w regionie. Rosja i Białoruś prowadzą wspólne manewry przy granicy NATO, a Polska wzmacnia własną obronę i współpracę z USA oraz sojusznikami.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Na razie nie wiadomo, jakie zarzuty formalnie zostaną postawione zatrzymanemu i czy strona polska otrzyma do niego dostęp konsularny. Sytuacja może stać się kolejnym punktem spornym w relacjach z Mińskiem.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/polak-zatrzymany-na-bialorusi-pod-zarzutem-szpiegostwa" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlepolakzatrzymanynabialorusipodzarzutemszpiegostwa;
