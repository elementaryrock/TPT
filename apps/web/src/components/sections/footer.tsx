import React from "react";
import logo from "@/images/TPT.png";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative border-t border-purple-500/10 bg-[#0a0412] overflow-hidden"
    >
      {/* Ambient backgrounds */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top border highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Brand Info (Spans 5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <img src={logo} alt="TPT Logo" className="h-10 sm:h-12 w-auto object-contain mb-4" />
              <p className="text-sm text-purple-200/50 leading-relaxed max-w-sm">
                A premium orientation program designed to empower newly-elected IEDC Team leads across Kerala with strategic leadership and collaboration skills.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/marianiedc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex items-center justify-center w-10 h-10 rounded-xl border border-purple-500/15 bg-purple-500/5 text-purple-300/80 hover:text-white hover:border-pink-500/40 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <InstagramIcon className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.linkedin.com/company/inspira-marian-iedc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex items-center justify-center w-10 h-10 rounded-xl border border-purple-500/15 bg-purple-500/5 text-purple-300/80 hover:text-white hover:border-sky-500/40 hover:bg-sky-500/10 hover:shadow-[0_0_15px_rgba(14,165,233,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (Spans 3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-normal tracking-[0.25em] text-purple-400/40 uppercase mb-5">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "About", href: "#what-is-tpt" },
                { label: "Organisers", href: "#organisers" },
                { label: "Highlights", href: "#highlights" },
                { label: "Schedule", href: "#schedule" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center text-sm text-purple-200/40 hover:text-purple-200 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Event Details & CTA (Spans 4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <h4 className="text-xs sm:text-sm font-normal tracking-[0.25em] text-purple-400/40 uppercase mb-5">
                Event Info
              </h4>
              <div className="space-y-4">
                {/* Date */}
                <div className="flex items-start gap-3.5">
                  <svg
                    className="w-5 h-5 text-purple-400/70 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-purple-200/90 leading-tight mb-1">
                      17 & 18 July 2026
                    </p>
                    <p className="text-xs sm:text-sm text-purple-400/60 font-medium">Two-Day Summit</p>
                  </div>
                </div>
                {/* Venue */}
                <div className="flex items-start gap-3.5">
                  <svg
                    className="w-5 h-5 text-purple-400/70 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-purple-200/90 leading-tight mb-1">
                      Marian Engg. College
                    </p>
                    <p className="text-xs sm:text-sm text-purple-400/60 font-medium">Trivandrum, Kerala</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glass CTA Link */}
            <div className="pt-2">
              <a
                href="https://makemypass.com/event/the-perfect-trajectory-4-0"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] hover:border-purple-400/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] cursor-pointer"
              >
                <span>Register Now</span>
                <svg
                  className="w-3.5 h-3.5 text-purple-300 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-purple-400/30">
            © {new Date().getFullYear()} The Perfect Trajectory. All rights reserved.
          </p>
          <p className="text-xs text-purple-400/30">
            Made with 💜 by the <span className="text-purple-300/50">TPT Team</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
