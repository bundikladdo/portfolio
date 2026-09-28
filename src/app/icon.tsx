import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#26251e",
          color: "#f7f7f4",
          fontSize: 18,
          fontStyle: "italic",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        K
      </div>
    ),
    size,
  );
}
