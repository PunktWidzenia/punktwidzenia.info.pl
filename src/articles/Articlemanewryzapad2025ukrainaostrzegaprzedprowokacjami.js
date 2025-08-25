import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlemanewryzapad2025ukrainaostrzegaprzedprowokacjami() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"⚔️ Manewry „Zapad-2025” – Ukraina ostrzega przed prowokacjami"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-23T10:00:00.000Z"}>{"2025-08-23"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/manewry-zapad-2025-ukraina-ostrzega-przed-prowokacjami.webp"}
    alt={"⚔️ Manewry „Zapad-2025” – Ukraina ostrzega przed prowokacjami"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: mil.ru / Zdjęcie ilustracyjne</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🚨 Oświadczenie Kijowa</h2>
            <p>Ukraińskie władze ostrzegły Mińsk, że manewry wojskowe „Zapad-2025”, zaplanowane na wrzesień, mogą posłużyć jako przykrywka dla agresywnych działań. Podkreślono, że podobne ćwiczenia w przeszłości bywały wstępem do eskalacji militarnej.</p>

            <h2 className="text-xl font-semibold">🪖 Białoruś w cieniu Rosji</h2>
            <p>Ćwiczenia będą prowadzone wspólnie z rosyjskimi siłami zbrojnymi. To budzi szczególny niepokój, gdyż Białoruś od początku wojny udostępnia swoje terytorium Rosji jako zaplecze logistyczne i szkoleniowe.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">✈️ Polska i NATO w gotowości</h2>
            <p>Sytuacja bacznie obserwowana jest także w Polsce i innych krajach NATO. Eksperci wskazują, że każda prowokacja na granicy może wywołać reakcję sojuszu i wpłynąć na stabilność całego regionu.</p>

            <h2 className="text-xl font-semibold">🌍 Groźba destabilizacji regionu</h2>
            <p>Analitycy podkreślają, że „Zapad-2025” to nie tylko wojskowe ćwiczenia, ale element wojny psychologicznej mającej zastraszyć sąsiadów i przetestować gotowość Zachodu.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/manewry-zapad-2025-ukraina-ostrzega-przed-prowokacjami" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlemanewryzapad2025ukrainaostrzegaprzedprowokacjami;
