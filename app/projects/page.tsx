"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiChevronDown, HiChevronLeft } from "react-icons/hi2";

type Category = "All" | "Mobile" | "Web" | "Open Source";

type Project = {
  title: string;
  tagline: string;
  description: string;
  about: string;
  category: Category | Category[];
  tags: string[];
  link?: string | null;
  android?: string;
  ios?: string;
  discontinued?: boolean;
  gradient: string;
  image?: string;
  screenshots?: string[];
};

const PROJECTS: Project[] = [
  {
    title: "RNStarterKit",
    tagline: "CLI for scaffolding production-ready React Native apps",
    description: "CLI for scaffolding production-ready React Native apps",
    about:
      "RNStarterKit is an open-source CLI tool that lets you scaffold a fully configured React Native project in seconds. It ships with multiple presets — fintech, social, indie, and minimal — each pre-wired with clean architecture, state management, API layers, auth flows, CI config, and test suites. Published to npm and used by developers worldwide to skip boilerplate and ship faster.",
    category: "Open Source",
    tags: ["React Native", "TypeScript", "CLI", "npm"],
    link: "https://www.npmjs.com/search?q=rnstarterkit",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    image: "/img/rnstarterkit-npm.png",
  },
  {
    title: "Squareme",
    tagline: "Social payments platform — 40K+ users in 6 months",
    description: "Social payments platform — 40K+ users in 6 months",
    about:
      "Squareme is a social payments platform built with React Native, enabling peer-to-peer money transfers, group payments, and spending insights. I contributed to core feature development including biometric authentication, real-time transaction flows, card issuance, and a custom PIN entry system. The app scaled to 40K+ users within 6 months of launch.",
    category: "Mobile",
    tags: ["React Native", "P2P Payments", "Biometrics"],
    link: null,
    android: "https://play.google.com/store/apps/details?id=com.app.moniee&hl=en_US",
    ios: "https://apps.apple.com/ng/app/squareme-payments-cards/id6447066884",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    screenshots: [
      "/img/squareme/screen-1.png",
      "/img/squareme/screen-2.png",
      "/img/squareme/screen-3.png",
      "/img/squareme/screen-4.png",
    ],
  },
  {
    title: "Hubeatz",
    tagline: "Geolocation marketplace connecting users to 100+ local stores",
    description: "Geolocation marketplace connecting users to 100+ local stores",
    about:
      "Hubeatz is a geolocation-based marketplace that connects users to local stores, venues, and entertainment hubs nearby. Built with React Native for mobile and React.js for the vendor dashboard, it features Stripe payments, real-time analytics via Recharts, and proximity-based discovery. The product was later discontinued but remains available on the iOS App Store.",
    category: "Mobile",
    tags: ["React Native", "React.js", "Stripe", "Recharts"],
    link: null,
    ios: "https://apps.apple.com/gb/app/hubeatz/id6751728414",
    discontinued: true,
    gradient: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)",
    screenshots: [
      "/img/hubeatz/screen-1.png",
      "/img/hubeatz/screen-2.png",
      "/img/hubeatz/screen-3.png",
    ],
  },
  {
    title: "Furex",
    tagline: "Real-time crypto trading & gift card exchange app",
    description: "Real-time crypto trading & gift card exchange app",
    about:
      "Furex is a real-time cryptocurrency trading and gift card exchange platform built with React Native. I joined the team for about 4 months to help ship a new version of the app. It features live price feeds via Socket.io, multi-currency wallets, instant buy/sell flows, and a gift card marketplace — all designed with a focus on speed, security, and a clean trading UI.",
    category: "Mobile",
    tags: ["React Native", "Socket.io", "Crypto"],
    link: null,
    android: "https://play.google.com/store/apps/details?id=com.furex.app",
    ios: "https://apps.apple.com/ng/app/furex-trade-crypto-giftcards/id1663918777",
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    screenshots: [
      "/img/furex/screen-1.webp",
      "/img/furex/screen-2.webp",
      "/img/furex/screen-3.webp",
    ],
  },
  {
    title: "Enviryde",
    tagline: "Drive Change | Ride Together | Save the Planet | Save Commute Cost",
    description: "Eco-friendly carpooling — connect, share costs & reduce emissions",
    about:
      "EnviRyde is the eco-friendly carpooling app that turns your daily commute into climate action. Whether you're driving or looking for a ride, EnviRyde helps you connect, share costs, and reduce carbon emissions — all while building community. I worked on this project for over 6 months, building core features including real-time GPS tracking, dynamic surge pricing, driver earnings via Stripe Connect, and in-app chat.",
    category: "Mobile",
    tags: ["React Native", "Stripe Connect", "GPS"],
    link: null,
    android: "https://play.google.com/store/apps/details?id=com.enviryde",
    ios: "https://apps.apple.com/ca/app/enviryde/id6504776001",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    screenshots: [
      "/img/envyride/screen-1.webp",
      "/img/envyride/screen-2.webp",
      "/img/envyride/screen-3.webp",
    ],
  },
  {
    title: "MyPhlexit",
    tagline: "Social ticketing with real-time chat, OAuth 2.0 & QR tickets",
    description: "Social ticketing — real-time chat, OAuth 2.0, QR tickets",
    about:
      "MyPhlexit is a social ticketing platform where users can discover events, purchase tickets, and connect with other attendees in real time. Built with React Native, it includes Socket.io-powered live chat, OAuth 2.0 authentication, QR code ticket scanning, and an event discovery feed.",
    category: "Mobile",
    tags: ["React Native", "Socket.io", "OAuth 2.0", "QR Code"],
    link: null,
    ios: "https://apps.apple.com/us/app/phlexit/id6578442485",
    gradient: "linear-gradient(135deg, #4776e6 0%, #8e54e9 100%)",
    screenshots: [
      "/img/phleit/screen-1.webp",
      "/img/phleit/screen-2.webp",
      "/img/phleit/screen-3.webp",
    ],
  },
  {
    title: "OmniBiz SDK",
    tagline: "In-house fintech SDK — savings, BNPL, membership & loans",
    description: "In-house fintech SDK — savings, BNPL, membership, loans",
    about:
      "The OmniBiz SDK is an internal React Native fintech library I built and maintained at OmniBiz. It packages reusable financial components including savings plans, buy-now-pay-later flows, membership management, loan application, and credit assessment. Publishing it as an internal npm package reduced code redundancy by 40% across multiple apps.",
    category: "Mobile",
    tags: ["React Native", "BNPL", "npm package"],
    link: null,
    gradient: "linear-gradient(135deg, #1f4037 0%, #99f2c8 100%)",
  },
  {
    title: "OmniPay",
    tagline: "All-in-one fintech super app — payments, savings & more",
    description: "All-in-one fintech super app — payments, savings & more",
    about:
      "OmniPay is a fintech super app I contributed to at OmniBiz, bringing together payments, savings, lending, and card management into a single seamless experience. Built with React Native, it integrates with multiple payment providers and features a real-time transaction engine, automated credit scoring, and a clean, accessible UI optimized for low-end devices.",
    category: "Mobile",
    tags: ["React Native", "Payments", "Savings", "Fintech"],
    link: null,
    android: "https://play.google.com/store/apps/details?id=com.omniretail.omnipay&hl=en",
    ios: "https://apps.apple.com/ng/app/omnipay-by-omniretail/id6444592655",
    gradient: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    screenshots: [
      "/img/omnipay/screen-1.webp",
      "/img/omnipay/screen-2.webp",
      "/img/omnipay/screen-3.webp",
    ],
  },
  {
    title: "Vendor Dashboard",
    tagline: "Real-time analytics, order management & inventory tracking",
    description: "Real-time analytics, order management & inventory tracking",
    about:
      "A web-based vendor dashboard built with React.js and TypeScript, giving merchants a real-time view of their orders, inventory, and revenue. It features interactive charts powered by Recharts, REST API integration, role-based access control, and a clean data table UI for order management.",
    category: "Web",
    tags: ["React.js", "Recharts", "TypeScript", "REST API"],
    link: null,
    gradient: "linear-gradient(135deg, #2c3e50 0%, #fd746c 100%)",
  },
];

