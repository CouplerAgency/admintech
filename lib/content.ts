import rawContent from "../content/siteContent.json";

export type ContentBlock = {
  tag: "h1" | "h2" | "h3" | "h4" | "p" | "li";
  text: string;
};

const NAV_WORDS = new Set([
  "EVENTS",
  "KUNNSKAPSBANK",
  "KARTET",
  "FORENINGEN",
  "MANIFEST",
  "Bli en GRC-pionér",
  "Events",
  "Kunnskapsbank",
  "Foreningen",
  "Oversiktskart",
  "Bli en GRC-pionér",
]);

const FOOTER_WORDS = new Set([
  "AdminTech Norge - Foreningen for norsk",
  "GRC-innovasjon og konkurransekraft.",
  "© 2025 All rights reserved.",
  "- Foreningen for norsk",
  "GRC-innovasjon",
  "og konkurransekraft.",
]);

export function getPageBlocks(key: string): ContentBlock[] {
  const blocks = (rawContent as Record<string, ContentBlock[]>)[key] || [];
  const filtered = blocks.filter(
    (block) =>
      !NAV_WORDS.has(block.text) &&
      !FOOTER_WORDS.has(block.text) &&
      block.text !== ""
  );

  const deduped: ContentBlock[] = [];
  for (const block of filtered) {
    const last = deduped[deduped.length - 1];
    if (last && last.text === block.text) {
      continue;
    }
    deduped.push(block);
  }
  return deduped;
}

export function pickText(blocks: ContentBlock[], text: string) {
  return blocks.find((block) => block.text === text)?.text ?? "";
}
