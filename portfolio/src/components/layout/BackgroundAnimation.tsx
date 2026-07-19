/**
 * Axiom Background Animation
 * Fixed layer behind all page content — animated gradient orbs + scan line + grain.
 * Completely non-interactive (pointer-events-none).
 */
const BackgroundAnimation = () => (
  <div
    className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    aria-hidden="true"
  >
    {/* ── Dot grid ───────────────────────────────────────────────── */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(181,255,77,0.04) 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
    />

    {/* ── Orb 1 — Large lime, top-left ───────────────────────────── */}
    <div
      className="absolute rounded-full will-change-transform animate-orb-1"
      style={{
        top: "-25%",
        left: "-15%",
        width: "75vw",
        height: "75vw",
        background:
          "radial-gradient(circle, rgba(181,255,77,0.065) 0%, rgba(181,255,77,0.02) 45%, transparent 70%)",
      }}
    />

    {/* ── Orb 2 — Rose, bottom-right ────────────────────────────── */}
    <div
      className="absolute rounded-full will-change-transform animate-orb-2"
      style={{
        bottom: "-30%",
        right: "-15%",
        width: "60vw",
        height: "60vw",
        background:
          "radial-gradient(circle, rgba(255,59,107,0.055) 0%, rgba(255,59,107,0.015) 45%, transparent 70%)",
      }}
    />

    {/* ── Orb 3 — Violet, centre-right ──────────────────────────── */}
    <div
      className="absolute rounded-full will-change-transform animate-orb-3"
      style={{
        top: "20%",
        right: "5%",
        width: "40vw",
        height: "40vw",
        background:
          "radial-gradient(circle, rgba(124,58,237,0.05) 0%, rgba(124,58,237,0.012) 45%, transparent 70%)",
      }}
    />

    {/* ── Orb 4 — Small lime, bottom-left ───────────────────────── */}
    <div
      className="absolute rounded-full will-change-transform animate-orb-4"
      style={{
        bottom: "5%",
        left: "5%",
        width: "28vw",
        height: "28vw",
        background:
          "radial-gradient(circle, rgba(181,255,77,0.04) 0%, transparent 65%)",
      }}
    />

    {/* ── Orb 5 — Tiny rose accent, top-right ───────────────────── */}
    <div
      className="absolute rounded-full will-change-transform animate-orb-5"
      style={{
        top: "5%",
        right: "15%",
        width: "18vw",
        height: "18vw",
        background:
          "radial-gradient(circle, rgba(255,59,107,0.04) 0%, transparent 65%)",
      }}
    />

    {/* ── Scan line ──────────────────────────────────────────────── */}
    <div
      className="absolute top-0 left-0 right-0 h-px animate-scan-line"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(181,255,77,0.0) 10%, rgba(181,255,77,0.22) 35%, rgba(181,255,77,0.38) 50%, rgba(181,255,77,0.22) 65%, rgba(181,255,77,0.0) 90%, transparent 100%)",
        boxShadow: "0 0 8px rgba(181,255,77,0.15)",
      }}
    />

    {/* ── Horizontal grid lines — very subtle ───────────────────── */}
    {[15, 35, 55, 75, 95].map((pct) => (
      <div
        key={pct}
        className="absolute left-0 right-0 h-px"
        style={{
          top: `${pct}%`,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(181,255,77,0.025) 50%, transparent 100%)",
        }}
      />
    ))}

    {/* ── Grain texture ─────────────────────────────────────────── */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        backgroundSize: "256px 256px",
      }}
    />
  </div>
);

export default BackgroundAnimation;
