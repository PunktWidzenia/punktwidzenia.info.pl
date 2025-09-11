import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlewroclawwprowadzanocnaprohibicjealkoholtylkodo2200() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🛑 Wrocław wprowadza nocną prohibicję – alkohol tylko do 22:00"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-11T10:00:00.000Z"}>{"2025-09-11"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/wroclaw-wprowadza-nocna-prohibicje-alkohol-tylko-do-2200.webp"}
    alt={"🛑 Wrocław wprowadza nocną prohibicję – alkohol tylko do 22:00"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🏙️ Zakaz obejmie całe miasto</h2>
            <p>Rada Miejska Wrocławia przegłosowała uchwałę, zgodnie z którą od 22:00 do 6:00 rano nie będzie można kupić alkoholu w sklepach ani na stacjach benzynowych. Dotąd ograniczenia dotyczyły tylko części osiedli – teraz obejmą cały Wrocław.</p>

            <h2 className="text-xl font-semibold">📉 Efekty wcześniejszych ograniczeń</h2>
            <p>W dzielnicach, gdzie prohibicja obowiązywała od kilku lat, liczba interwencji policji spadła o około 7%, a straży miejskiej o 15%. Radni podkreślają, że to dowód na skuteczność podobnych regulacji w poprawie bezpieczeństwa i porządku publicznego.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">⚖️ Zwolennicy i przeciwnicy</h2>
            <p>Zwolennicy wskazują, że nocna prohibicja pomoże zmniejszyć liczbę zakłóceń ciszy nocnej i poprawi komfort mieszkańców. Krytycy natomiast twierdzą, że to ograniczanie wolności gospodarczej i że osoby chcące kupić alkohol późną porą znajdą sposób, aby to zrobić.</p>

            <h2 className="text-xl font-semibold">🔮 Co oznacza prohibicja dla Wrocławia?</h2>
            <p>Nowe przepisy uderzą przede wszystkim w sklepy całodobowe i stacje paliw, które dotąd generowały duże zyski ze sprzedaży nocnej. Lokale gastronomiczne będą mogły serwować alkohol na miejscu, ale nie sprzedadzą go „na wynos”. Zakaz zacznie obowiązywać 14 dni po publikacji w Dzienniku Urzędowym Województwa Dolnośląskiego.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/wroclaw-wprowadza-nocna-prohibicje-alkohol-tylko-do-2200" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlewroclawwprowadzanocnaprohibicjealkoholtylkodo2200;
