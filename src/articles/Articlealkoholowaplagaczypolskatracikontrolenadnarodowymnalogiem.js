import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlealkoholowaplagaczypolskatracikontrolenadnarodowymnalogiem() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"🍺 Alkoholowa plaga – czy Polska traci kontrolę nad narodowym nałogiem?"}
    </h1>
  </header>

        <NextImage
          src={"/alkoholowa-plaga-czy-polska-traci-kontrole-nad-narodowym-nalogiem.webp"}
          alt={"🍺 Alkoholowa plaga – czy Polska traci kontrolę nad narodowym nałogiem?"}
          width={311}
          height={163}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">📷 Zdjęcie: Nik Frey (niksan) / Creative Commons / Attribution 2.5 Generic</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">📊 Twarde dane – obraz kryzysu</h2>
            <p>Według najnowszych analiz Polska zajmuje drugie miejsce w Unii Europejskiej pod względem śmiertelności wynikającej z nadmiernego spożycia alkoholu. Wskaźniki obejmują zarówno choroby wątroby i układu krążenia, jak i zgony w wyniku wypadków, przemocy czy zatruć. Eksperci alarmują, że dane te pokazują nie tylko problem zdrowotny, ale i głęboką patologię społeczną.</p>

            <h2 className="text-xl font-semibold">⚠ Przyczyny – tanio, dostępnie, bez kontroli</h2>
            <p>W Polsce alkohol można kupić praktycznie wszędzie i o każdej porze. Ceny – w przeliczeniu na siłę nabywczą – należą do jednych z najniższych w UE. Do tego dochodzą setki tysięcy punktów sprzedaży, brak skutecznej kontroli wieku kupujących oraz agresywny marketing. W efekcie dostępność alkoholu staje się normą, a nie wyjątkiem.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🩺 Konsekwencje – od zdrowia po gospodarkę</h2>
            <p>Spożywanie alkoholu w nadmiarze generuje koszty liczone w miliardach złotych rocznie – od wydatków na leczenie chorób, przez interwencje policji, po spadek produktywności. Z danych wynika, że problem dotyczy wszystkich grup społecznych – od młodych dorosłych, po seniorów. Co więcej, w wielu przypadkach picie jest bagatelizowane jako „element kultury”, co utrudnia wprowadzanie zmian.</p>

            <h2 className="text-xl font-semibold">🔄 Co można zrobić – propozycje ekspertów</h2>
            <p>Światowa Organizacja Zdrowia wskazuje kilka skutecznych rozwiązań: ograniczenie liczby punktów sprzedaży, podwyższenie cen poprzez akcyzę, wprowadzenie ograniczeń w reklamie oraz edukację od najmłodszych lat. W Polsce część tych rozwiązań była rozważana, ale brak woli politycznej i silne lobby branży alkoholowej skutecznie blokują reformy.</p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/alkoholowa-plaga-czy-polska-traci-kontrole-nad-narodowym-nalogiem" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlealkoholowaplagaczypolskatracikontrolenadnarodowymnalogiem;
