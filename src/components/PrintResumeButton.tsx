"use client";

export function PrintResumeButton() {
  return <button type="button" className="btn btn-secondary" onClick={() => window.print()}>Print / save PDF</button>;
}
