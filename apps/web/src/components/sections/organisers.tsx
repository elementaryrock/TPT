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
    <section id="organisers" className="relative py-16 md:py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2a1b3d]/25 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#c9b5d9] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            The Team Behind TPT
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-white to-[#d8c8e8] bg-clip-text text-transparent">
              Organisers
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6b4d8a] to-[#8b6aae] mx-auto rounded-full" />
        </div>

        {/* Organiser cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organisers.map((org) => (
            <div
              key={org.name}
              className="group relative p-6 rounded-2xl border border-[#6b4d8a]/25 bg-[#2a1b3d]/40 backdrop-blur-sm hover:border-[#c9b5d9]/40 hover:bg-[#4a3060]/25 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Logo placeholder — TEAM MEMBER: Replace with actual logos */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6b4d8a]/30 to-[#8b6aae]/30 border border-[#6b4d8a]/25 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-[#d8c8e8] font-heading">
                  {org.name.charAt(0)}
                </span>
              </div>

              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#c9b5d9]/60 mb-2">
                {org.role}
              </p>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#e8d8ef] transition-colors">
                {org.name}
              </h3>
              <p className="text-sm text-[#c9b5d9]/60 leading-relaxed">
                {org.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
