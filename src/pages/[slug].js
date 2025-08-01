import Head from "next/head"
import articles from "@/data/articles"
import dynamic from "next/dynamic"

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { slug: article.link.replace("/", "") },
  }));

  return {
    paths,
    fallback: "blocking", // ISR: nowe strony generują się na żądanie
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const articles = (await import("@/data/articles")).default;
  const article = articles.find((item) => item.link.replace("/", "") === slug);

  if (!article) return { notFound: true };

  return {
    props: {
      articleData: article, // tylko dane!
    },
    revalidate: 60,
  };
}

export default function ArticlePage({ articleData }) {
  const Component = dynamic(() =>
    import(`@/articles/${articleData.component}`)
  );
  return (
    <>
      <Head>
        <title>{articleData.title} | Punkt Widzenia</title>
        <meta name="description" content={articleData.description} />
        <meta property="og:title" content={articleData.title} />
        <meta property="og:description" content={articleData.description} />
        <meta property="og:image" content={`https://punktwidzenia.info.pl${articleData.img}`} />
        <meta property="og:url" content={`https://punktwidzenia.info.pl${articleData.link}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
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
                url: "https://punktwidzenia.info.pl/logo.png", // Zmień, jeśli inne
              },
            },
            datePublished: articleData.date,
          })}
        </script>
      </Head>

      <Component />
    </>
  );
}
