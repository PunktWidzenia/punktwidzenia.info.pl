import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Article_kosiniakkamyszzelenskipowiniendolaczycdoszczytutrumpputin() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"📰 Kosiniak-Kamysz: Zełenski powinien dołączyć do szczytu Trump–Putin"}
    </h1>
  </header>

        <NextImage
          src={"/kosiniak-kamysz-zelenski-powinien-dolaczyc-do-szczytu-trumpputin.webp"}
          alt={"📰 Kosiniak-Kamysz: Zełenski powinien dołączyć do szczytu Trump–Putin"}
          width={311}
          height={163}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Kancelaria Prezesa Rady Ministrów / gov.pl / CC BY 3.0 PL</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🤝 Propozycja udziału Ukrainy w rozmowach</h2>
            <p>Wiceminister obrony narodowej podkreślił, że kluczowe decyzje dotyczące bezpieczeństwa Europy nie mogą być podejmowane bez udziału państwa, którego one bezpośrednio dotyczą. Udział Zełenskiego miałby zagwarantować, że interesy Ukrainy zostaną uwzględnione w ewentualnych ustaleniach między USA a Rosją.</p>

            <h2 className="text-xl font-semibold">🌍 Szczyt o znaczeniu globalnym</h2>
            <p>Spotkanie Trump–Putin na Alasce budzi ogromne emocje w środowiskach politycznych na całym świecie. Analitycy przewidują, że rozmowy mogą dotyczyć nie tylko wojny w Ukrainie, ale także kwestii zbrojeń nuklearnych i nowych układów bezpieczeństwa.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🇵🇱 Polska w roli adwokata regionu</h2>
            <p>Deklaracja Kosiniaka-Kamysza wpisuje się w dotychczasową linię polskiej polityki, stawiającej na aktywną obronę interesów wschodniej flanki NATO. Polska od miesięcy zabiega o to, by żadne negocjacje z Rosją nie odbywały się „ponad głowami” państw regionu.</p>

            <h2 className="text-xl font-semibold">🔮 Niepewność przed spotkaniem</h2>
            <p>Na razie nie wiadomo, czy pomysł zaproszenia Zełenskiego znajdzie poparcie wśród organizatorów szczytu. Oficjalne listy gości nie zostały jeszcze opublikowane, a dyplomaci przestrzegają, że dołączenie Ukrainy mogłoby skomplikować planowane rozmowy.</p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/kosiniak-kamysz-zelenski-powinien-dolaczyc-do-szczytu-trumpputin" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Article_kosiniakkamyszzelenskipowiniendolaczycdoszczytutrumpputin;
