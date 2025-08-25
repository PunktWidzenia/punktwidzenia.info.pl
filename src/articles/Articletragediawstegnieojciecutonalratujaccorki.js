import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articletragediawstegnieojciecutonalratujaccorki() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
  <header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"🚨 Tragedia w Stegnie: ojciec utonął ratując córki"}
    </h1>
    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
      <time dateTime={"2025-08-18T10:00:00.000Z"}>{"2025-08-18"} </time>
    </div>
  </header>
        <NextImage
          src={"/tragedia-w-stegnie-ojciec-utonal-ratujac-corki.webp"}
          alt={"🚨 Tragedia w Stegnie: ojciec utonął ratując córki"}
          width={311}
          height={163}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🌊 Dramatyczne wydarzenia nad Bałtykiem</h2>
            <p>Do tragedii doszło na plaży w Stegnie. Silne fale i prądy porwały dwie dziewczynki, które znalazły się w niebezpieczeństwie. Ich ojciec, 48-letni mężczyzna, natychmiast rzucił się do wody, by je ratować.</p>

            <h2 className="text-xl font-semibold">👧 Dziewczynki uratowały się same</h2>
            <p>Mimo ogromnego ryzyka dziewczynkom udało się dopłynąć do brzegu o własnych siłach. Niestety, ojciec miał trudności z powrotem na ląd. Świadkowie wezwali pomoc i próbowali udzielić pierwszej pomocy.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🚑 Walka o życie</h2>
            <p>Na miejsce przybyły służby ratunkowe, które podjęły akcję reanimacyjną. Niestety, mimo wysiłków ratowników, nie udało się uratować życia 48-latka.</p>

            <h2 className="text-xl font-semibold">⚠️ Morze to niebezpieczny żywioł</h2>
            <p>To kolejny w ostatnich dniach wypadek nad Bałtykiem. Eksperci przypominają, że fale i prądy wsteczne stanowią poważne zagrożenie, nawet gdy woda sięga jedynie do pasa. Ratownicy apelują o ostrożność i kąpiele tylko w miejscach strzeżonych.</p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/tragedia-w-stegnie-ojciec-utonal-ratujac-corki" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articletragediawstegnieojciecutonalratujaccorki;
