import Link from "next/link";
import Section from "../../components/Section";
import { articles } from "../../lib/articles";

export default function KunnskapPage() {
  return (
    <>
      <Section>
        <div style={{ maxWidth: "720px" }}>
          <div className="eyebrow">Kunnskap & nyheter</div>
          <h1 className="display">Kunnskap & nyheter</h1>
          <p className="subtitle">
            Hold deg oppdatert på siste nytt i GRC-bransjen.
          </p>
        </div>
      </Section>
      <Section variant="alt">
        <div className="link-list">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="link-card"
            >
              <div className="eyebrow">{article.date}</div>
              <div style={{ fontWeight: 600 }}>{article.title}</div>
            </Link>
          ))}
        </div>
      </Section>
      <Section>
        <div className="card">
          <div className="eyebrow">Nyhetsbrev</div>
          <h2 className="headline">Abonner på nyhetsbrevet</h2>
          <p className="subtitle">
            Hold deg oppdatert på siste nytt i GRC-bransjen.
          </p>
        </div>
      </Section>
    </>
  );
}
