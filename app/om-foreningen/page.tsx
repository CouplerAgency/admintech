import Section from "../../components/Section";
import ContentRenderer from "../../components/ContentRenderer";
import { getPageBlocks } from "../../lib/content";

export default function OmForeningenPage() {
  const blocks = getPageBlocks("om-foreningen/index.html");
  const [first, ...rest] = blocks;

  return (
    <>
      <Section>
        <div style={{ maxWidth: "820px" }}>
          <div className="eyebrow">Foreningen</div>
          <h1 className="display">{first?.text}</h1>
          <p className="subtitle">
            AdminTech Norge samler og styrker det norske GRC-tech-miljøet.
          </p>
        </div>
      </Section>
      <Section variant="alt">
        <ContentRenderer blocks={rest} />
      </Section>
    </>
  );
}
