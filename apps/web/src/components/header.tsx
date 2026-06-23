import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#what-is-tpt", label: "About" },
  { href: "#organisers", label: "Organisers" },
  { href: "#registration", label: "Register" },
  { href: "#highlights", label: "Highlights" },
  { href: "#schedule", label: "Schedule" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1e0f2e]/85 backdrop-blur-xl border-b border-[#6b4d8a]/15 shadow-lg shadow-[#1e0f2e]/25"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold font-heading bg-gradient-to-r from-[#d8c8e8] to-[#c9b5d9] bg-clip-text text-transparent group-hover:from-white group-hover:to-[#e8d8ef] transition-all duration-300">
              TPT 4.0
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 text-sm font-medium text-[#c9b5d9]/60 hover:text-white rounded-lg hover:bg-[#6b4d8a]/15 transition-all duration-300"
              >
                {label}
              </a>
            ))}
            <a
              href="https://makemypass.com/event/the-perfect-trajectory-4-0"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#6b4d8a] to-[#8b6aae] rounded-lg hover:shadow-lg hover:shadow-[#1e0f2e]/50 hover:scale-105 transition-all duration-300"
            >
              Register
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#d8c8e8] hover:bg-[#6b4d8a]/15 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#6b4d8a]/15 bg-[#1e0f2e]/95 backdrop-blur-xl">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-[#c9b5d9]/60 hover:text-white rounded-lg hover:bg-[#6b4d8a]/15 transition-all duration-300"
              >
                {label}
              </a>
            ))}
            <a
              href="https://makemypass.com/event/the-perfect-trajectory-4-0"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-sm font-semibold text-white text-center bg-gradient-to-r from-[#6b4d8a] to-[#8b6aae] rounded-lg mt-2"
            >
              Register Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
