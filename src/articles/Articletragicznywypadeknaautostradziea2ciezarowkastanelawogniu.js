import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articletragicznywypadeknaautostradziea2ciezarowkastanelawogniu() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🚨 Tragiczny wypadek na autostradzie A2 – ciężarówka stanęła w ogniu"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-25T10:00:00.000Z"}>{"2025-08-25"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/tragiczny-wypadek-na-autostradzie-a2-ciezarowka-stanela-w-ogniu.webp"}
    alt={"🚨 Tragiczny wypadek na autostradzie A2 – ciężarówka stanęła w ogniu"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">📷 Zdjęcie: Komenda Powiatowa Państwowej Straży Pożarnej w Bolesławcu</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🔥 Przebieg zdarzenia</h2>
            <p>Na autostradzie A2, w rejonie bramek poboru opłat, doszło do dramatycznego wypadku. Ciężarówka stanęła w ogniu, a płomienie w krótkim czasie objęły całą kabinę pojazdu. Kierowcy nie udało się uratować.</p>

            <h2 className="text-xl font-semibold">🚒 Akcja ratunkowa</h2>
            <p>Na miejsce skierowano jednostki Państwowej Straży Pożarnej oraz służby medyczne. Strażacy przez długi czas walczyli z ogniem, jednocześnie zabezpieczając teren zdarzenia, aby zapobiec rozprzestrzenieniu się płomieni i kolejnym ofiarom.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🚧 Skutki dla ruchu</h2>
            <p>Wypadek spowodował ogromne utrudnienia w ruchu na jednym z najbardziej uczęszczanych odcinków autostrady. Kierowcy stali w wielokilometrowych korkach, a część trasy została czasowo zablokowana.</p>

            <h2 className="text-xl font-semibold">⚠️ Refleksje nad bezpieczeństwem</h2>
            <p>Eksperci podkreślają, że zdarzenie to rodzi pytania o stan techniczny pojazdów ciężarowych i warunki pracy kierowców zawodowych. To również sygnał o potrzebie dalszych działań na rzecz poprawy bezpieczeństwa na polskich drogach.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/tragiczny-wypadek-na-autostradzie-a2-ciezarowka-stanela-w-ogniu" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articletragicznywypadeknaautostradziea2ciezarowkastanelawogniu;
