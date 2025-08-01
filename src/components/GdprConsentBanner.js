import { useState, useEffect } from "react"
import Link from "next/link"

const GdprConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [adsConsent, setAdsConsent] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gdpr-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("gdpr-consent", JSON.stringify({
      ads: true,
      analytics: true,
    }));
    setShowBanner(false);
    location.reload();
  };

  const handleSaveSettings = () => {
    localStorage.setItem("gdpr-consent", JSON.stringify({
      ads: adsConsent,
      analytics: analyticsConsent,
    }));
    setShowBanner(false);
    location.reload();
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
  <div className="w-full max-w-xl bg-white dark:bg-neutral-900 text-black dark:text-white border border-neutral-300 dark:border-neutral-700 p-6 shadow-xl rounded">
      {!showSettings ? (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm max-w-3xl">
            Korzystamy z plików cookies w celu zapewnienia prawidłowego działania strony, wyświetlania reklam (Google AdSense) i analityki (Google Analytics).
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleAcceptAll}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Akceptuję i przechodzę do serwisu
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="border border-neutral-400 dark:border-neutral-600 px-4 py-2 rounded"
            >
              Ustawienia zaawansowane
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Zarządzanie zgodami</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">Niezbędne cookies</span>
              <span className="text-xs text-neutral-500">Zawsze aktywne</span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Umożliwiają podstawowe funkcje strony, takie jak nawigacja i dostęp do bezpiecznych obszarów.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-medium" htmlFor="adsConsent">
                Reklamowe (AdSense)
              </label>
              <input
                id="adsConsent"
                type="checkbox"
                checked={adsConsent}
                onChange={(e) => setAdsConsent(e.target.checked)}
              />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Pozwalają na wyświetlanie spersonalizowanych reklam Google AdSense.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-medium" htmlFor="analyticsConsent">
                Analityczne (Google Analytics)
              </label>
              <input
                id="analyticsConsent"
                type="checkbox"
                checked={analyticsConsent}
                onChange={(e) => setAnalyticsConsent(e.target.checked)}
              />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Pomagają nam zrozumieć, w jaki sposób odwiedzający korzystają z serwisu.
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleSaveSettings}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Zapisz ustawienia
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="border border-neutral-400 dark:border-neutral-600 px-4 py-2 rounded"
            >
              Wróć
            </button>
          </div>
		  <p className="text-xs text-neutral-500 mt-2">
  <a href="/polityka-prywatnosci" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-500">
  Zobacz naszą politykę prywatności
</a>
</p>
        </div>
      )}
    </div>
	</div>
  );
};

export default GdprConsentBanner;
