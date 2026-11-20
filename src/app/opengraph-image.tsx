import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, product designer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link preview shown when the portfolio is shared on LinkedIn, WhatsApp, email, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f7f7f4",
          color: "#26251e",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#6b6a64" }}>
          kartikjangid.vercel.app
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 44, marginTop: 12 }}>
            Product designer at Autodeus Technologies (Reepl)
          </div>
          <div style={{ fontSize: 32, marginTop: 28, color: "#4a4943", lineHeight: 1.35 }}>
            Redesigned Reepl from a LinkedIn extension into a multi-platform
            social media product, now past ₹1 lakh MRR.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6b6a64" }}>
          Onboarding · Mobile · CRM · AI products
        </div>
      </div>
    ),
    size,
  );
}
