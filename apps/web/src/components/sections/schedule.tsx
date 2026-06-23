import { useState } from "react";

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

const typeColors: Record<string, string> = {
  keynote: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  session: "border-[#8b6aae]/40 bg-[#6b4d8a]/15 text-[#d8c8e8]",
  workshop: "border-blue-500/40 bg-blue-500/10 text-blue-300",
  break: "border-green-500/40 bg-green-500/10 text-green-300",
  general: "border-[#6b4d8a]/25 bg-[#6b4d8a]/10 text-[#c9b5d9]",
};

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");
  const currentSchedule = schedule[activeDay];

  return (
    <section id="schedule" className="relative py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#c9b5d9] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Plan Your Days
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-white to-[#d8c8e8] bg-clip-text text-transparent">
              Schedule
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6b4d8a] to-[#8b6aae] mx-auto rounded-full" />
        </div>

        {/* Day tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {(["day1", "day2"] as const).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                activeDay === day
                  ? "bg-gradient-to-r from-[#6b4d8a] to-[#8b6aae] text-white shadow-lg shadow-[#1e0f2e]/50"
                  : "border border-[#6b4d8a]/25 bg-[#2a1b3d]/40 text-[#d8c8e8] hover:border-[#c9b5d9]/40 hover:bg-[#4a3060]/25"
              }`}
            >
              {schedule[day].label}
              <span className="block text-xs font-normal opacity-70 mt-0.5">
                {schedule[day].date}
              </span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#8b6aae]/40 via-[#6b4d8a]/25 to-transparent" />

          <div className="space-y-6">
            {currentSchedule.events.map((event, index) => (
              <div
                key={`${activeDay}-${index}`}
                className="group relative flex gap-6 items-start"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-[14px] h-[14px] rounded-full border-2 border-[#c9b5d9]/60 bg-[#2a1b3d] mt-1.5 group-hover:border-[#d8c8e8] group-hover:bg-[#4a3060] transition-colors" />
                </div>

                {/* Event card */}
                <div className="flex-1 p-5 rounded-xl border border-[#6b4d8a]/20 bg-[#2a1b3d]/25 backdrop-blur-sm hover:border-[#c9b5d9]/30 hover:bg-[#4a3060]/20 transition-all duration-300 group-hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-sm font-mono font-semibold text-[#d8c8e8]/80">
                      {event.time}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${typeColors[event.type]}`}
                    >
                      {event.type.charAt(0).toUpperCase() +
                        event.type.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[#c9b5d9]/50">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-[#c9b5d9]/30 text-sm mt-12">
          {/* TODO: Team member — finalize schedule and remove this note */}
          Schedule is tentative and subject to change
        </p>
      </div>
    </section>
  );
}
