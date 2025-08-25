import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlewislanarekordowoniskimpoziomiehistoryczneostrzezeniedlapolski() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"💧 Wisła na rekordowo niskim poziomie – historyczne ostrzeżenie dla Polski"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-24T10:00:00.000Z"}>{"2025-08-24"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/wisla-na-rekordowo-niskim-poziomie-historyczne-ostrzezenie-dla-polski.webp"}
    alt={"💧 Wisła na rekordowo niskim poziomie – historyczne ostrzeżenie dla Polski"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: geo573 / Wikimedia Commons / CC BY 3.0</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">📉 Historyczny spadek wody</h2>
            <p>Instytut Meteorologii i Gospodarki Wodnej poinformował, że Wisła osiągnęła najniższy w historii poziom wody. To efekt długotrwałego braku opadów i wysokich temperatur, które doprowadziły do suszy hydrologicznej w wielu regionach kraju.</p>

            <h2 className="text-xl font-semibold">🚢 Problemy dla transportu i energetyki</h2>
            <p>Niski poziom Wisły utrudnia żeglugę śródlądową i stwarza zagrożenie dla chłodzenia elektrowni położonych nad rzeką. Eksperci ostrzegają, że w dłuższej perspektywie może to wpływać także na bezpieczeństwo energetyczne Polski.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌱 Skutki dla środowiska</h2>
            <p>Ekosystem rzeki przeżywa kryzys – zagrożone są ryby i ptactwo wodne, które tracą naturalne siedliska. Utrata bioróżnorodności i pogarszająca się jakość wody to kolejne wyzwania wynikające z obecnej sytuacji.</p>

            <h2 className="text-xl font-semibold">🌍 Klimat i przyszłość zasobów wodnych</h2>
            <p>Specjaliści nie mają wątpliwości, że to sygnał alarmowy związany ze zmianami klimatu. Polska, mimo relatywnie dużych zasobów rzecznych, ma jeden z najniższych wskaźników dostępności wody pitnej w Europie. Konieczne będą inwestycje w retencję i ochronę zasobów wodnych.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/wisla-na-rekordowo-niskim-poziomie-historyczne-ostrzezenie-dla-polski" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlewislanarekordowoniskimpoziomiehistoryczneostrzezeniedlapolski;
