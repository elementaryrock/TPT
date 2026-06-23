export default function RegistrationSection() {
  return (
    <section id="registration" className="relative py-24 md:py-32">
      
        {/* Section header */}
        <div className="text-center mb-8">
          <p className="text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Secure Your Spot
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Registration
            </span>
          </h2>
        </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Registration Ticket */}
        <div className="relative w-full max-w-[380px] drop-shadow-2xl group transition-transform duration-500 hover:-translate-y-2">
          <img src="/ticket.svg" alt="The Perfect Trajectory Ticket" className="w-full h-auto" />
        </div>

        {/* CTA Button below ticket */}
        <div className="mt-8 text-center">
          <a
            href="https://makemypass.com/event/the-perfect-trajectory-4-0"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-lg shadow-lg shadow-purple-900/50 hover:shadow-purple-700/60 hover:scale-105 transition-all duration-300"
          >
            Register on MakeMyPass
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <p className="text-purple-400/60 text-sm mt-4 font-medium tracking-wide">
            Limited spots available • Secure your perfect trajectory
          </p>
        </div>

      </div>
    </section>
  );
}
