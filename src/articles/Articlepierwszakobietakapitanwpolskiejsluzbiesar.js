import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articlepierwszakobietakapitanwpolskiejsluzbiesar() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🚤 Pierwsza kobieta kapitan w polskiej służbie SAR"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-23T10:00:00.000Z"}>{"2025-08-23"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/pierwsza-kobieta-kapitan-w-polskiej-sluzbie-sar.webp"}
    alt={"🚤 Pierwsza kobieta kapitan w polskiej służbie SAR"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: X / @KluskaSebastian</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚓ Historyczny awans w SAR</h2>
            <p>Paulina Pacuła objęła dowództwo ratowniczego statku „Sztorm” stacjonującego na Półwyspie Helskim. To pierwszy przypadek w historii, gdy funkcję kapitana w polskiej służbie ratownictwa morskiego pełni kobieta.</p>

            <h2 className="text-xl font-semibold">👩‍✈️ Symbol przełamywania barier</h2>
            <p>Awans Pacuły jest nie tylko zawodowym wyróżnieniem, ale także przełomem dla równouprawnienia w służbach mundurowych. Pokazuje, że kobiety mogą pełnić kluczowe role w dziedzinach tradycyjnie zdominowanych przez mężczyzn.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌊 Wyzwania ratownictwa morskiego</h2>
            <p>Morska Służba Poszukiwania i Ratownictwa (SAR) odpowiada za bezpieczeństwo w polskich obszarach morskich. Kapitan dowodzący jednostką ma decydujące znaczenie w akcjach ratunkowych na Bałtyku, często prowadzonych w trudnych i niebezpiecznych warunkach.</p>

            <h2 className="text-xl font-semibold">🌍 Inspiracja dla kolejnych pokoleń</h2>
            <p>Historia Pauliny Pacuły ma szansę stać się inspiracją dla młodych kobiet zainteresowanych służbą publiczną. To także sygnał, że polskie służby otwierają się na nowe wzorce i zmiany w strukturach kadrowych.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/pierwsza-kobieta-kapitan-w-polskiej-sluzbie-sar" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlepierwszakobietakapitanwpolskiejsluzbiesar;
