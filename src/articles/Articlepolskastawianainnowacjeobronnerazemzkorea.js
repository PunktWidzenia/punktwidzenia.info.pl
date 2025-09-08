import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlepolskastawianainnowacjeobronnerazemzkorea() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🤖 Polska stawia na innowacje obronne razem z Koreą"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-08T10:00:00.000Z"}>{"2025-09-08"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/polska-stawia-na-innowacje-obronne-razem-z-korea.webp"}
    alt={"🤖 Polska stawia na innowacje obronne razem z Koreą"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Bicanski / Pixnio / Domena publiczna</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🇵🇱🇰🇷 Współpraca z Koreą</h2>
            <p>Podczas targów zbrojeniowych MSPO 2025 w Kielcach Polska ogłosiła nową strategię rozwoju obronności. Kluczowym partnerem w tym procesie jest Korea Południowa. To właśnie z tym krajem planowane są inwestycje w technologie, które mogą być używane zarówno przez wojsko, jak i w codziennym życiu.</p>

            <h2 className="text-xl font-semibold">🤖 Sztuczna inteligencja i nowe technologie</h2>
            <p>Na liście priorytetów znalazła się sztuczna inteligencja (AI), która ma pomóc m.in. w analizie danych, rozpoznawaniu zagrożeń czy zarządzaniu sprzętem. Oprócz tego stawia się na nowoczesne materiały, np. lekkie, a jednocześnie wytrzymałe tkaniny, które znajdą zastosowanie w mundurach wojskowych, ale i w przemyśle cywilnym.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌍 Dual-use, czyli podwójne zastosowanie</h2>
            <p>Polska chce rozwijać technologie „dual-use” – takie, które przydadzą się zarówno w wojsku, jak i w cywilnych sektorach. Przykładem mogą być drony: mogą monitorować pole walki, ale też sprawdzać stan infrastruktury czy pomagać w akcjach ratunkowych.</p>

            <h2 className="text-xl font-semibold">🔮 Perspektywy dla Polski</h2>
            <p>Eksperci oceniają, że inwestycja w nowoczesne rozwiązania z Koreą Południową może sprawić, że Polska stanie się ważnym graczem w Europie w zakresie technologii obronnych i innowacji. To także szansa na rozwój gospodarki i nowych miejsc pracy poza sektorem stricte wojskowym.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/polska-stawia-na-innowacje-obronne-razem-z-korea" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlepolskastawianainnowacjeobronnerazemzkorea;
