"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export function BookServices() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="book" className="section-pad bg-section-muted">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow">Get Started</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Book Our Services
          </h2>
          <p className="mt-4 text-lg text-slate">
            Fill this form and our expert estimator will give you a call.
          </p>
          <ul className="mt-8 space-y-3.5 text-slate">
            {[
              "Fast 12–24 hour turnaround on most takeoffs",
              "Residential, commercial, and industrial projects",
              "Detailed reports ready for bidding",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={1}>
          <form
            className="card rounded-2xl p-6 sm:p-8"
            onSubmit={(e) => e.preventDefault()}
            noValidate={false}
          >
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                type="text"
                name="fullName"
                placeholder="Full Name"
                maxLength={100}
                autoComplete="name"
                className="input-field sm:col-span-2"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                maxLength={254}
                autoComplete="email"
                className="input-field"
              />
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone#"
                maxLength={30}
                autoComplete="tel"
                className="input-field"
              />
              <textarea
                required
                name="message"
                placeholder="Your Message"
                rows={4}
                maxLength={2000}
                className="input-field resize-y sm:col-span-2"
              />
            </div>
            <label className="mt-4 flex items-start gap-3 text-sm text-slate">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border accent-orange"
              />
              <span>
                I agree to receive recurring marketing SMS from City Estimating.
                Message &amp; data rates may apply. Reply STOP to opt out.
              </span>
            </label>
            <button
              type="submit"
              disabled={!agreed}
              className="btn btn-secondary mt-5 w-full py-3.5"
            >
              Get Consultation
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
