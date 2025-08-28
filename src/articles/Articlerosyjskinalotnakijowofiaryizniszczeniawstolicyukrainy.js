import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlerosyjskinalotnakijowofiaryizniszczeniawstolicyukrainy() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"💥 Rosyjski nalot na Kijów – ofiary i zniszczenia w stolicy Ukrainy"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-28T10:00:00.000Z"}>{"2025-08-28"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/rosyjski-nalot-na-kijow-ofiary-i-zniszczenia-w-stolicy-ukrainy.webp"}
    alt={"💥 Rosyjski nalot na Kijów – ofiary i zniszczenia w stolicy Ukrainy"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Operacja antyterrorystyczna we wschodniej Ukrainie / Wikimedia Commons / CC-BY-SA-2.0, zdjęcie ilustracyjne</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🚨 Atak na stolicę Ukrainy</h2>
            <p>Minionej nocy Rosja przeprowadziła zmasowany nalot na Kijów. Według ukraińskich władz zginęły co najmniej cztery osoby, a 24 zostały ranne. Rakiety uderzyły w dzielnice mieszkalne, powodując poważne zniszczenia i chaos wśród mieszkańców.</p>

            <h2 className="text-xl font-semibold">🏚️ Uszkodzone budynki cywilne</h2>
            <p>W wyniku ostrzału ucierpiało wiele obiektów cywilnych. Szczególnie dramatyczny jest fakt, że uszkodzone zostało przedszkole, a kilkanaście rodzin straciło dach nad głową. Służby ratunkowe przez całą noc prowadziły akcje poszukiwawcze i udzielały pomocy poszkodowanym.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">⚔️ Postępy rosyjskich wojsk</h2>
            <p>Równolegle rosyjskie oddziały wkroczyły do wiosek Novoheorhiivka i Zaporizke w regionie Dniepropietrowska. Walki o kontrolę nad tym obszarem nasilają się, a lokalna ludność zmuszona jest do ewakuacji.</p>

            <h2 className="text-xl font-semibold">🌍 Reakcje międzynarodowe</h2>
            <p>Atak na stolicę Ukrainy wywołał kolejną falę potępienia ze strony państw zachodnich. Eksperci podkreślają, że eskalacja działań militarnych zwiększa ryzyko dalszej destabilizacji regionu i oddala perspektywę pokoju.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/rosyjski-nalot-na-kijow-ofiary-i-zniszczenia-w-stolicy-ukrainy" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlerosyjskinalotnakijowofiaryizniszczeniawstolicyukrainy;
