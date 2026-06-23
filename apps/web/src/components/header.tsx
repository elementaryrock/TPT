import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "@/images/TPT.png";

const navLinks = [
  { href: "#what-is-tpt", label: "About" },
  { href: "#organisers", label: "Organisers" },
  { href: "#highlights", label: "Highlights" },
  { href: "#schedule", label: "Schedule" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const { href } of navLinks) {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3">
      <nav
        className={`max-w-4xl mx-auto flex items-center justify-between h-12 px-5 rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-[#0d0518]/80 backdrop-blur-xl border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            : "bg-white/[0.03] backdrop-blur-sm border border-white/[0.05]"
        }`}
      >
        <Link to="/" className="flex items-center">
          <img src={logo} alt="TPT Logo" className="h-5 sm:h-5.5 w-auto object-contain" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                className={`px-3 py-1 text-[13px] rounded-full transition-colors duration-200 ${
                  isActive
                    ? "text-white bg-white/[0.08]"
                    : "text-white/40 hover:text-white/80"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        <a
          href="https://makemypass.com/event/the-perfect-trajectory-4-0"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-[13px] font-bold text-white bg-gradient-to-r from-[#f43f72] to-[#a855f7] px-4 py-1.5 rounded-full hover:opacity-95 hover:shadow-[0_0_15px_rgba(244,63,114,0.4)] transition-all duration-200"
        >
          Register
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-8 h-8 flex items-center justify-center text-white/60 cursor-pointer"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`block w-4 h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block w-4 h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden max-w-4xl mx-auto mt-2 rounded-2xl bg-[#0d0518]/90 backdrop-blur-xl border border-white/[0.06] overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-3 space-y-0.5">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 text-sm text-white/50 hover:text-white rounded-lg transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="https://makemypass.com/event/the-perfect-trajectory-4-0"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2.5 text-sm font-bold text-white text-center bg-gradient-to-r from-[#f43f72] to-[#a855f7] rounded-lg mt-1 hover:opacity-95"
          >
            Register Now
          </a>
        </div>
      </div>
    </header>
  );
}
