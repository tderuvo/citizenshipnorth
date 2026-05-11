"use client";

import { useState } from "react";
import styles from "./page.module.css";

const NAV = [
  { label: "Descent", href: "#descent" },
  { label: "Pathways", href: "#pathways" },
  { label: "FAQ", href: "#faq" },
  { label: "Updates", href: "#updates" },
];

const PATHWAYS = [
  "Citizenship by Descent",
  "Family Lineage",
  "Permanent Residency",
  "Work & Business Pathways",
];

const TRUST = [
  { label: "Descent & Ancestry", desc: "Citizenship by birth or lineage" },
  { label: "Documentation Guidance", desc: "What you may need to gather" },
  { label: "PR & Work Routes", desc: "Residency and employment pathways" },
  { label: "Rule Updates", desc: "Current Canadian citizenship law" },
];

const CARDS = [
  {
    title: "You have Canadian family roots",
    body: "If a parent, grandparent, or ancestor was a Canadian citizen, you may already have a claim to citizenship. Recent legal changes have expanded eligibility for many people.",
    cta: "Explore descent eligibility",
    href: "#descent",
  },
  {
    title: "You want to live or work in Canada",
    body: "Work permits, Express Entry, and provincial nominee programs are established routes to permanent residency and eventual citizenship. We explain each pathway in plain English.",
    cta: "View residency pathways",
    href: "#pathways",
  },
  {
    title: "You need to understand your options",
    body: "Not sure where to start? Many people are in the same position. Citizenship North helps you identify the right questions before you spend time or money gathering documents.",
    cta: "Get clarity on your situation",
    href: "#process",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Identify your pathway",
    body: "Understand which citizenship routes apply to your family history, nationality, or immigration status before gathering any documents.",
  },
  {
    n: "02",
    title: "Gather family and identity details",
    body: "Birth records, parent or grandparent documents, and registration certificates may be relevant. We explain what to look for and why.",
  },
  {
    n: "03",
    title: "Understand documentation needs",
    body: "Different pathways carry different requirements. Knowing what you may need early saves significant time and expense down the line.",
  },
  {
    n: "04",
    title: "Decide whether to speak with a professional",
    body: "Many situations are straightforward. For complex cases involving lost status, multiple generations, or missing records, a licensed consultant adds real value.",
  },
];

const FOOTER_LINKS: [string, string][] = [
  ["About", "#"],
  ["Citizenship by Descent", "#descent"],
  ["Pathways", "#pathways"],
  ["FAQ", "#faq"],
  ["Contact", "#"],
  ["Disclaimer", "#disclaimer"],
];

export default function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className={styles.page}>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoAccent} />
            <span className={styles.logoText}>Citizenship North</span>
          </a>
          <nav className={styles.nav}>
            {NAV.map(({ label, href }) => (
              <a key={label} href={href} className={styles.navLink}>{label}</a>
            ))}
          </nav>
          <a href="#descent" className={styles.headerCta}>Check Eligibility</a>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.heroEyebrow}>Canadian Citizenship Guidance</p>
            <h1 className={styles.heroHeading}>
              Clear Guidance for Your Path to Canadian Citizenship
            </h1>
            <p className={styles.heroCopy}>
              Explore citizenship by descent, family lineage, work, residency, and other pathways — with plain-English guidance that helps you understand what applies to your situation.
            </p>
            <div className={styles.heroActions}>
              <a href="#descent" className={styles.heroBtnPrimary}>Check Eligibility</a>
              <a href="#pathways" className={styles.heroBtnSecondary}>Explore Pathways</a>
            </div>
            <p className={styles.heroDisclaimer}>
              Independent informational resource. Not affiliated with the Government of Canada.
            </p>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <p className={styles.heroCardLabel}>Possible Pathways</p>
            </div>
            <ul className={styles.heroCardBody}>
              {PATHWAYS.map((item) => (
                <li key={item} className={styles.heroCardItem}>
                  <span className={styles.heroCardDot} />
                  <span className={styles.heroCardItemText}>{item}</span>
                </li>
              ))}
            </ul>
            <div className={styles.heroCardFooter}>
              <p className={styles.heroCardFooterText}>
                Multiple pathways may apply. Identifying the right one is the first step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section className={styles.trust}>
        <div className={styles.trustGrid}>
          {TRUST.map(({ label, desc }) => (
            <div key={label}>
              <p className={styles.trustLabel}>{label}</p>
              <p className={styles.trustDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pathway cards */}
      <section id="pathways" className={styles.pathways}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>
            Start With the Path That Fits Your Situation
          </h2>
          <div className={styles.cardsGrid}>
            {CARDS.map(({ title, body, cta, href }) => (
              <div key={title} className={styles.card}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardBody}>{body}</p>
                <a href={href} className={styles.cardLink}>
                  {cta} <span aria-hidden="true">&#8594;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Descent panel */}
      <section id="descent" className={styles.descent}>
        <div className={styles.descentInner}>
          <div className={styles.descentContent}>
            <p className={styles.descentEyebrow}>Citizenship by Descent</p>
            <h2 className={styles.descentHeading}>Citizenship by Descent Is Changing</h2>
            <p className={styles.descentCopy}>
              Recent legal and policy changes may affect people with Canadian parents, grandparents, or family connections abroad. Citizenship North helps you understand the questions to ask before spending time or money gathering documents.
            </p>
            <a href="#process" className={styles.descentBtn}>
              Learn About Descent Eligibility
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className={styles.process}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>A Simple Way to Begin</h2>
          <div className={styles.stepsGrid}>
            {STEPS.map(({ n, title, body }) => (
              <div key={n} className={styles.step}>
                <span className={styles.stepNumber}>{n}</span>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="updates" className={styles.newsletter}>
        <div className={styles.newsletterInner}>
          <div className={styles.newsletterCenter}>
            <h2 className={styles.newsletterHeading}>
              Stay Updated on Canadian Citizenship Rules
            </h2>
            <p className={styles.newsletterCopy}>
              Plain-English updates on citizenship rules, ancestry eligibility, and documentation guidance.
            </p>

            {submitted ? (
              <div className={styles.successBox}>
                <p className={styles.successTitle}>You&rsquo;re on the list.</p>
                <p className={styles.successNote}>We&rsquo;ll send updates when things change.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.submitBtn}>
                  Get Updates
                </button>
              </form>
            )}

            <p className={styles.formFootnote}>No spam. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section id="disclaimer" className={styles.disclaimer}>
        <div className={styles.disclaimerInner}>
          <p className={styles.disclaimerText}>
            Citizenship North is an independent informational website and does not provide legal advice.
            Content is for general information only. For advice specific to your situation, consult a
            qualified Canadian immigration lawyer or licensed consultant. Not affiliated with the
            Government of Canada.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogoRow}>
                <span className={styles.footerLogoAccent} />
                <span className={styles.footerLogoText}>Citizenship North</span>
              </div>
              <p className={styles.footerTagline}>Clear guidance for Canadian citizenship pathways.</p>
            </div>
            <nav className={styles.footerNav}>
              {FOOTER_LINKS.map(([label, href]) => (
                <a key={label} href={href} className={styles.footerNavLink}>{label}</a>
              ))}
            </nav>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.footerCopy}>
              &copy; {new Date().getFullYear()} Citizenship North. All rights reserved.
            </p>
            <p className={styles.footerNote}>Not affiliated with the Government of Canada.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
