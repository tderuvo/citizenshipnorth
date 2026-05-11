const pathways = [
  {
    title: "Citizenship by Descent",
    description:
      "Born to a Canadian citizen parent or grandparent? You may qualify for Canadian citizenship without ever applying for immigration. Understand the rules, generational limits, and how to confirm your status.",
    tag: "Most researched",
    featured: true,
  },
  {
    title: "Permanent Residency",
    description:
      "Permanent residency (PR) is the most common stepping stone to Canadian citizenship. Learn how PR works, how long you need to hold it, and what the path to citizenship looks like.",
    tag: null,
    featured: false,
  },
  {
    title: "Work in Canada",
    description:
      "Work permits and specific visa streams can lead to permanent residency and eventually citizenship. Explore Express Entry, provincial nominees, and other work-based options.",
    tag: null,
    featured: false,
  },
  {
    title: "Family Sponsorship",
    description:
      "Canadian citizens and permanent residents can sponsor certain family members. Find out who qualifies, how the process works, and what timelines to expect.",
    tag: null,
    featured: false,
  },
  {
    title: "Business & Investment",
    description:
      "Canada offers pathways for entrepreneurs and investors through federal and provincial programs. Learn what level of investment or business activity may be required.",
    tag: null,
    featured: false,
  },
];

export default function PathwaysSection() {
  return (
    <section id="pathways" className="bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red mb-4">
            All Pathways
          </span>
          <h2
            className="text-[1.875rem] md:text-[2.25rem] font-medium text-navy leading-snug"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Explore Canadian Citizenship Pathways
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pathways.map((pathway) => (
            <div
              key={pathway.title}
              className={`rounded-xl border p-5 flex flex-col gap-3 transition-all ${
                pathway.featured
                  ? "bg-navy border-navy"
                  : "bg-offwhite border-stone hover:border-navy/25 hover:shadow-sm"
              }`}
            >
              {pathway.tag && (
                <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-red text-white px-2.5 py-1 rounded-full w-fit">
                  {pathway.tag}
                </span>
              )}
              <h3 className={`text-sm font-semibold ${pathway.featured ? "text-white" : "text-navy"}`}>
                {pathway.title}
              </h3>
              <p className={`text-sm leading-relaxed flex-1 ${pathway.featured ? "text-white/65" : "text-ink/60"}`}>
                {pathway.description}
              </p>
              <a
                href="#"
                className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  pathway.featured ? "text-white/75 hover:text-white" : "text-navy hover:text-red"
                }`}
              >
                Learn more
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
