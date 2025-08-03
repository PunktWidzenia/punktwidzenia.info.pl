import { useEffect } from "react"

const AnalyticsAndAdsLoader = () => {
useEffect(() => {
  if (typeof window === "undefined") return;
      const consent = JSON.parse(localStorage.getItem("gdpr-consent") || "{}");

    if (consent.ads) {
      const adsScript = document.createElement("script");
      adsScript.async = true;
      adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8092340253734147";
      adsScript.crossOrigin = "anonymous";
      document.head.appendChild(adsScript);
    }

    if (consent.analytics) {
      const gaScript = document.createElement("script");
      gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-GHN92T4CT7";
      gaScript.async = true;
      document.head.appendChild(gaScript);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-GHN92T4CT7");
    }
  }, []);

  return null;
};

export default AnalyticsAndAdsLoader;
