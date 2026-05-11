import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Canadian Citizenship by Descent | Citizenship North",
  description:
    "Learn about Canadian citizenship by descent, ancestry-based eligibility, family lineage pathways, recent legal developments, and documents that may help establish Canadian citizenship claims.",
};

const NAV = [
  { label: "Descent", href: "/citizenship-by-descent", active: true },
  { label: "Pathways", href: "/#pathways" },
  { label: "FAQ", href: "#" },
  { label: "Updates", href: "/#updates" },
];

const FOOTER_LINKS: [string, string][] = [
  ["About", "#"],
  ["Citizenship by Descent", "/citizenship-by-descent"],
  ["Pathways", "/#pathways"],
  ["FAQ", "#"],
  ["Contact", "#"],
  ["Disclaimer", "#disclaimer"],
];

const CLAIMS = [
  {
    tag: "Most common pathway",
    title: "Children of a Canadian-Born Parent",
    body: "If one of your parents was born in Canada, or became a Canadian citizen before your birth, you may be eligible to register as a Canadian citizen. This is the most direct connection under the current Citizenship Act, though the timing of your parent's citizenship and your own birth date both factor into the assessment.",
  },
  {
    tag: "May be limited by first-generation rules",
    title: "Those with a Canadian-Born Grandparent",
    body: "Having a Canadian-born grandparent does not directly transfer citizenship to grandchildren under current law. What matters most is whether your parent held Canadian citizenship when you were born. If your parent was a Canadian citizen — even if they never formally exercised that status — the relevant link may run through them, not through your grandparent.",
  },
  {
    tag: "Registration may apply",
    title: "Canadians Born Abroad to Canadian Parents",
    body: "Some people were born outside Canada to Canadian parents and were never formally registered as citizens. Depending on when this occurred and the specifics of the parents' citizenship status at the time, registration may still be possible. The process and available options vary significantly by the circumstances of the birth.",
  },
  {
    tag: "Historical complexity",
    title: "The 'Lost Canadians' Question",
    body: "A significant group — sometimes called 'Lost Canadians' — lost citizenship under rules that many now consider outdated or unfair. Women who married foreign nationals before 1947, children born abroad under certain conditions, and others affected by mid-twentieth-century legislation may have had claims restored through amendments in 2009 and 2017, though not all situations were addressed.",
  },
];

const DOCS = [
  {
    label: "Birth certificates",
    desc: "Your own, as well as those of your Canadian parent or grandparent",
  },
  {
    label: "Canadian citizenship certificates",
    desc: "Any citizenship documents issued to family members, including older formats",
  },
  {
    label: "Immigration and naturalization records",
    desc: "Landing documents, landed immigrant cards, or naturalization certificates for ancestors who came to Canada",
  },
  {
    label: "Marriage records",
    desc: "May establish family connections and are relevant for tracing prior citizenship status, particularly for women affected by older rules",
  },
  {
    label: "Canadian passports",
    desc: "Passports held by a parent or grandparent at any point in their life",
  },
  {
    label: "Archival and family records",
    desc: "Church records, census documents, or historical papers that establish place of birth or long-term residency in Canada",
  },
  {
    label: "Provincial vital statistics records",
    desc: "Available through Canadian provincial archives; useful for verifying births, deaths, and marriages that occurred in Canada",
  },
];

const FAQS = [
  {
    q: "Can citizenship skip generations?",
    a: "Under the current Citizenship Act, citizenship by descent generally does not pass beyond the first generation born outside Canada. If both you and your Canadian parent were born abroad, the first-generation limit may prevent automatic citizenship from extending to you — though exceptions exist, and cases involving births before 1977 can be handled differently. This is one of the more nuanced areas of Canadian citizenship law, and outcomes depend heavily on individual circumstances.",
  },
  {
    q: "Does a grandparent qualify me?",
    a: "Having a Canadian-born grandparent does not directly confer citizenship on grandchildren under current rules. What matters most is whether your parent was a Canadian citizen at the time of your birth. If your parent holds or held Canadian citizenship — even informally — the connection may run through them to you. If the Canadian link exists only at the grandparent level, the first-generation limit generally prevents that from extending further, though the specific facts always matter.",
  },
  {
    q: "What if my parent never formally claimed citizenship?",
    a: "Some people have a right to Canadian citizenship that was never formally acted upon. If your parent was born in Canada, they were likely a Canadian citizen by birth regardless of whether they ever held a Canadian passport or registered that status. Whether your parent's citizenship — even if never formally claimed — can form the basis for your own registration is a fact-specific question worth exploring with a professional or through official IRCC guidance.",
  },
  {
    q: "Do I need to speak French or English?",
    a: "No. Citizenship by descent or registration does not carry a language requirement. Language proficiency testing in English or French is a requirement for citizenship acquired through naturalization — the residency-based pathway — not for citizenship registration by descent. If you are applying as someone born to a Canadian citizen, language proficiency is not part of the standard assessment.",
  },
  {
    q: "Can I pursue this from outside Canada?",
    a: "Generally, yes. Eligible applicants living outside Canada can pursue citizenship registration through Canadian embassies, high commissions, or consulates. The process and required documentation vary by situation and by location of the nearest Canadian diplomatic mission. You do not need to be physically present in Canada to initiate most applications.",
  },
  {
    q: "Should I speak with a lawyer or consultant?",
    a: "For anything beyond general research, consulting a licensed Canadian immigration lawyer or an authorized immigration consultant is a sensible step. They can review your specific family documents, the timing of key events, and the details of your situation in a way that a general guide cannot. This page is informational only and is not a substitute for professional advice tailored to your circumstances.",
  },
];

