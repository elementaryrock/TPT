export default function RegistrationSection() {
  return (
    <section id="registration" className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#c9b5d9] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Secure Your Spot
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-white to-[#d8c8e8] bg-clip-text text-transparent">
              Registration
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6b4d8a] to-[#8b6aae] mx-auto rounded-full" />
        </div>

        {/* Registration card — poster-inspired dark band */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#6b4d8a] to-[#8b6aae] rounded-3xl opacity-20 blur-xl" />
          <div className="relative p-8 md:p-12 rounded-2xl border border-[#6b4d8a]/30 bg-[#2a1b3d]/60 backdrop-blur-md">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-300 text-sm font-medium">
                  Registrations Open
                </span>
              </div>

              <p className="text-[#d8c8e8]/70 text-lg leading-relaxed max-w-xl mx-auto">
                {/* TODO: Team member — update registration details, deadlines, pricing */}
                Join us for two days of learning, networking, and growth.
                Register through MakeMyPass to secure your spot at TPT 4.0.
              </p>

              {/* Info grid — poster-style rounded cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                {[
                  { label: "Date", value: "July 17-18, 2026", icon: (
                    <svg className="w-5 h-5 text-[#c9b5d9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  )},
                  { label: "Venue", value: "Marian Engg. College", icon: (
                    <svg className="w-5 h-5 text-[#c9b5d9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  )},
                  { label: "Mode", value: "In-Person", icon: (
                    <svg className="w-5 h-5 text-[#c9b5d9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  )},
                ].map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#1e0f2e]/50 border border-[#6b4d8a]/15"
                  >
                    {info.icon}
                    <div className="text-left">
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#c9b5d9]/60 mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-white font-semibold text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button — poster-style bold */}
              <a
                href="https://makemypass.com/event/the-perfect-trajectory-4-0"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-[#6b4d8a] to-[#8b6aae] text-white font-bold text-lg shadow-lg shadow-[#1e0f2e]/60 hover:shadow-[#4a3060]/70 hover:scale-105 transition-all duration-300"
              >
                Register on MakeMyPass
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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

              <p className="text-[#c9b5d9]/40 text-sm">
                {/* TODO: Team member — add registration deadline */}
                Limited spots available • Register before the deadline
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
