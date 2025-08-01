import Head from "next/head"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto text-center">
      <Head>
        <title>Nie znaleziono strony – Punkt Widzenia</title>
        <meta name="robots" content="noindex" />
      </Head>

      <h1 className="text-4xl font-bold mb-6">404 – Nie znaleziono strony</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
        Ups! Taka strona nie istnieje. Sprawdź adres lub wróć na stronę główną.
      </p>
      <Link href="/" className="text-red-500 hover:underline text-lg">← Powrót do strony głównej</Link>
    </main>
  );
}
