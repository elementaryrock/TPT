import marianLogo from "@/logos/marian-logo.png";
import iicLogo from "@/logos/iic-logo.png";
import legacyLogo from "@/logos/legacy-logo.png";
import iedcLogo from "@/logos/iedc-logo.png";
import inspiraLogo from "@/logos/inspira-logo.png";

const organisers = [
  {
    name: "Marian Engineering College",
    role: "Host Institution",
    description:
      "The premier engineering institution hosting TPT 4.0 in Trivandrum.",
    logo: marianLogo,
    accent: "#a855f7",
    accentRgb: "168, 85, 247",
    featured: true,
  },
  {
    name: "Institution's Innovation Council",
    role: "Supporting Body",
    description:
      "Fostering innovation and startup culture across educational institutions.",
    logo: iicLogo,
    accent: "#c084fc",
    accentRgb: "192, 132, 252",
    featured: false,
  },
  {
    name: "Legacy IEDC",
    role: "Organiser",
    description:
      "The IEDC chapter driving the legacy of innovation and entrepreneurship.",
    logo: legacyLogo,
    accent: "#a78bfa",
    accentRgb: "167, 139, 250",
    featured: false,
  },
  {
    name: "IEDC Kerala",
    role: "Organiser",
    description:
      "Empowering student-led innovation ecosystems across Kerala.",
    logo: iedcLogo,
    accent: "#f43f72",
    accentRgb: "244, 63, 114",
    featured: false,
  },
  {
    name: "Inspira Marian",
    role: "Co-Organiser",
    description:
      "The student community powering creative and technical excellence.",
    logo: inspiraLogo,
    accent: "#818cf8",
    accentRgb: "129, 140, 248",
    featured: false,
  },
];

