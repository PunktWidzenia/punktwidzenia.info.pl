import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articletragicznywypadekwlizboniezderzenietramwajuzsamochodemsaofiarysmiertelne() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🚋 Tragiczny wypadek w Lizbonie – zderzenie tramwaju z samochodem, są ofiary śmiertelne"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-04T10:00:00.000Z"}>{"2025-09-04"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/tragiczny-wypadek-w-lizbonie-zderzenie-tramwaju-z-samochodem-sa-ofiary-smiertelne.webp"}
    alt={"🚋 Tragiczny wypadek w Lizbonie – zderzenie tramwaju z samochodem, są ofiary śmiertelne"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚠️ Katastrofa w sercu miasta</h2>
            <p>Do tragedii doszło wczesnym rankiem w centrum Lizbony, w rejonie Bairro Alto — jednej z najbardziej turystycznych i zatłoczonych dzielnic miasta. Tramwaj linii turystycznej zderzył się z prywatnym samochodem osobowym, w wyniku czego pojazd wykoleił się i uderzył w ścianę pobliskiego budynku.<br /><br />Według informacji podanych przez portugalskie służby ratunkowe:<br /><br />• zginęło co najmniej 15 osób,<br />• kilkanaście osób zostało rannych, w tym 5 ciężko,<br />• część pasażerów była uwięziona pod zgniecionym wagonem.</p>

<div className="w-full max-w-sm mx-auto" style={{ position: 'relative', paddingTop: '177.77%' }}>
  <iframe
    src="https://www.youtube.com/embed/OkvyiaTbUBw"
    title="Tragedia w Lizbonie (Short)"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    className="rounded"
  />
</div>
            <h2 className="text-xl font-semibold">🕵️‍♀️ Co wiadomo o przyczynach?</h2>
            <p>Na razie wiadomo, że:<br />• samochód osobowy zjechał na torowisko, najprawdopodobniej po wykonaniu nieprawidłowego manewru,<br />• tramwaj jechał z górki — linia ta znana jest z trudnych warunków jazdy i ostrych zakrętów,<br />• motorniczy nie miał szans na zatrzymanie pojazdu w porę.<br /><br />Śledztwo prowadzi policja oraz inspektorat transportu publicznego. Nagrania z miejskiego monitoringu są analizowane.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🇵🇹 Symbol Lizbony w żałobie</h2>
            <p>Zabytkowe żółte tramwaje to jeden z najbardziej charakterystycznych symboli Lizbony. Rocznie przewożą setki tysięcy turystów, a ich obecność na wąskich ulicach miasta tworzy niepowtarzalny klimat portugalskiej stolicy.<br /><br />Tragedia wywołała ogromne poruszenie:<br />• flagi miejskie zostały opuszczone do połowy,<br />• burmistrz ogłosił jednodniową żałobę,<br />• przewoźnik zawiesił kursy tramwajów na całej linii do odwołania.</p>

            <h2 className="text-xl font-semibold">🧭 Czy można było tego uniknąć?</h2>
            <p>To nie pierwszy raz, gdy ruch samochodowy krzyżuje się z torowiskami w historycznych dzielnicach miasta. Od lat mówi się o:<br />• słabym oznakowaniu torowisk,<br />• braku barier ochronnych w newralgicznych punktach,<br />• problemach z organizacją ruchu w strefach turystycznych.<br /><br />Być może ta tragedia stanie się punktem zwrotnym dla zmian w infrastrukturze Lizbony.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🕯️ Współczucie i pytania</h2>
            <p>Wypadki się zdarzają. Ale kiedy dochodzi do tragedii na linii łączącej życie codzienne z turystycznym sercem miasta — wstrząs odczuwają wszyscy.<br /><br />Portugalia pogrążyła się w żałobie. A my zadajemy pytania — nie tylko „jak”, ale przede wszystkim „dlaczego znów za późno?”</p>
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/tragiczny-wypadek-w-lizbonie-zderzenie-tramwaju-z-samochodem-sa-ofiary-smiertelne" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articletragicznywypadekwlizboniezderzenietramwajuzsamochodemsaofiarysmiertelne;
