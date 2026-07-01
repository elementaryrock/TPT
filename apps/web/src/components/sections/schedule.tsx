import { useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  Clock3,
  Coffee,
  MapPin,
  MessageSquareText,
  Mic2,
  Sparkles,
  UsersRound,
  Wrench,
} from "lucide-react";

type EventType = "keynote" | "session" | "workshop" | "break" | "general";

interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
  type: EventType;
  tag: string;
  details: string;
  speaker: string;
  location: string;
}

const schedule: Record<
  "day1" | "day2",
  { date: string; eyebrow: string; label: string; theme: string; events: ScheduleEvent[] }
> = {
  day1: {
    date: "July 17, 2026",
    eyebrow: "Arrival / Alignment",
    label: "Day 1",
    theme: "Set the direction, meet the network, and build the operating base.",
    events: [
      {
        time: "09:00 AM",
        title: "Registration & Welcome Kit Distribution",
        description: "Pick up your welcome kit, delegate badge, and event trajectory map.",
        type: "general",
        tag: "Check-in",
        details:
          "Carry your registration QR code for quick check-in. The welcome desk handles badges, kit pickup, and delegate routing for the opening venue.",
        speaker: "Organizing Team",
        location: "Main Lobby",
      },
      {
        time: "10:00 AM",
        title: "Inaugural Ceremony & Spark",
        description: "Official kickoff with Marian, KSUM, IEDC, and legacy representatives.",
        type: "keynote",
        tag: "Inauguration",
        details:
          "Opening remarks, context setting, and a clear orientation on why newly elected IEDC leads matter for the next year of Kerala's innovation ecosystem.",
        speaker: "Ecosystem Leaders",
        location: "Auditorium",
      },
      {
        time: "11:30 AM",
        title: "Keynote: Steering the Trajectory",
        description: "A leadership session on building self-sustaining innovation hubs.",
        type: "keynote",
        tag: "Leadership",
        details:
          "A practical keynote on community building, interdisciplinary collaboration, and moving student projects toward viable products.",
        speaker: "Tech Entrepreneur",
        location: "Auditorium",
      },
      {
        time: "01:00 PM",
        title: "Lunch & Peer Network",
        description: "A structured lunch designed to connect chapter leads across districts.",
        type: "break",
        tag: "Network",
        details:
          "Table prompts and light networking activities help delegates discover common problems and possible inter-college collaborations.",
        speaker: "All Delegates",
        location: "Food Court",
      },
      {
        time: "02:00 PM",
        title: "Workshop: Core Execution Playbook",
        description: "Annual plans, budgets, grants, and the routines that keep chapters moving.",
        type: "workshop",
        tag: "Hands-on",
        details:
          "A working session for drafting chapter goals, planning events, understanding support programs, and mapping the first quarter of execution.",
        speaker: "IEDC Coordinators",
        location: "Seminar Hall A",
      },
      {
        time: "04:30 PM",
        title: "Panel: Running the Student Cell",
        description: "A direct conversation on team motivation, management buy-in, and real constraints.",
        type: "session",
        tag: "Panel Q&A",
        details:
          "Panelists unpack everyday challenges: passive members, college alignment, lab access, sponsor conversations, and continuity after office-bearer changes.",
        speaker: "Ex-IEDC Leads",
        location: "Auditorium",
      },
    ],
  },
  day2: {
    date: "July 18, 2026",
    eyebrow: "Build / Commit",
    label: "Day 2",
    theme: "Translate the orientation into action plans, partnerships, and next moves.",
    events: [
      {
        time: "09:30 AM",
        title: "Day 2 Kickoff & Energy Check",
        description: "A fast recap of Day 1 before the design and planning blocks begin.",
        type: "general",
        tag: "Kickoff",
        details:
          "The facilitation team resets the room, captures Day 1 takeaways, and frames the work expected from delegates before closing.",
        speaker: "Facilitators",
        location: "Auditorium",
      },
      {
        time: "10:00 AM",
        title: "Session: Building a Funding Trajectory",
        description: "Government schemes, pre-seed grants, and early pitch preparation.",
        type: "session",
        tag: "Funding",
        details:
          "A practical look at idea grants, application readiness, pitch structure, and how chapters can help students move from idea to support.",
        speaker: "Program Manager",
        location: "Auditorium",
      },
      {
        time: "11:30 AM",
        title: "Design Sprint: Ecosystem Blueprinting",
        description: "Teams design one flagship initiative for their region or institution.",
        type: "workshop",
        tag: "Sprint",
        details:
          "Delegates use guided canvases to define audience, partners, resources, timeline, risks, and measurable outcomes for a chapter-led initiative.",
        speaker: "Design Coach",
        location: "Seminar Hall B",
      },
      {
        time: "01:00 PM",
        title: "Lunch & District Chapters Align",
        description: "District huddles to coordinate calendars and reduce event overlap.",
        type: "break",
        tag: "Huddle",
        details:
          "Nearby chapters compare calendars, find shared resources, and identify moments where collaboration can increase reach.",
        speaker: "Regional Leads",
        location: "Food Court",
      },
      {
        time: "02:00 PM",
        title: "Closing: Trajectory Action Plan",
        description: "Lock the 2026-27 direction with targets, networks, and support channels.",
        type: "keynote",
        tag: "Strategy",
        details:
          "Each chapter consolidates the action plan and leaves with next steps, follow-up channels, and accountability points.",
        speaker: "State Nodal Officers",
        location: "Auditorium",
      },
      {
        time: "04:00 PM",
        title: "Valedictory & Certificate Distribution",
        description: "Final address, certificates, recognition, and the closing photo.",
        type: "general",
        tag: "Close",
        details:
          "The event closes with certificate distribution, acknowledgements, and a collective archive frame with delegates and organisers.",
        speaker: "Guests & Management",
        location: "Auditorium",
      },
    ],
  },
};

