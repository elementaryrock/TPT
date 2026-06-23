/**
 * Flowing organic wave background — inspired by the TPT poster's
 * multi-layered purple S-curve wave shapes.
 *
 * Renders as a fixed full-viewport SVG behind all page content.
 */
export default function WaveBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Poster-matched purple gradients */}
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a3060" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6b4d8a" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="20%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#6b4d8a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b6aae" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="waveGrad3" x1="0%" y1="30%" x2="100%" y2="70%">
            <stop offset="0%" stopColor="#9b7cb8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c9b5d9" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="waveGrad4" x1="0%" y1="40%" x2="100%" y2="60%">
            <stop offset="0%" stopColor="#c9b5d9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e8d8ef" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Wave 1 — deepest, darkest purple */}
        <path
          d="M-100,250 C100,180 300,350 540,300 C780,250 900,120 1100,200 C1300,280 1400,180 1600,250 L1600,950 L-100,950 Z"
          fill="url(#waveGrad1)"
          className="animate-wave-slow"
        />

        {/* Wave 2 — medium purple */}
        <path
          d="M-100,380 C150,300 350,450 600,400 C850,350 1000,230 1200,320 C1400,410 1500,340 1600,380 L1600,950 L-100,950 Z"
          fill="url(#waveGrad2)"
          className="animate-wave-mid"
        />

        {/* Wave 3 — muted purple/lavender */}
        <path
          d="M-100,500 C200,430 400,550 650,490 C900,430 1050,360 1250,440 C1450,520 1500,460 1600,500 L1600,950 L-100,950 Z"
          fill="url(#waveGrad3)"
          className="animate-wave-fast"
        />

        {/* Wave 4 — lightest lavender */}
        <path
          d="M-100,620 C250,560 450,660 700,600 C950,540 1100,480 1300,560 C1500,640 1550,580 1600,620 L1600,950 L-100,950 Z"
          fill="url(#waveGrad4)"
          className="animate-wave-slower"
        />
      </svg>
    </div>
  );
}
