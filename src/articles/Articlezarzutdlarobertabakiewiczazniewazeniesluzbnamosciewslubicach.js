import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlezarzutdlarobertabakiewiczazniewazeniesluzbnamosciewslubicach() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"⚠️ Zarzut dla Roberta Bąkiewicza: znieważenie służb na moście w Słubicach"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-19T10:00:00.000Z"}>{"2025-08-19"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/zarzut-dla-roberta-bakiewicza-zniewazenie-sluzb-na-moscie-w-slubicach.webp"}
    alt={"⚠️ Zarzut dla Roberta Bąkiewicza: znieważenie służb na moście w Słubicach"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Nicole Wójcik / Creative Commons / Attribution 4.0 International</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🧭 Co się wydarzyło?</h2>
            <p>Robert Bąkiewicz usłyszał w Prokuraturze Okręgowej w Gorzowie Wlkp. zarzut słownego znieważenia czterech funkcjonariuszy — Straży Granicznej oraz Żandarmerii Wojskowej — podczas i w związku z pełnieniem przez nich obowiązków. Sprawa dotyczy zdarzenia na moście granicznym w Słubicach pod koniec czerwca (29.06).</p>

            <h2 className="text-xl font-semibold">⚖️ Podstawa prawna i możliwe sankcje</h2>
            <p>Zarzut kwalifikowany jest z art. 226 §1 Kodeksu karnego (znieważenie funkcjonariusza publicznego podczas i w związku z pełnieniem obowiązków). Grozi za to grzywna, kara ograniczenia wolności albo pozbawienia wolności do roku.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🗣️ Stanowiska stron i przebieg czynności</h2>
            <p>Pełnomocnik Bąkiewicza poinformował, że chodzi o zniewagę słowną; sam podejrzany nie przyznał się i określił działanie prokuratury jako motywowane politycznie. Według relacji śledczych, padły wobec funkcjonariuszy słowa w rodzaju „zdrajcy”.</p>

            <h2 className="text-xl font-semibold">🚧 Co dalej? Środki i następne etapy</h2>
            <p>Po postawieniu zarzutu prokuratura prowadzi dalsze czynności dowodowe. Wobec Bąkiewicza zastosowano środek zapobiegawczy w postaci zakazu zbliżania się do przejść granicznych na Odrze (w rejonie zdarzenia). Ewentualny akt oskarżenia będzie zależeć od oceny materiału dowodowego.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/zarzut-dla-roberta-bakiewicza-zniewazenie-sluzb-na-moscie-w-slubicach" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlezarzutdlarobertabakiewiczazniewazeniesluzbnamosciewslubicach;
