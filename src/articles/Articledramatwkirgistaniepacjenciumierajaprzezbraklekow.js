import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articledramatwkirgistaniepacjenciumierajaprzezbraklekow() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"💊 Dramat w Kirgistanie – pacjenci umierają przez brak leków"}
    </h1>
  </header>

        <Image
          src={"/dramat-w-kirgistanie-pacjenci-umieraja-przez-brak-lekow.webp"}
          alt={"💊 Dramat w Kirgistanie – pacjenci umierają przez brak leków"}
width={311}
  height={163}          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚠️ Brakuje podstawowych leków</h2>
            <p>Szpitale w Kirgistanie alarmują – na rynku brakuje leków onkologicznych, przeciwpadaczkowych i ratujących życie. Pacjenci zmuszeni są do samodzielnego importowania preparatów lub rezygnacji z leczenia. Państwowe placówki przyznają, że nie są w stanie zapewnić nawet podstawowych terapii.<br /></p>

            <h2 className="text-xl font-semibold">💸 Leczenie tylko dla bogatych</h2>
            <p>Coraz więcej obywateli musi zadłużać się, wyprzedawać majątek lub rezygnować z leczenia dzieci, by sprowadzić lekarstwa zza granicy. Ceny w prywatnych aptekach szybują, a dostęp do nich mają tylko najzamożniejsi. Władze twierdzą, że to „przejściowe trudności” – ale sytuacja trwa od miesięcy.<br /></p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🕯️ Śmierć z powodu braku dostępu</h2>
            <p>W ostatnich tygodniach media doniosły o tragicznej śmierci chorej kobiety, która nie otrzymała leków przeciwbólowych i przeciwnowotworowych na czas. Rodzina oskarża system o bezczynność. To nie pierwszy przypadek – skala dramatu rośnie, a obietnice reform pozostają bez pokrycia.<br /></p>

            <h2 className="text-xl font-semibold">🏛️ Ministerstwo zdrowia milczy</h2>
            <p>Mimo publicznych apeli lekarzy, rodzin i organizacji pomocowych, kirgiskie Ministerstwo Zdrowia nie ogłosiło żadnego konkretnego planu ratunkowego. Społeczeństwo traci zaufanie, a aktywiści zapowiadają protesty w stolicy. Międzynarodowe organizacje humanitarne rozważają interwencję.<br /></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/dramat-w-kirgistanie-pacjenci-umieraja-przez-brak-lekow" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articledramatwkirgistaniepacjenciumierajaprzezbraklekow;
