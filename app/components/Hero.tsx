export default function Hero() {
  return (
    <section className="bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Text column */}
        <div className="max-w-xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red mb-5">
            Canadian Citizenship
          </span>
          <h1
            className="text-[2.25rem] leading-[1.2] md:text-[2.75rem] lg:text-[3.25rem] font-medium text-navy mb-5"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Discover Your Path to Canadian Citizenship
          </h1>
          <p className="text-base md:text-[1.0625rem] text-ink/65 leading-relaxed mb-8">
            Explore Canadian citizenship by ancestry, family lineage, work,
            residency, and other pathways — explained clearly and simply.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#ancestry"
              className="inline-flex items-center gap-2 bg-navy text-white font-medium px-5 py-2.5 rounded-lg hover:bg-navy-dark transition-colors text-sm"
            >
              Check Your Eligibility
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#pathways"
              className="inline-flex items-center gap-2 border border-navy/25 text-navy font-medium px-5 py-2.5 rounded-lg hover:border-navy/50 hover:bg-navy/5 transition-colors text-sm"
            >
              Explore Pathways
            </a>
          </div>
        </div>

        {/* Visual card */}
        <div className="relative mt-4 md:mt-0">
          <div className="bg-white rounded-2xl border border-stone shadow-sm overflow-hidden">
            <div className="h-1 bg-linear-to-r from-navy to-red" />
            <div className="p-5 sm:p-6 space-y-3">
              {[
                { label: "Citizenship by Descent", sub: "Born to a Canadian parent", icon: "🍁" },
                { label: "Family Lineage", sub: "Grandparent or further connection", icon: "🌲" },
                { label: "Work & Residency", sub: "PR or work permit pathways", icon: "📋" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3.5 p-3.5 bg-offwhite rounded-xl border border-stone"
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-navy">{item.label}</p>
                    <p className="text-xs text-ink/55 mt-0.5">{item.sub}</p>
                  </div>
                  <svg className="ml-auto text-red shrink-0" width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ))}
              <p className="text-center text-xs text-ink/40 pt-1 pb-0.5">
                Independent informational guidance · Not government affiliated
              </p>
            </div>
          </div>
          <div className="absolute -bottom-3 -left-3 bg-navy text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-md">
            Updated 2025 Rules
          </div>
        </div>

      </div>
    </section>
  );
}
