import Link from "next/link";
import Head from "next/head";

export default function ArticleNotFound() {
  return (
    <>
      <Head>
        <title>Artykuł nie został znaleziony – Punkt Widzenia</title>
        <meta
          name="description"
          content="Nie udało się załadować treści artykułu. Możesz spróbować ponownie lub wrócić na stronę główną."
        />
      </Head>

      <div className="p-8 text-center max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-red-600">
          Błąd ładowania artykułu
        </h1>
        <p className="mb-6 text-gray-700">
          Nie udało się załadować treści artykułu. Spróbuj ponownie później lub
          wróć na stronę główną.
        </p>
        <Link
          href="/"
          className="inline-block px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </>
  );
}
