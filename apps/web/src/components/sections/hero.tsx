import heroBg from "@/images/hero-bg.jpeg";
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
    <section id="hero" className="relative h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0518]/70 via-[#0d0518]/30 to-[#0d0518]" />
      </div>

      {/* Logo strip */}
      <div className="relative z-10 flex justify-center pt-24 px-4">
        <div className="inline-flex items-center gap-6 sm:gap-10 md:gap-14 px-8 sm:px-12 md:px-16 py-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-md">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-6 sm:h-7 md:h-8 w-auto object-contain opacity-70"
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center">
        <img
          src={tptLogo}
          alt="The Perfect Trajectory"
          className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mb-10 animate-fade-in-up animation-delay-100"
        />

        <p className="text-white/50 text-sm sm:text-base max-w-lg leading-relaxed mb-10 animate-fade-in-up animation-delay-300">
          A <span className="text-white/90 font-medium">two-day orientation program</span> for
          newly-elected IEDC Team leads across Kerala, ensuring every team is aligned
          and ready to achieve common goals effectively.
        </p>

        <div className="flex items-center gap-4 animate-fade-in-up animation-delay-400">
          <a
            href="https://makemypass.com/event/the-perfect-trajectory-4-0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-sm font-semibold tracking-wide uppercase text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition-colors duration-200"
          >
            Register Now
          </a>
          <a
            href="#what-is-tpt"
            className="px-8 py-3 text-sm font-semibold tracking-wide uppercase text-white/70 border border-white/15 rounded-lg hover:text-white hover:border-white/30 transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom info */}
      <div className="relative z-10 px-4 pb-10 animate-fade-in-up animation-delay-500">
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4">
          <div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-md">
            <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <div>
              <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/30">Date</p>
              <p className="text-base font-semibold text-white font-heading">17, 18 July 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-md">
            <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <div>
              <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-white/30">Venue</p>
              <p className="text-base font-semibold text-white font-heading">Marian Engg. College, Trivandrum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
