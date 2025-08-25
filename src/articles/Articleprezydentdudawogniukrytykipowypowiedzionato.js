import Link from "next/link";
import dynamic from "next/dynamic";
const AdSlot = dynamic(() => import("@/components/AdSlot"), { ssr: false });
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function Articleprezydentdudawogniukrytykipowypowiedzionato() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <article className="space-y-6">
<header className="mb-4">
    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
      {"🧸 Prezydent Duda w ogniu krytyki po wypowiedzi o NATO!"}
    </h1>
  </header>

        <Image
          src={"/prezydent-duda-w-ogniu-krytyki-po-wypowiedzi-o-nato.webp"}
          alt={"🧸 Prezydent Duda w ogniu krytyki po wypowiedzi o NATO!"}
width={311}
  height={163}          loading="lazy"
          fetchPriority="low"
          className="w-full h-auto rounded"
          unoptimized
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">Zdjęcie: Prezydent Andrzej Duda / U.S. Department of Defense / domena publiczna</p>
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">🇵🇱 „Polska powinna mieć prawo weta”</h2>
            <p>Wystąpienie prezydenta Dudy podczas konferencji bezpieczeństwa w Tallinie odbiło się szerokim echem w kraju i za granicą. Prezydent stwierdził, że „Polska powinna mieć prawo weta w ramach NATO, tak jak w Unii Europejskiej”. Zdaniem komentatorów, to wywołało konsternację wśród sojuszników.<br />Według źródeł zbliżonych do sztabu prezydenta, wypowiedź miała na celu wzmocnienie pozycji Polski w kontekście sporów o finansowanie działań wspólnych Sojuszu. Jednak wielu ekspertów ostrzega, że podobne postulaty mogą zostać odebrane jako przejaw braku solidarności.<br /></p>

            <h2 className="text-xl font-semibold">💬 Ostre komentarze w sieci</h2>
            <p>W sieci zawrzało. Internauci nie szczędzili gorzkich słów, zarzucając prezydentowi brak rozwagi i szkodzenie wizerunkowi Polski jako wiarygodnego partnera. Popularne komentarze na platformach społecznościowych mówiły o „kompromitacji” i „samobóju dyplomatycznym”.<br />Część komentujących broniła głowy państwa, wskazując na potrzebę większej autonomii w decyzjach wojskowych. Niemniej jednak przeważały głosy krytyczne.<br /></p>
            <AdSlot />

            <h2 className="text-xl font-semibold">🌐 NATO milczy, eksperci komentują</h2>
            <p>Oficjalnie Sojusz Północnoatlantycki nie odniósł się do wypowiedzi prezydenta. Nieoficjalnie – dyplomaci w Brukseli mieli być „zaskoczeni” tonem i treścią przemówienia. W rozmowie z „Punkt Widzenia”, ekspert ds. bezpieczeństwa wskazuje: „W NATO nie ma weta – to byłoby zaprzeczenie jego ducha działania”.<br />Do sprawy odniosła się także była ambasador USA w Polsce, przypominając, że decyzje NATO podejmowane są jednomyślnie, ale na podstawie konsensusu – nie mechanizmu formalnego weta.<br /></p>

            <h2 className="text-xl font-semibold">🇪🇺 Polityczne konsekwencje?</h2>
            <p>Opozycja nie czekała długo z reakcją. Lider jednej z partii opozycyjnych stwierdził, że „wystąpienie prezydenta to wstyd na arenie międzynarodowej” i zapowiedział interpelację w sprawie strategii bezpieczeństwa państwa.<br />Rząd z kolei dystansuje się od słów prezydenta. Premier podkreślił, że stanowisko Polski w NATO pozostaje niezmienne, a słowa głowy państwa „należy rozpatrywać w szerszym kontekście debaty”.<br /></p>
            <AdSlot />
        </div>
        <p className="text-sm text-gray-500 border-t pt-6 dark:text-gray-400">Artykuł przygotowany przez Punkt Widzenia.</p>
        <RelatedArticles current="/prezydent-duda-w-ogniu-krytyki-po-wypowiedzi-o-nato" />
        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}

export default Articleprezydentdudawogniukrytykipowypowiedzionato;
