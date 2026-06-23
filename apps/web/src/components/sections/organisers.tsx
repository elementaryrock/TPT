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
    accent: "#f43f72",
    featured: true,
  },
  {
    name: "Institution's Innovation Council",
    role: "Supporting Body",
    description:
      "Fostering innovation and startup culture across educational institutions.",
    logo: iicLogo,
    accent: "#a855f7",
    featured: false,
  },
  {
    name: "Legacy IEDC",
    role: "Organiser",
    description:
      "The IEDC chapter driving the legacy of innovation and entrepreneurship.",
    logo: legacyLogo,
    accent: "#6366f1",
    featured: false,
  },
  {
    name: "IEDC Kerala",
    role: "Organiser",
    description:
      "Empowering student-led innovation ecosystems across Kerala.",
    logo: iedcLogo,
    accent: "#f43f72",
    featured: false,
  },
  {
    name: "Inspira Marian",
    role: "Co-Organiser",
    description:
      "The student community powering creative and technical excellence.",
    logo: inspiraLogo,
    accent: "#a855f7",
    featured: false,
  },
];

export default function OrganisersSection() {
  const featured = organisers.find((o) => o.featured);
  const rest = organisers.filter((o) => !o.featured);

  return (
    <section
      id="organisers"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* ── Background Layers ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#150826] via-[#120620] to-[#0d0518] pointer-events-none" />

      {/* Circuit-board grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="org-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#a855f7"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#org-grid)" />
        </svg>
      </div>

      {/* Radial pink glow */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 w-[600px] h-[600px] bg-[#f43f72]/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/[0.04] rounded-full blur-[100px] pointer-events-none" />

      {/* ── Section Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-purple-400/60 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-5">
            The Team Behind TPT
          </p>
          <h2 className="font-bold font-display mb-6 tracking-wide uppercase text-center leading-none overflow-visible">
            <span className="block text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-2 sm:mb-3 py-2 -my-1">
              The
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 py-3 -my-2">
              Architects
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-2 h-2 rotate-45 border border-purple-400/60" />
            <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-purple-400 to-purple-600" />
            <div className="w-2 h-2 rotate-45 border border-purple-600/60" />
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-purple-600/60" />
          </div>
          <p className="text-purple-200/40 text-sm sm:text-base max-w-md mx-auto font-sans">
            The visionaries and institutions powering The&nbsp;Perfect&nbsp;Trajectory
          </p>
        </div>

        {/* ── Featured Host Institution ── */}
        {featured && (
          <div className="flex justify-center mb-16 md:mb-20">
            <div className="relative group w-full max-w-2xl">
              {/* Outer animated border */}
              <div className="absolute -inset-px rounded-2xl org-card-border opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />

              {/* Card */}
              <div className="relative rounded-2xl border border-[#f43f72]/30 bg-[#0d0518]/90 backdrop-blur-xl p-1 overflow-hidden org-scanline shadow-[0_0_40px_rgba(244,63,114,0.12)]">
                <div className="rounded-xl bg-gradient-to-br from-[#0d0518] to-[#150826] p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                    {/* Logo container */}
                    <div className="relative flex-shrink-0">
                      <div
                        className="absolute -inset-3 rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-lg"
                        style={{
                          background: `radial-gradient(circle, ${featured.accent}40, transparent 70%)`,
                        }}
                      />
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl border border-[#f43f72]/20 bg-white/[0.03] flex items-center justify-center p-3 group-hover:border-[#f43f72]/40 transition-colors duration-500">
                        <img
                          src={featured.logo}
                          alt={featured.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {/* Status indicator */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0d0518] border-2 border-[#f43f72] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f43f72] org-pulse" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="text-center sm:text-left flex-1">
                      <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#f43f72]/70 mb-1.5">
                        {featured.role}
                      </p>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-heading mb-2 group-hover:text-[#f43f72]/90 transition-colors duration-300">
                        {featured.name}
                      </h3>
                      <p className="text-sm text-purple-200/50 leading-relaxed max-w-md">
                        {featured.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom data bar */}
                  <div className="mt-6 pt-5 border-t border-[#f43f72]/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <span className="text-[9px] font-mono tracking-wider text-white/15 uppercase">
                        Status: Active
                      </span>
                      <span className="text-[9px] font-mono tracking-wider text-[#f43f72]/40 uppercase org-flicker">
                        ■ Connected
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-3 rounded-full transition-all duration-300"
                          style={{
                            background:
                              i < 4
                                ? `linear-gradient(to top, ${featured.accent}, ${featured.accent}80)`
                                : "rgba(255,255,255,0.05)",
                            opacity: 0.4 + i * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Organiser Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {rest.map((org, index) => (
            <div
              key={org.name}
              className="org-card group relative"
              style={{ animationDelay: `${150 + index * 120}ms` }}
            >
              {/* Animated border glow on hover */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-60 transition-all duration-500 blur-[1px]"
                style={{
                  background: `linear-gradient(135deg, ${org.accent}, transparent, ${org.accent})`,
                }}
              />

              {/* Card inner */}
              <div className="relative h-full rounded-2xl border border-[#f43f72]/20 bg-[#0d0518]/80 backdrop-blur-md overflow-hidden group-hover:border-[#f43f72]/40 transition-all duration-500 shadow-[0_0_30px_rgba(244,63,114,0.06)]">
                {/* Holographic shimmer top strip */}
                <div className="h-px w-full org-holo-badge" />

                {/* Hover glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${org.accent}08, transparent 70%)`,
                    }}
                  />
                </div>

                <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                  {/* Logo + Role */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="relative">
                      <div
                        className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-md"
                        style={{ background: org.accent }}
                      />
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center p-2 group-hover:border-[#f43f72]/30 transition-all duration-500">
                        <img
                          src={org.logo}
                          alt={org.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Role badge — clean sans-serif */}
                    <span
                      className="text-[9px] sm:text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-md"
                      style={{
                        color: `${org.accent}aa`,
                        background: `${org.accent}0a`,
                      }}
                    >
                      {org.role}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-2 group-hover:text-purple-100 transition-colors duration-300 leading-tight">
                    {org.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-purple-200/40 leading-relaxed flex-1">
                    {org.description}
                  </p>

                  {/* Bottom connector line */}
                  <div className="mt-5 pt-4 border-t border-[#f43f72]/10 flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full org-pulse"
                      style={{ background: org.accent }}
                    />
                    <div
                      className="flex-1 h-px"
                      style={{
                        background: `linear-gradient(to right, ${org.accent}30, transparent)`,
                      }}
                    />
                    <span className="text-[8px] font-mono text-white/15 tracking-wider uppercase">
                      Node {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom Connector Bar ── */}
        <div className="mt-16 md:mt-20 flex flex-col items-center">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-purple-500/30 to-purple-500/60" />
          <div className="relative">
            <div className="w-3 h-3 rotate-45 border border-purple-500/40 bg-[#0d0518]" />
            <div className="absolute inset-0 w-3 h-3 rotate-45 bg-purple-500/20 blur-md" />
          </div>
          <div className="mt-4 text-center">
            <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.3em] uppercase text-white/15">
              All nodes synchronized • TPT 4.0 Network Active
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
