import Button from "../components/Button";
import Container from "../components/Container";
import Section from "../components/Section";
import { getPageBlocks, pickText } from "../lib/content";

export default function HomePage() {
  const blocks = getPageBlocks("index.html");

  const heroLead = pickText(
    blocks,
    "Norske innovatører taper mot globale giganter fordi dagens systemer ikke snakker sammen. Admin Tech Norge er en ny forening som samler ekspertene innen GRC (Governance, Risk & Compliance). Målet er å sette felles tekniske standarder og sikre norsk konkurransekraft."
  );

  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero-grid">
            <div>
              <div className="pill">Norwegian Industry Association</div>
              <h1 className="display">
                Vi definerer fremtidens GRC-tech i Norge.
              </h1>
              <p className="subtitle">{heroLead}</p>
              <div style={{ display: "flex", gap: "1rem", marginTop: "1.8rem" }}>
                <Button href="/grc-pioner-programmet">Meld interesse som pionér</Button>
                <Button href="/om-foreningen" variant="ghost">
                  Hvem er Admin Tech Norge?
                </Button>
              </div>
            </div>
            <div className="card">
              <div className="eyebrow">AdminTech Norge</div>
              <p style={{ marginTop: "1rem", color: "var(--color-ink-muted)" }}>
                Norske styrer har grodd fast i en bakoverlent kontrollkultur.
              </p>
              <p style={{ marginTop: "1rem", color: "var(--color-ink-muted)" }}>
                Nå blåser Nikolai Fasting til nasjonal dugnad med{" "}
                <strong>Admin Tech Norge</strong>. Målet? Å redde næringslivet
                fra «death by a thousand dashboards».
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div style={{ maxWidth: "720px" }}>
          <h2 className="headline">
            Bransjen er fragmentert. Vi bygger den sterkere, sammen.
          </h2>
          <p className="subtitle">
            Norske innovatører konkurrerer daglig mot globale giganter. Ved å
            samles som en &quot;cluster&quot;, skaper vi nettverkseffekter,
            øker synligheten og bygger en sterkere nasjonal bransje rustet for
            eksport.
          </p>
        </div>
        <div className="grid" style={{ marginTop: "2rem" }}>
          <div className="card">
            <div className="eyebrow">Fjerne teknisk friksjon.</div>
            <p style={{ marginTop: "0.8rem", color: "var(--color-ink-muted)" }}>
              Systemer som ikke snakker sammen er det største hinderet for
              innovasjon. Vårt fremste mål er å etablere felles, fleksible
              standarder for datautveksling. Mindre friksjon betyr lavere
              utviklingskostnader for alle.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Sikre norsk konkurransekraft.</div>
            <p style={{ marginTop: "0.8rem", color: "var(--color-ink-muted)" }}>
              Norske innovatører konkurrerer daglig mot globale giganter. Ved å
              samles som en &quot;cluster&quot;, skaper vi nettverkseffekter ,
              øker synligheten og bygger en sterkere nasjonal bransje rustet
              for eksport.
            </p>
          </div>
          <div className="card">
            <div className="eyebrow">Bygge bro mellom små og store.</div>
            <p style={{ marginTop: "0.8rem", color: "var(--color-ink-muted)" }}>
              Vi tilrettelegger for systematisk samhandling mellom de små,
              spisse fagmiljøene og de store &quot;lokomotivene&quot;. Slik
              unngår vi at de små blir &quot;rævkjørt&quot;, og de store får
              tilgang på den beste innovasjonen.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="alt">
        <div className="cta">
          <div>
            <div className="eyebrow">Community</div>
            <h2 className="headline">La oss bygge fremtidens GRC sammen.</h2>
            <p className="subtitle">
              Bli med som en av de første medlemmene i Admintech Norge.
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button href="/grc-pioner-programmet">Meld interesse som pionér</Button>
            <Button href="/kunnskap" variant="ghost">
              Kunnskapsbank
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
