import { useState, useMemo } from "react";

interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
  type: "keynote" | "session" | "workshop" | "break" | "general";
  tag: string;
  details: string;
  speaker: string;
  location: string;
}

const schedule = {
  day1: {
    date: "July 17, 2026",
    label: "Day 1",
    events: [
      {
        time: "09:00 AM",
        title: "Registration & Welcome Kit Distribution",
        description: "Pick up your custom welcome kit, tech badges, and event trajectory map at the main lobby.",
        type: "general" as const,
        tag: "Check-in",
        details: "Make sure to bring your registration QR code (received via email or MakeMyPass) for quick check-in. The kit includes custom stickers, notebook, T-shirt, and your NFC-enabled identity card.",
        speaker: "Organizing Team",
        location: "Main Lobby"
      },
      {
        time: "10:00 AM",
        title: "Inaugural Ceremony & Spark",
        description: "Official kickoff of TPT 4.0 with representatives from KSUM, IEDC legacy members, and leadership hosts.",
        type: "keynote" as const,
        tag: "Inauguration",
        details: "Welcome address by Marian Engineering College Principal, followed by lighting the digital lamp. An inspiring opening note by Chief Guest from Kerala Startup Mission (KSUM) charting the perfect trajectory for student entrepreneurship in Kerala.",
        speaker: "Ecosystem Leaders & Chief Guest",
        location: "Auditorium"
      },
      {
        time: "11:30 AM",
        title: "Keynote: Steering the Trajectory",
        description: "A visionary session on what it means to lead an IEDC and building self-sustaining innovation hubs in colleges.",
        type: "keynote" as const,
        tag: "Leadership",
        details: "How student leads can foster a culture of active innovation. Strategies for community engagement, cross-disciplinary collaboration, and transitioning from academic projects to viable startup products.",
        speaker: "Renowned Tech Entrepreneur",
        location: "Auditorium"
      },
      {
        time: "01:00 PM",
        title: "Lunch & Peer Networking Gala",
        description: "A curated buffet lunch paired with structured peer networking activities to break the ice.",
        type: "break" as const,
        tag: "Networking",
        details: "An opportunity to meet fellow IEDC leads from other districts. Table-based brainstorming games will help you discover common challenges and potential inter-college collaboration opportunities.",
        speaker: "All Delegates",
        location: "Food Court & Garden Lawn"
      },
      {
        time: "02:00 PM",
        title: "Workshop: Core Execution Playbook",
        description: "Hands-on session on drafting your chapter's annual plan, executing budgets, and navigating startup support grants.",
        type: "workshop" as const,
        tag: "Hands-on",
        details: "Practical guide to KSUM policies, filing grants, planning workshops, and managing student activity points. Bring your laptops, as we will be using collaborative canvas boards to layout next year's milestone timeline.",
        speaker: "IEDC State Coordinators",
        location: "Seminar Hall A"
      },
      {
        time: "04:30 PM",
        title: "Panel: Decoupling Student Innovation",
        description: "Interactive session addressing real-world operational challenges of managing a student incubator.",
        type: "session" as const,
        tag: "Panel Q&A",
        details: "Panelists share their experiences on dealing with college management alignment, motivating passive members, and utilizing college lab infrastructure for rapid prototyping. Direct Q&A with the audience.",
        speaker: "Ex-IEDC Leads & Incubator Managers",
        location: "Auditorium"
      }
    ]
  },
  day2: {
    date: "July 18, 2026",
    label: "Day 2",
    events: [
      {
        time: "09:30 AM",
        title: "Day 2 Kickoff & Energy Check",
        description: "A fast-paced recap of Day 1 followed by interactive ecosystem icebreakers.",
        type: "general" as const,
        tag: "Icebreaker",
        details: "Fun team-building games and quick highlights of day 1. Setting clear learning objectives for the workshops and design sprint ahead in Day 2.",
        speaker: "Facilitators Team",
        location: "Auditorium"
      },
      {
        time: "10:00 AM",
        title: "Session: Building a Funding Trajectory",
        description: "De-mystifying government startup schemes, pre-seed grants, and angel investment pipelines.",
        type: "session" as const,
        tag: "Funding",
        details: "Learn about NIDHI-PRAYAS, KSUM Idea Grant, and other regional funding schemes. Tips on how to prepare pitch decks, pitch templates, and prepare financial reports.",
        speaker: "Venture Partner & Program Manager",
        location: "Auditorium"
      },
      {
        time: "11:30 AM",
        title: "Design Sprint: Ecosystem Blueprinting",
        description: "Interactive collaborative sprint where teams design a flagship event for their region.",
        type: "workshop" as const,
        tag: "Design Sprint",
        details: "Using Design Thinking principles, chapters will work together to plan an regional hackathon or summit. Mentor evaluation and feedback loops during the session.",
        speaker: "Design Thinking Coach",
        location: "Seminar Hall B"
      },
      {
        time: "01:00 PM",
        title: "Lunch & District Chapters Align",
        description: "District-level huddle over lunch to sync local event calendars and avoid regional overlaps.",
        type: "break" as const,
        tag: "Synergy Huddle",
        details: "Align schedules with neighboring institutions to maximize resource sharing, student participation, and sponsor outreach.",
        speaker: "Regional Leads",
        location: "Food Court"
      },
      {
        time: "02:00 PM",
        title: "Closing: Trajectory Action Plan",
        description: "Locking the trajectory for 2026-27 with target goals, regional networks, and support resources.",
        type: "keynote" as const,
        tag: "Strategy",
        details: "Filing your finalized annual action plan. Closing comments on the next-gen innovations expected from Kerala student ecosystem.",
        speaker: "State Nodal Officers",
        location: "Auditorium"
      },
      {
        time: "04:00 PM",
        title: "Valedictory & Certificate Distribution",
        description: "Honoring participants, announcing awards, and distributing official training completion certificates.",
        type: "general" as const,
        tag: "Valedictory",
        details: "Chapters receive official delegation badges and certificates of completion. Photo session and final farewells.",
        speaker: "Guests & College Management",
        location: "Auditorium"
      }
    ]
  }
};

