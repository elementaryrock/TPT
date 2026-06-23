const highlights = [
  {
    title: "Keynote Sessions",
    description:
      "Inspiring talks from industry leaders and successful entrepreneurs who shared their journey.",
    icon: "🎤",
  },
  {
    title: "Workshop Tracks",
    description:
      "Hands-on workshops covering product development, fundraising, team management, and more.",
    icon: "🛠️",
  },
  {
    title: "Networking Gala",
    description:
      "An evening of meaningful connections, bringing together IEDC leads from across Kerala.",
    icon: "🤝",
  },
  {
    title: "Innovation Showcase",
    description:
      "Top IEDC projects displayed for peer review, feedback, and cross-college collaboration.",
    icon: "💡",
  },
  {
    title: "Panel Discussions",
    description:
      "Interactive panels on the future of student-led innovation in Kerala's tech ecosystem.",
    icon: "💬",
  },
  {
    title: "Awards & Recognition",
    description:
      "Celebrating the best IEDC chapters and student innovators for their outstanding contributions.",
    icon: "🏆",
  },
];

export default function HighlightsSection() {
  return (
    <section id="highlights" className="relative py-16 md:py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2a1b3d]/25 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#c9b5d9] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Looking Back
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-white to-[#d8c8e8] bg-clip-text text-transparent">
              TPT 3.0 Highlights
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6b4d8a] to-[#8b6aae] mx-auto rounded-full mb-6" />
          <p className="text-[#c9b5d9]/60 text-lg max-w-2xl mx-auto">
            {/* TODO: Team member — update with actual TPT 3.0 stats and summary */}
            Here's a glimpse of what made the previous edition unforgettable.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-6 rounded-2xl border border-[#6b4d8a]/25 bg-[#2a1b3d]/40 backdrop-blur-sm hover:border-[#c9b5d9]/40 hover:bg-[#4a3060]/25 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#e8d8ef] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#c9b5d9]/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Photo gallery placeholder */}
        <div className="mt-16 p-8 rounded-2xl border border-dashed border-[#6b4d8a]/25 bg-[#2a1b3d]/15 text-center">
          <p className="text-[#c9b5d9]/40 text-sm font-medium">
            📸 Photo Gallery — Team member: Add TPT 3.0 photos here
          </p>
        </div>
      </div>
    </section>
  );
}
