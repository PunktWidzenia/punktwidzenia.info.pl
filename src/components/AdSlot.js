import { useEffect, useRef, useState } from "react";
import Script from "next/script";

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

  // Ustalenie, że jesteśmy po stronie klienta
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sprawdzenie zgody z localStorage
  useEffect(() => {
    if (!isClient) return;
    try {
      const consent = JSON.parse(localStorage.getItem("gdpr-consent") || "{}");
      if (consent && consent.ads === true) setCanShow(true);
    } catch {
      // jeśli localStorage nieparsowalny – nie pokazujemy reklam
    }
  }, [isClient]);

  // Lazy init: dopiero gdy slot wejdzie w viewport
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient, canShow]);

  const initAd = () => {
    if (initialized.current || !insRef.current) return;

    // Upewniamy się, że kolejka istnieje (jeśli skrypt jeszcze się ładuje – zadziała później)
    if (typeof window !== "undefined") {
      window.adsbygoogle = window.adsbygoogle || [];
      try {
        window.adsbygoogle.push({});
        initialized.current = true;
      } catch (e) {
        // sporadycznie może polecieć błąd – nie zapętlaj
        // eslint-disable-next-line no-console
        console.error("AdSense init error:", e);
      }
    }
  };

  if (!isClient || !canShow) return null;

  return (
    <>
      {/* Skrypt ładujemy raz – flaga globalna na oknie po załadowaniu */}
      {isClient && (
        <Script
          id="adsense-script"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CLIENT}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.__adsenseScriptAppended__ = true;
            }
          }}
        />
      )}

      <div ref={containerRef} className={className}>
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-client={ADS_CLIENT}
          data-ad-slot={slot}
          data-ad-format={format}
          data-ad-layout={layout}
          {...(process.env.NODE_ENV !== "production" ? { "data-adtest": "on" } : {})}
          suppressHydrationWarning
        />
      </div>
    </>
  );
}
