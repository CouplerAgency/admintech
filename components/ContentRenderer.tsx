import { ContentBlock } from "../lib/content";

export default function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="longform">
      {blocks.map((block, index) => {
        if (block.tag === "h1") {
          return <h1 key={`${block.text}-${index}`}>{block.text}</h1>;
        }
        if (block.tag === "h2") {
          return <h2 key={`${block.text}-${index}`}>{block.text}</h2>;
        }
        if (block.tag === "h3") {
          return <h3 key={`${block.text}-${index}`}>{block.text}</h3>;
        }
        return <p key={`${block.text}-${index}`}>{block.text}</p>;
      })}
    </div>
  );
}
