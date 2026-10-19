import type { ViewText } from "@/data/site";

// Both versions are rendered; globals.css hides the one that doesn't match html[data-view].
export function ViewCopy({ text }: { text: ViewText }) {
  if (typeof text === "string") return text;

  return (
    <>
      <span data-view-only="design">{text.design}</span>
      <span data-view-only="code">{text.code}</span>
    </>
  );
}
