import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <main className="pane pane-lg">
      <h1 className="t-hero">This page isn’t here.</h1>
      <Button href="/" variant="primary" className="mt-8">
        Home
      </Button>
    </main>
  );
}
