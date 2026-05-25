import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";

export const alt = `${siteConfig.name}, portfolio and software studio`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #0d1117 0%, #161b22 45%, #0d1117 100%)",
          color: "#fff",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#58a6ff",
              boxShadow: "0 0 24px #58a6ff",
            }}
          />
          <span style={{ fontSize: 28, color: "#8b949e", fontWeight: 600 }}>
            Software engineering studio
          </span>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: "#c9d1d9",
            fontWeight: 400,
            maxWidth: 920,
            lineHeight: 1.35,
          }}
        >
          VelocTech Inc. builds production-ready apps with Next.js, React, and AI.
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            gap: 20,
            fontSize: 22,
            color: "#58a6ff",
            fontWeight: 600,
          }}
        >
          <span>Portfolio</span>
          <span style={{ color: "#30363d" }}>·</span>
          <span>Projects</span>
          <span style={{ color: "#30363d" }}>·</span>
          <span>Contact</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
