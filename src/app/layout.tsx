import type { Metadata } from "next";
import Script from "next/script";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ViewSwitch } from "@/components/ViewSwitch";
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
    "Product designer in Jaipur, working on Reepl at Autodeus Technologies. I take fuzzy things, like AI output, and design them into flows people can understand and check.",
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
        <Script id="view-init" strategy="beforeInteractive">
          {`try {
            const requestedView = new URLSearchParams(window.location.search).get("view");
            const savedView = sessionStorage.getItem("portfolio-view");
            const view = requestedView === "code" || requestedView === "design"
              ? requestedView
              : savedView === "code" ? "code" : "design";
            document.documentElement.dataset.view = view;
            sessionStorage.setItem("portfolio-view", view);
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
          <ViewSwitch />
        </SmoothScroll>
      </body>
    </html>
  );
}
