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

    const loadAdsense = () => {
      const consent = getConsentSafe();
      if (!consent?.ads) return;

      // unikaj duplikatów
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
      // UWAGA: nie wołamy tutaj window.adsbygoogle.push({}) — zrobi to komponent slotu po wyrenderowaniu <ins>
    };

    const ensureGtagBootstrap = () => {
      // Ustaw dataLayer/gtag zanim dociągniesz zewnętrzny skrypt
      window.dataLayer = window.dataLayer || [];
      window.gtag =
        window.gtag ||
        function gtag() {
          window.dataLayer.push(arguments);
        };
    };

    const applyGaConsent = (consent) => {
      // Consent Mode dla GA4
      window.gtag("consent", "update", {
        ad_storage: consent?.ads ? "granted" : "denied",
        analytics_storage: consent?.analytics ? "granted" : "denied",
        functionality_storage: "granted",
        personalization_storage: "denied",
        security_storage: "granted",
      });
    };

    const loadAnalytics = () => {
      const consent = getConsentSafe();

      ensureGtagBootstrap();
      applyGaConsent(consent);

      if (window.__gaScriptLoaded__) return;
      if (document.querySelector(`script[src*="www.googletagmanager.com/gtag/js?id=${GA_ID}"]`)) {
        window.__gaScriptLoaded__ = true;
      } else {
        const ga = document.createElement("script");
        ga.async = true;
        ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(ga);
        window.__gaScriptLoaded__ = true;
      }

      // konfiguracja GA4 (wywołanie może być przed onload — gtag z bufora to ogarnie)
      window.gtag("js", new Date());
      window.gtag("config", GA_ID, {
        anonymize_ip: true,
        transport_type: "beacon",
      });
    };

    const handleConsentChange = () => {
      // Zastosuj consent w GA na bieżąco i doładuj skrypty jeśli można
      const consent = getConsentSafe();
      if (window.gtag) applyGaConsent(consent);
      loadAdsense();
      loadAnalytics();
    };

    // Start: jeśli zgoda już jest w localStorage
    handleConsentChange();

    // 1) Zmiany consent z innych kart/okien
    const onStorage = (e) => {
      if (e.key === "gdpr-consent") handleConsentChange();
    };
    window.addEventListener("storage", onStorage);

    // 2) Zmiany w tej samej karcie — niech CMP wyemituje event:
    // window.dispatchEvent(new CustomEvent("consent-changed"));
    window.addEventListener("consent-changed", handleConsentChange);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("consent-changed", handleConsentChange);
    };
  }, []);

  return null;
}
