"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background">
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          background:
            "radial-gradient(60% 40% at 0% 0%, rgba(56, 139, 253, 0.06), transparent), radial-gradient(50% 40% at 100% 100%, rgba(63, 185, 80, 0.05), transparent)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,246,252,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(240,246,252,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
