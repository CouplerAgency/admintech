import Link from "next/link";
import Container from "./Container";

const footerLinks = [
  { href: "/kunnskap", label: "Kunnskapsbank" },
  { href: "/om-foreningen", label: "Foreningen" },
  { href: "/grc-pioner-programmet", label: "Bli en GRC-pionér" },
  { href: "/kartet", label: "Oversiktskart" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-border)" }}>
      <Container>
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            padding: "2.5rem 0",
          }}
        >
          <div>
            <div style={{ fontWeight: 600 }}>
              AdminTech Norge - Foreningen for norsk
            </div>
            <div style={{ color: "var(--color-ink-muted)" }}>
              GRC-innovasjon og konkurransekraft.
            </div>
          </div>
          <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div style={{ color: "var(--color-ink-subtle)" }}>
            © 2025 All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
