import { useEffect } from "react";

const ADS_CLIENT = "ca-pub-8092340253734147";
const GA_ID = "G-GHN92T4CT7";

function getConsentSafe() {
  try {
    const raw = localStorage.getItem("gdpr-consent");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function AnalyticsAndAdsLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // --- Bootstrap gtag wcześniej niż jakiekolwiek wywołania ---
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };

    // 1) USTAW DOMYŚLNĄ ZGODĘ (zalecenie Google)
    //    Zanim doładujesz jakiekolwiek skrypty.
    window.gtag("consent", "default", {
      ad_storage: "denied",
      analytics_storage: "denied",
      functionality_storage: "granted",
      personalization_storage: "denied",
      security_storage: "granted",
    });

    const updateGaConsent = (consent) => {
      const ads = !!consent?.ads;
      const analytics = !!consent?.analytics;

      window.gtag("consent", "update", {
        ad_storage: ads ? "granted" : "denied",
        analytics_storage: analytics ? "granted" : "denied",
      });

      // Dodatkowe ograniczenia przy braku zgody na analitykę
      if (!analytics) {
        window.gtag("set", "ads_data_redaction", true);
        window.gtag("config", GA_ID, { allow_google_signals: false });
      }
    };

    const loadAdsense = () => {
      const consent = getConsentSafe();
      if (!consent?.ads) return;

      if (window.__adsenseScriptLoaded__) return;
      if (document.querySelector(`script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]`)) {
        window.__adsenseScriptLoaded__ = true;
        return;
      }

      const s = document.createElement("script");
      s.async = true;
      s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CLIENT}`;
      s.crossOrigin = "anonymous";
      document.head.appendChild(s);
      window.__adsenseScriptLoaded__ = true;
      // UWAGA: brak window.adsbygoogle.push({}) – robi to komponent slotu.
    };

    const loadAnalytics = () => {
      const consent = getConsentSafe();

      updateGaConsent(consent);

      if (!window.__gaScriptLoaded__) {
        if (document.querySelector(`script[src*="www.googletagmanager.com/gtag/js?id=${GA_ID}"]`)) {
          window.__gaScriptLoaded__ = true;
        } else {
          const ga = document.createElement("script");
          ga.async = true;
          ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
          document.head.appendChild(ga);
          window.__gaScriptLoaded__ = true;
        }
      }

      window.gtag("js", new Date());
      window.gtag("config", GA_ID, {
        anonymize_ip: true,
        transport_type: "beacon",
      });
    };

    // Micro-debounce na wypadek serii eventów „consent-changed”/„storage”
    let scheduled = false;
    const handleConsentChange = () => {
      if (scheduled) return;
      scheduled = true;
      queueMicrotask(() => {
        scheduled = false;
        // każdy update zaczynamy od GA consent
        const consent = getConsentSafe();
        updateGaConsent(consent);
        loadAdsense();
        loadAnalytics();
      });
    };

    // Start: jeśli zgoda jest już zapisana
    handleConsentChange();

    // Zmiany consent z innych kart/okien
    const onStorage = (e) => {
      if (e.key === "gdpr-consent") handleConsentChange();
    };
    window.addEventListener("storage", onStorage);

    // Zmiany w tej samej karcie (baner emituje "consent-changed")
    window.addEventListener("consent-changed", handleConsentChange);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("consent-changed", handleConsentChange);
    };
  }, []);

  return null;
}
