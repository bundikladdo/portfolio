import type { Metadata } from "next";
import Script from "next/script";
import { site } from "@/data/site";
import { isIndexable, siteUrl } from "@/lib/site-url";
import "react-h5-audio-player/lib/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title: { default: `${site.name} — ${site.role}`, template: `%s — ${site.name}` },
  description: site.description,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  robots: { index: isIndexable, follow: isIndexable },
  openGraph: { type: "website", locale: "en_IN", siteName: `${site.name} — Portfolio`, title: `${site.name} — Product designer & design engineer`, description: site.description, url: "/" },
  twitter: { card: "summary_large_image", creator: "@bundi_k_laddo", title: `${site.name} — Product designer & design engineer`, description: site.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
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
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="frame">{children}</div>
      </body>
    </html>
  );
}
