import { useEffect } from "react";

const AnalyticsAndAdsLoader = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadAdsense = () => {
      const consent = JSON.parse(localStorage.getItem("gdpr-consent") || "{}");
      if (consent.ads && !window.adsbygoogleLoaded) {
        const adsScript = document.createElement("script");
        adsScript.async = true;
        adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8092340253734147";
        adsScript.crossOrigin = "anonymous";
adsScript.onload = () => {
  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {}
};
document.head.appendChild(adsScript);
window.adsbygoogleLoaded = true;
      }
    };

    const loadAnalytics = () => {
      const consent = JSON.parse(localStorage.getItem("gdpr-consent") || "{}");
      if (consent.analytics && !window.analyticsLoaded) {
        const gaScript = document.createElement("script");
        gaScript.async = true;
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-GHN92T4CT7";
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-GHN92T4CT7");

        window.analyticsLoaded = true;
      }
    };

    const handleConsentChange = () => {
      loadAdsense();
      loadAnalytics();
    };

    // Załaduj na starcie (jeśli zgoda już była)
    handleConsentChange();

    // Nasłuch na zmiany zgody
    window.addEventListener("storage", handleConsentChange);
    return () => {
      window.removeEventListener("storage", handleConsentChange);
    };
  }, []);

  return null;
};

export default AnalyticsAndAdsLoader;