const filterTypes = [
  { id: "all", label: "All Events" },
  { id: "keynote", label: "🎤 Keynotes" },
  { id: "workshop", label: "🛠️ Workshops" },
  { id: "session", label: "💬 Sessions" },
  { id: "break", label: "🤝 Breaks" }
];

const typeColors: Record<string, { border: string; bg: string; text: string; dot: string; glow: string }> = {
  keynote: {
    border: "border-amber-500/30 hover:border-amber-400/40",
    bg: "bg-amber-500/[0.04]",
    text: "text-amber-400",
    dot: "bg-amber-400 border-amber-300",
    glow: "bg-amber-500/20"
  },
  session: {
    border: "border-purple-500/30 hover:border-purple-400/40",
    bg: "bg-purple-500/[0.04]",
    text: "text-purple-400",
    dot: "bg-purple-400 border-purple-300",
    glow: "bg-purple-500/20"
  },
  workshop: {
    border: "border-blue-500/30 hover:border-blue-400/40",
    bg: "bg-blue-500/[0.04]",
    text: "text-blue-400",
    dot: "bg-blue-400 border-blue-300",
    glow: "bg-blue-500/20"
  },
  break: {
    border: "border-emerald-500/20 hover:border-emerald-400/30",
    bg: "bg-emerald-500/[0.02]",
    text: "text-emerald-400",
    dot: "bg-emerald-500/60 border-emerald-400",
    glow: "bg-emerald-500/10"
  },
  general: {
    border: "border-pink-500/30 hover:border-pink-400/40",
    bg: "bg-pink-500/[0.04]",
    text: "text-pink-400",
    dot: "bg-pink-400 border-pink-300",
    glow: "bg-pink-500/20"
  }
};

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");
  const [filterType, setFilterType] = useState<string>("all");
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

  const currentSchedule = schedule[activeDay];

  const filteredEvents = useMemo(() => {
    return currentSchedule.events.map((event, originalIdx) => ({
      ...event,
      originalIdx
    })).filter(
      (event) => filterType === "all" || event.type === filterType
    );
  }, [currentSchedule, filterType]);

  const handleToggleExpand = (id: string) => {
    setExpandedEventId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="schedule" className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Background Patterns & Glowing Blobs ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sched-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a855f7" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sched-grid)" />
        </svg>
      </div>

      <div className="absolute left-[10%] top-[40%] w-[600px] h-[600px] bg-purple-700/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-[5%] top-[10%] w-[500px] h-[500px] bg-[#f43f72]/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Plan Your Days
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
              Event Schedule
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f43f72] to-[#a855f7] mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(244,63,114,0.4)]" />
          <p className="text-purple-200/50 text-base max-w-xl mx-auto leading-relaxed">
            Follow the complete roadmap of TPT 4.0. Dive into specific tracks, filter modules, and select events to view location details.
          </p>
        </div>

        {/* Day Tab Switcher */}
        <div className="flex justify-center gap-4 mb-8">
          {(["day1", "day2"] as const).map((day) => (
            <button
              key={day}
              onClick={() => {
                setActiveDay(day);
                setExpandedEventId(null); // Reset open drawers on day switch
              }}
              className={`group px-6 py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all duration-500 cursor-pointer ${
                activeDay === day
                  ? "bg-gradient-to-r from-[#f43f72] to-[#a855f7] text-white shadow-[0_4px_25px_rgba(244,63,114,0.25)] border border-purple-500/10 scale-[1.02]"
                  : "border border-purple-500/10 bg-[#0c0414]/50 text-purple-300 hover:border-purple-400/40 hover:bg-purple-950/20 hover:text-white"
              }`}
            >
              <span className="block text-base font-heading tracking-normal font-extrabold">{schedule[day].label}</span>
              <span className="block text-[10px] font-mono tracking-widest font-semibold opacity-70 mt-1">
                {schedule[day].date}
              </span>
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-14 px-4">
          {filterTypes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setFilterType(t.id);
                setExpandedEventId(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-300 cursor-pointer ${
                filterType === t.id
                  ? "border-purple-400 bg-purple-500/15 text-purple-200"
                  : "border-purple-500/10 bg-[#0c0414]/30 text-purple-300/60 hover:border-purple-400/20 hover:text-purple-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="relative pl-6 sm:pl-10">
          {/* Vertical Path Line */}
          <div className="absolute left-[31px] sm:left-[35px] top-1 bottom-1 w-[2px] bg-gradient-to-b from-purple-500/40 via-purple-500/10 to-transparent" />

          {/* Render Timeline Cards */}
          {filteredEvents.length > 0 ? (
            <div className="space-y-8">
              {filteredEvents.map((event) => {
                const colors = typeColors[event.type] || typeColors.general;
                const uniqueId = `${activeDay}-${event.originalIdx}`;
                const isExpanded = expandedEventId === uniqueId;

                return (
                  <div
                    key={uniqueId}
                    className="group relative flex gap-6 sm:gap-8 items-start"
                  >
                    {/* Pulsing Timeline Node */}
                    <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-[12px] h-[12px] mt-2.5">
                      <div className={`absolute w-5 h-5 rounded-full blur-[4px] opacity-0 group-hover:opacity-100 ${colors.glow} transition-opacity duration-300`} />
                      <div className={`w-[12px] h-[12px] rounded-full border-2 ${colors.dot} shadow-[0_0_8px_rgba(168,85,247,0.3)] group-hover:scale-125 transition-transform duration-300`} />
                    </div>

                    {/* Timeline Event Card */}
                    <div
                      onClick={() => handleToggleExpand(uniqueId)}
                      className={`flex-1 p-6 rounded-2xl border bg-[#0c0414]/40 backdrop-blur-md transition-all duration-500 cursor-pointer select-none ${colors.border} ${colors.bg} ${
                        isExpanded ? "shadow-[0_8px_30px_rgba(0,0,0,0.4)] border-purple-500/30" : "hover:scale-[1.005] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                      }`}
                    >
                      {/* Top bar info */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className="text-sm font-mono font-bold tracking-wider text-purple-300">
                            {event.time}
                          </span>
                          <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-200">
                            {event.tag}
                          </span>
                        </div>
                        <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${colors.text}`}>
                          {event.type}
                        </span>
                      </div>

                      {/* Title & short description */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading group-hover:text-purple-100 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-purple-200/50 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Location & Speaker strip (mini info) */}
                      <div className="flex flex-wrap gap-4 mt-4 text-xs font-medium text-purple-300/40">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                          </svg>
                          {event.speaker}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                          {event.location}
                        </span>
                      </div>

                      {/* Expand indicator chevron */}
                      <div className="mt-4 pt-3 border-t border-purple-500/5 flex items-center justify-between text-xs font-semibold text-purple-400/80 group-hover:text-purple-300">
                        <span>{isExpanded ? "Hide Details" : "View Details & Agenda"}</span>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>

                      {/* Expanded drawer details */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isExpanded ? "max-h-[500px] opacity-100 mt-5 pt-4 border-t border-purple-500/10" : "max-h-0 opacity-0"
                        }`}
                      >
                        <h4 className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase mb-2">
                          Session Overview & Instructions
                        </h4>
                        <p className="text-sm text-purple-200/70 leading-relaxed mb-4">
                          {event.details}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/10">
                          <div>
                            <span className="block text-[10px] font-mono text-purple-300/40 uppercase">Speaker / Host</span>
                            <span className="text-sm font-semibold text-white">{event.speaker}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] font-mono text-purple-300/40 uppercase">Venue / Room</span>
                            <span className="text-sm font-semibold text-white">{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-purple-500/20 rounded-2xl bg-[#0c0414]/20">
              <p className="text-purple-300/50 font-medium">No events found matching this filter.</p>
              <button
                onClick={() => setFilterType("all")}
                className="mt-3 text-xs font-semibold text-purple-400 hover:text-purple-300 underline cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Sticky footer info */}
        <p className="text-center text-purple-400/20 text-xs font-mono tracking-wider mt-16 uppercase">
          ※ Schedule timings are tentative and subject to local ecosystem alignments.
        </p>
      </div>
    </section>
  );
}
