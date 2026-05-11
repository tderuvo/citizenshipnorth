const items = [
  {
    label: "Citizenship by Descent",
    description: "Born of Canadian parents or grandparents",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.09 7.26L18 7.27L13.45 10.74L15.18 16L10 12.77L4.82 16L6.55 10.74L2 7.27L7.91 7.26L10 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Family Lineage",
    description: "Tracing citizenship through ancestry",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="4" cy="15" r="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="16" cy="15" r="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 7.5v3M10 10.5l-4 2.5M10 10.5l4 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Work & Residency",
    description: "PR and work permit citizenship routes",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 4V3a1 1 0 011-1h4a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M2 9h16" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    label: "Updated Guidance",
    description: "Reflecting the latest citizenship rules",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 6v4.5l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-stone">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center text-center gap-3">
            <div className="w-9 h-9 rounded-full bg-offwhite border border-stone flex items-center justify-center text-navy">
              {item.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-navy">{item.label}</p>
              <p className="text-xs text-ink/55 mt-1 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
