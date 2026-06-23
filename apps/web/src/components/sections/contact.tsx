import React from "react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent — untouched */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent pointer-events-none" />

      {/* ── Wave foreground layer ─────────────────────────────────────────── */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none" style={{ height: "65%" }}>
        {/* Wave 1 — deepest / back */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,160 C320,260 480,80 720,180 C960,280 1200,100 1440,200 L1440,320 L0,320 Z"
            fill="rgba(88,28,135,0.28)"
          />
        </svg>

        {/* Wave 2 — mid-purple */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full"
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C180,40 420,200 660,120 C900,40 1200,180 1440,100 L1440,280 L0,280 Z"
            fill="rgba(109,40,217,0.22)"
          />
        </svg>

        {/* Wave 3 — lighter lavender */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 C360,160 720,40 1080,110 C1260,145 1380,60 1440,90 L1440,220 L0,220 Z"
            fill="rgba(167,139,250,0.14)"
          />
        </svg>

        {/* Wave 4 — faint blush highlight at the very bottom */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C320,110 640,10 960,60 C1120,85 1300,30 1440,55 L1440,140 L0,140 Z"
            fill="rgba(196,181,253,0.09)"
          />
        </svg>
      </div>
      {/* ── /Wave foreground layer ────────────────────────────────────────── */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ──────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-display tracking-[0.3em] mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          {/* Decorative rule */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500/60" />
          </div>
          <p className="text-purple-200/50 text-base max-w-xl mx-auto leading-relaxed">
            Have questions about TPT 4.0? Reach out to our team — we're happy to help.
          </p>
        </div>

        {/* ── Contact cards ───────────────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {[
            { name: "Adithi",   role: "CEO — Chief Executive Officer", phone: "+91 79076 14412" },
            { name: "Midhun",   role: "COO — Chief Operational Officer", phone: "+91 99952 93933" },
            { name: "Amarjith", role: undefined, phone: "+91 90613 60241" },
            { name: "Aswath",   role: undefined, phone: "+91 73566 90727" },
          ].map((contact, i) => (
            <div
              key={contact.name}
              className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/40"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Card glow border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 via-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-b from-purple-950/70 to-[#0d0518]/80 backdrop-blur-xl" />

              {/* Card content */}
              <div className="relative p-7 flex flex-col h-full border border-purple-500/15 rounded-3xl group-hover:border-purple-400/35 transition-colors duration-300">

                {/* Avatar ring */}
                <div className="w-12 h-12 rounded-full mb-5 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-violet-700/30 group-hover:from-purple-400/40 group-hover:to-violet-600/40 transition-all duration-300" />
                  <svg className="relative w-5 h-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>

                {/* Name */}
                <h3 className="font-display font-normal tracking-[0.3em] text-sm text-white/90 mb-1 group-hover:text-purple-100 transition-colors uppercase">
                  {contact.name}
                </h3>

                {/* Designation */}
                <p className="text-[10px] tracking-widest uppercase text-purple-400/50 mb-4">
                  {contact.role ?? "— TBA —"}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-purple-500/20 via-violet-400/15 to-transparent mb-4" />

                {/* Phone */}
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 text-xs text-purple-300/60 hover:text-purple-200 transition-colors duration-200 mt-auto group/link"
                  >
                    <span className="w-6 h-6 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover/link:bg-purple-500/20 transition-colors">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </span>
                    <span className="font-mono">{contact.phone}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Social row ──────────────────────────────────────────────────── */}
        <div className="relative max-w-lg mx-auto">
          {/* Ambient glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/15 via-violet-500/10 to-purple-600/15 rounded-3xl blur-2xl pointer-events-none" />

          <div className="relative rounded-3xl border border-purple-500/15 bg-purple-950/40 backdrop-blur-xl p-8 text-center">
            <p className="text-purple-300/50 text-xs tracking-[0.25em] uppercase mb-6">
              Connect with us
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/marianiedc/",
                  icon: InstagramIcon,
                  hover: "hover:text-pink-300 hover:border-pink-400/30 hover:bg-pink-500/8 hover:shadow-pink-500/10",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/inspira-marian-iedc/",
                  icon: LinkedinIcon,
                  hover: "hover:text-sky-300 hover:border-sky-400/30 hover:bg-sky-500/8 hover:shadow-sky-500/10",
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-purple-500/15 bg-purple-500/5 text-sm font-medium text-purple-200/70 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${social.hover}`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="tracking-wide">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
