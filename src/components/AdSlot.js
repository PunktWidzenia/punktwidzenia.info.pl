import { useEffect, useRef, useState } from "react";

export default function AdSlot() {
  const adRef = useRef(null);
  const [shouldRenderAd, setShouldRenderAd] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = JSON.parse(localStorage.getItem("gdpr-consent") || "{}");
    if (!consent.ads) return;

    setShouldRenderAd(true);
  }, []);

  useEffect(() => {
    if (!shouldRenderAd) return;

    let retries = 0;

    const tryPushAd = () => {
      const interval = setInterval(() => {
        if (Array.isArray(window.adsbygoogle) && adRef.current) {
          try {
            window.adsbygoogle.push({});
            clearInterval(interval);
          } catch (e) {
            console.error("AdSense push error:", e);
            clearInterval(interval);
          }
        } else {
          retries++;
          if (retries >= 10) {
            console.warn("AdSense script not available after multiple attempts.");
            clearInterval(interval);
          }
        }
      }, 1000);
    };

    setTimeout(tryPushAd, 2000);
  }, [shouldRenderAd]);

  if (!shouldRenderAd) return null;

  return (
    <div className="my-8 text-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-8092340253734147"
        data-ad-slot="1589355129"
        data-full-width-responsive="true"
        ref={adRef}
      />
    </div>
  );
}
