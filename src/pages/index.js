import Link from "next/link";
import { FaFacebookSquare, FaEnvelope, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import articles from "@/data/articles";
import Image from "next/image";

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setIsLoading(false);
    }, 800);
  };

  return (
    <main className="px-6 py-10 space-y-16">
      <section id="newsy" className="space-y-6">
        <h2 className="text-3xl font-bold">Najnowsze newsy</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, visibleCount).map((article) => (
            <div key={article.id} className="w-full max-w-[672px]">
              <Link href={article.link}>
                <div className="bg-white dark:bg-white/5 p-5 rounded-xl shadow-lg hover:bg-white/20 dark:hover:bg-white/10 transition cursor-pointer space-y-3 border border-black/10 dark:border-white/10">
                  <Image
                    src={article.img}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-md"
                    loading={article.id === 4 ? undefined : "lazy"}
                    fetchPriority={article.id === 4 ? "high" : undefined}
                  />
                  <h3 className="text-xl font-bold text-black dark:text-white">{article.title}</h3>
                  <p className="text-xs text-black/50 dark:text-white/40">
                    {new Date(article.date).toLocaleDateString("pl-PL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </p>
                  <p className="text-sm text-neutral-900 dark:text-white/60">{article.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {isLoading && (
          <div className="flex justify-center py-4">
            <div className="w-6 h-6 border-4 border-white/20 border-t-red-500 rounded-full animate-spin" />
          </div>
        )}

        {!isLoading && visibleCount < articles.length && (
          <button
            onClick={handleShowMore}
            className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white dark:bg-red-500 dark:hover:bg-red-600 dark:text-white rounded-lg"
          >
            Zobacz więcej
          </button>
        )}
      </section>

      <section id="onas" className="space-y-4">
        <h2 className="text-3xl font-bold">O nas</h2>
        <p className="text-black/80 dark:text-white/80 max-w-2xl">
          <strong>Punkt Widzenia</strong> to autorski portal tworzony jednoosobowo – z pasji do informacji i potrzeby dzielenia się tym, co aktualnie żyje w mediach i społeczeństwie. Znajdziesz tu ciekawostki, newsy, plotki i doniesienia z Polski oraz ze świata.
          Pokazuję to, o czym mówi cała <span className="text-red-500 font-bold">Polska!</span>
        </p>
      </section>

      <section id="kontakt" className="space-y-4">
        <h2 className="text-3xl font-bold">Kontakt</h2>
        <p className="text-black/80 dark:text-white/80 max-w-2xl">
          Masz pytania, sugestie lub chcesz się z nami skontaktować? Napisz do nas!
        </p>
        <ul className="text-black/70 dark:text-white/70 space-y-1">
          <li className="flex items-center gap-2">
            <FaEnvelope className="text-red-400 text-lg" />
            <a href="mailto:kontaktpunktwidzenia@gmail.com" className="underline">
              kontaktpunktwidzenia@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaFacebookSquare className="text-blue-500 text-lg" />
            <a
              href="https://www.facebook.com/profile.php?id=61551541407685"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              facebook.com/punktwidzenia
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaInstagram className="text-pink-500 text-lg" />
            <a
              href="https://www.instagram.com/punkt_widzenia_news/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              instagram.com/punkt_widzenia_news
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
