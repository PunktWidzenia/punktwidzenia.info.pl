import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articleorlensprzedajepolskapresskonieceksperymentuzpanstwowymwlascicielemmediow() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"📰 Orlen sprzedaje Polska Press – koniec eksperymentu z państwowym właścicielem mediów?"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-03T10:00:00.000Z"}>{"2025-09-03"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/orlen-sprzedaje-polska-press-koniec-eksperymentu-z-panstwowym-wlascicielem-mediow.webp"}
    alt={"📰 Orlen sprzedaje Polska Press – koniec eksperymentu z państwowym właścicielem mediów?"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Adam Kliczek / memoriesstay.com  / CC-BY-SA 3.0 PL</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🔄 Zmiana kursu: Orlen wycofuje się z rynku medialnego</h2>
            <p>Według potwierdzonych doniesień, Orlen planuje sprzedaż Polska Press, jednej z największych grup medialnych w Polsce, zarządzającej ponad 20 dziennikami regionalnymi i kilkudziesięcioma portalami internetowymi. To koniec rozdziału, który rozpoczął się w 2020 r., gdy kontrolowany przez państwo koncern paliwowy przejął media lokalne od niemieckiego wydawcy.</p>

            <h2 className="text-xl font-semibold">🧭 Polityczny projekt czy rynkowa inwestycja?</h2>
            <p>Przejęcie Polska Press przez Orlen było od początku mocno kontrowersyjne. Krytycy mówili o „pełzającym zawłaszczaniu mediów przez władzę”, a sądy przyznały rację Rzecznikowi Praw Obywatelskich, że transakcja była wątpliwa z punktu widzenia pluralizmu mediów.<br /><br />Jednak mimo decyzji sądów, Orlen zachował kontrolę nad grupą aż do dziś. Dopiero nowy zarząd pod rządami premiera Tuska deklaruje gotowość do „odpolitycznienia” mediów publicznych i powiązanych z państwem.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">💸 Co dalej z Polska Press?</h2>
            <p>• Orlen ogłosił rozpoczęcie formalnych przygotowań do sprzedaży, ale na razie nie podaje potencjalnych kupców.<br /><br />• Możliwe kierunki:<br />  • prywatni inwestorzy medialni (np. Agora, Burda Media Polska)<br />  • nowi gracze niezależni z sektora cyfrowego<br />  • fundusze europejskie lub samorządowe inicjatywy<br /><br />Sprzedaż oznacza również pytanie o przyszłość dziennikarzy, lokalnych redakcji i redaktorów naczelnych – wielu z nich zostało wymienionych po przejęciu przez Orlen.</p>

            <h2 className="text-xl font-semibold">📉 Dlaczego to ma znaczenie?</h2>
            <p>Polska Press to nie tylko media. To wpływ na opinię publiczną w regionach, gdzie dzienniki lokalne często są głównym źródłem informacji. Ich linia redakcyjna po 2020 r. była jednoznacznie zbliżona do rządowej narracji. Teraz — po możliwej sprzedaży — może nastąpić powrót do niezależności. Albo zmiana właściciela... ale nie tonu.<br /><br />Sprzedaż Polska Press to więcej niż transakcja. To test na to, czy Polska wraca do równowagi w mediach, czy po prostu zmienia sterującego.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/orlen-sprzedaje-polska-press-koniec-eksperymentu-z-panstwowym-wlascicielem-mediow" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleorlensprzedajepolskapresskonieceksperymentuzpanstwowymwlascicielemmediow;
