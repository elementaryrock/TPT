export default function WhatIsTptSection() {
  return (
    <section id="what-is-tpt" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            About the Event
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              What is TPT?
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Content area — TEAM MEMBER: Fill in content here */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <div className="space-y-6">
            <p className="text-lg text-purple-100/80 leading-relaxed">
              <span className="text-white font-semibold">
                The Perfect Trajectory (TPT)
              </span>{" "}
              is a flagship two-day orientation program designed for
              newly-elected IEDC (Innovation and Entrepreneurship Development
              Centre) team leads across Kerala.
            </p>
            <p className="text-lg text-purple-100/60 leading-relaxed">
              {/* TODO: Team member — add more detailed description here */}
              The program ensures every team is aligned, equipped with the right
              knowledge, and ready to achieve common goals effectively. It
              brings together student innovators and leaders to chart the
              perfect trajectory for their IEDC journey.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Leadership", "Innovation", "Networking", "Strategy"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-sm font-medium border border-purple-500/30 bg-purple-500/10 text-purple-300"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Right: Stats / Key Info cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "4.0", label: "Edition" },
              { number: "2", label: "Days" },
              { number: "100+", label: "IEDC Leads" },
              { number: "Kerala", label: "Statewide" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative p-6 rounded-2xl border border-purple-500/20 bg-purple-950/30 backdrop-blur-sm hover:border-purple-400/40 hover:bg-purple-900/20 transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-bold text-white font-heading mb-1 group-hover:text-purple-200 transition-colors">
                  {stat.number}
                </p>
                <p className="text-sm text-purple-400/70 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
