"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    // TODO: Integrate with ConvertKit, Mailchimp, Beehiiv, or similar
    setSubmitted(true);
  }

  return (
    <section id="updates" className="bg-navy scroll-mt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/50 bg-white/10 px-3 py-1 rounded-full mb-6">
          Updates
        </span>
        <h2
          className="text-[1.875rem] md:text-[2.25rem] font-medium text-white leading-snug mb-4"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          Stay Updated on Canadian Citizenship Changes
        </h2>
        <p className="text-base text-white/55 leading-relaxed mb-10">
          Get plain-English updates on citizenship rules, ancestry-based
          eligibility, documentation tips, and Canadian immigration pathways.
        </p>

        {submitted ? (
          <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-6">
            <p className="text-white font-medium">You&rsquo;re on the list.</p>
            <p className="text-white/55 text-sm mt-1">
              We&rsquo;ll send updates when things change.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/35 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-white/45 transition-colors"
            />
            <button
              type="submit"
              className="bg-red text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-red-light transition-colors whitespace-nowrap"
            >
              Get Updates
            </button>
          </form>
        )}

        <p className="text-xs text-white/30 mt-5">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
