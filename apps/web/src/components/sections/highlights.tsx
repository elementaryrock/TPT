import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Handshake,
  Lightbulb,
  Maximize2,
  MessageSquareText,
  Mic2,
  PanelsTopLeft,
  Trophy,
  Wrench,
  X,
} from "lucide-react";

const highlights = [
  {
    title: "Keynote Sessions",
    description: "Clear leadership notes from founders, ecosystem builders, and IEDC alumni.",
    Icon: Mic2,
  },
  {
    title: "Workshop Tracks",
    description: "Hands-on rooms for execution planning, grants, community building, and team rituals.",
    Icon: Wrench,
  },
  {
    title: "Peer Network",
    description: "District-level conversations that turned one event into a Kerala-wide working circle.",
    Icon: Handshake,
  },
  {
    title: "Innovation Showcase",
    description: "Student projects, chapter ideas, and early experiments opened up for feedback.",
    Icon: Lightbulb,
  },
  {
    title: "Panel Rooms",
    description: "Honest discussions on running student innovation cells beyond poster events.",
    Icon: MessageSquareText,
  },
  {
    title: "Recognition",
    description: "Moments that celebrated the teams building consistently inside their colleges.",
    Icon: Trophy,
  },
];

const galleryImages = [
  {
    src: "/highlights/gallery-1.jpeg",
    title: "Opening Circle",
    caption: "The first room-wide alignment before the two-day trajectory began.",
    className: "lg:col-span-7",
  },
  {
    src: "/highlights/gallery-8.jpeg",
    title: "Delegate Poster",
    caption: "A vertical frame from the visual system built around motion and direction.",
    className: "lg:col-span-5 lg:row-span-2",
  },
  {
    src: "/highlights/gallery-6.jpeg",
    title: "Stage Energy",
    caption: "Key moments from the main floor and speaker sessions.",
    className: "lg:col-span-4",
  },
  {
    src: "/highlights/gallery-7.jpeg",
    title: "Working Room",
    caption: "Teams building plans, comparing notes, and refining their chapter roadmap.",
    className: "lg:col-span-3",
  },
  {
    src: "/highlights/gallery-9.jpeg",
    title: "Team Frame",
    caption: "The closing archive: people, context, and one shared direction.",
    className: "lg:col-span-8",
  },
  {
    src: "/highlights/gallery-2.jpeg",
    title: "Mentor Exchange",
    caption: "Smaller discussions that made the program practical.",
    className: "lg:col-span-4",
  },
  {
    src: "/highlights/gallery-3.jpeg",
    title: "Chapter Notes",
    caption: "Delegates documenting ideas for the year ahead.",
    className: "lg:col-span-4",
  },
  {
    src: "/highlights/gallery-4.jpeg",
    title: "Workshop Flow",
    caption: "Activity-led learning with facilitators and chapter leads.",
    className: "lg:col-span-4",
  },
  {
    src: "/highlights/gallery-5.jpeg",
    title: "Campus Network",
    caption: "Connections that continued after the sessions ended.",
    className: "lg:col-span-4",
  },
];

const stats = [
  { value: "09", label: "Archive Frames" },
  { value: "02", label: "Program Days" },
  { value: "100+", label: "IEDC Leads" },
];

