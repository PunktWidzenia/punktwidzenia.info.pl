import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlerzadrezygnujezpodatkuodrezerwbankowych() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"💰 Rząd rezygnuje z podatku od rezerw bankowych"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-22T10:00:00.000Z"}>{"2025-08-22"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/rzad-rezygnuje-z-podatku-od-rezerw-bankowych.webp"}
    alt={"💰 Rząd rezygnuje z podatku od rezerw bankowych"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🏦 Cofnięty pomysł na nowe obciążenie sektora</h2>
            <p>Resort finansów wycofał się z koncepcji podatku od odsetek, jakie banki otrzymują od utrzymywanych w NBP rezerw obowiązkowych. Wcześniej szacowano, że takie rozwiązanie przyniosłoby budżetowi 1,5–2 mld zł rocznie.</p>

            <h2 className="text-xl font-semibold">📉 Nerwowa reakcja giełdy</h2>
            <p>Po ujawnieniu wcześniejszych planów sektor bankowy gwałtownie stracił na wartości – indeks WIG-Banki spadł o około 8 %. Inwestorzy ocenili, że kumulacja nowych podatków może mocno ograniczyć rentowność instytucji finansowych.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">⚖️ Budżet kontra stabilność rynku</h2>
            <p>Decyzja o rezygnacji pokazuje balansowanie rządu między potrzebą dodatkowych dochodów budżetowych a stabilnością sektora bankowego. Ostatecznie uznano, że ryzyko zachwiania równowagi finansowej przewyższa potencjalne korzyści fiskalne.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej z podatkami dla banków?</h2>
            <p>Podatek od rezerw został porzucony, ale wciąż aktualny pozostaje projekt podniesienia stawki CIT dla banków – nawet do 30 % w 2026 r. Będzie to jeden z głównych tematów dyskusji w sektorze finansowym i polityce fiskalnej w najbliższych miesiącach.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/rzad-rezygnuje-z-podatku-od-rezerw-bankowych" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlerzadrezygnujezpodatkuodrezerwbankowych;
