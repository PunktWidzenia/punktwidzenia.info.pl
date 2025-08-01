import Head from "next/head"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto">
      <Head>
        <title>Polityka Prywatności – Punkt Widzenia</title>
        <meta name="description" content="Polityka prywatności serwisu Punkt Widzenia – informacje o cookies, RODO, Google AdSense i Analytics." />
        <link rel="canonical" href="https://punktwidzenia.info.pl/polityka-prywatnosci" />
      </Head>

      <article className="space-y-6">
        <h1 className="text-3xl font-bold">Polityka Prywatności</h1>

        <div className="space-y-6">
          <p>
            Niniejsza Polityka Prywatności określa zasady przetwarzania danych oraz stosowania plików cookies w serwisie <strong>punktwidzenia.info.pl</strong>.
          </p>

          <h2 className="text-2xl font-semibold">Administrator danych</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Administratorem danych osobowych (w ograniczonym zakresie) jest właściciel serwisu Punkt Widzenia.</li>
            <li>Projekt prowadzony jest jednoosobowo.</li>
            <li>Kontakt możliwy jest przez adres e-mail dostępny na stronie głównej lub za pośrednictwem profilu na Facebooku / Instagramie.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Dane osobowe</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Serwis <strong>nie zbiera danych osobowych w sposób bezpośredni</strong>.</li>
            <li>Dane mogą być przetwarzane wyłącznie w przypadku kontaktu użytkownika z administratorem (np. przez e-mail lub media społecznościowe).</li>
            <li>Wszelkie dane wykorzystywane są wyłącznie w celu udzielenia odpowiedzi na zapytanie.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Pliki cookies</h2>
          <p>W serwisie wykorzystywane są pliki cookies w celu:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>zapewnienia prawidłowego działania strony (cookies niezbędne),</li>
            <li>analizy statystyk odwiedzin (Google Analytics),</li>
            <li>wyświetlania spersonalizowanych reklam (Google AdSense).</li>
          </ul>
          <p>
            Przy pierwszej wizycie użytkownik ma możliwość wyrażenia zgody na stosowanie plików reklamowych i analitycznych za pomocą banera zgody.
          </p>

          <h2 className="text-2xl font-semibold">Google AdSense</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Serwis korzysta z reklam dostarczanych przez Google AdSense.</li>
            <li>Google może używać cookies i sygnałów web beacons do zbierania informacji o wyświetlanych treściach i aktywności użytkowników.</li>
            <li>Dane te służą do wyświetlania reklam dopasowanych do zainteresowań użytkownika.</li>
          </ul>
          <p>
            Szczegóły dostępne są tutaj:{" "}
            <a href="https://policies.google.com/technologies/ads?hl=pl" className="text-red-500 hover:underline" target="_blank" rel="noreferrer">
              Polityka prywatności Google
            </a>.
          </p>

          <h2 className="text-2xl font-semibold">Google Analytics</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Serwis korzysta z narzędzia Google Analytics do analizy ruchu na stronie.</li>
            <li>Dane zbierane przez Analytics są anonimowe i służą wyłącznie do celów statystycznych.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Zarządzanie zgodami</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Użytkownik może zarządzać swoimi preferencjami poprzez baner zgody (wyświetlany przy pierwszej wizycie).</li>
            <li>Możliwe jest także ręczne usunięcie plików cookies z poziomu ustawień przeglądarki.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Informacje dodatkowe</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Korzystanie z serwisu nie wymaga podawania żadnych danych osobowych.</li>
            <li>Administrator nie prowadzi zbioru danych umożliwiających identyfikację użytkownika.</li>
          </ul>

          <p className="pt-6 border-t border-neutral-300 dark:border-neutral-700 text-sm text-neutral-500 dark:text-neutral-400">
            Polityka prywatności obowiązuje od 22 lipca 2025 r. i może ulec aktualizacji.
          </p>
        </div>

        <Link href="/" className="text-red-500 hover:underline block mt-10">← Powrót do strony głównej</Link>
      </article>
    </main>
  );
}
