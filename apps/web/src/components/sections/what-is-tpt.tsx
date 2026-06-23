import aboutGraphic from "@/images/about-graphic.png";

export default function WhatIsTptSection() {
  return (
    <section id="what-is-tpt" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#0d0518] to-[#150826] border-b border-purple-500/10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="absolute w-full h-full text-purple-500/10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Contour waves */}
          <path d="M-100,200 C300,50 600,450 1000,150 C1300,-50 1600,300 2000,100" fill="none" stroke="rgba(244,63,114,0.25)" strokeWidth="1" />
          <path d="M-100,250 C300,100 600,500 1000,200 C1300,0 1600,350 2000,150" fill="none" stroke="rgba(244,63,114,0.15)" strokeWidth="1" />
          <path d="M-100,300 C300,150 600,550 1000,250 C1300,50 1600,400 2000,200" fill="none" stroke="rgba(244,63,114,0.08)" strokeWidth="1" strokeDasharray="5,5" />
        </svg>
      </div>

      {/* Decorative vertical banners from poster */}
      <div className="absolute left-0 top-0 bottom-0 hidden xl:flex flex-col items-center justify-center pointer-events-none select-none z-10">
        <div className="bg-[#f43f72] text-[#0d0518] font-bold text-xs uppercase tracking-[0.3em] py-8 px-2 [writing-mode:vertical-lr] rotate-180 rounded-r-lg font-heading shadow-[0_0_20px_rgba(244,63,114,0.2)]">
          TPT 4.0 • ORIENTATION
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 hidden xl:flex flex-col items-center justify-center pointer-events-none select-none z-10">
        <div className="bg-gradient-to-b from-[#f43f72] via-purple-600 to-transparent w-0.5 h-full opacity-35" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Description & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <p className="text-[#f43f72] text-sm font-semibold tracking-[0.25em] uppercase mb-4">
                About The Event
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-[#f43f72]">
                  What is TPT?
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#f43f72] to-purple-500 rounded-full" />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-purple-100/90 leading-relaxed font-sans">
                <span className="text-white font-semibold border-b border-[#f43f72]/40 pb-0.5">
                  The Perfect Trajectory (TPT)
                </span>{" "}
                is a flagship two-day orientation program designed specifically for
                newly-elected IEDC (Innovation and Entrepreneurship Development
                Centre) team leads across Kerala.
              </p>
              <p className="text-base sm:text-lg text-purple-100/60 leading-relaxed font-sans">
                The program ensures every team is aligned, equipped with the right
                knowledge, and ready to achieve common goals effectively. It
                brings together student innovators and leaders to chart the
                perfect trajectory for their IEDC journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#schedule"
                className="px-8 py-3.5 text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#f43f72] to-[#a855f7] btn-cyber transition-all duration-300 shadow-[0_0_20px_rgba(244,63,114,0.25)] hover:shadow-[0_0_35px_rgba(244,63,114,0.45)] hover:from-[#ff5a8a] hover:to-[#c084fc]"
              >
                Explore Schedule
              </a>
              <a
                href="#registration"
                className="group px-6 py-3 text-sm font-semibold tracking-wide text-purple-300 hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                Register Now
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Holographic Cyber Poster Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Soft pink glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#f43f72]/20 to-purple-600/20 rounded-3xl opacity-40 blur-2xl" />

            <div className="relative w-full max-w-sm p-4 rounded-2xl border border-[#f43f72]/30 bg-[#0d0518]/70 backdrop-blur-md shadow-[0_0_40px_rgba(244,63,114,0.15)] group overflow-hidden">
              
              {/* Vertical side panel line */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#f43f72] via-purple-600 to-transparent" />
              
              {/* Featured Poster Image */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] border border-white/5 bg-[#0d0518]/50">
                <img
                  src={aboutGraphic}
                  alt="TPT Orientation Cyber Bust"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge - Top Left */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#0d0518]/90 border border-white/10 rounded-lg text-left backdrop-blur-sm">
                  <p className="text-[9px] uppercase tracking-widest text-white/40">Edition</p>
                  <p className="text-xs font-bold text-white font-mono">4.0 / TPT</p>
                </div>

                {/* Overlay Dates - Top Right */}
                <div className="absolute top-4 right-4 flex flex-col items-center bg-[#0d0518]/70 backdrop-blur-sm p-2 rounded-lg border border-white/5">
                  <span className="text-xl font-bold font-heading text-white leading-none">17</span>
                  <span className="text-xl font-bold font-heading text-[#f43f72] leading-none mt-0.5">18</span>
                  <span className="text-[8px] uppercase tracking-widest text-white/40 [writing-mode:vertical-lr] mt-1.5 font-semibold">JULY</span>
                </div>

                {/* Overlay Info - Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end bg-[#0d0518]/80 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <div>
                    <p className="text-[9px] font-bold tracking-wider text-[#f43f72] uppercase mb-0.5">Orientation</p>
                    <p className="text-sm font-bold text-white font-heading">The Perfect Trajectory</p>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 bg-white/5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats card at bottom - matching the box style of the reference */}
        <div className="mt-16 md:mt-24 border border-[#f43f72]/30 rounded-2xl p-6 sm:p-8 bg-[#0d0518]/40 backdrop-blur-md max-w-4xl mx-auto shadow-[0_0_30px_rgba(244,63,114,0.08)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-purple-500/10">
            {[
              { number: "4.0", label: "Edition", desc: "Flagship Event" },
              { number: "2", label: "Days", desc: "Orientation" },
              { number: "100+", label: "IEDC Leads", desc: "Across Kerala" },
              { number: "Statewide", label: "Reach", desc: "All Districts" },
            ].map((stat, i) => (
              <div key={stat.label} className={`pt-6 md:pt-0 ${i > 0 ? "md:pl-6" : ""}`}>
                <p className="text-3xl sm:text-4xl font-bold font-heading text-white mb-1">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#f43f72] uppercase mb-1">
                  {stat.label}
                </p>
                <p className="text-[10px] sm:text-xs text-white/30 font-medium">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
