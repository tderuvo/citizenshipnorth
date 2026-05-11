const steps = [
  {
    number: "01",
    title: "Understand your likely pathway",
    description:
      "Start by learning which citizenship pathways may apply to your situation — ancestry, residency, work, or family. Each route has different starting points and requirements.",
  },
  {
    number: "02",
    title: "Identify the documents you may need",
    description:
      "Citizenship applications are document-heavy. We help you understand which records — birth certificates, parent or grandparent records, registration certificates — are typically required.",
  },
  {
    number: "03",
    title: "Learn when professional help may be useful",
    description:
      "Many people navigate citizenship applications on their own. In some situations — complex lineage, missing documents, or unusual status — a qualified immigration lawyer or consultant adds real value.",
  },
  {
    number: "04",
    title: "Take the next step with confidence",
    description:
      "Armed with a clearer picture of your situation, you can decide how and when to move forward — whether that means gathering records, filing an application, or seeking professional advice.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red mb-4">
            How It Works
          </span>
          <h2
            className="text-[1.875rem] md:text-[2.25rem] font-medium text-navy leading-snug"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            A Clearer Way to Start
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl border border-stone p-6 flex flex-col gap-3"
            >
              <span
                className="text-3xl font-medium text-stone-dark select-none"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                {step.number}
              </span>
              <h3 className="text-sm font-semibold text-navy">{step.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
