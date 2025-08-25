// pages/[slug].js
import Head from "next/head";
import articles from "@/data/articles";
import { ARTICLE_COMPONENTS } from "@/articles/registry"; // <- statyczny rejestr komponentów

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { slug: article.link.replace("/", "") },
  }));
  return {
    paths,
    fallback: false, // generujemy wszystko w buildzie – zero SSR/ISR przy wejściu bota
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const all = (await import("@/data/articles")).default;
  const article = all.find((item) => item.link.replace("/", "") === slug);

  if (!article) return { notFound: true };

  return {
    props: {
      articleData: article,
    },
    // Bez ISR (jeśli będziesz chciał, możesz dodać np. revalidate: 86400)
  };
}

export default function ArticlePage({ articleData }) {
  const Component =
    ARTICLE_COMPONENTS?.[articleData.component] ??
    (() => <div className="px-4 py-10">Nie znaleziono treści artykułu.</div>);

  return (
    <>
      <Head>
        <title>{articleData.title} | Punkt Widzenia</title>
        <meta name="description" content={articleData.description} />
        <meta property="og:title" content={articleData.title} />
        <meta property="og:description" content={articleData.description} />
        <meta
          property="og:image"
          content={`https://punktwidzenia.info.pl${articleData.img}`}
        />
        <meta
          property="og:url"
          content={`https://punktwidzenia.info.pl${articleData.link}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: articleData.title,
              description: articleData.description,
              image: `https://punktwidzenia.info.pl${articleData.img}`,
              author: {
                "@type": "Organization",
                name: "Punkt Widzenia",
                url: "https://punktwidzenia.info.pl",
              },
              publisher: {
                "@type": "Organization",
                name: "Punkt Widzenia",
                logo: {
                  "@type": "ImageObject",
                  url: "https://punktwidzenia.info.pl/logo.png",
                },
              },
              datePublished: articleData.date,
            }),
          }}
        />
      </Head>

      <Component />
    </>
  );
}
