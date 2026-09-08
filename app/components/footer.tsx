// Footer.jsx — v12. Light + cohesive. A gradient rises from the cream page into
// a soft dusk-blue (water-at-dusk / space horizon) so it BLENDS instead of
// slamming into a dark block. Near-monochrome ink on light; ONE serif hero line;
// email is the single teal pop. Constellations kept but drawn in soft ink so they
// read as delicate texture. Comet gone — replaced with a small 4-point star (or
// remove it entirely, see note). Airy, wide, low vertical footprint.

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden text-[#26303A]"
      style={{
        // cream at the seam → soft powder blue at the base. Blends with the page above.
        background:
          "linear-gradient(180deg, #FAF6EF 0%, #EAF1F3 42%, #D6E6EC 100%)",
        fontFamily:
          '"Geist", "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
      }}
    >
      {/* delicate constellations in soft ink — texture, not clutter */}
      <Constellation className="pointer-events-none absolute left-6 top-10 w-32 opacity-40 md:left-14" />
      <Constellation className="pointer-events-none absolute right-8 bottom-16 w-24 opacity-30 -scale-x-100 md:right-16" />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-8 md:px-12">
        {/* TOP ROW: sign-off label left, ghost actions right */}
        <div className="flex items-start justify-between gap-6">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#3E7C8C]">
            <Star className="h-3 w-3" /> End of transmission
          </p>

          <div className="flex items-center gap-2.5">
            <GhostPill href="mailto:you@email.com" label="Email">
              <MailIcon />
            </GhostPill>
            <GhostPill href="https://linkedin.com/in/…" label="LinkedIn">
              <InIcon />
            </GhostPill>
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full border border-[#26303A]/20 px-4 py-2 text-xs font-medium text-[#26303A]/80 transition hover:border-[#3E7C8C] hover:text-[#3E7C8C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3E7C8C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EAF1F3]"
            >
              ↑ Back to top
            </a>
          </div>
        </div>

        {/* HERO: one serif line. email is the single teal pop, inline. */}
        <div className="mt-10 max-w-5xl">
          <h2 className="font-serif text-[36px] font-light leading-[1.04] tracking-tight text-[#1F2A33] md:text-[58px]">
            You&apos;ve reached the edge of my galaxy.
          </h2>

          <a
            href="mailto:you@email.com"
            className="group mt-6 inline-flex items-baseline gap-2 text-lg font-medium text-[#2E6E7E] transition hover:text-[#3E7C8C] md:text-xl"
          >
            Let&apos;s build something —
            <span className="underline decoration-[#2E6E7E]/30 underline-offset-4 transition group-hover:decoration-[#3E7C8C]">
              janna.wang@duke.edu
            </span>
            <span className="transition group-hover:translate-x-1">↗</span>
          </a>
        </div>

        {/* META RAIL: status + credit, one full-width baseline */}
        <div className="mt-16 flex flex-col gap-3 border-t border-[#26303A]/12 pt-6 text-xs text-[#26303A]/60 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2 text-[#26303A]/75">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3E7C8C]" />
            Senior @ Duke · Grad Spring 2027
          </span>
          <span>Made with 🍵 🎧 + Next.js · © 2026 Janna Wang</span>
        </div>
      </div>
    </footer>
  );
}


type GhostPillProps = {
  href: string;
  label?: string;
  children: React.ReactNode;
};

function GhostPill({ href, label, children }: GhostPillProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition-colors hover:border-white/40 hover:text-white"
    >
      {children}
    </a>
  );
}


// Small 4-point star — clean, on-theme, replaces the comet. Scales via className.
function Star({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
    </svg>
  );
}

// Constellation — soft ink lines + stars, delicate on a light ground.
function Constellation({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 60"
      fill="none"
      stroke="#26303A"
      strokeWidth="0.8"
    >
      <polyline points="5,20 45,5 60,40 95,15 112,34" opacity="0.4" />
      <circle cx="5" cy="20" r="1.8" fill="#26303A" stroke="none" />
      <circle cx="45" cy="5" r="2.2" fill="#26303A" stroke="none" />
      <circle cx="60" cy="40" r="1.8" fill="#26303A" stroke="none" />
      <circle cx="95" cy="15" r="2.4" fill="#3E7C8C" stroke="none" />
      <circle cx="112" cy="34" r="1.6" fill="#26303A" stroke="none" />
      <circle cx="30" cy="42" r="0.9" fill="#26303A" stroke="none" opacity="0.6" />
      <circle cx="78" cy="30" r="0.9" fill="#26303A" stroke="none" opacity="0.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function InIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
    </svg>
  );
}
