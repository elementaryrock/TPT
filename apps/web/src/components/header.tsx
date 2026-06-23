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
          ? "bg-[#0d0518]/80 backdrop-blur-xl border-b border-purple-500/10 shadow-lg shadow-purple-950/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold font-heading bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-purple-200 transition-all duration-300">
              TPT 4.0
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 text-sm font-medium text-purple-200/60 hover:text-white rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                {label}
              </a>
            ))}
            <a
              href="https://makemypass.com/event/the-perfect-trajectory-4-0"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg hover:shadow-lg hover:shadow-purple-900/40 hover:scale-105 transition-all duration-300"
            >
              Register
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-purple-300 hover:bg-purple-500/10 transition-colors cursor-pointer"
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
        <div className="md:hidden border-t border-purple-500/10 bg-[#0d0518]/95 backdrop-blur-xl">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-purple-200/60 hover:text-white rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                {label}
              </a>
            ))}
            <a
              href="https://makemypass.com/event/the-perfect-trajectory-4-0"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-sm font-semibold text-white text-center bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg mt-2"
            >
              Register Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
