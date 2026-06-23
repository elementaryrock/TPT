export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Hero wave background — layered organic waves matching poster */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a3060" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#6b4d8a" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="heroWave2" x1="0%" y1="20%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#6b4d8a" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b6aae" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="heroWave3" x1="0%" y1="30%" x2="100%" y2="70%">
              <stop offset="0%" stopColor="#9b7cb8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#c9b5d9" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="heroWave4" x1="0%" y1="40%" x2="100%" y2="60%">
              <stop offset="0%" stopColor="#c9b5d9" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#e8d8ef" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="heroWave5" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#d8c8e8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#e8d8ef" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Wave 1 — deepest */}
          <path
            d="M-100,200 C100,120 300,300 550,250 C800,200 950,80 1150,170 C1350,260 1450,160 1600,220 L1600,950 L-100,950 Z"
            fill="url(#heroWave1)"
            className="animate-wave-slow"
          />
          {/* Wave 2 */}
          <path
            d="M-100,340 C150,260 350,410 600,360 C850,310 1000,190 1200,280 C1400,370 1500,300 1600,350 L1600,950 L-100,950 Z"
            fill="url(#heroWave2)"
            className="animate-wave-mid"
          />
          {/* Wave 3 — mid lavender */}
          <path
            d="M-100,460 C200,380 400,510 650,450 C900,390 1060,310 1260,400 C1460,490 1520,420 1600,470 L1600,950 L-100,950 Z"
            fill="url(#heroWave3)"
            className="animate-wave-fast"
          />
          {/* Wave 4 — lighter */}
          <path
            d="M-100,560 C250,490 430,590 680,530 C930,470 1100,400 1280,480 C1460,560 1520,510 1600,560 L1600,950 L-100,950 Z"
            fill="url(#heroWave4)"
            className="animate-wave-slower"
          />
          {/* Wave 5 — lightest pale lavender */}
          <path
            d="M-100,640 C300,580 480,670 720,620 C960,570 1120,510 1300,580 C1480,650 1530,600 1600,640 L1600,950 L-100,950 Z"
            fill="url(#heroWave5)"
            className="animate-wave-fastest"
          />
        </svg>
      </div>

      {/* Floating gradient orbs — subtle depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#6b4d8a]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 right-16 w-80 h-80 bg-[#8b6aae]/8 rounded-full blur-3xl animate-float-delayed" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6b4d8a]/30 bg-[#6b4d8a]/15 backdrop-blur-sm mb-8 animate-fade-in-down">
          <span className="w-2 h-2 rounded-full bg-[#c9b5d9] animate-pulse" />
          <span className="text-[#d8c8e8] text-sm font-medium tracking-wide">
            IEDC Kerala • July 2026
          </span>
        </div>

        {/* Title — using the TPT poster PNG */}
        <div className="mb-6 animate-fade-in-up animation-delay-100">
          <img
            src="/tpt-title.png"
            alt="The Perfect Trajectory"
            className="mx-auto w-full max-w-3xl h-auto brightness-0 invert opacity-90"
            draggable={false}
          />
        </div>

        {/* Version badge */}
        <div className="inline-flex items-center gap-1 px-4 py-1.5 rounded-md bg-[#6b4d8a]/20 border border-[#6b4d8a]/25 mb-6 animate-fade-in-up animation-delay-200">
          <span className="text-[#d8c8e8] text-2xl font-bold font-heading">
            4.0
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-[#d8c8e8]/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-300">
          A <span className="text-white font-semibold">two-day orientation program</span>{" "}
          for newly-elected IEDC Team leads across Kerala, ensuring every team is
          aligned and ready to achieve common goals effectively.
        </p>

        {/* Date & Venue — poster-style rounded cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 animate-fade-in-up animation-delay-400">
          {/* Date card */}
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#2a1b3d]/70 backdrop-blur-md border border-[#6b4d8a]/25 hover:border-[#8b6aae]/40 transition-all duration-300">
            <svg className="w-6 h-6 text-[#c9b5d9] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9b5d9]/60 mb-0.5">
                Date
              </p>
              <p className="text-2xl font-bold text-white font-heading leading-none">
                17, 18
              </p>
              <p className="text-sm font-medium text-[#d8c8e8]/70">JULY 2026</p>
            </div>
          </div>

          {/* Venue card */}
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#2a1b3d]/70 backdrop-blur-md border border-[#6b4d8a]/25 hover:border-[#8b6aae]/40 transition-all duration-300">
            <svg className="w-6 h-6 text-[#c9b5d9] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9b5d9]/60 mb-0.5">
                Venue
              </p>
              <p className="text-lg font-bold text-white font-heading leading-tight">
                Marian Engg.
              </p>
              <p className="text-xl font-black text-white font-heading leading-none">
                College
              </p>
              <p className="text-sm font-medium text-[#d8c8e8]/70">Trivandrum</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://makemypass.com/event/the-perfect-trajectory-4-0"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#6b4d8a] to-[#8b6aae] text-white font-semibold text-lg shadow-lg shadow-[#1e0f2e]/60 hover:shadow-[#4a3060]/70 hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-500"
        >
          Register Now
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 rounded-full border-2 border-[#c9b5d9]/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-[#c9b5d9]/60 animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
