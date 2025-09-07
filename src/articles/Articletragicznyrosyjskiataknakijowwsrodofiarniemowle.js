import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articletragicznyrosyjskiataknakijowwsrodofiarniemowle() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"💥 Tragiczny rosyjski atak na Kijów – wśród ofiar niemowlę"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-07T10:00:00.000Z"}>{"2025-09-07"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/tragiczny-rosyjski-atak-na-kijow-wsrod-ofiar-niemowle.webp"}
    alt={"💥 Tragiczny rosyjski atak na Kijów – wśród ofiar niemowlę"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie ilustracyjne / Needpix</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🕯️ Dramat w stolicy Ukrainy</h2>
            <p>W wyniku nocnego ostrzału Kijowa życie straciła trzyosobowa rodzina, w tym niemowlę. Łącznie zginęły trzy osoby, a 18 zostało rannych. Pociski spowodowały pożary w blokach mieszkalnych, co potwierdzili lokalni ratownicy i władze miasta.</p>

            <h2 className="text-xl font-semibold">🚒 Skala zniszczeń</h2>
            <p>Atak doprowadził do poważnych uszkodzeń infrastruktury cywilnej. W kilku budynkach wybuchły pożary, a część mieszkańców musiała być ewakuowana. Służby ratunkowe walczyły przez wiele godzin z ogniem, aby zapobiec dalszym stratom.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌍 Reakcje międzynarodowe</h2>
            <p>Tragiczne wydarzenia w Kijowie ponownie spotkały się z potępieniem ze strony zachodnich partnerów Ukrainy. Podkreślono, że Rosja po raz kolejny naruszyła zasady prawa międzynarodowego, atakując cele cywilne i narażając życie dzieci.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Eksperci wskazują, że nasilające się ataki na Kijów i inne miasta Ukrainy mają na celu zastraszenie ludności i osłabienie morale. Jednak kolejne tragedie jedynie wzmacniają determinację Kijowa w walce o międzynarodowe wsparcie i dalsze dostawy systemów obrony powietrznej.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/tragiczny-rosyjski-atak-na-kijow-wsrod-ofiar-niemowle" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articletragicznyrosyjskiataknakijowwsrodofiarniemowle;
