import { useState, useEffect, useCallback } from "react";

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

const galleryImages = [
  {
    src: "/highlights/gallery-1.jpeg",
    title: "Leadership Summit",
    caption: "IEDC Team Leads gathered for the opening address.",
    aspect: "aspect-video",
  },
  {
    src: "/highlights/gallery-2.jpeg",
    title: "Interactive Sessions",
    caption: "Engaging discussions on building local startup ecosystems.",
    aspect: "aspect-square",
  },
  {
    src: "/highlights/gallery-3.jpeg",
    title: "Mentorship Circle",
    caption: "Collaborating on product prototypes with industry mentors.",
    aspect: "aspect-video",
  },
  {
    src: "/highlights/gallery-4.jpeg",
    title: "Workshop Lab",
    caption: "Deep dive workshops on design thinking methodologies.",
    aspect: "aspect-square",
  },
  {
    src: "/highlights/gallery-5.jpeg",
    title: "Networking Dinner",
    caption: "Fostering friendships and cross-college collaborations.",
    aspect: "aspect-video",
  },
  {
    src: "/highlights/gallery-6.jpeg",
    title: "Idea Pitching",
    caption: "Teams presenting their unique startup ideas to judges.",
    aspect: "aspect-square",
  },
  {
    src: "/highlights/gallery-7.jpeg",
    title: "Panel Discussion",
    caption: "Fireside chat with prominent Kerala tech ecosystem drivers.",
    aspect: "aspect-video",
  },
  {
    src: "/highlights/gallery-8.jpeg",
    title: "Innovation Exhibition",
    caption: "Showcasing student-built projects and hardware hacks.",
    aspect: "aspect-square",
  },
  {
    src: "/highlights/gallery-9.jpeg",
    title: "Closing Ceremony",
    caption: "Awarding the top performing chapters and organizers.",
    aspect: "aspect-video",
  },
];

export default function HighlightsSection() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  const handleClose = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, handlePrev, handleNext, handleClose]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImageIndex]);

  return (
    <section id="highlights" className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Background Elements ── */}
      {/* Circuit-board grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="high-grid-new" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#a855f7" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#high-grid-new)" />
        </svg>
      </div>

      {/* Dynamic ambient glows */}
      <div className="absolute left-1/2 top-[10%] -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/[0.06] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute right-[5%] bottom-[20%] w-[500px] h-[500px] bg-[#f43f72]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[5%] w-[600px] h-[600px] bg-indigo-700/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-purple-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4 animate-pulse">
            Looking Back
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
              TPT 3.0 Highlights
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f43f72] to-[#a855f7] mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(244,63,114,0.5)]" />
          <p className="text-purple-200/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Here's a glimpse of the features and unforgettable memories that made the previous edition an outstanding success.
          </p>
        </div>

        {/* Highlight Features Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-8 rounded-2xl border border-purple-500/10 bg-[#0c0414]/40 backdrop-blur-md hover:border-purple-500/30 hover:bg-purple-950/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(168,85,247,0.06)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Card glowing backdrop */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-purple-500/0 to-[#f43f72]/0 opacity-0 group-hover:opacity-100 group-hover:from-purple-500/5 group-hover:to-[#f43f72]/5 transition-opacity duration-500" />
              
              {/* Corner tech marks */}
              <div className="absolute top-4 left-4 w-2.5 h-2.5 border-t border-l border-purple-500/20 group-hover:border-purple-400 transition-colors" />
              <div className="absolute bottom-4 right-4 w-2.5 h-2.5 border-b border-r border-purple-500/20 group-hover:border-purple-400 transition-colors" />

              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-500/10 text-3xl mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors font-heading">
                {item.title}
              </h3>
              <p className="text-sm text-purple-200/50 leading-relaxed group-hover:text-purple-200/70 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Staggered Event Gallery */}
        <div className="mt-16">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
              Event Gallery
            </h3>
            <p className="text-sm text-purple-300/40 font-mono tracking-wider uppercase">
              Moments Frozen In Time
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className="group relative overflow-hidden rounded-2xl border border-purple-500/10 bg-purple-950/5 backdrop-blur-sm cursor-pointer hover:border-purple-400/30 transition-all duration-300 break-inside-avoid"
              >
                {/* Image tag overlay */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 text-[10px] font-mono tracking-widest uppercase rounded-full bg-black/60 border border-white/10 text-purple-300 backdrop-blur-sm">
                  {img.title}
                </div>

                <div className="relative overflow-hidden w-full h-full">
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-[0.5deg]"
                  />
                  {/* Dark hover layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
                </div>

                {/* Info Overlay (Hover only) */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-bold font-heading text-lg mb-1">{img.title}</p>
                  <p className="text-xs text-purple-200/70">{img.caption}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400">
                    <span>Expand Photo</span>
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Immersive Lightbox Modal ── */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-300 animate-fade-in">
          {/* Close Area */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={handleClose} />

          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 z-50 p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all cursor-pointer shadow-lg backdrop-blur-md"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 z-50 p-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all cursor-pointer shadow-lg backdrop-blur-md"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 z-50 p-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all cursor-pointer shadow-lg backdrop-blur-md"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Content Area */}
          <div className="relative z-10 max-w-[90vw] max-h-[80vh] flex flex-col items-center justify-center">
            <img
              src={galleryImages[activeImageIndex].src}
              alt={galleryImages[activeImageIndex].title}
              className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl border border-white/5 select-none animate-scale-up"
            />
            
            {/* Meta overlay at the bottom of the photo */}
            <div className="mt-4 text-center max-w-lg px-4">
              <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">
                {activeImageIndex + 1} / {galleryImages.length}
              </span>
              <h4 className="text-xl font-bold font-heading text-white mt-1">
                {galleryImages[activeImageIndex].title}
              </h4>
              <p className="text-sm text-purple-200/60 mt-1">
                {galleryImages[activeImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
