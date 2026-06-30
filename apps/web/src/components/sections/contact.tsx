import { Mail, MapPin, Phone, Send } from "lucide-react";

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

const contacts = [
  {
    name: "Adithi",
    role: "Chief Executive Officer",
    org: "MEC",
    phone: "+91 79076 14412",
  },
  {
    name: "Midhun",
    role: "Chief Operational Officer",
    org: "MEC",
    phone: "+91 99952 93933",
  },
  {
    name: "Amarnath Sujith",
    role: "Chief Executive Officer-1",
    org: "UCEK",
    phone: "+91 90613 60241",
  },
  {
    name: "Aswath S",
    role: "Chief Executive Officer-2",
    org: "UCEK",
    phone: "+91 73566 90727",
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/marianiedc/",
    Icon: InstagramIcon,
    accent: "text-[#ff8eb3]",
    hoverBorder: "hover:border-[#ff8eb3]/40",
    hoverBg: "hover:bg-[#ff8eb3]/8",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/inspira-marian-iedc/",
    Icon: LinkedinIcon,
    accent: "text-[#8bd3ff]",
    hoverBorder: "hover:border-[#8bd3ff]/40",
    hoverBg: "hover:bg-[#8bd3ff]/8",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b0515] py-14 sm:py-20 md:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#1a0930] to-transparent" />
        <div className="absolute right-[-10%] top-20 h-[500px] w-[500px] rounded-full bg-[#f43f72]/8 blur-[140px]" />
        <div className="absolute left-[-8%] bottom-20 h-[450px] w-[450px] rounded-full bg-[#c7a8ff]/8 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 border border-white/15 bg-[#1a0d2a]/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#eadcff]">
              <Send className="h-3.5 w-3.5 text-[#f43f72]" />
              Reach Out
            </div>
            <h2 className="font-display text-2xl uppercase leading-none tracking-normal text-white sm:text-4xl sm:tracking-wide md:text-5xl lg:text-6xl">
              <span className="block">Get In</span>
              <span className="mt-2 block text-[#c7a8ff] sm:mt-4">Touch</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-purple-50/75 sm:text-base sm:leading-8">
              Questions about TPT 4.0? Connect with our organising team. We're here to help you with registration, logistics, or anything about the program.
            </p>
          </div>

          {/* Quick info cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-white/15 bg-[#10071d]/80 p-4 sm:p-5">
              <div className="flex h-10 w-10 items-center justify-center border border-[#f43f72]/30 bg-[#f43f72]/10">
                <Mail className="h-4 w-4 text-[#f43f72]" />
              </div>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-purple-100/55">
                Email Us
              </p>
              <a
                href="mailto:inspiramarianiedc@gmail.com"
                className="mt-1 block text-xs font-semibold text-purple-50/85 transition hover:text-[#f43f72] sm:text-sm"
              >
                inspiramarianiedc
                <br className="sm:hidden" />
                @gmail.com
              </a>
            </div>
            <div className="border border-white/15 bg-[#10071d]/80 p-4 sm:p-5">
              <div className="flex h-10 w-10 items-center justify-center border border-[#c7a8ff]/30 bg-[#c7a8ff]/10">
                <MapPin className="h-4 w-4 text-[#c7a8ff]" />
              </div>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-purple-100/55">
                Venue
              </p>
              <p className="mt-1 text-xs font-semibold text-purple-50/85 sm:text-sm">
                Marian Engineering
                <br />
                College, Trivandrum
              </p>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="mt-10 sm:mt-14">
          <div className="mb-5 flex items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-100/55">
              Core Team
            </p>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact, i) => (
              <article
                key={contact.name}
                className="group relative border border-white/15 bg-[#10071d]/70 transition hover:border-[#f43f72]/50 hover:bg-[#160b24]"
              >
                {/* Hover accent */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#f43f72] via-[#b46cff] to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="p-5 sm:p-6">
                  {/* Index */}
                  <p className="font-display text-2xl leading-none text-white/15 sm:text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  {/* Name */}
                  <h3 className="mt-4 font-heading text-lg font-bold text-white">
                    {contact.name}
                  </h3>

                  {/* Role */}
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#c7a8ff]/70">
                    {contact.role}
                  </p>

                  {/* Org badge */}
                  <div className="mt-3 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-purple-50/60">
                    {contact.org}
                  </div>

                  {/* Divider */}
                  <div className="my-4 h-px bg-white/10" />

                  {/* Phone */}
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="group/link flex items-center gap-3 text-sm text-purple-50/70 transition hover:text-white"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#f43f72]/25 bg-[#f43f72]/8 transition group-hover/link:border-[#f43f72]/50 group-hover/link:bg-[#f43f72]/15">
                      <Phone className="h-3.5 w-3.5 text-[#f43f72]" />
                    </span>
                    <span className="font-mono text-xs sm:text-sm">
                      {contact.phone}
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Social links & CTA */}
        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-3">
          {/* Social cards */}
          {socials.map(({ label, href, Icon, accent, hoverBorder, hoverBg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 border border-white/15 bg-[#10071d]/70 p-5 transition ${hoverBorder} ${hoverBg}`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-purple-300/20 bg-[#190a29]">
                <Icon className={`h-5 w-5 ${accent}`} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-purple-100/50">
                  Follow Us
                </p>
                <p className="mt-1 font-heading text-base font-bold text-white">
                  {label}
                </p>
              </div>
              <svg
                className="ml-auto h-4 w-4 text-purple-50/30 transition group-hover:translate-x-1 group-hover:text-white"
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
          ))}

          {/* CTA card */}
          <a
            href="https://makemypass.com/event/the-perfect-trajectory-4-0"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border border-[#f43f72]/40 bg-[#f43f72]/10 p-5 transition hover:border-[#f43f72]/70 hover:bg-[#f43f72]/15"
          >
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#f43f72]/10 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="relative flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-gradient-to-br from-[#f43f72] to-[#b46cff]">
                <Send className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ffd38a]">
                  Register Now
                </p>
                <p className="mt-1 font-heading text-base font-bold text-white">
                  Join TPT 4.0
                </p>
              </div>
              <svg
                className="ml-auto h-5 w-5 text-white/50 transition group-hover:translate-x-1 group-hover:text-white"
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
            </div>
          </a>
        </div>

        {/* Bottom note */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center sm:mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-100/40">
            Organised by Inspira — Marian IEDC &amp; UCEK IEDC  ·  July 17–18, 2026
          </p>
        </div>
      </div>
    </section>
  );
}
