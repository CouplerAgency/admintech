import Link from "next/link";
import Container from "./Container";

const navLinks = [
  { href: "/kunnskap", label: "Kunnskapsbank" },
  { href: "/kartet", label: "Kartet" },
  { href: "/om-foreningen", label: "Foreningen" },
  { href: "/manifest", label: "Manifest" },
  { href: "/grc-pioner-programmet", label: "Bli en GRC-pionér" },
];

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid var(--color-border)" }}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.4rem 0",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ fontWeight: 700, letterSpacing: "0.02em" }}>
            AdminTech Norge
          </Link>
          <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="tag">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
