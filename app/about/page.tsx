import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "About — Ibukun Agboola",
  description:
    "Senior React Native & Frontend Engineer. 4+ years building fintech, crypto, and marketplace applications.",
};

const SKILLS_SECTIONS = [
  {
    title: "Engineering & Mobile",
    link: { label: "View Github", href: "https://github.com/highbeek" },
    body: "I specialise in React Native and Next.js, with a strong focus on performance, clean architecture, and developer tooling. I've built custom native modules (Swift/Java) to eliminate third-party dependencies and achieve 60fps on low-end devices. On the web side, I work with React.js, TypeScript, and modern CSS to build fast, accessible interfaces.",
  },
  {
    title: "Fintech & Payments",
    link: { label: "App Store", href: "https://apps.apple.com" },
    body: "Deep experience integrating Stripe, Stripe Connect, Paystack, BNPL, P2P lending, and card issuance across mobile and web platforms. I've implemented biometric authentication, secure PIN entry, real-time transaction flows, and automated credit assessment — helping fintech products handle millions in transactions every month.",
  },
  {
    title: "Open Source",
    link: { label: "View npm", href: "https://www.npmjs.com/search?q=rnstarterkit" },
    body: "I maintain RNStarterKit — a CLI for scaffolding production-ready React Native apps with clean architecture, multiple presets (fintech, social, indie, minimal), and automated setup for state management, API layers, auth, CI, and testing. I also published standardised fintech component packages from internal SDKs at OmniBiz.",
  },
  {
    title: "Architecture & Mentoring",
    link: null,
    body: "I've architected in-house SDKs that reduced code redundancy by 40%, reviewed contributions, and established coding standards across teams. I enjoy helping engineers grow and believe that great software is built by great teams — not lone heroes.",
  },
];

const EDUCATION = [
  {
    degree: "Postgraduate Diploma, Computer Science",
    institution: "Ladoke Akintola University of Technology (LAUTECH)",
    year: "2024",
  },
  {
    degree: "Bachelor of Science, Mathematics",
    institution: "University of Ilorin, Kwara State",
    year: "2017",
  },
];

const ACHIEVEMENTS = [
  {
    title: "40K+ Users in 6 Months",
    body: "Contributed to 40K+ user acquisition through feature development at Squareme — a social payments platform launched from zero.",
    year: "2023 – 2024",
  },
  {
    title: "50% Fewer Third-Party Dependencies",
    body: "Built custom React Native native modules to replace third-party libraries, improving performance and reducing bundle size across apps.",
    year: "Ongoing",
  },
  {
    title: "90%+ Test Coverage",
    body: "Implemented comprehensive test suites reducing production bugs by 40% and enabling confident, frequent releases.",
    year: "2024",
  },
  {
    title: "5 Industries Shipped",
    body: "Successfully delivered production apps across fintech, e-commerce, mobility, crypto, and social platforms.",
    year: "2021 – Present",
  },
];

export default function About() {
  return (
    <>
      <main className="page-main">
        <div className="page-wrap">
          <h1 className="page-title anim-fade-up anim-d1">About Me.</h1>

          <p className="about-lead anim-fade-up anim-d2">
            I&apos;m a Senior React Native &amp; Frontend Engineer building
            scalable mobile and web products. I care deeply about performance,
            developer experience, and shipping things that actually work in
            production — especially on low-end devices.
          </p>

          {/* Skills / Capabilities */}
          <div className="about-sections">
            {SKILLS_SECTIONS.map((item) => (
              <div key={item.title} className="about-item">
                <div className="about-bullet" aria-hidden="true" />
                <div className="about-item-content">
                  <p className="about-item-title">{item.title}</p>
                  <p className="about-item-body">{item.body}</p>
                </div>
                {item.link ? (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-item-link"
                  >
                    {item.link.label}
                  </a>
                ) : (
                  <span />
                )}
              </div>
            ))}
          </div>

          {/* Education */}
          <h2 className="about-section-title">My Education.</h2>
          <div className="about-sections" style={{ marginTop: "24px" }}>
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="about-item">
                <div className="about-bullet" aria-hidden="true" />
                <div className="about-item-content">
                  <p className="about-item-title">
                    {edu.degree}
                    <span className="item-source">{edu.institution}</span>
                  </p>
                </div>
                <span className="about-item-link">{edu.year}</span>
              </div>
            ))}
          </div>

          {/* Notable Achievements */}
          <h2 className="about-section-title">Notable Achievements.</h2>
          <div className="about-sections" style={{ marginTop: "24px" }}>
            {ACHIEVEMENTS.map((a) => (
              <div key={a.title} className="about-item">
                <div className="about-bullet" aria-hidden="true" />
                <div className="about-item-content">
                  <p className="about-item-title">{a.title}</p>
                  <p className="about-item-body">{a.body}</p>
                </div>
                <span className="about-item-link">{a.year}</span>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="about-bottom-nav">
            <Link href="/resume" className="arrow-link">
              See the full story on paper <span><HiArrowLongRight size={22} /></span>
            </Link>
          </div>
        </div>
      </main>

      {/* Social footer */}
      <footer className="social-footer">
        <a href="https://github.com/highbeek" target="_blank" rel="noopener noreferrer" className="social-footer-link" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
        </a>
        <a href="https://linkedin.com/in/ibukunagboola" target="_blank" rel="noopener noreferrer" className="social-footer-link" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="https://x.com/highbeek_" target="_blank" rel="noopener noreferrer" className="social-footer-link" aria-label="Twitter / X">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="mailto:ibukunagboola.dev@gmail.com" className="social-footer-link" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        </a>
      </footer>
    </>
  );
}