export default function OrganisersSection() {
  const featured = organisers.find((o) => o.featured);
  const rest = organisers.filter((o) => !o.featured);

  return (
    <section
      id="organisers"
      className="relative py-16 sm:py-24 md:py-36 overflow-hidden"
    >
      {/* ── Background Layers ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#150826] via-[#120620] to-[#0d0518] pointer-events-none" />

      {/* Circuit-board grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="org-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#a855f7" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#org-grid)" />
        </svg>
      </div>

      {/* Ambient glows */}
      <div className="absolute left-1/2 top-[20%] -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute left-1/2 bottom-[10%] -translate-x-1/2 w-[900px] h-[500px] bg-purple-800/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-[10%] top-[40%] w-[400px] h-[400px] bg-[#f43f72]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* ── Section Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 md:mb-24">
          <p className="text-purple-400/60 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-5">
            The Team Behind TPT
          </p>
          <h2 className="font-bold font-display mb-6 tracking-wide uppercase flex flex-col items-center leading-none overflow-visible">
            <span className="inline-block text-lg sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-1.5 sm:mb-3 py-2 -my-1 px-4">
              The
            </span>
            <span className="inline-block text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 py-3 -my-2 px-6">
              Architects{"\u200A"}
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-20 bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rotate-45 border border-purple-400/60" />
            <div className="h-px w-12 sm:w-32 bg-gradient-to-r from-purple-400 to-purple-600" />
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rotate-45 border border-purple-600/60" />
            <div className="h-px w-8 sm:w-20 bg-gradient-to-l from-transparent to-purple-600/60" />
          </div>
          <p className="text-purple-200/40 text-xs sm:text-base max-w-md mx-auto font-sans">
            The visionaries and institutions powering The&nbsp;Perfect&nbsp;Trajectory
          </p>
        </div>

        {/* ── Featured Host Institution ── */}
        {featured && (
          <div className="flex justify-center mb-10 sm:mb-16 md:mb-20">
            <div className="relative group w-full max-w-3xl org-card-3d">
              {/* Double gradient border — sharp + glow */}
              <div className="absolute -inset-[2px] rounded-2xl org-card-border opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-[3px] rounded-2xl org-card-border opacity-15 group-hover:opacity-35 blur-md transition-opacity duration-500" />

              {/* Ambient glow */}
              <div className="absolute -inset-12 rounded-[32px] bg-purple-600/[0.06] blur-3xl group-hover:bg-purple-500/[0.14] transition-all duration-700 pointer-events-none" />

              {/* Card shell */}
              <div className="org-card-inner relative rounded-2xl bg-[#0a0312]/95 backdrop-blur-xl overflow-hidden org-scanline shadow-[0_8px_80px_rgba(168,85,247,0.12)] group-hover:shadow-[0_16px_100px_rgba(168,85,247,0.22)] transition-all duration-500">
                {/* Top holo bar */}
                <div className="h-[2px] w-full org-holo-badge" />
                <div className="org-featured-beam" />

                <div className="relative p-5 sm:p-9 md:p-12">
                  {/* Inner gradients */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.05] via-transparent to-purple-900/[0.08] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#f43f72]/[0.02] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-purple-500/[0.03] org-ambient-glow pointer-events-none" />

                  {/* Corner marks */}
                  <div className="org-corner-marks absolute inset-0 rounded-2xl" />

                  <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5 sm:gap-10">
                    {/* Logo */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute -inset-8 rounded-full bg-purple-500/[0.05] blur-2xl group-hover:bg-purple-500/[0.18] transition-all duration-700" />
                      <div className="absolute -inset-4 rounded-2xl border border-purple-500/[0.06] group-hover:border-purple-400/25 transition-all duration-500" />

                      <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-xl bg-gradient-to-br from-purple-500/[0.1] to-purple-900/[0.2] border border-purple-400/15 flex items-center justify-center p-3 sm:p-4 group-hover:border-purple-400/40 transition-all duration-500 shadow-[inset_0_0_20px_rgba(168,85,247,0.05)]">
                        <img
                          src={featured.logo}
                          alt={featured.name}
                          className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.4)] group-hover:drop-shadow-[0_0_24px_rgba(168,85,247,0.7)] transition-all duration-500"
                        />
                      </div>

                      <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#0a0312] border-2 border-emerald-400/60 flex items-center justify-center shadow-[0_0_12px_rgba(52,211,153,0.25)]">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 org-pulse" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="text-center sm:text-left flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-purple-400 bg-purple-400/[0.08] px-3 py-1 rounded-md border border-purple-400/15 w-fit mx-auto sm:mx-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 org-pulse" />
                          {featured.role}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white font-heading group-hover:text-purple-50 transition-colors duration-500 leading-tight">
                        {featured.name}
                      </h3>
                      <p className="text-sm sm:text-base text-purple-200/45 leading-relaxed max-w-lg group-hover:text-purple-200/65 transition-colors duration-500">
                        {featured.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom data strip */}
                  <div className="relative z-10 mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-purple-500/[0.1] flex items-center justify-end gap-3">
                    <div className="flex items-center gap-1.5">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className="w-[3px] rounded-full"
                          style={{
                            height: `${6 + i * 3}px`,
                            background: i < 6
                              ? `rgba(168, 85, 247, ${0.15 + i * 0.12})`
                              : "rgba(168,85,247,0.9)",
                            boxShadow: i >= 5 ? "0 0 6px rgba(168,85,247,0.4)" : "none",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
              </div>
            </div>
          </div>
        )}

        {/* ── Organiser Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {rest.map((org, index) => (
            <div
              key={org.name}
              className="org-card group relative org-card-3d"
              style={{
                animationDelay: `${150 + index * 120}ms`,
                "--card-accent": org.accent,
              } as React.CSSProperties}
            >
              {/* Hover glow behind card */}
              <div
                className="absolute -inset-5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 30%, rgba(${org.accentRgb}, 0.12), transparent 60%)`,
                }}
              />

              {/* Animated gradient border — visible on hover */}
              <div
                className="org-grid-border"
                style={{ "--card-accent": org.accent } as React.CSSProperties}
              />

              {/* Card body */}
              <div className="org-card-inner relative h-full rounded-2xl border border-white/[0.06] bg-[#0a0312]/90 backdrop-blur-md overflow-hidden group-hover:border-white/[0.1] shadow-[0_4px_40px_rgba(0,0,0,0.3)] group-hover:shadow-[0_12px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(168,85,247,0.08)]">
                {/* Top accent gradient bar */}
                <div
                  className="h-[2px] w-full opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent 5%, rgba(${org.accentRgb}, 0.3), rgba(${org.accentRgb}, 0.8), rgba(${org.accentRgb}, 0.3), transparent 95%)`,
                  }}
                />

                {/* Glow bleed from top bar */}
                <div
                  className="absolute top-0 left-[15%] right-[15%] h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl"
                  style={{ background: `rgba(${org.accentRgb}, 0.06)` }}
                />

                {/* Radiant inner glow from top-center */}
                <div
                  className="absolute -top-[40%] left-[10%] right-[10%] h-[60%] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"
                  style={{ background: `rgba(${org.accentRgb}, 0.04)` }}
                />

                {/* Corner marks */}
                <div className="org-corner-marks absolute inset-0 rounded-2xl" />

                <div className="relative z-10 p-4 sm:p-6 flex flex-col h-full">
                  {/* Logo + role row */}
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    {/* Logo with glow treatment */}
                    <div className="relative">
                      {/* Outer glow */}
                      <div
                        className="absolute -inset-3 rounded-xl opacity-0 group-hover:opacity-50 transition-all duration-700 blur-xl"
                        style={{ background: `rgba(${org.accentRgb}, 0.5)` }}
                      />
                      {/* Border ring on hover */}
                      <div
                        className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                        style={{ border: `1px solid rgba(${org.accentRgb}, 0.15)` }}
                      />
                      <div
                        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center p-2.5 border transition-all duration-500 shadow-[inset_0_0_12px_rgba(168,85,247,0.03)] group-hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.08)]"
                        style={{
                          borderColor: `rgba(${org.accentRgb}, 0.12)`,
                          background: `linear-gradient(135deg, rgba(${org.accentRgb}, 0.06), rgba(${org.accentRgb}, 0.02))`,
                        }}
                      >
                        <img
                          src={org.logo}
                          alt={org.name}
                          className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.35)]"
                        />
                      </div>
                    </div>

                    {/* Role badge — pill style */}
                    <span
                      className="text-[7px] sm:text-[8px] font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase px-2 py-1 sm:px-2.5 sm:py-1 rounded-full mt-1.5 transition-all duration-500 border"
                      style={{
                        color: org.accent,
                        background: `rgba(${org.accentRgb}, 0.06)`,
                        borderColor: `rgba(${org.accentRgb}, 0.15)`,
                      }}
                    >
                      {org.role}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-[13px] sm:text-lg font-bold text-white/90 font-heading mb-1.5 sm:mb-2 group-hover:text-white transition-colors duration-300 leading-tight">
                    {org.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[10px] sm:text-[13px] text-purple-200/30 leading-relaxed flex-1 group-hover:text-purple-200/55 transition-colors duration-500">
                    {org.description}
                  </p>

                  {/* Bottom data readout with segmented bar */}
                  <div className="mt-3 sm:mt-5 pt-3 sm:pt-4 border-t border-white/[0.04] group-hover:border-white/[0.08] transition-colors duration-500">
                    <div className="flex items-center gap-2">
                      {/* Dot */}
                      <div
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full org-pulse flex-shrink-0"
                        style={{ color: org.accent, background: org.accent }}
                      />

                      {/* Segmented progress bar */}
                      <div className="flex-1 flex gap-[2px]">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="h-[3px] flex-1 rounded-full transition-all duration-700"
                            style={{
                              background:
                                i <= 1 + index
                                  ? `rgba(${org.accentRgb}, ${0.3 + i * 0.15})`
                                  : "rgba(255,255,255,0.04)",
                              boxShadow:
                                i === 1 + index
                                  ? `0 0 6px rgba(${org.accentRgb}, 0.3)`
                                  : "none",
                            }}
                          />
                        ))}
                      </div>

                      {/* Node ID */}
                      <span className="text-[7px] sm:text-[8px] font-mono text-white/15 tracking-[0.12em] uppercase group-hover:text-white/25 transition-colors duration-500 flex-shrink-0">
                        N{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Network Connector Lines ── */}
        <div className="mt-10 sm:mt-16 md:mt-20 flex flex-col items-center">
          {/* Vertical connector */}
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-purple-500/40 to-purple-500/70" />

          {/* Center diamond */}
          <div className="relative">
            <div className="w-3.5 h-3.5 rotate-45 border border-purple-500/50 bg-[#0d0518]" />
            <div className="absolute inset-0 w-3.5 h-3.5 rotate-45 bg-purple-500/25 blur-lg" />
          </div>

          {/* Network status */}
          <div className="mt-5 flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full bg-purple-400/40"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
            <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] uppercase text-white/15">
              All nodes synchronized
            </p>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full bg-purple-400/40"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