const filterTypes: Array<{ id: "all" | EventType; label: string }> = [
  { id: "all", label: "All" },
  { id: "keynote", label: "Keynotes" },
  { id: "workshop", label: "Workshops" },
  { id: "session", label: "Sessions" },
  { id: "break", label: "Breaks" },
];

const typeMeta: Record<
  EventType,
  { label: string; Icon: typeof Mic2; accent: string; soft: string; border: string }
> = {
  keynote: {
    label: "Keynote",
    Icon: Mic2,
    accent: "text-[#ffd38a]",
    soft: "bg-[#ffd38a]/10",
    border: "border-[#ffd38a]/35",
  },
  session: {
    label: "Session",
    Icon: MessageSquareText,
    accent: "text-[#c7a8ff]",
    soft: "bg-[#c7a8ff]/10",
    border: "border-[#c7a8ff]/35",
  },
  workshop: {
    label: "Workshop",
    Icon: Wrench,
    accent: "text-[#8bd3ff]",
    soft: "bg-[#8bd3ff]/10",
    border: "border-[#8bd3ff]/35",
  },
  break: {
    label: "Break",
    Icon: Coffee,
    accent: "text-[#90f5c1]",
    soft: "bg-[#90f5c1]/10",
    border: "border-[#90f5c1]/25",
  },
  general: {
    label: "General",
    Icon: Sparkles,
    accent: "text-[#ff8eb3]",
    soft: "bg-[#ff8eb3]/10",
    border: "border-[#ff8eb3]/30",
  },
};

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");
  const [filterType, setFilterType] = useState<"all" | EventType>("all");
  const [expandedEventId, setExpandedEventId] = useState<string | null>("day1-0");

  const currentSchedule = schedule[activeDay];

  const filteredEvents = useMemo(
    () =>
      currentSchedule.events
        .map((event, originalIndex) => ({ ...event, originalIndex }))
        .filter((event) => filterType === "all" || event.type === filterType),
    [currentSchedule.events, filterType],
  );

  const dayStats = useMemo(() => {
    const venues = new Set(currentSchedule.events.map((event) => event.location)).size;
    const workshops = currentSchedule.events.filter((event) => event.type === "workshop").length;
    return [
      { label: "Blocks", value: String(currentSchedule.events.length).padStart(2, "0") },
      { label: "Venues", value: String(venues).padStart(2, "0") },
      { label: "Labs", value: String(workshops).padStart(2, "0") },
    ];
  }, [currentSchedule.events]);

  return (
    <section
      id="schedule"
      className="relative overflow-hidden bg-[#090411] py-14 sm:py-20 md:py-24 lg:py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,114,0.16),transparent_32%),radial-gradient(circle_at_85%_18%,rgba(168,85,247,0.18),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_48%,rgba(255,255,255,0.05)_49%,transparent_50%,transparent_100%)] bg-[size:180px_180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[5fr_7fr] lg:gap-6 lg:items-start xl:gap-10">
          <div className="min-w-0 lg:pt-2">
            <p className="mb-4 inline-flex items-center gap-3 border border-white/15 bg-[#1a0d2a]/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-50/85">
              <CalendarDays className="h-4 w-4 text-[#f43f72]" />
              Plan Your Days
            </p>
            <h2 className="font-display text-2xl uppercase leading-none text-white sm:text-3xl md:text-4xl lg:text-4xl">
              <span className="block">Event</span>
              <span className="mt-2 block text-[#c7a8ff] sm:mt-3">Schedule</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-purple-50/82 sm:text-base sm:leading-8">
              Two days built like a route map: arrive, align, build, and leave with a chapter action plan. Filter by track or open a block for the practical details.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3 lg:mt-5">
              {(["day1", "day2"] as const).map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => {
                    setActiveDay(day);
                    setExpandedEventId(`${day}-0`);
                  }}
                  className={`relative overflow-hidden border p-4 text-left transition xl:p-5 ${
                    activeDay === day
                      ? "border-[#f43f72]/70 bg-[#f43f72]/14"
                      : "border-white/15 bg-[#150a22]/88 hover:border-purple-300/45"
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-purple-100/70 sm:text-xs sm:tracking-[0.16em]">
                    {schedule[day].eyebrow}
                  </span>
                  <span className="mt-2 block font-heading text-xl font-bold text-white sm:mt-3 sm:text-2xl">
                    {schedule[day].label}
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-purple-50/78 sm:text-sm">
                    {schedule[day].date}
                  </span>
                  {activeDay === day && (
                    <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#f43f72] to-[#b46cff]" />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto sm:flex-wrap sm:overflow-x-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {filterTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => {
                    setFilterType(type.id);
                    setExpandedEventId(null);
                  }}
                  className={`shrink-0 border px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] transition ${
                    filterType === type.id
                      ? "border-[#f43f72]/70 bg-[#f43f72]/14 text-white"
                      : "border-white/15 bg-[#150a22]/88 text-purple-50/72 hover:border-purple-300/45 hover:text-white"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            <div className="mt-4 border border-white/15 bg-[#150a22]/90 p-3 sm:p-4 xl:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f4c7ff]">
                {currentSchedule.eyebrow}
              </p>
              <p className="mt-2 text-sm leading-7 text-purple-50/82">{currentSchedule.theme}</p>
              <div className="mt-4 grid grid-cols-3 border border-white/15 [&>*]:min-w-0">
                {dayStats.map((stat) => (
                  <div key={stat.label} className="border-r border-white/15 p-2 last:border-r-0 sm:p-3">
                    <p className="font-display text-lg leading-none text-white sm:text-2xl">{stat.value}</p>
                    <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.08em] text-purple-100/68 sm:text-[10px] sm:tracking-[0.14em]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-w-0 lg:max-h-[80vh] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#f43f72]/80 via-purple-300/25 to-transparent sm:block" />

            {filteredEvents.length > 0 ? (
              <div className="space-y-3 sm:space-y-4 lg:pr-4">
                {filteredEvents.map((event) => {
                  const uniqueId = `${activeDay}-${event.originalIndex}`;
                  const isExpanded = expandedEventId === uniqueId;
                  const meta = typeMeta[event.type];
                  const EventIcon = meta.Icon;

                  return (
                    <article key={uniqueId} className="relative sm:pl-14">
                      <div className="absolute left-[13px] top-6 z-10 hidden h-4 w-4 border border-[#f43f72]/70 bg-[#090411] sm:block" />
                      <button
                        type="button"
                        onClick={() => setExpandedEventId(isExpanded ? null : uniqueId)}
                        className={`group w-full border bg-[#10071d]/92 text-left shadow-[0_18px_70px_rgba(0,0,0,0.22)] transition hover:border-purple-300/35 ${
                          isExpanded ? "border-[#f43f72]/70" : "border-white/15"
                        }`}
                      >
                        <div className="grid gap-0 lg:grid-cols-[132px_1fr]">
                          <div className="border-b border-white/15 p-4 sm:p-5 lg:border-b-0 lg:border-r">
                            <div className="flex items-center justify-between gap-2 lg:flex-col lg:items-start lg:justify-start">
                              <div className="flex items-center gap-2 text-purple-50/78">
                                <Clock3 className="h-4 w-4" />
                                <span className="font-mono text-sm font-bold">{event.time}</span>
                              </div>
                              <div
                                className={`inline-flex items-center gap-2 border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] lg:mt-4 lg:py-2 ${meta.border} ${meta.soft} ${meta.accent}`}
                              >
                                <EventIcon className="h-3.5 w-3.5" />
                                {meta.label}
                              </div>
                            </div>
                          </div>

                          <div className="p-4 sm:p-5 lg:p-6">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f7d6ff]">
                                  {event.tag}
                                </p>
                                <h3 className="mt-2 font-heading text-lg font-bold text-white sm:text-xl md:text-2xl">
                                  {event.title}
                                </h3>
                              </div>
                              <ChevronDown
                                className={`mt-1 h-5 w-5 shrink-0 text-purple-50/70 transition ${
                                  isExpanded ? "rotate-180 text-white" : ""
                                }`}
                              />
                            </div>

                            <p className="mt-2 text-sm leading-6 text-purple-50/82 sm:mt-3 sm:text-base sm:leading-7">
                              {event.description}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-purple-50/72 sm:mt-5 sm:gap-3 sm:text-sm">
                              <span className="inline-flex items-center gap-2">
                                <UsersRound className="h-4 w-4 text-[#c7a8ff]" />
                                {event.speaker}
                              </span>
                              <span className="inline-flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-[#f43f72]" />
                                {event.location}
                              </span>
                            </div>

                            <div
                              className={`grid transition-all duration-300 ${
                                isExpanded
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}
                            >
                              <div className="overflow-hidden">
                                <div className="mt-6 border-t border-white/15 pt-5">
                                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-100/68">
                                    Block Brief
                                  </p>
                                  <p className="mt-2 text-sm leading-7 text-purple-50/85">
                                    {event.details}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </article>
                  );
                })}
                <p className="border-l border-[#f43f72]/60 pl-4 text-xs font-semibold uppercase tracking-[0.16em] text-purple-100/62">
                  Schedule timings are tentative and subject to final coordination.
                </p>
              </div>
            ) : (
              <div className="border border-dashed border-purple-300/35 bg-[#150a22]/90 px-6 py-14 text-center">
                <p className="font-heading text-xl font-bold text-white">No blocks in this filter</p>
                <p className="mt-2 text-sm text-purple-50/75">
                  Try another track or return to the full two-day route.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
