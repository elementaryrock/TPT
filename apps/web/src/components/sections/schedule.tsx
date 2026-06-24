import { useState } from "react";
import { 
  Sparkles, 
  Presentation, 
  Cpu, 
  Coffee, 
  CalendarClock
} from "lucide-react";

const schedule = {
  day1: {
    date: "July 17, 2026",
    label: "Day 1",
    events: [
      {
        time: "09:00 AM",
        title: "Registration & Check-in",
        description: "Arrive, collect your kit, and get settled in.",
        type: "general" as const,
      },
      {
        time: "10:00 AM",
        title: "Inaugural Ceremony",
        description: "Official opening with keynote address.",
        type: "keynote" as const,
      },
      {
        time: "11:30 AM",
        title: "Session 1",
        description: "TBA — Team member: fill in session details",
        type: "session" as const,
      },
      {
        time: "01:00 PM",
        title: "Lunch Break",
        description: "Networking lunch with fellow IEDC leads.",
        type: "break" as const,
      },
      {
        time: "02:00 PM",
        title: "Workshop Track",
        description: "TBA — Team member: fill in workshop details",
        type: "workshop" as const,
      },
      {
        time: "04:30 PM",
        title: "Panel Discussion",
        description: "TBA — Team member: fill in panel details",
        type: "session" as const,
      },
    ],
  },
  day2: {
    date: "July 18, 2026",
    label: "Day 2",
    events: [
      {
        time: "09:30 AM",
        title: "Day 2 Kickoff",
        description: "Recap and energizer session.",
        type: "general" as const,
      },
      {
        time: "10:00 AM",
        title: "Session 2",
        description: "TBA — Team member: fill in session details",
        type: "session" as const,
      },
      {
        time: "11:30 AM",
        title: "Interactive Workshop",
        description: "TBA — Team member: fill in workshop details",
        type: "workshop" as const,
      },
      {
        time: "01:00 PM",
        title: "Lunch Break",
        description: "Final networking opportunity.",
        type: "break" as const,
      },
      {
        time: "02:00 PM",
        title: "Closing Session",
        description: "TBA — Team member: fill in closing details",
        type: "keynote" as const,
      },
      {
        time: "04:00 PM",
        title: "Valedictory & Certificates",
        description: "Closing ceremony and certificate distribution.",
        type: "general" as const,
      },
    ],
  },
};

