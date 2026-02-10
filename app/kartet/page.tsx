import Section from "../../components/Section";
import Button from "../../components/Button";

export default function KartetPage() {
  return (
    <>
      <Section>
        <div style={{ maxWidth: "760px" }}>
          <div className="eyebrow">Oversiktskart</div>
          <h1 className="display">Det norske Admintech-kartet</h1>
          <p className="subtitle">
            En oversikt over norske Admintech-bedrifter som jobber med å skape
            et smartere og mer effektivt økosystem.
          </p>
        </div>
      </Section>
      <Section variant="alt">
        <div className="card">
          <h2 className="headline">Ser du noen som mangler?</h2>
          <p className="subtitle">
            Vil du vite mer om hvordan foreningen jobber? Ta kontakt!
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Button href="mailto:kontakt@admintech.no">Kontakt oss</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
