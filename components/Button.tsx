import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  return (
    <Link href={href} className={`button ${variant}`}>
      {children}
    </Link>
  );
}
