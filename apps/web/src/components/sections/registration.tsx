export default function RegistrationSection() {
  return (
    <section id="registration" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Secure Your Spot
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Registration
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Registration card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl opacity-20 blur-xl" />
          <div className="relative p-8 md:p-12 rounded-2xl border border-purple-500/30 bg-purple-950/50 backdrop-blur-md">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-300 text-sm font-medium">
                  Registrations Open
                </span>
              </div>

              <p className="text-purple-100/70 text-lg leading-relaxed max-w-xl mx-auto">
                {/* TODO: Team member — update registration details, deadlines, pricing */}
                Join us for two days of learning, networking, and growth.
                Register through MakeMyPass to secure your spot at TPT 4.0.
              </p>

              {/* Info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                {[
                  { label: "Date", value: "July 17-18, 2026" },
                  { label: "Venue", value: "Marian Engg. College" },
                  { label: "Mode", value: "In-Person" },
                ].map((info) => (
                  <div
                    key={info.label}
                    className="p-4 rounded-xl bg-purple-900/30 border border-purple-500/10"
                  >
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-purple-400/60 mb-1">
                      {info.label}
                    </p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://makemypass.com/event/the-perfect-trajectory-4-0"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-lg shadow-lg shadow-purple-900/50 hover:shadow-purple-700/60 hover:scale-105 transition-all duration-300"
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

              <p className="text-purple-400/40 text-sm">
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
