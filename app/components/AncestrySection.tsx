const cards = [
  {
    title: "Canadian Parent",
    body: "If at least one of your parents was a Canadian citizen at the time of your birth, you may be a Canadian citizen by descent — even if you were born outside Canada.",
  },
  {
    title: "Canadian Grandparent",
    body: "Recent changes to Canadian citizenship law have opened pathways for people with a Canadian grandparent. Eligibility depends on the specifics of your family's situation and timing.",
  },
  {
    title: "Family Born Abroad",
    body: "Canadian citizenship can pass from one generation to the next in certain circumstances. The number of generations and registration history both affect eligibility.",
  },
  {
    title: "Lost or Unclear Status",
    body: "Some Canadians lost citizenship due to old rules, administrative errors, or gaps in documentation. There may be options to restore or clarify your status.",
  },
];

export default function AncestrySection() {
  return (
    <section id="ancestry" className="bg-offwhite scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red mb-4">
            Citizenship by Descent
          </span>
          <h2
            className="text-[1.875rem] md:text-[2.25rem] font-medium text-navy leading-snug mb-5"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            You May Already Have a Path Through Canadian Ancestry
          </h2>
          <p className="text-base text-ink/60 leading-relaxed">
            Recent changes to Canadian citizenship rules may expand eligibility for
            people with Canadian parents, grandparents, or deeper family connections.
            Citizenship North helps you understand the possibilities before you spend
            time or money chasing documents.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-xl border border-stone p-5 flex flex-col gap-3 hover:border-navy/25 hover:shadow-sm transition-all"
            >
              <div className="w-1 h-5 bg-red rounded-full" />
              <h3 className="text-sm font-semibold text-navy">{card.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="#pathways"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-red transition-colors"
          >
            See all citizenship pathways
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
