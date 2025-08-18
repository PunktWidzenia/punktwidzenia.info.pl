import Head from "next/head";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articleprezydentpodnosiwiekemerytalnypodpiszozony() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <Head>
        <title>💥 Prezydent podnosi wiek emerytalny! Podpis złożony</title>
        <meta name="description" content="Andrzej Duda podpisał ustawę zmieniającą górną granicę wieku emerytalnego. Nowe przepisy wzbudzają kontrowersje." />
        <meta property="og:title" content="💥 Prezydent podnosi wiek emerytalny! Podpis złożony" />
        <meta property="og:description" content="Andrzej Duda podpisał ustawę zmieniającą górną granicę wieku emerytalnego. Nowe przepisy wzbudzają kontrowersje." />
        <meta property="og:image" content="https://punktwidzenia.info.pl/prezydent-podnosi-wiek-emerytalny-podpis-zozony.webp" />
        <meta property="og:url" content="https://punktwidzenia.info.pl/prezydent-podnosi-wiek-emerytalny-podpis-zozony" />
        <script type="application/ld+json">{
          JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: '💥 Prezydent podnosi wiek emerytalny! Podpis złożony',
            image: ['https://punktwidzenia.info.pl/prezydent-podnosi-wiek-emerytalny-podpis-zozony.webp'],
            datePublished: '2025-07-28',
            author: { '@type': 'Organization', name: 'Punkt Widzenia' },
            publisher: {
              '@type': 'Organization',
              name: 'Punkt Widzenia',
              logo: { '@type': 'ImageObject', url: 'https://punktwidzenia.info.pl/logo.png' }
            },
            description: 'Andrzej Duda podpisał ustawę zmieniającą górną granicę wieku emerytalnego. Nowe przepisy wzbudzają kontrowersje.'
          })
        }</script>
      </Head>

      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"💥 Prezydent podnosi wiek emerytalny! Podpis złożony"}
    </h1>
  </header>

        <Image
          src={"/prezydent-podnosi-wiek-emerytalny-podpis-zozony.webp"}
          alt={"💥 Prezydent podnosi wiek emerytalny! Podpis złożony"}
width={311}
  height={163}          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Wikimedia Commons – Kancelaria Sejmu,CC BY 2.0</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">📜 Zmiana podpisana przez prezydenta</h2>
            <p>Prezydent Andrzej Duda 25 lipca 2025 roku podpisał ustawę, która podnosi wiek emerytalny z 65 do 70 lat – ale tylko dla określonej grupy zawodowej. Zmiany obejmują komorników sądowych oraz asesorów komorniczych. To kolejna nowelizacja przepisów dotyczących zawodów prawniczych, która – zdaniem rządu – ma charakter porządkujący i wyrównujący. Ustawa została już opublikowana i wchodzi w życie w sierpniu.<br /></p>

            <h2 className="text-xl font-semibold">⚖️ Kogo dotyczy podwyżka wieku?</h2>
            <p>Dotychczas komornicy oraz asesorzy byli ustawowo odwoływani ze stanowisk po ukończeniu 65. roku życia – niezależnie od stanu zdrowia czy chęci dalszego pełnienia obowiązków. Po wejściu w życie nowych przepisów górna granica wieku zostaje podniesiona do 70 lat. Dodatkowo osoby, które zostały wcześniej odwołane ze względu na przekroczenie wieku 65 lat, a nie ukończyły jeszcze 70 – będą mogły ubiegać się o powrót do zawodu.<br /></p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🧾 Powody nowelizacji</h2>
            <p>Ministerstwo Sprawiedliwości wskazuje, że inne zawody prawnicze – jak sędziowie, prokuratorzy czy notariusze – mogą pracować do 70. roku życia. Komornicy byli jedyną grupą z limitem 65 lat. Nowelizacja ma zlikwidować tę nierówność i ujednolicić regulacje. „To działanie mające na celu zapewnienie ciągłości, efektywności i stabilności pracy kancelarii komorniczych, w których wieloletnie doświadczenie jest kluczowe” – podkreślono w komunikacie resortu.<br /></p>

            <h2 className="text-xl font-semibold">💬 Społeczna reakcja i polityczny wydźwięk</h2>
            <p>Choć zmiana nie dotyczy ogólnego wieku emerytalnego, w sieci pojawiły się głosy zaniepokojenia. Komentatorzy obawiają się, że to początek testowania gruntu pod przyszłe zmiany. Przypomniano też, że prezydent Duda wcześniej deklarował sprzeciw wobec ogólnego podnoszenia wieku emerytalnego. W opinii publicznej pojawiły się pytania o możliwe długofalowe konsekwencje tego kroku.<br /></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/prezydent-podnosi-wiek-emerytalny-podpis-zozony" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleprezydentpodnosiwiekemerytalnypodpiszozony;
