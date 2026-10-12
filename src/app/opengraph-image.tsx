import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = "Kartik Jangid — Product designer & design engineer. Selected work in AI, SaaS, and mobile.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#f7f7f4", color: "#26251e", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 30 }}>{site.name} · Jaipur, India</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 600 }}>Product designer &amp;</div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 600 }}>design engineer.</div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 28, color: "#5a5852" }}>From the first flow to the shipped interface.</div>
      </div>
      <div style={{ display: "flex", fontSize: 24 }}>Selected work · AI / SaaS / Mobile</div>
    </div>,
    size,
  );
}
