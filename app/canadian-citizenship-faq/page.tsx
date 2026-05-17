import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Canadian Citizenship FAQ | Bill C-3 Eligibility Questions",
  description:
    "Answers to common Canadian citizenship questions including Bill C-3, citizenship by descent, criminal records, residency, lost Canadians, and eligibility requirements.",
  alternates: {
    canonical: "https://citizenshipnorth.com/canadian-citizenship-faq",
  },
};

const NAV = [
  { label: "Descent", href: "/citizenship-by-descent" },
  { label: "Pathways", href: "/#pathways" },
  { label: "FAQ", href: "/canadian-citizenship-faq", active: true },
  { label: "Updates", href: "/#updates" },
];

const FOOTER_LINKS: [string, string][] = [
  ["About", "#"],
  ["Citizenship by Descent", "/citizenship-by-descent"],
  ["Pathways", "/#pathways"],
  ["FAQ", "/canadian-citizenship-faq"],
  ["Contact", "#"],
  ["Disclaimer", "#disclaimer"],
];

const FAQ_SECTIONS = [
  {
    id: "bill-c3",
    heading: "Understanding Bill C-3",
    inlineCta: false,
    items: [
      {
        q: "What is Bill C-3?",
        a: "Bill C-3, formally known as An Act to amend the Citizenship Act, received Royal Assent on November 20, 2025, and came into effect on December 15, 2025. It is the most significant reform to Canadian citizenship law in many years. The primary change: Bill C-3 removed the first-generation limit in certain situations, meaning citizenship can now flow beyond the first generation born outside Canada in some cases. Before this legislation, if your Canadian parent was also born outside Canada, you generally could not inherit citizenship — that restriction no longer applies in all situations under the new rules.",
      },
      {
        q: "How does Bill C-3 change eligibility?",
        a: "Before Bill C-3, Canadian citizenship by descent was generally limited to one generation born outside Canada. If you were born abroad to a Canadian parent who was also born abroad, you typically did not qualify. Bill C-3 removed this \"first-generation limit\" in some situations. For people born before December 15, 2025 who were excluded only by that limit, the change is retroactive — they may now be Canadian citizens automatically, with no additional presence requirement. For those born on or after December 15, 2025, a new condition applies: the Canadian parent who was themselves born outside Canada must have spent at least 1,095 days (approximately three years) in Canada before the child's birth.",
      },
      {
        q: "What are \"Lost Canadians\"?",
        a: "\"Lost Canadians\" is an informal term for people who lost Canadian citizenship — or never acquired it — due to rules that many now consider outdated or unfair. Common situations include: women who automatically lost citizenship when they married a foreign national before 1947; children born to Canadian mothers (but not fathers) under older laws; and people born abroad who were not registered under the rules of their era. Some of these situations were addressed by Bill C-37 in 2009 and Bill C-6 in 2017. Bill C-3 in 2025 addressed further gaps related to the first-generation limit. Not every historical situation has been fully resolved, and some individuals may still find their case falls outside current legislation.",
      },
    ],
  },
  {
    id: "descent",
    heading: "Citizenship by Descent",
    inlineCta: true,
    items: [
      {
        q: "Who qualifies for Canadian citizenship by descent?",
        a: "Generally, you may qualify if at least one of your parents was a Canadian citizen at the time of your birth. The key factors are: when you were born, where your parent acquired citizenship, and — for births on or after December 15, 2025 where the Canadian parent was also born outside Canada — how much time your parent spent in Canada before your birth. The rules have changed several times over the decades, so what applied in the 1960s may differ from what applies today. Because eligibility depends on specific dates and circumstances, applying for a citizenship certificate through IRCC is the most reliable way to confirm a claim.",
      },
      {
        q: "Can grandchildren of Canadians qualify?",
        a: "It depends on the circumstances. Before Bill C-3 (in effect since December 15, 2025), the first-generation limit generally prevented citizenship from flowing to a grandchild if the connecting parent was also born outside Canada. Bill C-3 removed this limit in some situations. If your parent was a Canadian citizen born outside Canada, you may now qualify in some cases — depending on when you were born and, for births on or after December 15, 2025, how much time your parent spent in Canada. If your grandparent was the Canadian citizen and your parent was not a citizen at all, citizenship does not typically flow directly to you.",
      },
      {
        q: "Can I pass citizenship to my children born abroad?",
        a: "If you are a Canadian citizen born in Canada, your children born abroad may be eligible to register as citizens. If you are a Canadian citizen who was yourself born outside Canada, the rules are more nuanced: under Bill C-3, your children born on or after December 15, 2025 may be eligible if you spent at least 1,095 days in Canada before their birth. Children born before that date who were previously excluded only by the first-generation limit may be eligible retroactively under the new rules. Confirming a child's eligibility through IRCC is the most reliable approach.",
      },
      {
        q: "What if my parent never claimed citizenship?",
        a: "Some people have a right to Canadian citizenship that was never formally documented. If your parent was born in Canada, they were likely a Canadian citizen by birth — even if they never held a Canadian passport or took formal steps to claim that status. A parent's citizenship, even if never officially acted upon, may still form the basis for your own registration. The key question is whether your parent had the legal status of a Canadian citizen at the time of your birth, not whether they exercised it.",
      },
      {
        q: "Can I apply if my Canadian parent is deceased?",
        a: "Yes, in many cases. The relevant question is whether your parent was a Canadian citizen at the time of your birth — not whether they are alive today. If you have documentation establishing your parent's Canadian birth or citizenship status, you may be able to proceed with a citizenship certificate application even if your parent has passed away. Birth certificates, old passports, naturalization records, and family documents are all potentially relevant. Gathering and preserving family records early is worthwhile.",
      },
    ],
  },
  {
    id: "residency-language",
    heading: "Residency and Language Requirements",
    inlineCta: false,
    items: [
      {
        q: "Do I need to live in Canada first?",
        a: "Not for citizenship by descent or registration. If you are applying based on a Canadian parent, you do not need to establish Canadian residency first. Eligibility is based on your family connection and the circumstances of your birth — not on how long you have lived in Canada. This is different from naturalization, which is the pathway for permanent residents who have lived in Canada for a qualifying period and then apply for citizenship.",
      },
      {
        q: "Do I need to speak French or English?",
        a: "No, not for citizenship by descent. Language proficiency in English or French is a requirement for naturalization — where a permanent resident applies to become a citizen after meeting residency requirements. For citizenship registration based on descent, there is no language requirement. If your eligibility stems from a Canadian parent or ancestor, fluency in English or French is not part of the standard assessment.",
      },
    ],
  },
  {
    id: "documents-process",
    heading: "Documents and Process",
    inlineCta: false,
    items: [
      {
        q: "What documents are needed?",
        a: "The documents required depend on your specific situation, but commonly include: your own birth certificate; your Canadian parent's or grandparent's birth certificate or citizenship certificate; immigration or naturalization records for ancestors who came to Canada; marriage certificates that establish family connections; any old Canadian passports held by family members; and provincial vital statistics records or archival documents where original records are incomplete. IRCC will specify what is required based on your application type. Having as complete a set of family documents as possible before you begin is advisable.",
      },
      {
        q: "How long does the process take?",
        a: "Processing times for citizenship certificate applications vary and change depending on IRCC's current workload. Historically, processing times have ranged from several months to over a year. Complex cases — involving older records, missing documents, or situations requiring additional assessment — may take longer. IRCC publishes current processing time estimates on its website. Submitting a complete application and responding promptly to any requests for additional information are the best ways to avoid unnecessary delays.",
      },
      {
        q: "What if records are missing?",
        a: "Missing records are common, particularly for those tracing ancestry through older family members or across multiple generations. IRCC acknowledges that not all applicants will have perfect documentation. Alternative or supporting evidence — such as archival records, church documents, old photographs, census records, or statutory declarations — may be accepted in some cases. Consulting a licensed immigration lawyer or consultant is particularly useful when documentation is incomplete, as they can advise on what alternatives may be acceptable and how to build the strongest possible application.",
      },
    ],
  },
  {
    id: "special",
    heading: "Special Circumstances",
    inlineCta: false,
    items: [
      {
        q: "Does having a criminal record affect eligibility?",
        a: "A criminal record — whether in Canada or another country — can be a factor in citizenship applications, but the impact depends on the nature and timing of the offence. Certain criminal convictions can affect admissibility to Canada or the outcome of a citizenship application. For registration based on descent, the rules around criminal history are more nuanced than for naturalization, but they are not irrelevant. If you have a criminal record, seeking professional advice before applying is strongly recommended, as the specific charges, dates, and dispositions all matter.",
      },
      {
        q: "What if I was adopted?",
        a: "Adoption adds complexity to citizenship eligibility. Children adopted internationally by Canadian citizens are not automatically citizens by descent in the same way as biological children. However, there are specific provisions in Canadian law for international adoption and citizenship — including pathways that allow Canadian citizens who adopt children abroad to have those children recognized as citizens. The rules depend on when and how the adoption occurred and where the child was born. Given the complexity, families in this situation should consult IRCC's official guidance or a licensed professional.",
      },
      {
        q: "What if my Canadian ancestor was born before Confederation?",
        a: "Canada became a confederation in 1867, and formal Canadian citizenship as a distinct legal status did not exist until the 1947 Citizenship Act. Before that, people in Canada held British subject status. If your ancestor was born in what is now Canada before 1947, they would have been a British subject — not a \"Canadian citizen\" in the modern legal sense. This can complicate ancestry-based claims significantly. Those tracing connections to very early Canadian families may need specialized research and professional guidance to assess their situation.",
      },
    ],
  },
  {
    id: "dual-marriage",
    heading: "Dual Citizenship, Marriage, and Other Nationalities",
    inlineCta: false,
    items: [
      {
        q: "Can dual citizens apply?",
        a: "Yes. Canada generally permits dual and multiple citizenship. If you are a citizen of another country and believe you may also qualify for Canadian citizenship by descent, you can pursue a Canadian citizenship certificate without being required to give up your existing citizenship. Holding citizenship in another country does not disqualify you from Canadian citizenship by descent, though the rules of your current country may affect how you choose to proceed — some countries do not recognize dual citizenship on their end.",
      },
      {
        q: "Does marriage to a Canadian automatically grant citizenship?",
        a: "No. Marrying a Canadian citizen does not automatically make you a Canadian citizen. Marriage may make you eligible to apply for permanent residency through the family class sponsorship program, which could eventually lead to citizenship through naturalization after meeting residency requirements. The pathway from marriage to citizenship involves multiple steps and typically takes several years. It is a separate process entirely from citizenship by descent.",
      },
      {
        q: "Can Americans qualify for citizenship by descent?",
        a: "Yes, if you have a Canadian parent or grandparent who was a citizen, being an American does not disqualify you. Citizenship eligibility is determined by your family connection to Canada and the specific circumstances of your birth — your current nationality does not prevent you from pursuing a Canadian citizenship claim. Many Americans with Canadian-born parents or grandparents have successfully registered for Canadian citizenship. The same rules and process apply regardless of what other nationality you hold.",
      },
    ],
  },
  {
    id: "losing",
    heading: "Losing Canadian Citizenship",
    inlineCta: false,
    items: [
      {
        q: "Can I lose Canadian citizenship?",
        a: "Under current Canadian law, citizens cannot be stripped of citizenship simply for living abroad or holding dual citizenship. However, citizenship can be renounced voluntarily. In the past, Canadians lost citizenship under circumstances now considered unfair — women who married foreign nationals before 1947, children born abroad who did not take steps to retain their status by a certain age, and others. Some historical losses were corrected by later legislation, including Bills C-37, C-6, and C-3. If you suspect that citizenship may have been lost at some point in your family's history, this is worth exploring — it may be the basis of a \"Lost Canadians\" type claim.",
      },
    ],
  },
];

