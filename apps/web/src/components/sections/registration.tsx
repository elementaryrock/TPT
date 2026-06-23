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
        
        {/* Registration Ticket with CTA */}
        <div className="relative w-full max-w-[380px] drop-shadow-2xl group transition-transform duration-500 hover:-translate-y-2">
          <img src="/ticket.svg" alt="The Perfect Trajectory Ticket" className="w-full h-auto" />
          
          <div className="absolute bottom-23 left-0 right-0 flex justify-center">
            <a
              href="https://makemypass.com/event/the-perfect-trajectory-4-0"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#f43f72] to-[#a855f7] text-white font-bold text-sm shadow-lg shadow-[#f43f72]/20 hover:shadow-[0_0_15px_rgba(244,63,114,0.4)] hover:scale-105 transition-all duration-300"
            >
              Register on MakeMyPass
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-purple-400/60 text-sm font-medium tracking-wide">
            Limited spots available • Secure your perfect trajectory
          </p>
        </div>

      </div>
    </section>
  );
}
