// src/components/AnalyticsAndAdsLoader.js
import { useEffect } from "react";
import Router from "next/router";

const ADS_CLIENT = "ca-pub-8092340253734147";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-GHN92T4CT7";

function getConsentSafe() {
  try {
    const raw = localStorage.getItem("gdpr-consent");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

// małe helpery defensywne
const safeQueueMicrotask = (fn) => {
  try {
    if (typeof queueMicrotask === "function") return queueMicrotask(fn);
  } catch {}
  // fallback
  setTimeout(fn, 0);
};

export default function AnalyticsAndAdsLoader() {
  useEffect(() => {
    // 100% defensywnie — żaden wyjątek nie może “wywalić” aplikacji
    try {
      if (typeof window === "undefined") return;

      // Domyślne zgody (Consent Mode) – lekki bootstrap
      const ensureBootstrap = () => {
        try {
          window.dataLayer = window.dataLayer || [];
          window.gtag =
            window.gtag ||
            function gtag() {
              try {
                window.dataLayer.push(arguments);
              } catch {}
            };

          window.gtag("consent", "default", {
            ad_storage: "denied",
            analytics_storage: "denied",
            functionality_storage: "granted",
            personalization_storage: "denied",
            security_storage: "granted",
          });
        } catch {}
      };
      ensureBootstrap();

      const updateGaConsent = (consent) => {
        try {
          const ads = !!consent?.ads;
          const analytics = !!consent?.analytics;
          if (typeof window.gtag !== "function") return;

          window.gtag("consent", "update", {
            ad_storage: ads ? "granted" : "denied",
            analytics_storage: analytics ? "granted" : "denied",
          });

          if (!analytics) {
            window.gtag("set", "ads_data_redaction", true);
            window.gtag("config", GA_ID, { allow_google_signals: false });
          }
        } catch {}
      };

      const loadAdsense = () => {
        try {
          const consent = getConsentSafe();
          if (!consent?.ads) return;

          if (window.__adsenseScriptLoaded__) return;
          if (
            document.querySelector(
              `script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]`
            )
          ) {
            window.__adsenseScriptLoaded__ = true;
            return;
          }

          const s = document.createElement("script");
          s.async = true;
          s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CLIENT}`;
          s.crossOrigin = "anonymous";
          document.head.appendChild(s);
          window.__adsenseScriptLoaded__ = true;
        } catch {}
      };

      const attachSpaPageview = () => {
        // Podpinamy nasłuch tylko jeśli Next Router exposes events
        const ev = Router?.events;
        if (!ev || typeof ev.on !== "function" || typeof ev.off !== "function") {
          return () => {};
        }
        const onRoute = (url) => {
          try {
            if (typeof window.gtag === "function") {
              window.gtag("event", "page_view", { page_path: url });
            }
          } catch {}
        };
        ev.on("routeChangeComplete", onRoute);
        return () => ev.off("routeChangeComplete", onRoute);
      };

      const loadAnalytics = () => {
        try {
          const consent = getConsentSafe();
          if (!consent?.analytics) return; // bez zgody – nic nie ładujemy

          // bootstrap GA4 dopiero teraz (po zgodzie)
          window.dataLayer = window.dataLayer || [];
          window.gtag =
            window.gtag ||
            function gtag() {
              try {
                window.dataLayer.push(arguments);
              } catch {}
            };

          updateGaConsent(consent);

          if (!window.__gaScriptLoaded__) {
            if (
              document.querySelector(
                `script[src*="www.googletagmanager.com/gtag/js?id=${GA_ID}"]`
              )
            ) {
              window.__gaScriptLoaded__ = true;
            } else {
              const ga = document.createElement("script");
              ga.async = true;
              ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
              document.head.appendChild(ga);
              window.__gaScriptLoaded__ = true;
            }
          }

          // inicjalizacja i pierwszy page_view
          try {
            window.gtag("js", new Date());
            window.gtag("config", GA_ID, {
              anonymize_ip: true,
              transport_type: "beacon",
              send_page_view: false, // my wyślemy ręcznie
            });
            window.gtag("event", "page_view", {
              page_path: window.location.pathname,
            });
          } catch {}

          return attachSpaPageview(); // zwraca cleanup
        } catch {}
        return () => {};
      };

      // Debounce zmian zgód
      let scheduled = false;
      let cleanupRoute = null;

      const handleConsentChange = () => {
        if (scheduled) return;
        scheduled = true;
        safeQueueMicrotask(() => {
          scheduled = false;
          try {
            const consent = getConsentSafe();
            updateGaConsent(consent);
            loadAdsense();
            // zdejmij poprzedni nasłuch zanim ewentualnie dołożysz nowy
            if (typeof cleanupRoute === "function") {
              try { cleanupRoute(); } catch {}
              cleanupRoute = null;
            }
            const c = loadAnalytics();
            if (typeof c === "function") cleanupRoute = c;
          } catch {}
        });
      };

      // Start
      handleConsentChange();

      const onStorage = (e) => {
        try {
          if (e.key === "gdpr-consent") handleConsentChange();
        } catch {}
      };
      window.addEventListener("storage", onStorage);
      window.addEventListener("consent-changed", handleConsentChange);

      return () => {
        try {
          window.removeEventListener("storage", onStorage);
          window.removeEventListener("consent-changed", handleConsentChange);
          if (typeof cleanupRoute === "function") {
            try { cleanupRoute(); } catch {}
          }
        } catch {}
      };
    } catch {
      // absolutnie nic – nie blokujemy renderu
    }
  }, []);

  return null;
}
