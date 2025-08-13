import "@/styles/globals.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";
import ScrollToTop from "@/components/ScrollToTop";
import useDarkMode from "@/hooks/useDarkMode";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function App({ Component, pageProps }) {
  const { isDarkMode, toggleDarkMode, hasMounted } = useDarkMode();
  const router = useRouter();
  const asPath = router.asPath;

  const GdprConsentBanner = dynamic(() => import("@/components/GdprConsentBanner"), { ssr: false });
  const AnalyticsAndAdsLoader = dynamic(() => import("@/components/AnalyticsAndAdsLoader"), { ssr: false });

  const onLogoClick = async (e) => {
    e.preventDefault();
    if (router.pathname !== "/") {
      await router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Punkt Widzenia – Newsy & Ciekawostki</title>
        <meta
          name="description"
          content="Najciekawsze wiadomości, ciekawostki i wydarzenia z Polski – sprawdź, co dziś zaskoczyło internautów!"
        />
      </Head>

      {!asPath.startsWith("/polityka-prywatnosci") && <GdprConsentBanner />}
      <AnalyticsAndAdsLoader />
      <ScrollToTop />

      {/* opcjonalnie: zapobiegaj miganiu motywu */}
      <div
        className="bg-white text-black dark:bg-black dark:text-white min-h-screen font-sans px-4 lg:px-0"
        suppressHydrationWarning
        style={!hasMounted ? { visibility: "hidden" } : undefined}
      >
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-1 rounded">
          Przejdź do treści
        </a>

        <div className="max-w-6xl mx-auto">
          <header className="px-6 py-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
<Link href="/" onClick={onLogoClick} aria-label="Strona główna – Punkt Widzenia">
  <Image
    src="/logo_header_56x56.webp"
    alt="Punkt Widzenia"
    width={56}
    height={56}
    priority={router.pathname === "/"}
    sizes="56px"
  />
</Link>
<Link href="/" onClick={onLogoClick} className="text-2xl font-bold hover:no-underline">
  PUNKT <span className="text-red-500 font-bold">WIDZENIA</span>
</Link>
            </div>

            <div className="flex items-center gap-4">
              <nav className="space-x-4 text-sm sm:text-base" aria-label="Główna nawigacja">
                <Link href="/" className="hover:underline">Newsy</Link>
                <Link href="/#onas" className="hover:underline">O nas</Link>
                <Link href="/#kontakt" className="hover:underline">Kontakt</Link>
                <a
                  href="https://www.facebook.com/profile.php?id=61551541407685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </nav>

              <button
                onClick={toggleDarkMode}
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500/60"
                aria-label="Przełącz tryb kolorów"
                aria-pressed={isDarkMode}
                title={isDarkMode ? "Tryb jasny" : "Tryb ciemny"}
              >
{hasMounted && (
    isDarkMode
      ? <FaSun className="text-yellow-400" aria-hidden />
      : <FaMoon className="text-gray-600" aria-hidden />
  )}
</button>
            </div>
          </header>

          <main id="content">
            <Component {...pageProps} />
          </main>

          <footer className="text-center text-black/60 dark:text-white/60 text-sm py-6 border-t border-black/10 dark:border-white/10">
            © 2025 Punkt Widzenia. Wszelkie prawa zastrzeżone.
            <div>
              <Link
                href="/polityka-prywatnosci"
                className="hover:underline text-red-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Polityka prywatności
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