const RELATED_LINKS = [
  { label: "Canadian Citizenship by Descent", href: "/citizenship-by-descent" },
  { label: "How the Citizenship Process Works", href: "/#process" },
  { label: "Who May Be Eligible", href: "/#ancestry" },
  { label: "Explore All Citizenship Pathways", href: "/#pathways" },
  { label: "Return to Home", href: "/" },
];

export default function CanadianCitizenshipFAQPage() {
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
          <a href="/citizenship-by-descent" className={styles.headerCta}>
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
              <span>Canadian Citizenship FAQ</span>
            </nav>
            <p className={styles.eyebrow}>Canadian Citizenship Guidance</p>
            <h1 className={styles.pageTitle}>Canadian Citizenship Eligibility FAQ</h1>
            <p className={styles.subheadline}>
              Clear answers to common questions about Canadian citizenship — including Bill&nbsp;C-3, citizenship by descent, document requirements, and special circumstances.
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
                Canadian citizenship eligibility raises many questions — especially for those exploring ancestry-based pathways or navigating the changes introduced by Bill C-3 in December 2025. This page addresses the most common questions in plain language, organized by topic.
              </p>
              <p className={styles.bodyText}>
                The answers here are informational starting points, not legal advice. Citizenship eligibility depends on the specific details of your situation — dates, documents, and family history all matter. For anything beyond general research, the Government of Canada&rsquo;s official guidance and a licensed professional are the most reliable sources.
              </p>
            </section>

            {/* FAQ Sections */}
            {FAQ_SECTIONS.map(({ id, heading, items, inlineCta }) => (
              <section key={id} className={styles.contentSection} id={id}>
                <h2 className={styles.sectionHeading}>{heading}</h2>
                <div className={styles.faqList}>
                  {items.map(({ q, a }) => (
                    <details key={q} className={styles.faqItem}>
                      <summary>{q}</summary>
                      <div className={styles.faqAnswer}>{a}</div>
                    </details>
                  ))}
                </div>
                {inlineCta && (
                  <div className={styles.inlineCta}>
                    <p className={styles.inlineCtaText}>
                      Read the full guide on who may qualify for citizenship by descent, what documents help, and how the law has changed.
                    </p>
                    <a href="/citizenship-by-descent" className={styles.inlineCtaLink}>
                      Explore Citizenship by Descent &#8594;
                    </a>
                  </div>
                )}
              </section>
            ))}

          </article>
        </div>

        {/* Dual CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaHeading}>Ready to Take the Next Step?</h2>
            <p className={styles.ctaCopy}>
              Use these resources to explore your eligibility or dive deeper into the citizenship by descent pathway.
            </p>
            <div className={styles.ctaGrid}>
              <div className={styles.ctaCard}>
                <h3 className={styles.ctaCardTitle}>Check Your Eligibility</h3>
                <p className={styles.ctaCardText}>
                  See the full overview of who may qualify under ancestry-based citizenship rules, including recent Bill C-3 changes and what documents to gather.
                </p>
                <a href="/citizenship-by-descent" className={styles.ctaCardBtn}>
                  Check Eligibility &#8594;
                </a>
              </div>
              <div className={styles.ctaCard}>
                <h3 className={styles.ctaCardTitle}>Explore Citizenship by Descent</h3>
                <p className={styles.ctaCardText}>
                  A detailed guide to ancestry-based citizenship claims, the history of Canadian citizenship law, and what the process involves.
                </p>
                <a href="/citizenship-by-descent" className={styles.ctaCardBtn}>
                  Read the Guide &#8594;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className={styles.relatedSection}>
          <div className={styles.relatedInner}>
            <h2 className={styles.relatedHeading}>More Canadian Citizenship Resources</h2>
            <ul className={styles.relatedList}>
              {RELATED_LINKS.map(({ label, href }) => (
                <li key={label} className={styles.relatedItem}>
                  <a href={href} className={styles.relatedLink}>
                    <span className={styles.relatedArrow} aria-hidden="true">&#8594;</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <section id="disclaimer" className={styles.disclaimerSection}>
          <div className={styles.disclaimerInner}>
            <p className={styles.disclaimerText}>
              This page is for informational purposes only and does not constitute legal advice. Canadian citizenship law can change, and eligibility depends on individual circumstances. Always verify current rules with the{" "}
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.disclaimerLink}
              >
                Government of Canada
              </a>{" "}
              and consult a qualified Canadian immigration lawyer or licensed consultant for advice specific to your situation. Citizenship North is an independent informational resource and is not affiliated with the Government of Canada.
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
