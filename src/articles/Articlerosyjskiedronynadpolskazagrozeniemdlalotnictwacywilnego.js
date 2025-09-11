import Link from "next/link";
    import dynamic from "next/dynamic";
    import RelatedArticles from "@/components/RelatedArticles";
    import NextImage from "next/image";
    const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });

function Articlerosyjskiedronynadpolskazagrozeniemdlalotnictwacywilnego() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"✈️ Rosyjskie drony nad Polską zagrożeniem dla lotnictwa cywilnego"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-09-11T10:00:00.000Z"}>{"2025-09-11"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/rosyjskie-drony-nad-polska-zagrozeniem-dla-lotnictwa-cywilnego.webp"}
    alt={"✈️ Rosyjskie drony nad Polską zagrożeniem dla lotnictwa cywilnego"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Miguel Cuenca / Pexels / Domena publiczna</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🚨 Drony nad Polską</h2>
            <p>Podczas rosyjskiego ataku na Ukrainę kilka dronów naruszyło polską przestrzeń powietrzną. Siły obrony zareagowały, zestrzeliwując intruzów przy wsparciu NATO. To pierwsza taka sytuacja od początku wojny, kiedy członek sojuszu użył broni wobec rosyjskich dronów.</p>

            <h2 className="text-xl font-semibold">✈️ Zagrożenie dla lotów pasażerskich</h2>
            <p>Eksperci ostrzegają, że podobne incydenty mogą stanowić realne ryzyko dla samolotów cywilnych. Linie lotnicze rozważają zmiany tras lotów nad Europą Wschodnią, a firmy ubezpieczeniowe sygnalizują możliwe podwyżki kosztów operacyjnych.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌍 Obawy międzynarodowe</h2>
            <p>Lotnictwo cywilne w Europie już wcześniej było pod presją rosnących napięć geopolitycznych. Teraz, gdy konflikt coraz częściej ociera się o granice NATO, obawy o bezpieczeństwo podróżnych stają się jeszcze bardziej realne.</p>

            <h2 className="text-xl font-semibold">🔮 Co dalej?</h2>
            <p>Analitycy podkreślają, że jeśli incydenty z dronami będą się powtarzać, konieczne może być wyznaczenie nowych korytarzy powietrznych omijających obszary zagrożenia. To z kolei może oznaczać droższe bilety i dłuższy czas podróży dla pasażerów.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/rosyjskie-drony-nad-polska-zagrozeniem-dla-lotnictwa-cywilnego" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articlerosyjskiedronynadpolskazagrozeniemdlalotnictwacywilnego;
