import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlecorazwiekszezmeczeniewojnanaukrainie() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"😮‍💨 Coraz większe zmęczenie wojną na Ukrainie"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-06T10:00:00.000Z"}>{"2025-09-06"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/coraz-wieksze-zmeczenie-wojna-na-ukrainie.webp"}
    alt={"😮‍💨 Coraz większe zmęczenie wojną na Ukrainie"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie ilustracyjne / Domena publiczna</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🗣️ Wypowiedź Trumpa</h2>
            <p>Były prezydent USA ocenił, że wojna w Ukrainie trwa zbyt długo i wywołuje zmęczenie wśród opinii publicznej na całym świecie. Podkreślił, że Rosja nie zrealizowała swoich celów i straciła wizerunkowo na arenie międzynarodowej.</p>

            <h2 className="text-xl font-semibold">🌍 Perspektywa międzynarodowa</h2>
            <p>Zachód nadal wspiera Kijów politycznie i wojskowo, jednak w wielu państwach rośnie sceptycyzm wobec przedłużającego się konfliktu. Pojawiają się pytania, czy pomoc finansowa i militarna będzie utrzymywana na dotychczasowym poziomie.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">📉 Skutki przedłużającej się wojny</h2>
            <p>Przedłużające się działania zbrojne wpływają na sytuację gospodarczą i polityczną w Europie – od rosnących wydatków na obronność po presję migracyjną i destabilizację rynków energii.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Choć wojna trwa już ponad trzy lata, końca nie widać. Nasilają się głosy o konieczności szukania scenariuszy politycznych, które mogłyby doprowadzić do zakończenia konfliktu, jednocześnie nie pozwalając Rosji na uzyskanie korzyści z agresji.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/coraz-wieksze-zmeczenie-wojna-na-ukrainie" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlecorazwiekszezmeczeniewojnanaukrainie;
