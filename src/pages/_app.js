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
  const location = router.pathname;
  const GdprConsentBanner = dynamic(() => import("@/components/GdprConsentBanner"), { ssr: false });
const AnalyticsAndAdsLoader = dynamic(() => import("@/components/AnalyticsAndAdsLoader"), { ssr: false });

  return (
    <>
      <Head>
        <title>Punkt Widzenia – Newsy & Ciekawostki</title>
        <meta
          name="description"
          content="Najciekawsze wiadomości, ciekawostki i wydarzenia z Polski – sprawdź, co dziś zaskoczyło internautów!"
        />
      </Head>

      {location !== "/polityka-prywatnosci" && <GdprConsentBanner />}
      <AnalyticsAndAdsLoader />
      <ScrollToTop />

      <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen font-sans px-4 lg:px-0">
        <div className="max-w-6xl mx-auto">
          <header className="px-6 py-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
<Image
  src="/logo_header_56x56.webp"
  alt="Punkt Widzenia"
  width={56}
  height={56}
  priority
/>              <Link
                href="/"
                className="text-2xl font-bold hover:no-underline"
                onClick={() => {
                  if (window.location.pathname === "/") {
                    window.location.reload();
                  }
                }}
              >
                PUNKT <span className="text-red-500 font-bold">WIDZENIA</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <nav className="space-x-4 text-sm sm:text-base">
                <Link href="/" className="hover:underline">Newsy</Link>
                <a href="#onas" className="hover:underline">O nas</a>
                <a href="#kontakt" className="hover:underline">Kontakt</a>
                <a href="https://www.facebook.com/profile.php?id=61551541407685" target="_blank" className="hover:underline">Facebook</a>
              </nav>
<button
  onClick={toggleDarkMode}
  className="p-2 rounded"
  aria-label="Przełącz tryb"
>
  {hasMounted && (
    isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />
  )}
</button>
            </div>
          </header>

          <Component {...pageProps} />

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
