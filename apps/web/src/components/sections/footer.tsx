export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative border-t border-purple-500/10 bg-purple-950/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white font-heading mb-2">
              The Perfect Trajectory
            </h3>
            <p className="text-sm text-purple-300/50">
              A two-day orientation program for newly-elected IEDC Team leads
              across Kerala.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold text-purple-300/70 uppercase tracking-wider mb-3">
              Quick Links
            </p>
            <nav className="space-y-2">
              {[
                { label: "What is TPT?", href: "#what-is-tpt" },
                { label: "Organisers", href: "#organisers" },
                { label: "Registration", href: "#registration" },
                { label: "Schedule", href: "#schedule" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-purple-200/40 hover:text-purple-200 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social / Contact */}
          <div>
            <p className="text-sm font-semibold text-purple-300/70 uppercase tracking-wider mb-3">
              Connect
            </p>
            <div className="flex gap-3">
              {/* TODO: Team member — add actual social media links */}
              {["Instagram", "LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-3 py-1.5 rounded-lg border border-purple-500/20 bg-purple-500/5 text-xs font-medium text-purple-300/60 hover:border-purple-400/40 hover:text-purple-200 transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-purple-500/10 text-center">
          <p className="text-sm text-purple-400/30">
            © {new Date().getFullYear()} The Perfect Trajectory. Made with 💜
            by the TPT Team.
          </p>
        </div>
      </div>
    </footer>
  );
}
