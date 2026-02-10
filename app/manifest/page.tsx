import Section from "../../components/Section";
import ContentRenderer from "../../components/ContentRenderer";
import { getPageBlocks } from "../../lib/content";

export default function ManifestPage() {
  const blocks = getPageBlocks("manifest/index.html");
  const [first, ...rest] = blocks;

  return (
    <>
      <Section>
        <div style={{ maxWidth: "820px" }}>
          <div className="eyebrow">Manifest</div>
          <h1 className="display">{first?.text}</h1>
        </div>
      </Section>
      <Section variant="alt">
        <ContentRenderer blocks={rest} />
      </Section>
    </>
  );
}
