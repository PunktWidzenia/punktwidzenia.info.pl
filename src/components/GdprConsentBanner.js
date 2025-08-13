import { useState, useEffect, useRef } from "react";

const CONSENT_KEY = "gdpr-consent";
const CONSENT_VERSION = 1; // podbij, gdy zmienisz zakres celów/teksty

function getConsentSafe() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export default function GdprConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [adsConsent, setAdsConsent] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const settingsHeadingRef = useRef(null);

  useEffect(() => setHasMounted(true), []);

  // Po montażu sprawdź, czy jest ważna zgoda
  useEffect(() => {
    if (!hasMounted) return;
    const saved = getConsentSafe();
    if (!saved || saved.version !== CONSENT_VERSION) {
      setShowBanner(true);
    }
  }, [hasMounted]);

  // Po przejściu do ustawień ustaw focus i wczytaj stan z pamięci
  useEffect(() => {
    if (!showSettings) return;
    const saved = getConsentSafe();
    if (saved) {
      setAdsConsent(!!saved.ads);
      setAnalyticsConsent(!!saved.analytics);
    }
    // focus nagłówka dialogu
    settingsHeadingRef.current?.focus();
  }, [showSettings]);

  const persistConsent = (opts) => {
    const payload = {
      ads: !!opts.ads,
      analytics: !!opts.analytics,
      version: CONSENT_VERSION,
      timestamp: Date.now(),
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(payload));

    // poinformuj inne karty
    // (storage event) i tę samą kartę (własny event)
    window.dispatchEvent(new CustomEvent("consent-changed", { detail: payload }));
  };

  const handleAcceptAll = () => {
    persistConsent({ ads: true, analytics: true });
    setShowBanner(false);
  };

  const handleSaveSettings = () => {
    persistConsent({ ads: adsConsent, analytics: analyticsConsent });
    setShowBanner(false);
  };

  if (!hasMounted || !showBanner) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      aria-live="polite"
    >
      <div
        className="w-full max-w-xl bg-white dark:bg-neutral-900 text-black dark:text-white border border-neutral-300 dark:border-neutral-700 p-6 shadow-xl rounded"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-title"
      >
        {!showSettings ? (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm max-w-3xl">
              Używamy plików cookies do zapewnienia działania serwisu (niezbędne),
              wyświetlania reklam (Google AdSense) oraz analityki (Google Analytics).
              Niezbędne cookies są zawsze aktywne i nie służą profilowaniu.
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
                aria-haspopup="dialog"
                aria-controls="consent-settings"
              >
                Ustawienia zaawansowane
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4" id="consent-settings">
            <h2
              id="consent-title"
              ref={settingsHeadingRef}
              tabIndex={-1}
              className="text-lg font-semibold"
            >
              Zarządzanie zgodami
            </h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Niezbędne cookies</span>
                <span className="text-xs text-neutral-500">Zawsze aktywne</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Pozwalają na podstawowe funkcje (nawigacja, bezpieczeństwo).
                Nie zawierają danych do profilowania.
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
                  aria-describedby="ads-desc"
                />
              </div>
              <p id="ads-desc" className="text-sm text-neutral-600 dark:text-neutral-400">
                Umożliwiają wyświetlanie reklam. Przy włączonej zgodzie mogą być personalizowane przez partnera.
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
                  aria-describedby="analytics-desc"
                />
              </div>
              <p id="analytics-desc" className="text-sm text-neutral-600 dark:text-neutral-400">
                Pomagają zrozumieć korzystanie z serwisu (statystyki zagregowane).
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
              <a
                href="/polityka-prywatnosci"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-sm hover:underline text-red-600"
              >
                Polityka prywatności
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
