import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articleburzeparalizujapolskeimgwostrzegaawarszawatonie() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"Burze paraliżują Polskę. IMGW ostrzega, a Warszawa tonie ⛈️"}
    </h1>
  </header>

        <Image
          src={"/burze-paralizuja-polske-imgw-ostrzega-a-warszawa-tonie.webp"}
          alt={"Burze paraliżują Polskę. IMGW ostrzega, a Warszawa tonie ⛈️"}
width={311}
  height={163}          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⛈️ Armagedon pogodowy nad Polską</h2>
            <p>To nie jest zwykła letnia burza. Dziś nad Polską przechodzi coś, co internauci nazywają „pogodowym końcem świata”.<br />Niebo ciemnieje w kilka minut, a z chmur spadają na ziemię potoki wody. Pioruny rozświetlają miasta jak flesze na koncercie gwiazdy pop 🎤.<br /></p>

            <h2 className="text-xl font-semibold">🚨 Warszawa tonie – dosłownie</h2>
            <p>Stolica jest dziś nieprzejezdna. Zalane Aleje Jerozolimskie, Wisłostrada zamieniona w rwącą rzekę, a piesi brodzący po kostki w wodzie. <br />„Nigdy czegoś takiego nie widziałeś(-aś) w centrum miasta” – piszą użytkownicy X (dawniej Twitter). Tramwaje stoją, auta grzęzną. Chaos.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🧊 Grad wielkości orzechów</h2>
            <p>Z południa kraju napływają nagrania z miejsc, gdzie z nieba lecą lodowe kule wielkości orzechów włoskich. <br />Słychać tłuczone szyby, widać połamane gałęzie i zalane piwnice. Strażacy nie nadążają z interwencjami – a niebo wciąż grozi kolejną falą.</p>

            <h2 className="text-xl font-semibold">📢 IMGW alarmuje</h2>
            <p>Instytut Meteorologii i Gospodarki Wodnej ostrzega: to jeszcze nie koniec. Front burzowy przesuwa się na wschód.<br />Możliwe są kolejne zalania, wichury, a nawet trąby powietrzne. To nie są ostrzeżenia na wyrost – dziś pogoda pokazuje swój gniew.<br /></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/burze-paralizuja-polske-imgw-ostrzega-a-warszawa-tonie" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleburzeparalizujapolskeimgwostrzegaawarszawatonie;
