import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import NextImage from "next/image";

function Articleprokuraturazlecasekcjezwlokstanislawasoyki() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {"🎶 Prokuratura zleca sekcję zwłok Stanisława Soyki"}
          </h1>
          <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={"2025-08-24T10:00:00.000Z"}>{"2025-08-24"} </time>
          </div>
        </header>

<div className="relative w-full rounded overflow-hidden">
  <NextImage
    src={"/prokuratura-zleca-sekcje-zwlok-stanislawa-soyki.webp"}
    alt={"🎶 Prokuratura zleca sekcję zwłok Stanisława Soyki"}
    width={1200}
    height={675}
    className="w-full h-auto rounded"
    priority
  />
</div>

        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Alina Zienowicz / Wikimedia Commons / Domena publiczna</p>

        <div className="space-y-6">
            <h2 className="text-xl font-semibold">⚰️ Decyzja prokuratury</h2>
            <p>Po nagłej śmierci Stanisława Soyki zdecydowano o przeprowadzeniu sekcji zwłok. Celem jest jednoznaczne ustalenie przyczyn zgonu. To standardowa procedura w przypadku osób publicznych, zwłaszcza gdy okoliczności wymagają potwierdzenia medycznego.</p>

            <h2 className="text-xl font-semibold">🎤 Pożegnanie wybitnego artysty</h2>
            <p>Soyka był jednym z najbardziej cenionych polskich muzyków – wokalistą, pianistą i kompozytorem. Jego twórczość obejmowała jazz, muzykę popularną i poezję śpiewaną. Jego odejście wywołało poruszenie zarówno wśród fanów, jak i całego środowiska artystycznego.</p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🕯️ Wspomnienia i hołdy</h2>
            <p>Po jego śmierci w wielu miejscach odbyły się koncerty wspomnieniowe i symboliczne minuty ciszy. Publiczność i artyści podkreślają, że Soyka zostawił po sobie nie tylko dorobek muzyczny, ale i duchowe dziedzictwo, które trudno przecenić.</p>

            <h2 className="text-xl font-semibold">🌍 Dziedzictwo muzyczne</h2>
            <p>Jego interpretacje poezji, unikatowy styl wokalny i wkład w popularyzację jazzu w Polsce pozostaną trwale wpisane w historię muzyki. Eksperci oceniają, że Soyka był jednym z tych twórców, którzy potrafili łączyć różne gatunki i docierać do różnych pokoleń słuchaczy.</p>
            <AdSlot />
        </div>

        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/prokuratura-zleca-sekcje-zwlok-stanislawa-soyki" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleprokuraturazlecasekcjezwlokstanislawasoyki;
