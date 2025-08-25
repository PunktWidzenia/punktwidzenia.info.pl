import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlesmiercpodczaspolowanianalubelszczyznietragediawlesie() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🎯 Śmierć podczas polowania na Lubelszczyźnie – tragedia w lesie"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-19T10:00:00.000Z"}>{"2025-08-19"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/smierc-podczas-polowania-na-lubelszczyznie-tragedia-w-lesie.webp"}
    alt={"🎯 Śmierć podczas polowania na Lubelszczyźnie – tragedia w lesie"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🦌 Polowanie zakończone tragedią</h2>
            <p>16 sierpnia na terenie Lubelszczyzny odbywało się polowanie na dziki. Podczas akcji padł śmiertelny strzał – ofiarą został 60-letni mężczyzna. Według ustaleń policji, kula wystrzelona przez 40-letniego myśliwego trafiła w innego uczestnika zamiast w zwierzynę.</p>

            <h2 className="text-xl font-semibold">🚔 Zarzut zabójstwa i zatrzymanie sprawcy</h2>
            <p>Sprawca został szybko zatrzymany przez policję. Prokuratura przedstawiła mu zarzut zabójstwa, a sąd zdecydował o tymczasowym aresztowaniu. Śledczy sprawdzają, czy doszło do naruszenia zasad bezpieczeństwa podczas polowania, a także czy broń była używana zgodnie z przepisami.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">⚖️ Odpowiedzialność i przepisy prawne</h2>
            <p>Prawo łowieckie nakłada na myśliwych obowiązek zachowania szczególnej ostrożności. Każdy uczestnik musi posiadać ważne pozwolenie na broń, przestrzegać zasad celowania i oddawania strzałów tylko w warunkach gwarantujących bezpieczeństwo. Tragiczne zdarzenia, jak to na Lubelszczyźnie, wywołują pytania o skuteczność obecnych regulacji i kontrolę nad środowiskiem łowieckim.</p>

            <h2 className="text-xl font-semibold">💬 Dyskusja o bezpieczeństwie polowań</h2>
            <p>Organizacje społeczne i mieszkańcy regionu coraz częściej podnoszą temat wprowadzenia dodatkowych obostrzeń dotyczących polowań. Propozycje obejmują większą liczbę szkoleń praktycznych, częstsze badania psychologiczne dla posiadaczy broni oraz bardziej rygorystyczne kontrole przebiegu polowań.<br /><br />Tragedia przypomina, że każda nieostrożność w posługiwaniu się bronią może mieć dramatyczne konsekwencje – nie tylko dla uczestników polowania, ale również dla osób postronnych.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/smierc-podczas-polowania-na-lubelszczyznie-tragedia-w-lesie" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlesmiercpodczaspolowanianalubelszczyznietragediawlesie;
