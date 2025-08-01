import Link from "next/link"
import articles from "@/data/articles"

export default function RelatedArticles({ current }) {
  const now = new Date();
  const todayStr = now.toISOString().split("T")[0];
  const sevenDaysAgoStr = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const related = articles
    .filter(
      (a) =>
        a?.link &&
        a.link !== current &&
        a.date >= sevenDaysAgoStr &&
        a.date <= todayStr
    )
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-4">Najczęściej czytane 🔥</h2>
      <ul className="list-disc list-inside space-y-2">
        {related.map((article) => (
          <li key={article.id}>
            <Link href={article.link} className="text-blue-500 hover:underline">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
