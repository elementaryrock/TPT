export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated wave background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 92, 196, 0.3)" />
              <stop offset="100%" stopColor="rgba(88, 56, 148, 0.15)" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(168, 130, 214, 0.2)" />
              <stop offset="100%" stopColor="rgba(139, 92, 196, 0.1)" />
            </linearGradient>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(200, 170, 230, 0.15)" />
              <stop offset="100%" stopColor="rgba(168, 130, 214, 0.05)" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 C200,200 400,400 720,350 C1040,300 1200,150 1440,250 L1440,900 L0,900 Z"
            fill="url(#wave1)"
            className="animate-wave-slow"
          />
          <path
            d="M0,450 C300,350 500,550 720,480 C940,410 1200,300 1440,400 L1440,900 L0,900 Z"
            fill="url(#wave2)"
            className="animate-wave-mid"
          />
          <path
            d="M0,600 C250,520 450,650 720,580 C990,510 1200,450 1440,550 L1440,900 L0,900 Z"
            fill="url(#wave3)"
            className="animate-wave-fast"
          />
        </svg>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/8 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-800/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-8 animate-fade-in-down">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-purple-300 text-sm font-medium tracking-wide">
            IEDC Kerala • July 2026
          </span>
        </div>

        {/* Title */}
        <p className="text-purple-400/80 text-lg md:text-xl font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in-up font-heading">
          The
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-2 animate-fade-in-up animation-delay-100">
          <span className="bg-gradient-to-br from-white via-purple-100 to-purple-300 bg-clip-text text-transparent font-heading">
            PERFECT
          </span>
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] leading-none mb-8 animate-fade-in-up animation-delay-200">
          <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-violet-400 bg-clip-text text-transparent font-heading">
            TRAJECTORY
          </span>
        </h1>

        {/* Version badge */}
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-purple-500/20 border border-purple-500/20 mb-8 animate-fade-in-up animation-delay-300">
          <span className="text-purple-300 text-2xl font-bold font-heading">
            4.0
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-purple-200/70 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
          A <span className="text-white font-semibold">two-day orientation program</span>{" "}
          for newly-elected IEDC Team leads across Kerala, ensuring every team is
          aligned and ready to achieve common goals effectively.
        </p>

        {/* Date & Venue */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12 animate-fade-in-up animation-delay-500">
          <div className="text-center">
            <p className="text-purple-400/60 text-xs font-semibold tracking-[0.2em] uppercase mb-1">
              Date
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white font-heading">
              17 & 18
            </p>
            <p className="text-purple-300/70 text-sm font-medium">July 2026</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />
          <div className="text-center">
            <p className="text-purple-400/60 text-xs font-semibold tracking-[0.2em] uppercase mb-1">
              Venue
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white font-heading">
              Marian Engg.
            </p>
            <p className="text-purple-300/70 text-sm font-medium">
              College, Trivandrum
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://makemypass.com/event/the-perfect-trajectory-4-0"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold text-lg shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-600"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-purple-400/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-purple-400/60 animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
