import { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "alt";
}) {
  return (
    <section className={`section ${variant === "alt" ? "alt" : ""}`}>
      <Container>{children}</Container>
    </section>
  );
}
