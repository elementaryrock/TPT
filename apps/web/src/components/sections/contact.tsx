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
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-purple-200/50 text-lg max-w-2xl mx-auto">
            Have questions about TPT 4.0? Reach out to our team — we're happy to
            help.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              name: "Adithi",
              phone: "+91 79076 14412",
            },
            {
              name: "Midhun",
              phone: "+91 99952 93933",
            },
            {
              name: "Amarjith",
              phone: "+91 90613 60241",
            },
            {
              name: "Aswath",
              phone: "+91 73566 90727",
            },
          ].map((contact) => (
            <div
              key={contact.name}
              className="group relative p-6 rounded-2xl border border-purple-500/20 bg-purple-950/30 backdrop-blur-sm hover:border-purple-400/40 hover:bg-purple-900/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Avatar placeholder */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600/30 to-violet-600/30 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-purple-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold font-display text-white mb-4 group-hover:text-purple-100 transition-colors">
                {contact.name}
              </h3>

              <div className="space-y-2">
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-purple-200/50 hover:text-purple-200 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    {contact.phone}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social / general contact row */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl opacity-10 blur-xl" />
          <div className="relative p-6 md:p-8 rounded-2xl border border-purple-500/20 bg-purple-950/30 backdrop-blur-sm text-center">
            <p className="text-purple-200/60 text-sm mb-6">
              Or reach us on social media
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/marianiedc/",
                  icon: InstagramIcon,
                  color: "hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-500/10",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/inspira-marian-iedc/",
                  icon: LinkedinIcon,
                  color: "hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/10",
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 px-8 py-5 rounded-2xl border border-purple-500/20 bg-purple-500/5 text-lg font-bold text-purple-200 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-500/5 ${social.color}`}
                  >
                    <Icon className="w-6 h-6" />
                    {social.label}
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
