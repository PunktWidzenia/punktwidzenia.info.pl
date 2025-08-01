import { useEffect, useRef, useState } from "react";

export default function AdSlot() {
  const adRef = useRef(null);
  const [shouldRenderAd, setShouldRenderAd] = useState(false);

  useEffect(() => {
    const consent = JSON.parse(localStorage.getItem("gdpr-consent") || "{}");
    if (!consent.ads) return;

    setShouldRenderAd(true);
  }, []);

  useEffect(() => {
    if (!shouldRenderAd) return;

    let retries = 0;

    const tryPushAd = () => {
      if (Array.isArray(window.adsbygoogle) && adRef.current) {
        try {
          window.adsbygoogle.push({});
        } catch (e) {
          console.error("AdSense push error:", e);
        }
      } else if (retries < 10) {
        retries++;
        setTimeout(tryPushAd, 500);
      } else {
        console.warn("AdSense script not available after multiple attempts.");
      }
    };

    tryPushAd();
  }, [shouldRenderAd]);

  if (!shouldRenderAd) return null;

  return (
    <div className="my-8 text-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8092340253734147"
        data-ad-slot="2964144418"
        data-ad-format="auto"
        data-full-width-responsive="true"
        ref={adRef}
      ></ins>
    </div>
  );
}