export default function CitizenshipByDescentPage() {
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
            {NAV.map(({ label, href, active }) => (
              <a
                key={label}
                href={href}
                className={active ? styles.navLinkActive : styles.navLink}
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="/citizenship-by-descent#process" className={styles.headerCta}>
            Check Eligibility
          </a>
        </div>
      </header>

      <main>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <a href="/" className={styles.breadcrumbLink}>Home</a>
              <span className={styles.breadcrumbSep} aria-hidden="true">&#8594;</span>
              <span>Citizenship by Descent</span>
            </nav>
            <p className={styles.eyebrow}>Canadian Citizenship Guidance</p>
            <h1 className={styles.pageTitle}>Canadian Citizenship by Descent</h1>
            <p className={styles.subheadline}>
              Understanding ancestry-based pathways to Canadian citizenship, recent legal developments, and what documents may matter.
            </p>
            <div className={styles.metaRow}>
              <span>Updated 2026</span>
              <span className={styles.metaDot} aria-hidden="true" />
              <span>Informational Guide</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <div className={styles.articleWrapper}>
          <article className={styles.article}>

            {/* Intro */}
            <section className={styles.intro}>
              <p className={styles.leadPara}>
                For many people around the world, Canadian citizenship is not just a distant aspiration — it may already be part of their family&rsquo;s story. If a parent or grandparent was a Canadian citizen, or was born in Canada, that connection may be worth exploring. Whether a citizenship claim exists, and how to pursue one, depends on a range of factors this guide aims to introduce.
              </p>
              <p className={styles.bodyText}>
                Canada&rsquo;s citizenship laws have changed significantly across the decades. The rules that governed who was considered Canadian in the 1940s were different from those in effect in 1977, when a major overhaul of the Citizenship Act took place, and different again from amendments passed in 2009 and 2017. These shifts have created situations where some people lost citizenship they didn&rsquo;t know they had, while others may have claims that were never formally registered.
              </p>
              <p className={styles.bodyText}>
                This guide is a starting point — not legal advice. It introduces the general framework of citizenship by descent, explains why the rules can be complicated, and points toward the kinds of questions worth asking. Eligibility always turns on the specifics: the dates, the documents, and the details of your family&rsquo;s history.
              </p>
            </section>

            {/* Section 1 */}
            <section className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>What Is Canadian Citizenship by Descent?</h2>
              <p className={styles.bodyText}>
                Citizenship by descent — sometimes described using the Latin phrase <em>jus sanguinis</em>, meaning &ldquo;right of blood&rdquo; — refers to citizenship acquired through family lineage rather than through place of birth. In Canada&rsquo;s case, this typically means that a person born outside the country may be eligible for citizenship if a parent was a Canadian citizen at the time of their birth.
              </p>
              <p className={styles.bodyText}>
                The basic principle sounds straightforward: if your parent was Canadian when you were born, that citizenship status may have passed to you automatically or through a registration process. In practice, the picture is more complicated. The law distinguishes between different ways of acquiring citizenship, between the first and subsequent generations born outside Canada, and between births that occurred at different points in Canadian legal history.
              </p>
              <p className={styles.bodyText}>
                One concept worth understanding early is the first-generation limit. Under current Canadian law, citizenship by descent generally cannot pass beyond the first generation born abroad. If you were born outside Canada to a Canadian parent who was also born outside Canada, you may not be covered — though exceptions exist, and the legislation has been challenged and amended over time. Whether that limit applies to your situation, and whether any exceptions might, is exactly the kind of question where the specific facts matter.
              </p>
            </section>

            {/* Section 2 */}
            <section className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Who May Have a Possible Claim?</h2>
              <p className={styles.sectionLead}>
                The people most likely to have a possible claim to Canadian citizenship by descent fall into a few broad categories. These are starting points for further inquiry, not guarantees.
              </p>
              <div className={styles.claimGrid}>
                {CLAIMS.map(({ tag, title, body }) => (
                  <div key={title} className={styles.claimCard}>
                    <span className={styles.claimCardTag}>{tag}</span>
                    <h3 className={styles.claimCardTitle}>{title}</h3>
                    <p className={styles.claimCardBody}>{body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Why the Rules Can Be Complicated</h2>
              <p className={styles.bodyText}>
                Canada has had multiple distinct citizenship laws over its history, and each operated differently. The Immigration Act of 1910, the Canadian Citizenship Act of 1947, and the current Citizenship Act of 1977 each reflected different assumptions about family, gender, nationality, and the rights of Canadians living abroad. People whose circumstances straddle these eras can find themselves in genuinely complex territory.
              </p>
              <p className={styles.bodyText}>
                The 1947 act created the first formal definition of Canadian citizenship, but it was very much a product of its time. It applied different rules to men and women, treated children born to married and unmarried parents differently, and contained provisions that, over subsequent decades, came to be seen as discriminatory. Women who married foreign nationals, for instance, often lost their citizenship automatically — a rule that had cascading effects on their children&rsquo;s status.
              </p>
              <p className={styles.bodyText}>
                The 1977 Citizenship Act addressed many of these issues, but introduced its own complexities, including the first-generation limit. Subsequent amendments — particularly those in 2009 through Bill C-37 and in 2017 through Bill C-6 — extended citizenship to some previously excluded groups, but new questions and edge cases continue to arise, and not every affected person was reached by those changes.
              </p>
              <p className={styles.bodyText}>
                None of this should be read as a definitive account of the law as it applies to any individual situation. Citizenship law is interpreted and applied by Immigration, Refugees and Citizenship Canada (IRCC), tested in courts, and subject to political and legislative change. The most reliable reference for current rules is always the official guidance from the Canadian government, supplemented by advice from a licensed professional when the stakes are significant.
              </p>
            </section>

            {/* Section 4 */}
            <section className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Documents That May Be Helpful</h2>
              <p className={styles.sectionLead}>
                If you believe you may have a possible claim to Canadian citizenship by descent, gathering relevant records is usually an important early step. The documents below may be useful, depending on your specific situation.
              </p>
              <ul className={styles.docList}>
                {DOCS.map(({ label, desc }) => (
                  <li key={label} className={styles.docItem}>
                    <span className={styles.docBullet} aria-hidden="true" />
                    <span>
                      <strong>{label}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 5 */}
            <section className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Recent Changes and Ongoing Discussions</h2>
              <p className={styles.bodyText}>
                Canadian citizenship law has not stood still. The most significant recent changes came through Bill C-37 in 2009, which restored citizenship to a substantial group of people who had lost it under earlier rules, and through Bill C-6 in 2017, which addressed some remaining gaps. These changes surprised many people — some who had never considered themselves potentially Canadian found that a claim existed, or had been restored.
              </p>
              <p className={styles.bodyText}>
                Courts have also played an ongoing role. Several legal challenges have addressed the constitutionality of the first-generation limit and related provisions, and the results of these cases continue to shape the practical landscape. These decisions don&rsquo;t always receive broad media attention, but they can have significant implications for groups of people whose situations fall into specific legal categories.
              </p>
              <p className={styles.bodyText}>
                There are active policy discussions about how Canada treats citizens abroad and their descendants. Advocates for further reform — particularly for communities with deep historical ties to Canada who remain excluded under current rules — have continued to raise these questions in parliamentary and public forums. Whether additional changes emerge, and when, remains to be seen.
              </p>
              <p className={styles.bodyText}>
                As with all matters of immigration and citizenship law, the situation can change. This page reflects the general landscape as understood in 2026 and should not be treated as a legal opinion, a current statement of IRCC policy, or a guarantee of eligibility in any specific case.
              </p>
            </section>

            {/* FAQ */}
            <section className={styles.contentSection} id="faq">
              <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
              <div className={styles.faqList}>
                {FAQS.map(({ q, a }) => (
                  <details key={q} className={styles.faqItem}>
                    <summary>{q}</summary>
                    <div className={styles.faqAnswer}>{a}</div>
                  </details>
                ))}
              </div>
            </section>

          </article>
        </div>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaHeading}>Explore Your Possible Pathway</h2>
            <p className={styles.ctaCopy}>
              Citizenship North provides informational guidance on ancestry-based citizenship, residency pathways, and Canadian immigration topics. Use the resources below to continue learning.
            </p>
            <div className={styles.ctaActions}>
              <a href="/" className={styles.ctaBtnPrimary}>Return Home</a>
              <a href="#" className={styles.ctaBtnSecondary}>Future Eligibility Quiz</a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section id="disclaimer" className={styles.disclaimerSection}>
          <div className={styles.disclaimerInner}>
            <p className={styles.disclaimerText}>
              Citizenship North is an independent informational resource and does not provide legal advice or immigration representation. Citizenship eligibility depends on individual circumstances and current Canadian law. For advice specific to your situation, consult a qualified Canadian immigration lawyer or licensed consultant.
            </p>
          </div>
        </section>

      </main>

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
            <nav className={styles.footerNav} aria-label="Footer navigation">
              {FOOTER_LINKS.map(([label, href]) => (
                <a key={label} href={href} className={styles.footerNavLink}>{label}</a>
              ))}
            </nav>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.footerCopy}>
              &copy; {new Date().getFullYear()} Citizenship North. All rights reserved.
            </p>
            <p className={styles.footerNote}>Independent informational resource. Not affiliated with the Government of Canada. Not legal advice.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
