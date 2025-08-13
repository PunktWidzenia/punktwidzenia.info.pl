import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="px-4 pt-10 pb-20 max-w-3xl mx-auto text-center" aria-live="polite">
      <Head>
        <title>Nie znaleziono strony – Punkt Widzenia</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <h1 className="text-4xl font-bold mb-6" role="status">
        404 – Nie znaleziono strony
      </h1>

      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
        Ups! Taka strona nie istnieje. Sprawdź adres lub wróć na stronę główną.
      </p>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded hover:bg-neutral-50 dark:hover:bg-neutral-800"
          aria-label="Wróć do poprzedniej strony"
        >
          ← Wróć
        </button>

        <Link
          href="/"
          prefetch
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
          aria-label="Przejdź do strony głównej"
        >
          Powrót do strony głównej
        </Link>
      </div>
    </main>
  );
}