export default function HighlightsSection() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const featuredImage = galleryImages[featuredIndex];

  const handlePrev = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  }, []);

  const handleNext = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  }, []);

  const handleClose = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const activeImage = useMemo(
    () => (activeImageIndex === null ? null : galleryImages[activeImageIndex]),
    [activeImageIndex],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (event.key === "ArrowLeft") handlePrev();
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, handleClose, handleNext, handlePrev]);

  useEffect(() => {
    document.body.style.overflow = activeImageIndex === null ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImageIndex]);

  return (
    <section
      id="highlights"
      className="relative overflow-hidden bg-[#10071d] py-20 sm:py-24 md:py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#2a1242] to-transparent" />
        <div className="absolute left-[-12%] top-24 h-[520px] w-[520px] rounded-full bg-[#f0b5ff]/10 blur-[120px]" />
        <div className="absolute right-[-16%] bottom-10 h-[620px] w-[620px] rounded-full bg-[#f43f72]/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#d9c1ff]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f43f72]" />
              Previous Edition Archive
            </div>
            <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl">
              TPT 3.0
              <span className="block text-[#c7a8ff]">Highlights</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-purple-100/62 sm:text-base">
              A sharper look back at the sessions, rooms, faces, and campaign frames that shaped the last edition. The gallery is treated like an event archive, not filler below the fold.
            </p>
          </div>

          <div className="grid grid-cols-3 overflow-hidden border border-white/10 bg-[#0b0414]/70">
            {stats.map((stat) => (
              <div key={stat.label} className="border-r border-white/10 p-4 last:border-r-0 sm:p-6">
                <p className="font-display text-3xl text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-200/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[440px] overflow-hidden border border-white/10 bg-[#0b0414] sm:min-h-[520px]">
            <img
              src={featuredImage.src}
              alt={featuredImage.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0414] via-[#0b0414]/30 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0b0414]/80 to-transparent" />
            <div className="absolute left-0 top-8 h-px w-full bg-[#f43f72]/70" />
            <div className="absolute left-8 top-0 h-full w-px bg-white/10" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#f4c7ff]">
                Featured Frame {String(featuredIndex + 1).padStart(2, "0")}
              </p>
              <h3 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                {featuredImage.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-purple-100/68">
                {featuredImage.caption}
              </p>
              <button
                type="button"
                onClick={() => setActiveImageIndex(featuredIndex)}
                className="mt-6 inline-flex items-center gap-3 border border-white/15 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#f43f72]/60 hover:bg-[#f43f72]/15"
              >
                <Maximize2 className="h-4 w-4" />
                Open Frame
              </button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className="group relative overflow-hidden border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#f43f72]/45 hover:bg-white/[0.055]"
              >
                <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-[#f43f72] via-[#b46cff] to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-purple-300/20 bg-[#190a29] text-[#e2c8ff]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-purple-200/35">
                      Module {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-bold text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-purple-100/55">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-12">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onMouseEnter={() => setFeaturedIndex(index)}
              onFocus={() => setFeaturedIndex(index)}
              onClick={() => setActiveImageIndex(index)}
              className={`group relative min-h-[220px] overflow-hidden border text-left transition hover:border-[#f43f72]/60 ${
                featuredIndex === index
                  ? "border-[#f43f72]/70"
                  : "border-white/10"
              } ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0414]/95 via-[#0b0414]/15 to-transparent" />
              <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center border border-white/15 bg-black/35 text-white backdrop-blur">
                <Expand className="h-4 w-4" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4c7ff]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-1 font-heading text-xl font-bold text-white">
                  {image.title}
                </h4>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-purple-100/60">
                  {image.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeImage && activeImageIndex !== null && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#07030d]/95 p-4 backdrop-blur-xl">
          <button
            type="button"
            aria-label="Close lightbox"
            onClick={handleClose}
            className="absolute inset-0 cursor-zoom-out"
          />

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative z-10 w-full max-w-6xl">
            <div className="overflow-hidden border border-white/10 bg-black">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[74vh] w-full object-contain"
              />
            </div>
            <div className="mt-4 flex flex-col justify-between gap-4 border border-white/10 bg-white/[0.04] p-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d8b4fe]">
                  Frame {activeImageIndex + 1} / {galleryImages.length}
                </p>
                <h4 className="mt-1 font-heading text-2xl font-bold text-white">
                  {activeImage.title}
                </h4>
                <p className="mt-1 text-sm text-purple-100/58">{activeImage.caption}</p>
              </div>
              <div className="flex gap-2 sm:hidden">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 bg-white/10 text-white"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 bg-white/10 text-white"
                  aria-label="Next image"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
