import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articleprezydentpolskizadareparacjiodniemiecwrocznicewybuchuiiwojnyswiatowej() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🇵🇱 Prezydent Polski żąda reparacji od Niemiec w rocznicę wybuchu II wojny światowej"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-01T10:00:00.000Z"}>{"2025-09-01"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/prezydent-polski-zada-reparacji-od-niemiec-w-rocznice-wybuchu-ii-wojny-swiatowej.webp"}
    alt={"🇵🇱 Prezydent Polski żąda reparacji od Niemiec w rocznicę wybuchu II wojny światowej"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Picryl / Domena publiczna</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🕊️ Rocznica i apel prezydenta</h2>
            <p>Podczas uroczystości 1 września prezydent Karol Nawrocki przypomniał o ofiarach wojny i podkreślił, że Polska nigdy nie otrzymała należnych reparacji. Wprost zażądał od Niemiec rozliczenia się z historycznych zobowiązań.</p>

            <h2 className="text-xl font-semibold">⚖️ Historyczne tło roszczeń</h2>
            <p>Polska poniosła gigantyczne straty w czasie II wojny światowej – zarówno ludzkie, jak i materialne. Władze wskazują, że żadne porozumienie nigdy nie zakończyło kwestii odszkodowań, a wcześniejsze umowy były zawierane w realiach politycznego przymusu.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌍 Reakcje i kontrowersje</h2>
            <p>Apel prezydenta spotkał się z mieszanymi reakcjami. Zwolennicy twierdzą, że sprawiedliwość dziejowa wymaga pełnego rozliczenia. Krytycy podkreślają jednak, że temat reparacji może pogorszyć relacje z Niemcami i jest praktycznie nie do wyegzekwowania.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Rząd zapowiada kolejne działania dyplomatyczne i publikacje raportów dokumentujących straty wojenne. Niewykluczone, że sprawa zostanie skierowana na forum międzynarodowe, by zwiększyć presję na Berlin.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/prezydent-polski-zada-reparacji-od-niemiec-w-rocznice-wybuchu-ii-wojny-swiatowej" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleprezydentpolskizadareparacjiodniemiecwrocznicewybuchuiiwojnyswiatowej;
