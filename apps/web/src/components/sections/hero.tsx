import heroVideo from "@/videos/herobg.mp4";
import tptLogo from "@/images/TPT.png";

import marianLogo from "@/logos/marian-logo.png";
import iicLogo from "@/logos/iic-logo.png";
import legacyLogo from "@/logos/legacy-logo.png";
import iedcLogo from "@/logos/iedc-logo.png";
import inspiraLogo from "@/logos/inspira-logo.png";

const logos = [
  { src: marianLogo, alt: "Marian Engineering College" },
  { src: iicLogo, alt: "Institution's Innovation Council" },
  { src: legacyLogo, alt: "Legacy IEDC" },
  { src: iedcLogo, alt: "Innovation & Entrepreneurship Development Centre" },
  { src: inspiraLogo, alt: "Inspira Marian" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-20 pb-8 sm:py-0">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => window.dispatchEvent(new CustomEvent("tpt-video-ready"))}
          className="w-full h-full object-cover scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0518]/70 via-[#0d0518]/30 to-[#0d0518]" />
      </div>

      {/* Logo strip */}
      <div className="relative z-10 hidden sm:flex justify-center pt-24 px-4">
        <div className="inline-flex flex-wrap justify-center items-center gap-4 sm:gap-10 md:gap-14 px-6 sm:px-12 md:px-16 py-2.5 sm:py-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-md max-w-full">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-5 sm:h-7 md:h-8 w-auto object-contain opacity-70"
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-6 sm:py-12 text-center w-full max-w-4xl mx-auto">
        <img
          src={tptLogo}
          alt="The Perfect Trajectory"
          className="w-[70%] max-w-[240px] sm:w-[85%] sm:max-w-lg md:max-w-2xl lg:max-w-3xl mb-4 sm:mb-8 md:mb-10 animate-fade-in-up animation-delay-100"
        />

        <p className="text-white/50 text-xs sm:text-base max-w-lg leading-relaxed mb-4 sm:mb-8 md:mb-10 animate-fade-in-up animation-delay-300 px-2">
          A <span className="text-white/90 font-medium">two-day orientation program</span> for
          newly-elected IEDC Team leads across Kerala, ensuring every team is aligned
          and ready to achieve common goals effectively.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[240px] sm:max-w-none animate-fade-in-up animation-delay-400">
          <a
            href="https://makemypass.com/event/the-perfect-trajectory-4-0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between sm:justify-center gap-4 pl-6 pr-4 py-2.5 sm:pl-8 sm:pr-6 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#f43f72] to-[#a855f7] btn-cyber hover:from-[#ff5a8a] hover:to-[#c084fc] transition-all duration-200 w-full sm:w-auto shadow-[0_0_20px_rgba(244,63,114,0.25)]"
          >
            <span>Join Us</span>
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a
            href="#what-is-tpt"
            className="relative p-[1px] btn-cyber w-full sm:w-auto bg-white/15 hover:bg-white/30 transition-all duration-200"
          >
            <span className="btn-cyber bg-[#0d0518] hover:bg-white/[0.03] transition-colors duration-200 py-2.5 px-6 sm:py-3.5 sm:px-8 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white/70 hover:text-white flex items-center justify-center">
              Learn More
            </span>
          </a>
        </div>
      </div>

      {/* Bottom info */}
      <div className="relative z-10 px-4 pb-6 sm:pb-10 w-full max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 sm:gap-4 px-3 py-2.5 sm:px-6 sm:py-4 rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-md">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <div>
              <p className="text-[8px] sm:text-[10px] font-medium tracking-[0.15em] uppercase text-white/30">Date</p>
              <p className="text-[11px] sm:text-base font-semibold text-white font-heading leading-tight">17, 18 July 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-4 px-3 py-2.5 sm:px-6 sm:py-4 rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-md">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <div>
              <p className="text-[8px] sm:text-[10px] font-medium tracking-[0.15em] uppercase text-white/30">Venue</p>
              <p className="text-[11px] sm:text-base font-semibold text-white font-heading leading-tight">Marian Engg. College, Trivandrum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
