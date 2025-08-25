import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articlelauradahlmeierniezyjetragicznyfinawyprawywkarakorum() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"🏔️ Laura Dahlmeier nie żyje – tragiczny finał wyprawy w Karakorum"}
    </h1>
  </header>

        <Image
          src={"/laura-dahlmeier-nie-zyje-tragiczny-fina-wyprawy-w-karakorum.webp"}
          alt={"🏔️ Laura Dahlmeier nie żyje – tragiczny finał wyprawy w Karakorum"}
width={311}
  height={163}          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Martin Rulsch / Wikimedia Commons (CC BY-SA 4.0)</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚠️ Śmiertelny wypadek w górach Karakorum</h2>
            <p>Laura Dahlmeier, legendarna niemiecka biatlonistka, zginęła w wypadku wspinaczkowym w Pakistanie. Do tragedii doszło 28 lipca na wysokości ponad 5 700 metrów podczas ataku szczytowego na Laila Peak. Sportowczyni została uderzona przez spadające skały.</p>

            <h2 className="text-xl font-semibold">🚁 Ratunek okazał się niemożliwy</h2>
            <p>Akcja ratownicza trwała trzy dni – prowadzona była z udziałem lokalnych służb, helikopterów i zespołów międzynarodowych. Niestety trudne warunki pogodowe, niska widoczność i niebezpieczny teren uniemożliwiły dotarcie do poszkodowanej na czas.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🧗‍♀️ Nie była sama</h2>
            <p>W wyprawie towarzyszyła jej inna alpinistka, która natychmiast powiadomiła służby. Choć miała kontakt wzrokowy z Laurą po wypadku, nie była w stanie zejść na miejsce zdarzenia z powodu ryzyka dalszych obrywów. Użycie sprzętu tlenowego nie pomogło.</p>

            <h2 className="text-xl font-semibold">🕊️ Jej ciało zostanie w górach</h2>
            <p>Rodzina oraz zespół ratowniczy zdecydowali o pozostawieniu ciała Laury na miejscu tragedii – zgodnie z jej wcześniejszą wolą. Uznano, że próba zniesienia zwłok byłaby zbyt ryzykowna i mogłaby zakończyć się kolejną tragedią.</p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/laura-dahlmeier-nie-zyje-tragiczny-fina-wyprawy-w-karakorum" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlelauradahlmeierniezyjetragicznyfinawyprawywkarakorum;
