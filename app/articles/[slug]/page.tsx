import { notFound } from "next/navigation";
import Section from "../../../components/Section";
import ContentRenderer from "../../../components/ContentRenderer";
import { getPageBlocks } from "../../../lib/content";
import { articles } from "../../../lib/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const key = `articles/${params.slug}/index.html`;
  const blocks = getPageBlocks(key);
  if (!blocks.length) {
    notFound();
  }

  const [title, date, ...rest] = blocks;

  return (
    <>
      <Section>
        <div style={{ maxWidth: "820px" }}>
          <div className="eyebrow">{date?.text}</div>
          <h1 className="display">{title?.text}</h1>
        </div>
      </Section>
      <Section variant="alt">
        <ContentRenderer blocks={rest} />
      </Section>
    </>
  );
}
