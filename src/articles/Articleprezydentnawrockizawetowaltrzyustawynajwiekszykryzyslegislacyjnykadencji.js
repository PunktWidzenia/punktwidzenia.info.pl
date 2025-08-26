import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articleprezydentnawrockizawetowaltrzyustawynajwiekszykryzyslegislacyjnykadencji() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🇵🇱 Prezydent Nawrocki zawetował trzy ustawy – największy kryzys legislacyjny kadencji"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-26T10:00:00.000Z"}>{"2025-08-26"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/prezydent-nawrocki-zawetowal-trzy-ustawy-najwiekszy-kryzys-legislacyjny-kadencji.webp"}
    alt={"🇵🇱 Prezydent Nawrocki zawetował trzy ustawy – największy kryzys legislacyjny kadencji"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Mikołaj Bujak / Kancelaria Prezydenta RP / prezydent.pl</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚖️ Trzy weta jednego dnia</h2>
            <p>Prezydent Karol Nawrocki zdecydował się zawetować trzy ustawy uchwalone przez parlament.<br />– Nowelizacja ustawy o pomocy obywatelom Ukrainy<br />– Zmiany w Ordynacji podatkowej<br />– Zmiany w Kodeksie karnym skarbowym<br />To pierwszy przypadek w tej kadencji, gdy głowa państwa blokuje kilka projektów jednocześnie.</p>

            <h2 className="text-xl font-semibold">🏛️ Zapowiedź własnego projektu</h2>
            <p>Kancelaria Prezydenta poinformowała, że w najbliższych dniach zostanie przedstawiona alternatywna propozycja rozwiązań dotyczących świadczeń dla Ukraińców przebywających w Polsce. Według zapowiedzi, projekt ma „uwzględniać interes państwa i realne możliwości budżetu”.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">💬 Reakcje polityczne i gospodarcze</h2>
            <p>Decyzja prezydenta wywołała ostre komentarze wśród przedstawicieli rządu i opozycji. Część polityków ostrzega, że weto może utrudnić funkcjonowanie systemu wsparcia dla uchodźców wojennych. Z kolei przedstawiciele biznesu zwracają uwagę na możliwe konsekwencje podatkowe i niepewność prawną.</p>

            <h2 className="text-xl font-semibold">🌍 Kontekst międzynarodowy</h2>
            <p>Krok prezydenta ma również wymiar międzynarodowy. Polska odgrywa istotną rolę w systemie wsparcia dla Ukrainy, a każda zmiana w krajowych przepisach natychmiast odbija się szerokim echem w relacjach z Kijowem i partnerami z Unii Europejskiej.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/prezydent-nawrocki-zawetowal-trzy-ustawy-najwiekszy-kryzys-legislacyjny-kadencji" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleprezydentnawrockizawetowaltrzyustawynajwiekszykryzyslegislacyjnykadencji;
