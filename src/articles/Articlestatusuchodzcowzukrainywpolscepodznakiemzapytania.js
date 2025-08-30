import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlestatusuchodzcowzukrainywpolscepodznakiemzapytania() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🛑 Status uchodźców z Ukrainy w Polsce pod znakiem zapytania"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-30T10:00:00.000Z"}>{"2025-08-30"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/status-uchodzcow-z-ukrainy-w-polsce-pod-znakiem-zapytania.webp"}
    alt={"🛑 Status uchodźców z Ukrainy w Polsce pod znakiem zapytania"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Uchodźcy z Ukrainy na dworcu kolejowym – zdjęcie ilustracyjne</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚖️ Decyzja prezydenta</h2>
            <p>Prezydent Karol Nawrocki ogłosił sprzeciw wobec ustawy o przedłużeniu ochrony tymczasowej dla uchodźców z Ukrainy. Według jego argumentacji, wsparcie powinno być ograniczone wyłącznie do osób pracujących i samodzielnie utrzymujących się w Polsce.</p>

            <h2 className="text-xl font-semibold">👥 Kogo dotyczy problem?</h2>
            <p>Z danych wynika, że obecnie w Polsce przebywa blisko milion obywateli Ukrainy objętych statusem ochronnym. Wielu z nich to osoby starsze, dzieci oraz osoby niepełnosprawne, które nie mają możliwości podjęcia pracy zarobkowej.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">💬 Fala reakcji społecznych</h2>
            <p>Decyzja prezydenta spotkała się z krytyką organizacji pozarządowych i części sceny politycznej. Podkreślają one, że nagłe zakończenie ochrony może doprowadzić do masowych problemów socjalnych i humanitarnych.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Rząd zapowiedział, że będzie szukał nowego rozwiązania legislacyjnego. Nie wiadomo jednak, czy uda się osiągnąć kompromis, który pogodzą kwestie humanitarne z polityką fiskalną i nastrojami społecznymi.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/status-uchodzcow-z-ukrainy-w-polsce-pod-znakiem-zapytania" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlestatusuchodzcowzukrainywpolscepodznakiemzapytania;
