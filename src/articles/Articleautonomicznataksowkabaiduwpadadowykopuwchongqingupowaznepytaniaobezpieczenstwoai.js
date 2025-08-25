import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articleautonomicznataksowkabaiduwpadadowykopuwchongqingupowaznepytaniaobezpieczenstwoai() {
  const [mounted, setMounted] = useState(false);
  const tweetWrapRef = useRef(null);
  const tweetRenderedRef = useRef(false);
  const TWEET_ID = "1953356302165344294";

  useEffect(() => setMounted(true), []);

  // Bezpieczne doładowanie skryptu X
  const ensureTwitterScript = useCallback(() => {
    if (typeof window === "undefined") return;
    const present = !!document.querySelector('script[src^="https://platform.twitter.com/widgets.js"]');
    if (!present) {
      const s = document.createElement("script");
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      s.dataset.purpose = "pv-twitter-widgets";
      document.body.appendChild(s);
    }
  }, []);

  // Próba renderu z pollingiem (czeka na window.twttr.widgets.createTweet)
  const renderTweet = useCallback(() => {
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
  }, [mounted, ensureTwitterScript]);

  // Start renderu po montażu
  useEffect(() => {
    if (!mounted) return;
    renderTweet();
  }, [mounted, renderTweet]);

  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"🛑 Autonomiczna taksówka Baidu wpada do wykopu w Chongqingu – poważne pytania o bezpieczeństwo AI"}
    </h1>
  </header>

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
