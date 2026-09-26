"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { company } from "@/lib/data";

export function BookServices() {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) return;
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get("website") ?? "")) return;

    data.delete("website");
    data.append("access_key", company.web3formsAccessKey);
    data.append("subject", "New Consultation Request from City Estimating");
    data.append("from_name", "City Estimating Website");

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!json.success) {
        setError(json.message || "Something went wrong. Please try again.");
        return;
      }

      setSent(true);
      form.reset();
      setAgreed(false);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

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
          {sent ? (
            <div className="card rounded-2xl p-6 sm:p-8">
              <div className="py-8 text-center">
                <p className="font-display text-2xl font-bold text-navy">
                  Thank you!
                </p>
                <p className="mt-2 text-slate">
                  We received your request. An estimator will call you soon.
                </p>
              </div>
            </div>
          ) : (
            <form
              className="card rounded-2xl p-6 sm:p-8"
              onSubmit={handleSubmit}
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
                  name="name"
                  placeholder="Full Name"
                  maxLength={100}
                  autoComplete="name"
                  className="input-field sm:col-span-2"
                  disabled={loading}
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  maxLength={254}
                  autoComplete="email"
                  className="input-field"
                  disabled={loading}
                />
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder="Phone#"
                  maxLength={30}
                  autoComplete="tel"
                  className="input-field"
                  disabled={loading}
                />
                <textarea
                  required
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  maxLength={2000}
                  className="input-field resize-y sm:col-span-2"
                  disabled={loading}
                />
              </div>
              <label className="mt-4 flex items-start gap-3 text-sm text-slate">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border accent-orange"
                  disabled={loading}
                />
                <span>
                  I agree to receive recurring marketing SMS from City Estimating.
                  Message &amp; data rates may apply. Reply STOP to opt out.
                </span>
              </label>
              {error ? (
                <p
                  className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700"
                  role="alert"
                >
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={!agreed || loading}
                className="btn btn-secondary mt-5 w-full py-3.5"
              >
                {loading ? "Sending…" : "Get Consultation"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
