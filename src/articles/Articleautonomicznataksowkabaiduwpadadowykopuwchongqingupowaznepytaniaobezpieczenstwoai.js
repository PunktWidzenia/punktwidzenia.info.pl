import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articleautonomicznataksowkabaiduwpadadowykopuwchongqingupowaznepytaniaobezpieczenstwoai() {
  const [mounted, setMounted] = useState(false);
  const tweetWrapRef = useRef(null);
  const tweetRenderedRef = useRef(false);
  const TWEET_ID = "1953356302165344294";

  useEffect(() => setMounted(true), []);

  // Bezpieczne doładowanie skryptu X, jeśli z jakiegoś powodu Next/Script nie zadziała
  const ensureTwitterScript = () => {
    if (typeof window === "undefined") return;
    const present = !!document.querySelector('script[src^="https://platform.twitter.com/widgets.js"]');
    if (!present) {
      const s = document.createElement("script");
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      s.dataset.purpose = "pv-twitter-widgets";
      document.body.appendChild(s);
    }
  };

  // Próba renderu z pollingiem (czeka na window.twttr.widgets.createTweet)
  const renderTweet = () => {
    if (!mounted || !tweetWrapRef.current || tweetRenderedRef.current) return;

    let elapsed = 0;
    const step = 200; // ms
    const max = 10000; // 10 s

    const tryOnce = () => {
      const tw = typeof window !== "undefined" ? window.twttr : undefined;
      if (tw?.widgets?.createTweet) {
        // wyczyść i renderuj
        tweetWrapRef.current.innerHTML = "";
        tw.widgets
          .createTweet(TWEET_ID, tweetWrapRef.current, {
            theme: "dark",
            dnt: true,
            align: "center",
            conversation: "none",
          })
          .then(() => {
            tweetRenderedRef.current = true;
          })
          .catch((e) => {
            console.error("[X embed] createTweet error:", e);
          });
        return;
      }
      elapsed += step;
      if (elapsed >= max) {
        console.warn("[X embed] widgets.js nie gotowy po 10s.");
        return;
      }
      setTimeout(tryOnce, step);
    };

    ensureTwitterScript();
    tryOnce();
  };

  // Start renderu po montażu
  useEffect(() => {
    if (!mounted) return;
    renderTweet();
  }, [mounted]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "🛑 Autonomiczna taksówka Baidu wpada do wykopu w Chongqingu – poważne pytania o bezpieczeństwo AI",
    image: [
      "https://punktwidzenia.info.pl/autonomiczna-taksowka-baidu-wpada-do-wykopu-w-chongqingu-powazne-pytania-o-bezpieczenstwo-ai.webp",
    ],
    datePublished: "2025-08-12",
    author: { "@type": "Organization", name: "Punkt Widzenia" },
    publisher: {
      "@type": "Organization",
      name: "Punkt Widzenia",
      logo: {
        "@type": "ImageObject",
        url: "https://punktwidzenia.info.pl/logo.png",
      },
    },
    description:
      "Awaria autonomicznej taksówki Baidu z pasażerką na pokładzie wywołała debatę o bezpieczeństwie robotaxi i konieczności zaostrzenia przepisów w Chinach.",
  };

  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <Head>
        <title>🛑 Autonomiczna taksówka Baidu wpada do wykopu w Chongqingu – poważne pytania o bezpieczeństwo AI</title>
        <meta name="description" content="Awaria autonomicznej taksówki Baidu z pasażerką na pokładzie wywołała debatę o bezpieczeństwie robotaxi i konieczności zaostrzenia przepisów w Chinach." />
        <meta property="og:title" content="🛑 Autonomiczna taksówka Baidu wpada do wykopu w Chongqingu – poważne pytania o bezpieczeństwo AI" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Awaria autonomicznej taksówki Baidu z pasażerką na pokładzie wywołała debatę o bezpieczeństwie robotaxi i konieczności zaostrzenia przepisów w Chinach." />
        <meta property="og:image" content="https://punktwidzenia.info.pl/autonomiczna-taksowka-baidu-wpada-do-wykopu-w-chongqingu-powazne-pytania-o-bezpieczenstwo-ai.webp" />
        <meta property="og:url" content="https://punktwidzenia.info.pl/autonomiczna-taksowka-baidu-wpada-do-wykopu-w-chongqingu-powazne-pytania-o-bezpieczenstwo-ai" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://punktwidzenia.info.pl/autonomiczna-taksowka-baidu-wpada-do-wykopu-w-chongqingu-powazne-pytania-o-bezpieczenstwo-ai" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* Oficjalny skrypt X – jeśli się załaduje, odpal render */}
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={renderTweet}
      />

      <article className="space-y-6">
        <NextImage
          src="/autonomiczna-taksowka-baidu-wpada-do-wykopu-w-chongqingu-powazne-pytania-o-bezpieczenstwo-ai.webp"
          alt="🛑 Autonomiczna taksówka Baidu wpada do wykopu w Chongqingu – poważne pytania o bezpieczeństwo AI"
          width={311}
          height={163}
          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: YouTube / Baidu Inc.</p>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">🚧 Incydent, który wstrząsnął opinią publiczną</h2>
          <p>
            Autonomiczna taksówka Baidu, działająca w ramach usługi Apollo Go, zignorowała oznakowanie i wjechała do ogrodzonego wykopu.
            Pasażerka wyszła z wypadku bez obrażeń, ewakuowana przez świadków przy użyciu drabiny. Nagranie zdarzenia szybko obiegło chińskie
            media społecznościowe, wywołując falę krytyki pod adresem producenta.
          </p>

          {/* Placeholder + kontener na tweeta (min-wys. żeby nie „znikał”) */}
          <div className="flex justify-center">
            <div ref={tweetWrapRef} style={{ minHeight: 420, width: "100%", maxWidth: 550 }} />
            <noscript>
              <a href="https://x.com/zhongwen2005/status/1953356302165344294" rel="nofollow noopener" target="_blank">
                Zobacz materiał na X
              </a>
            </noscript>
          </div>

          <h2 className="text-xl font-semibold">⚙️ Technologia kontra rzeczywistość</h2>
          <p>
            Choć Baidu deklaruje, że ich systemy potrafią wykrywać przeszkody w różnych warunkach, eksperci zwracają uwagę na ograniczenia algorytmów
            w radzeniu sobie z nietypowymi sytuacjami drogowymi. Pojawiły się pytania, czy problem leżał w czujnikach, mapach, czy w oprogramowaniu
            odpowiedzialnym za podejmowanie decyzji.
          </p>
          <AdSlot />

          <h2 className="text-xl font-semibold">📜 Reakcja władz i nowe regulacje</h2>
          <p>
            Chińskie władze zapowiedziały zaostrzenie przepisów dotyczących testowania i eksploatacji pojazdów autonomicznych, w tym obowiązkową obecność
            przeszkolonego operatora w kabinie. Regulatorzy argumentują, że bez dodatkowych zabezpieczeń trudno będzie zdobyć zaufanie społeczne dla tej technologii.
          </p>

          <h2 className="text-xl font-semibold">💬 Społeczne zaufanie na zakręcie</h2>
          <p>
            Incydent pogłębił sceptycyzm części chińskich kierowców i pasażerów wobec robotaxi. W komentarzach powtarza się pytanie: czy pojedynczy błąd maszyny
            powinien decydować o wstrzymaniu rozwoju całej branży, czy raczej stać się impulsem do szybszego doskonalenia systemów?
          </p>
          <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/autonomiczna-taksowka-baidu-wpada-do-wykopu-w-chongqingu-powazne-pytania-o-bezpieczenstwo-ai" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleautonomicznataksowkabaiduwpadadowykopuwchongqingupowaznepytaniaobezpieczenstwoai;
