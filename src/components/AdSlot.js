import { useEffect, useRef, useState } from "react";

const ADS_CLIENT = "ca-pub-8092340253734147";

export default function AdSlot({
  slot = "1589355129",
  format = "fluid",
  layout = "in-article",
  className = "my-8 text-center",
}) {
  const containerRef = useRef(null);
  const insRef = useRef(null);
  const initialized = useRef(false);

  const [isClient, setIsClient] = useState(false);
  const [canShow, setCanShow] = useState(false);

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (!isClient) return;
    try {
      const consent = JSON.parse(localStorage.getItem("gdpr-consent") || "{}");
      if (consent && consent.ads === true) setCanShow(true);
    } catch {}
  }, [isClient]);

  useEffect(() => {
    if (!isClient || !canShow || !containerRef.current) return;
    const el = containerRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          initAd();
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px 300px 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isClient, canShow]);

  const initAd = () => {
    if (initialized.current || !insRef.current) return;
    if (typeof window !== "undefined") {
      window.adsbygoogle = window.adsbygoogle || [];
      try {
        window.adsbygoogle.push({});
        initialized.current = true;
      } catch (e) {
        console.error("AdSense init error:", e);
      }
    }
  };

  if (!isClient || !canShow) return null;

  return (
    <div ref={containerRef} className={className}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client={ADS_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout}
        {...(process.env.NODE_ENV !== "production"
          ? { "data-adtest": "on" }
          : {})}
        suppressHydrationWarning
      />
    </div>
  );
}
