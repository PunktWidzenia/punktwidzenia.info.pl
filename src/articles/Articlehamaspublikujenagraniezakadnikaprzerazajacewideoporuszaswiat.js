import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articlehamaspublikujenagraniezakadnikaprzerazajacewideoporuszaswiat() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"🎥 Hamas publikuje nagranie zakładnika – przerażające wideo porusza świat"}
    </h1>
  </header>

        <Image
          src={"/hamas-publikuje-nagranie-zakadnika-przerazajace-wideo-porusza-swiat.webp"}
          alt={"🎥 Hamas publikuje nagranie zakładnika – przerażające wideo porusza świat"}
width={311}
  height={163}          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Lizzy Shaanan / PikiWiki Israel / CC BY 2.5 </p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🎞️ Nagranie pokazuje skrajnie wycieńczonego zakładnika</h2>
            <p>W najnowszym filmie opublikowanym przez Hamas widzimy 24-letniego zakładnika Evyatara Davida w dramatycznych warunkach. Mężczyzna – wychudzony, zmęczony i wyraźnie osłabiony – stoi w wykopanym dole, który sam określa jako „swoją przyszłą mogiłę”. Na nagraniu odlicza dni spędzone w niewoli, błaga o ratunek i czyta wiadomość rzekomo własnoręcznie napisaną do rodziny.<br /><br />To już drugie wideo z udziałem Davida w ciągu ostatnich dni. Poprzednie przedstawiało go w tunelu Hamasu, bez dostępu do światła dziennego.</p>
<p></p>

            <a href="https://www.youtube.com/shorts/c6lbNu87L_0" 
   target="_blank" 
   rel="noopener noreferrer"
   class="inline-block mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
  ▶️ Zobacz film na YouTube
</a>
<p></p>
            <h2 className="text-xl font-semibold">🌍 Międzynarodowe oburzenie i reakcje</h2>
            <p>Nagranie spotkało się z natychmiastową reakcją opinii publicznej i organizacji międzynarodowych. Rodzina Davida określiła film jako „propagandową ohydę”, a izraelskie władze potępiły Hamas za „nieludzkie traktowanie zakładników”.<br /><br />Jednocześnie wzrosła presja na rząd premiera Benjamina Netanjahu, który oskarżany jest przez protestujących w Tel Awiwie o bezczynność. W demonstracjach domagano się natychmiastowego zawarcia porozumienia prowadzącego do uwolnienia zakładników.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🚨 Tragedia humanitarna w Strefie Gazy</h2>
            <p>Nagranie to tylko jeden z elementów dramatycznej sytuacji w regionie. Organizacje pomocowe alarmują, że w wyniku braku dostaw żywności i leków w Gazie zmarło już ponad 90 dzieci. Przypadek 17-letniego Atefa Abu Khatera, który zmarł z głodu po utracie ponad 45 kg wagi, wstrząsnął opinią międzynarodową.<br /><br />ONZ wskazuje na systemowy problem w dostępie do pomocy humanitarnej, ograniczanej zarówno przez wojnę, jak i kontrole izraelskie.</p>

            <h2 className="text-xl font-semibold">🧭 Co dalej z zakładnikami?</h2>
            <p>Według danych izraelskich władz, wciąż ponad 100 osób przetrzymywanych jest przez Hamas. Organizacja zapowiada, że nie rozbroi się ani nie uwolni wszystkich zakładników, dopóki nie powstanie państwo palestyńskie. Jednocześnie powtarzające się publikacje nagrań pogłębiają traumę rodzin porwanych i podsycają napięcia społeczne.<br /><br />Eksperci wskazują, że kolejne wideo może być częścią strategii psychologicznej mającej wymusić ustępstwa polityczne. W obliczu międzynarodowego oburzenia i wzrastających napięć, sytuacja staje się coraz bardziej niestabilna.</p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/hamas-publikuje-nagranie-zakadnika-przerazajace-wideo-porusza-swiat" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlehamaspublikujenagraniezakadnikaprzerazajacewideoporuszaswiat;
