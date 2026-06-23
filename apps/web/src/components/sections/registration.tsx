export default function RegistrationSection() {
  return (
    <section id="registration" className="relative py-24 md:py-32">
      {/* ── Background Layers ── */}
      {/* Background is handled globally by .tpt-bg for seamless blending */}

      {/* Circuit-board grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="reg-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#a855f7" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#reg-grid)" />
        </svg>
      </div>

      {/* Ambient glows */}
      <div className="absolute left-1/2 top-[20%] -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute left-1/2 bottom-[10%] -translate-x-1/2 w-[900px] h-[500px] bg-purple-800/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-[10%] top-[40%] w-[400px] h-[400px] bg-[#f43f72]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section header */}
        <div className="text-center mb-8">
          <p className="text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Secure Your Spot
          </p>
          <h2 className="text-[5vw] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-6 tracking-wide uppercase flex flex-col items-center leading-none overflow-visible">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent py-3 -my-2 px-6 whitespace-nowrap">
              Registration
            </span>
          </h2>
        </div>
        
        {/* Registration Ticket with CTA */}
        <div className="relative w-full max-w-[380px] drop-shadow-2xl group transition-transform duration-500 hover:-translate-y-2">
          <img src="/ticket.svg" alt="The Perfect Trajectory Ticket" className="w-full h-auto" />
          
          <div className="absolute bottom-23 left-0 right-0 flex justify-center">
            <a
              href="https://makemypass.com/event/the-perfect-trajectory-4-0"
              target="_blank"
              rel="noopener noreferrer"
              className="reg-cta-btn group/btn relative inline-flex items-center gap-2 px-8 py-3 rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.03]"
            >
              {/* Button background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f43f72] via-[#c026d3] to-[#a855f7] opacity-90 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f43f72] to-[#a855f7] opacity-0 group-hover/btn:opacity-40 blur-xl transition-all duration-500" />

              {/* Shimmer sweep */}
              <div className="absolute inset-0 reg-btn-shimmer pointer-events-none" />

              {/* Border glow */}
              <div className="absolute inset-0 rounded-full border border-white/20 group-hover/btn:border-white/30 transition-all duration-500" />

              {/* Inner shadow for depth */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.2)]" />

              {/* Text */}
              <span className="relative z-10 text-white font-bold text-sm tracking-wide">
                Register on MakeMyPass
              </span>

              {/* Arrow icon */}
              <svg
                className="relative z-10 w-4 h-4 text-white/80 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-purple-400/60 text-sm font-medium tracking-wide">
            Limited spots available • Secure your perfect trajectory
          </p>
        </div>

      </div>
    </section>
  );
}
