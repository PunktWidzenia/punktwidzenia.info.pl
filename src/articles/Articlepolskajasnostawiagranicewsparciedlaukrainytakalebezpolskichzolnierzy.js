import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlepolskajasnostawiagranicewsparciedlaukrainytakalebezpolskichzolnierzy() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🇵🇱 Polska jasno stawia granice: wsparcie dla Ukrainy tak, ale bez polskich żołnierzy"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-05T10:00:00.000Z"}>{"2025-09-05"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/polska-jasno-stawia-granice-wsparcie-dla-ukrainy-tak-ale-bez-polskich-zolnierzy.webp"}
    alt={"🇵🇱 Polska jasno stawia granice: wsparcie dla Ukrainy tak, ale bez polskich żołnierzy"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Arno Mikkor / EU2017EE / CC-BY 2.0</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🗣️ Deklaracja Tuska po spotkaniu w Paryżu</h2>
            <p>Premier Donald Tusk ogłosił, że Polska nie wyśle wojsk w ramach tzw. gwarancji bezpieczeństwa dla Ukrainy. Podkreślił, że kraj angażuje się w pomoc militarną i polityczną, ale nie zamierza wysyłać żołnierzy do powojennych misji stabilizacyjnych.</p>

            <h2 className="text-xl font-semibold">🌍 Kontekst międzynarodowy</h2>
            <p>Na paryskim szczycie prezydent Emmanuel Macron poinformował, że 26 państw jest gotowych do udziału w powojennym wsparciu Ukrainy. Polska dołącza do tego grona, lecz ogranicza swój udział do działań dyplomatycznych, logistycznych i gospodarczych.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">✈️ Naruszenie polskiej przestrzeni powietrznej</h2>
            <p>Równolegle Dowództwo Operacyjne Sił Zbrojnych poinformowało o incydencie związanym z naruszeniem polskiej przestrzeni powietrznej. Szczegóły są analizowane, jednak podkreślono, że systemy obrony zareagowały zgodnie z procedurami.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Polska stawia na wspólne działania w ramach NATO i UE. Rząd liczy, że wspólna presja polityczna i wsparcie wojskowe państw sojuszniczych przyspieszą proces zakończenia wojny, bez konieczności angażowania polskich żołnierzy w bezpośrednie działania.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/polska-jasno-stawia-granice-wsparcie-dla-ukrainy-tak-ale-bez-polskich-zolnierzy" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlepolskajasnostawiagranicewsparciedlaukrainytakalebezpolskichzolnierzy;
