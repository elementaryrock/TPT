const organisers = [
  {
    name: "Marian Engineering College",
    role: "Host Institution",
    description: "The premier engineering institution hosting TPT 4.0 in Trivandrum.",
  },
  {
    name: "Institution's Innovation Council",
    role: "Supporting Body",
    description: "Fostering innovation and startup culture across educational institutions.",
  },
  {
    name: "Legacy IEDC",
    role: "Organiser",
    description: "The IEDC chapter driving the legacy of innovation and entrepreneurship.",
  },
  {
    name: "Innovation & Entrepreneurship Development Centre",
    role: "Organiser",
    description: "Empowering student-led innovation ecosystems across Kerala.",
  },
  {
    name: "Inspira Marian",
    role: "Co-Organiser",
    description: "The student community powering creative and technical excellence.",
  },
];

export default function OrganisersSection() {
  return (
    <section id="organisers" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            The Team Behind TPT
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Organisers
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Organiser cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisers.map((org) => (
            <div
              key={org.name}
              className="group relative p-6 rounded-2xl border border-purple-500/20 bg-purple-950/30 backdrop-blur-sm hover:border-purple-400/40 hover:bg-purple-900/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Logo placeholder — TEAM MEMBER: Replace with actual logos */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600/30 to-violet-600/30 border border-purple-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-purple-300 font-heading">
                  {org.name.charAt(0)}
                </span>
              </div>

              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-purple-400/60 mb-2">
                {org.role}
              </p>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-100 transition-colors">
                {org.name}
              </h3>
              <p className="text-sm text-purple-200/50 leading-relaxed">
                {org.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
