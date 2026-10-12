import type { Metadata } from "next";
import Script from "next/script";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/data/site";
import "lenis/dist/lenis.css";
import "react-h5-audio-player/lib/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name}, ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Product designer and builder in Jaipur. Design engineer at Reepl. Founder of Garga. I take fuzzy things — charts, AI, tools — and make them checkable.",
  authors: [{ name: site.name }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try {
            const savedTheme = localStorage.getItem("portfolio-theme");
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            const theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme;
            document.documentElement.dataset.theme = theme;
            document.documentElement.style.colorScheme = theme;
          } catch {}`}
        </Script>
      </head>
      <body>
        <SmoothScroll>
          <a className="sr-only focus:not-sr-only" href="#main">
            Skip to content
          </a>
          <div className="frame">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
