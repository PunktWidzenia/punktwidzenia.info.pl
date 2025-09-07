import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlepierwszamilenialskaswietakosciolakatolickiego() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🙏 Pierwsza milenialska święta Kościoła katolickiego"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-07T10:00:00.000Z"}>{"2025-09-07"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/pierwsza-milenialska-swieta-kosciola-katolickiego.webp"}
    alt={"🙏 Pierwsza milenialska święta Kościoła katolickiego"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie ilustracyjne / Flickr / Domena publiczna</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">✝️ Uroczystość w Watykanie</h2>
            <p>Podczas uroczystości w Bazylice św. Piotra ogłoszono świętą nastolatkę zmarłą w 2006 roku na białaczkę. To pierwsza kanonizacja osoby należącej do pokolenia milenialsów i symboliczne wydarzenie dla młodych wiernych na całym świecie.</p>

            <h2 className="text-xl font-semibold">👩‍💻 Kim była nowa święta?</h2>
            <p>Dziewczynka była znana ze swojego zaangażowania w życie religijne i zainteresowania nowymi technologiami. Tworzyła strony internetowe poświęcone wierze i modlitwie, inspirując swoich rówieśników. Jej życie, choć krótkie, zostało uznane za świadectwo głębokiej wiary i oddania Bogu.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌍 Znaczenie dla Kościoła</h2>
            <p>Kanonizacja ma szczególny wymiar, ponieważ pokazuje, że świętość nie jest zarezerwowana wyłącznie dla dawnych czasów. Kościół chce wskazać młodym, że także w XXI wieku można żyć wiarą i pozostawić po sobie duchowe dziedzictwo.</p>

            <h2 className="text-xl font-semibold">🔮 Symbol dla młodych wiernych</h2>
            <p>Nowa święta staje się inspiracją dla młodzieży, która szuka autorytetów bliskich swojemu doświadczeniu. Jej postać łączy wiarę z nowoczesnością, a jednocześnie przypomina, że duchowe wartości pozostają niezmienne mimo zmieniającego się świata.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/pierwsza-milenialska-swieta-kosciola-katolickiego" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlepierwszamilenialskaswietakosciolakatolickiego;
