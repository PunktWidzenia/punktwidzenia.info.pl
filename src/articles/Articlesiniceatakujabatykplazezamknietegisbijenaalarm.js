import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articlesiniceatakujabatykplazezamknietegisbijenaalarm() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"🌊 Sinice atakują Bałtyk! Plaże zamknięte, GIS bije na alarm"}
    </h1>
  </header>

        <Image
          src={"/sinice-atakuja-batyk-plaze-zamkniete-gis-bije-na-alarm.webp"}
          alt={"🌊 Sinice atakują Bałtyk! Plaże zamknięte, GIS bije na alarm"}
width={311}
  height={163}          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🌊 Zamknięte kąpieliska – lista i przebieg</h2>
            <p>W poniedziałek 21 lipca 2025 Główny Inspektorat Sanitarny i lokalne sanepidy odnotowały aż 33 zamknięte kąpieliska z powodu zakwitu sinic. W woj. pomorskim obowiązywały czerwone flagi w Gdańsku (Brzeźno – 3 plaże, Stogi, Jelitkowo), Sopocie (wejście 33), Helu (Mała Plaża) oraz w Chałupach, Ostrowie, Karwi, Dębkach, Białogórze, Lubiatowie i Łebie (2). W woj. zachodniopomorskim zakaz kąpieli objął Trzebież nad Zalewem Szczecińskim.<br /></p>

            <h2 className="text-xl font-semibold">🌡️ Czynniki sprzyjające zakwitowi</h2>
            <p>Temperatura wody nad Bałtykiem sięgała od 18,3 °C do 23,4 °C – idealne warunki do masowego rozmnażania się sinic. Brak opadów, słaby wiatr i wysoki poziom biogenów w wodzie stworzyły korzystne warunki do ich zakwitu.<br /></p>
            <AdSlot />

            <h2 className="text-xl font-semibold">⚠️ Czym grożą sinice?</h2>
            <p>Sinice (cyjanobakterie) mogą wytwarzać toksyny groźne dla zdrowia. Kontakt z nimi może powodować:<br /><br />– wysypki i podrażnienia skóry,  <br />– zaczerwienienie i pieczenie oczu,  <br />– dolegliwości żołądkowo-jelitowe – wymioty, biegunki, bóle brzucha.<br /><br />Szczególnie narażone są dzieci, osoby starsze i osoby z obniżoną odpornością.<br /></p>

            <h2 className="text-xl font-semibold">📊 Jak przebiega sytuacja od połowy lipca?</h2>
            <p>Od kilku dni liczba zamkniętych kąpielisk gwałtownie rosła: od 7 miejsc 18 lipca, przez 20 w weekend, aż do 33 w dniu 21 lipca. GIS na bieżąco publikuje komunikaty w Serwisie Kąpieliskowym – rekomenduje się ich regularne sprawdzanie.<br /></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/sinice-atakuja-batyk-plaze-zamkniete-gis-bije-na-alarm" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlesiniceatakujabatykplazezamknietegisbijenaalarm;