const CATEGORIES: Category[] = ["All", "Mobile", "Web", "Open Source"];

function ScreenshotCycler({ screenshots, title }: { screenshots: string[]; title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % screenshots.length);
    }, 2000);
    return () => clearInterval(id);
  }, [screenshots.length]);

  return (
    <div className="proj-screenshot-cycler">
      {screenshots.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${title} screen ${i + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover", opacity: i === index ? 1 : 0, transition: "opacity 0.6s ease" }}
        />
      ))}
      <div className="proj-screenshot-dots">
        {screenshots.map((_, i) => (
          <span key={i} className={`proj-dot${i === index ? " active" : ""}`} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) =>
      Array.isArray(p.category) ? p.category.includes(active) : p.category === active
    );

  // close panel on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // lock body scroll when panel is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <span className="page-watermark" aria-hidden="true">Projects.</span>
      <main className="page-main">
        <div className="page-wrap">
          <h1 className="page-title anim-fade-up anim-d1">Projects.</h1>

          {/* Filter tabs */}
          <div className="filter-bar anim-fade-up anim-d2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-btn${active === cat ? " active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="proj-grid anim-fade-up anim-d3">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="proj-card"
                data-landscape={project.category === "Web" || project.category === "Open Source" ? "true" : undefined}
                onClick={() => setSelected(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(project)}
              >
                <div className="proj-card-bg" style={{ background: project.gradient }} />

                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    className="proj-card-img"
                    style={{ objectFit: "cover" }}
                  />
                )}

                {project.screenshots && (
                  <ScreenshotCycler screenshots={project.screenshots} title={project.title} />
                )}

                <div className="proj-card-overlay">
                  <h3 className="proj-card-title">{project.title}</h3>
                  <p className="proj-card-desc">{project.description}</p>
                  <div className="proj-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="proj-tag">{tag}</span>
                    ))}
                  </div>
                  {project.discontinued && (
                    <span className="proj-discontinued">Discontinued</span>
                  )}
                </div>

                {/* faded arrow hint */}
                <div className="proj-card-arrow" aria-hidden="true">
                  <HiChevronDown size={20} />
                </div>
              </div>
            ))}
          </div>

          <div className="projects-bottom-nav">
            <Link href="/contact" className="arrow-link">
              Like what you see? Let's talk <span><HiArrowLongRight size={22} /></span>
            </Link>
          </div>
        </div>
      </main>

      {/* Detail panel */}
      <div
        className={`proj-panel-backdrop${selected ? " is-open" : ""}`}
        onClick={() => setSelected(null)}
        aria-hidden="true"
      />
      <aside className={`proj-panel${selected ? " is-open" : ""}`} aria-label="Project detail">
        {selected && (
          <>
            <button className="proj-panel-back" onClick={() => setSelected(null)}>
              <span className="proj-panel-back-icon">
                <HiChevronLeft size={16} />
              </span>
              Back To Projects.
            </button>

            <h2 className="proj-panel-title">{selected.title}</h2>
            <p className="proj-panel-tagline">{selected.tagline}</p>

            {/* Preview */}
            <div className="proj-panel-preview">
              {selected.screenshots ? (
                <ScreenshotCycler screenshots={selected.screenshots} title={selected.title} />
              ) : selected.image ? (
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  sizes="480px"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div style={{ background: selected.gradient, width: "100%", height: "100%" }} />
              )}
            </div>

            <div className="proj-panel-body">
              <h3 className="proj-panel-section">About</h3>
              <p className="proj-panel-about">{selected.about}</p>

              <h3 className="proj-panel-section">Technologies</h3>
              <div className="proj-tags" style={{ marginTop: "10px" }}>
                {selected.tags.map((tag) => (
                  <span key={tag} className="proj-tag">{tag}</span>
                ))}
              </div>

              {(selected.android || selected.ios || selected.link) && (
                <>
                  <h3 className="proj-panel-section">Links</h3>
                  <div className="proj-store-links" style={{ marginTop: "10px" }}>
                    {selected.android && (
                      <a href={selected.android} target="_blank" rel="noopener noreferrer" className="proj-store-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M3.18 23.76a2 2 0 0 1-.96-1.74V1.98A2 2 0 0 1 3.18.22l12.35 11.77zm14.76-8.57-2.8-1.62-3.14 2.99 3.14 2.99 2.82-1.63a2 2 0 0 0 0-3.73zM2.01.08 14.96 12 2.01 23.92A2 2 0 0 1 .96 22.2V1.8A2 2 0 0 1 2.01.08zm13.12 9.55L2.18.08l10.95 10.42z"/></svg>
                        Google Play
                      </a>
                    )}
                    {selected.ios && (
                      <a href={selected.ios} target="_blank" rel="noopener noreferrer" className="proj-store-btn">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                        App Store
                      </a>
                    )}
                    {selected.link && (
                      <a href={selected.link} target="_blank" rel="noopener noreferrer" className="proj-store-btn">
                        View Project ↗
                      </a>
                    )}
                  </div>
                </>
              )}

              {selected.discontinued && (
                <span className="proj-discontinued" style={{ marginTop: "16px", display: "inline-block" }}>
                  Discontinued
                </span>
              )}
            </div>

            {(selected.link || selected.android || selected.ios) && (
              <div className="proj-panel-footer">
                <a
                  href={selected.link || selected.ios || selected.android || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-panel-open"
                >
                  Open Project <span>↗</span>
                </a>
              </div>
            )}
          </>
        )}
      </aside>

      <footer className="social-footer">
        <a href="https://github.com/highbeek" target="_blank" rel="noopener noreferrer" className="social-footer-link" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
        </a>
        <a href="https://linkedin.com/in/ibukunagboola" target="_blank" rel="noopener noreferrer" className="social-footer-link" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </footer>
    </>
  );
}
