import Section from "../../components/Section";
import ContentRenderer from "../../components/ContentRenderer";
import Button from "../../components/Button";
import { getPageBlocks } from "../../lib/content";

export default function GrpPionerPage() {
  const blocks = getPageBlocks("grc-pioner-programmet/index.html");
  const [first, ...rest] = blocks;

  return (
    <>
      <Section>
        <div style={{ maxWidth: "820px" }}>
          <div className="eyebrow">GRC-pionérer</div>
          <h1 className="display">{first?.text}</h1>
          <p className="subtitle">
            Admin-tech bransjen er fragmentert. For å bygge et reelt økosystem,
            starter Admin Tech Norway med et skarpt GRC-fokus og de rette
            folkene. Vi kaller dem “GRC-Pionérer”.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Button href="mailto:kontakt@admintech.no">
              Meld din interesse som Pionér
            </Button>
          </div>
        </div>
      </Section>
      <Section variant="alt">
        <ContentRenderer blocks={rest} />
      </Section>
    </>
  );
}
