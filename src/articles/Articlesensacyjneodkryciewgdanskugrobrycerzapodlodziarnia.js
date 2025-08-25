import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlesensacyjneodkryciewgdanskugrobrycerzapodlodziarnia() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"⚔️ Sensacyjne odkrycie w Gdańsku – grób rycerza pod lodziarnią"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-22T10:00:00.000Z"}>{"2025-08-22"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/sensacyjne-odkrycie-w-gdansku-grob-rycerza-pod-lodziarnia.webp"}
    alt={"⚔️ Sensacyjne odkrycie w Gdańsku – grób rycerza pod lodziarnią"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Pomorski Wojewódzki Konserwator Zabytków / Facebook</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🏰 Niezwykłe znalezisko archeologów</h2>
            <p>Podczas prac archeologicznych w Gdańsku, pod podłogą dawnej kamienicy mieszczącej obecnie lodziarnię, natrafiono na grób średniowiecznego rycerza. To jedno z najbardziej spektakularnych odkryć archeologicznych w mieście od lat.</p>

            <h2 className="text-xl font-semibold">⚔️ Rycerz z mieczem i tarczą</h2>
            <p>Płyta nagrobna została wykonana z gotlandzkiego wapienia i przedstawia postać rycerza w pełnym uzbrojeniu – z mieczem i tarczą. Tak szczegółowe epitafia były w Polsce rzadkością, dlatego znalezisko ma wyjątkową wartość historyczną.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🔬 Badania i dokumentacja</h2>
            <p>Specjaliści wykonują obecnie cyfrową dokumentację 3D oraz analizy chemiczne i genetyczne. Celem jest nie tylko ochrona zabytku, ale także próba rekonstrukcji wyglądu pochowanej osoby oraz poznanie jej roli w średniowiecznym Gdańsku.</p>

            <h2 className="text-xl font-semibold">📜 Znaczenie dla historii</h2>
            <p>Odkrycie rzuca nowe światło na życie elit miasta w XIII–XIV wieku. Archeolodzy podkreślają, że to nie tylko pamiątka artystyczna, ale także ważne źródło wiedzy o dawnych mieszkańcach Gdańska.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/sensacyjne-odkrycie-w-gdansku-grob-rycerza-pod-lodziarnia" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlesensacyjneodkryciewgdanskugrobrycerzapodlodziarnia;