const typeAccents = {
  keynote: { color: "#f59e0b", rgb: "245, 158, 11", label: "Keynote", icon: Sparkles },
  session: { color: "#a855f7", rgb: "168, 85, 247", label: "Session", icon: Presentation },
  workshop: { color: "#3b82f6", rgb: "59, 130, 246", label: "Workshop", icon: Cpu },
  break: { color: "#10b981", rgb: "16, 185, 129", label: "Break", icon: Coffee },
  general: { color: "#c084fc", rgb: "192, 132, 252", label: "General", icon: CalendarClock },
};

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");
  const currentSchedule = schedule[activeDay];

  return (
    <section id="schedule" className="relative py-24 md:py-36 overflow-hidden">
      {/* ── Background Layers ── */}
      {/* Circuit-board grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sch-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#a855f7" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sch-grid)" />
        </svg>
      </div>

      {/* Ambient glows */}
      <div className="absolute left-[10%] top-[20%] w-[600px] h-[600px] bg-purple-600/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-[5%] bottom-[10%] w-[700px] h-[700px] bg-[#f43f72]/[0.025] rounded-full blur-[160px] pointer-events-none" />

      {/* ── Section Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-purple-400/60 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-5">
            Plan Your Days
          </p>
          <h2 className="font-bold font-display mb-6 tracking-wide uppercase flex flex-col items-center leading-none overflow-visible">
            <span className="inline-block text-lg sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-1.5 sm:mb-3 py-2 -my-1 px-4">
              Timeline
            </span>
            <span className="inline-block text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 py-3 -my-2 px-6">
              Schedule
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6">
            <div className="h-px w-8 sm:w-20 bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rotate-45 border border-purple-400/60" />
            <div className="h-px w-12 sm:w-32 bg-gradient-to-r from-purple-400 to-purple-600" />
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rotate-45 border border-purple-600/60" />
            <div className="h-px w-8 sm:w-20 bg-gradient-to-l from-transparent to-purple-600/60" />
          </div>
          <p className="text-purple-200/40 text-xs sm:text-base max-w-md mx-auto font-sans">
            Navigate through the sessions, workshops, and ceremonies of TPT 4.0
          </p>
        </div>

        {/* Day tabs */}
        <div className="relative z-10 max-w-xs sm:max-w-sm mx-auto p-1.5 rounded-2xl bg-[#0a0312]/70 border border-purple-500/15 backdrop-blur-xl flex gap-2 mb-16 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          {(["day1", "day2"] as const).map((day) => {
            const isActive = activeDay === day;
            return (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`relative flex-1 py-3 px-3 rounded-xl font-heading text-xs sm:text-sm font-semibold tracking-wider transition-all duration-500 cursor-pointer overflow-hidden ${
                  isActive
                    ? "text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] font-bold"
                    : "text-purple-300/60 hover:text-purple-200 hover:bg-purple-500/[0.05]"
                }`}
              >
                {/* Active gradient background overlay */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f43f72] via-[#a855f7] to-[#818cf8] opacity-90 animate-border-trace bg-[length:400%_400%]" />
                )}
                
                {/* Active border shimmer */}
                {isActive && (
                  <div className="absolute inset-0 border border-white/20 rounded-xl" />
                )}

                <span className="relative z-10 block uppercase">
                  {schedule[day].label}
                </span>
                <span className={`relative z-10 block text-[9px] sm:text-[10px] font-sans font-normal mt-0.5 ${isActive ? "text-white/80" : "text-purple-400/40"}`}>
                  {schedule[day].date}
                </span>
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing Vertical Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#a855f7]/40 via-purple-500/10 to-transparent pointer-events-none" />
          <div className="absolute left-[17px] top-0 bottom-0 w-[6px] bg-gradient-to-b from-[#a855f7]/15 via-purple-500/5 to-transparent blur-[2px] pointer-events-none" />

          <div className="space-y-8 relative">
            {currentSchedule.events.map((event, index) => {
              const accent = typeAccents[event.type];
              const IconComponent = accent.icon;
              return (
                <div
                  key={`${activeDay}-${index}`}
                  className="group relative pl-12 sm:pl-16 pb-2 last:pb-0"
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-0 top-1.5 flex items-center justify-center w-10 h-10">
                    {/* Outer pulse glow */}
                    <div
                      className="absolute w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
                      style={{
                        background: `rgba(${accent.rgb}, 0.05)`,
                        border: `1px solid rgba(${accent.rgb}, 0.2)`,
                      }}
                    />
                    {/* Glowing blur behind dot */}
                    <div
                      className="absolute w-3.5 h-3.5 rounded-full blur-[4px] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: accent.color }}
                    />
                    {/* Main center dot */}
                    <div
                      className="relative w-2.5 h-2.5 rounded-full border bg-[#0d0518] z-10 transition-all duration-300 group-hover:scale-110"
                      style={{
                        borderColor: accent.color,
                        boxShadow: `0 0 8px rgba(${accent.rgb}, 0.5)`,
                      }}
                    />
                  </div>

                  {/* Event Card */}
                  <div className="flex-1 org-card-3d">
                    <div className="relative">
                      {/* Tracing border on hover */}
                      <div
                        className="org-grid-border"
                        style={{ "--card-accent": accent.color } as React.CSSProperties}
                      />
                      
                      {/* Outer glow on hover */}
                      <div
                        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at 20% 50%, rgba(${accent.rgb}, 0.08), transparent 60%)`,
                        }}
                      />

                      {/* Card Inner */}
                      <div className="org-card-inner relative rounded-2xl border border-white/[0.05] bg-[#0a0312]/70 backdrop-blur-md overflow-hidden group-hover:border-white/[0.1] shadow-[0_4px_35px_rgba(0,0,0,0.4)] group-hover:shadow-[0_12px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(168,85,247,0.06)] transition-all duration-500">
                        {/* Top accent beam */}
                        <div
                          className="h-[2px] w-full opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `linear-gradient(90deg, transparent 5%, rgba(${accent.rgb}, 0.2), ${accent.color}, rgba(${accent.rgb}, 0.2), transparent 95%)`,
                          }}
                        />

                        {/* Corner marks */}
                        <div className="org-corner-marks absolute inset-0 rounded-2xl" />

                        {/* Holographic sweep overlay */}
                        <div className="absolute inset-0 org-ambient-glow pointer-events-none bg-white/[0.01]" />

                        <div className="relative z-10 p-5 pl-6 sm:p-6 sm:pl-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                          {/* Left Column: Time, Type, Title, Description */}
                          <div className="flex-1 space-y-3">
                            <div className="flex flex-wrap items-center gap-3">
                              {/* Monospace Glowing Time */}
                              <span
                                className="text-xs sm:text-sm font-mono font-bold tracking-wider"
                                style={{
                                  color: accent.color,
                                  textShadow: `0 0 10px rgba(${accent.rgb}, 0.3)`,
                                }}
                              >
                                {event.time}
                              </span>

                              {/* Type Badge */}
                              <span
                                className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full border font-heading"
                                style={{
                                  color: accent.color,
                                  borderColor: `rgba(${accent.rgb}, 0.2)`,
                                  background: `rgba(${accent.rgb}, 0.05)`,
                                }}
                              >
                                <IconComponent className="w-3 h-3" />
                                {accent.label}
                              </span>
                            </div>

                            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-100 transition-colors duration-300 font-heading">
                              {event.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-purple-200/40 group-hover:text-purple-200/60 transition-colors duration-500 leading-relaxed max-w-2xl font-sans">
                              {event.description}
                            </p>
                          </div>

                          {/* Right Column: Cyber readout */}
                          <div className="flex items-center gap-3 md:self-center self-end">
                            <div className="flex gap-[3px] items-center">
                              {[...Array(4)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-[3px] h-3 rounded-full transition-all duration-500"
                                  style={{
                                    background:
                                      i === 0
                                        ? accent.color
                                        : i === 1
                                        ? `rgba(${accent.rgb}, 0.7)`
                                        : i === 2
                                        ? `rgba(${accent.rgb}, 0.4)`
                                        : "rgba(255,255,255,0.05)",
                                    boxShadow: i === 0 ? `0 0 6px ${accent.color}` : "none",
                                  }}
                                />
                              ))}
                            </div>
                            <span className="text-[10px] font-mono text-purple-400/20 group-hover:text-purple-400/40 transition-colors duration-300">
                              SCH_{activeDay.toUpperCase()}_N{(index + 1).toString().padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-purple-400/30 text-xs sm:text-sm mt-16 font-sans">
          Schedule is tentative and subject to change
        </p>
      </div>
    </section>
  );
}
