import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Article100tysiecyludzinamosciewsydneyogromnyprotestwsprawiegazy() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"🌉 100 tysięcy ludzi na moście w Sydney – ogromny protest w sprawie Gazy"}
    </h1>
  </header>

        <Image
          src={"/100-tysiecy-ludzi-na-moscie-w-sydney-ogromny-protest-w-sprawie-gazy.webp"}
          alt={"🌉 100 tysięcy ludzi na moście w Sydney – ogromny protest w sprawie Gazy"}
width={311}
  height={163}
            loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Diliff / Wikimedia Commons / CC BY-SA 3.0</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">📍 Most Harbour Bridge zamknięty – potężna manifestacja w samym sercu Sydney</h2>
            <p>Od wczesnych godzin porannych władze Sydney wstrzymały ruch na ikonicznym moście Harbour Bridge. Powodem był masowy marsz solidarnościowy z ludnością cywilną w Strefie Gazy. Uczestnicy domagali się natychmiastowego zawieszenia broni i swobodnego dostępu do pomocy humanitarnej. Policja oszacowała liczbę uczestników na ponad 100 tysięcy.</p>

            <h2 className="text-xl font-semibold">🌧 Tłumy mimo deszczu – determinacja protestujących nie słabnie</h2>
            <p>Choć przez Sydney przechodziły dziś ulewne deszcze i porywisty wiatr, marsz odbył się zgodnie z planem. Organizatorzy zadbali o bezpieczeństwo i zachowanie pokojowego charakteru wydarzenia. Tłumy niosły transparenty z hasłami „Stop bombing Gaza”, „Freedom for Palestine” oraz „Ceasefire now”.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌍 Głos australijskiej diaspory i reakcje międzynarodowe</h2>
            <p>Protest był wspierany przez liczne środowiska: organizacje praw człowieka, związki zawodowe, studenckie i społeczność muzułmańską. Wydarzenie odbiło się szerokim echem w mediach na całym świecie. ONZ i organizacje humanitarne ponowiły apel o umożliwienie dostaw pomocy do Gazy.</p>

            <h2 className="text-xl font-semibold">🚨 Rośnie napięcie – apel do rządu Australii o zdecydowane działania</h2>
            <p>Uczestnicy marszu zarzucili rządowi Anthony`ego Albanese`go bierność i brak wyraźnego stanowiska w sprawie trwającego konfliktu. Apelowano o wstrzymanie eksportu broni do Izraela i aktywne działania dyplomatyczne. Demonstracja zakończyła się pokojowo, ale organizatorzy zapowiadają kolejne działania, jeśli żądania nie zostaną spełnione.</p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/100-tysiecy-ludzi-na-moscie-w-sydney-ogromny-protest-w-sprawie-gazy" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Article100tysiecyludzinamosciewsydneyogromnyprotestwsprawiegazy;
