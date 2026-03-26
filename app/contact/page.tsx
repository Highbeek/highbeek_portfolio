"use client";

import { useState } from "react";
import Link from "next/link";
import type { FormEvent } from "react";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Wire up to your preferred email service (Resend, Formspree, etc.)
    // For now, open mailto as fallback
    const mailto = `mailto:ibukunagboola.dev@gmail.com?subject=Portfolio enquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <>
      <span className="page-watermark page-watermark--bottom" aria-hidden="true">Contact.</span>
      <main className="page-main">
        <div className="page-wrap">
          <h1 className="page-title anim-fade-up anim-d1">Contact.</h1>

          <p className="contact-sub anim-fade-up anim-d2">
            Get in touch or shoot me an email directly on{" "}
            <a href="mailto:ibukunagboola.dev@gmail.com">
              ibukunagboola.dev@gmail.com
            </a>
          </p>

          {sent ? (
            <div className="anim-fade-up anim-d3" style={{ maxWidth: 540 }}>
              <p style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px" }}>
                Message opened in your mail client.
              </p>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7 }}>
                Alternatively, email me directly at{" "}
                <a
                  href="mailto:ibukunagboola.dev@gmail.com"
                  style={{ color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  ibukunagboola.dev@gmail.com
                </a>
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="contact-form anim-fade-up anim-d3"
              noValidate
            >
              <div className="form-field">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          )}

          <div className="contact-bottom-nav">
            <Link href="/" className="arrow-link">
              Go Back Home <span><HiArrowLongRight size={22} /></span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="social-footer">
        <a href="https://github.com/highbeek" target="_blank" rel="noopener noreferrer" className="social-footer-link" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
        </a>
        <a href="https://linkedin.com/in/ibukunagboola" target="_blank" rel="noopener noreferrer" className="social-footer-link" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="mailto:ibukunagboola.dev@gmail.com" className="social-footer-link" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        </a>
      </footer>
    </>
  );
}
