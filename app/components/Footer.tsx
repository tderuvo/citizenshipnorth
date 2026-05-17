const navLinks = [
  { label: "About", href: "#" },
  { label: "Citizenship by Descent", href: "#ancestry" },
  { label: "Pathways", href: "#pathways" },
  { label: "FAQ", href: "/canadian-citizenship-faq" },
  { label: "Contact", href: "#" },
  { label: "Disclaimer", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-1.5 h-5 bg-red rounded-full" />
              <span
                className="text-white font-semibold text-base tracking-tight"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                Citizenship North
              </span>
            </div>
            <p className="text-sm text-white/45 leading-relaxed">
              Clear guidance for Canadian citizenship pathways.
            </p>
          </div>

          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/45 hover:text-white/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Citizenship North. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Independent information resource. Not affiliated with the Government of Canada.
          </p>
        </div>
      </div>
    </footer>
  );
}
