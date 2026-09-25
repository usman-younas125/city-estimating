"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const website = String(data.get("website") ?? "");
    if (website) return;

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      website,
    };

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setError(json.error || "Something went wrong. Please try again.");
        return;
      }

      setSent(true);
      form.reset();
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="card rounded-2xl p-6 sm:p-8">
        <div className="py-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-2xl text-orange">
            ✓
          </div>
          <p className="font-display text-2xl font-bold text-navy">Thank you!</p>
          <p className="mt-2 text-slate">
            We received your message. An estimator will contact you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="card rounded-2xl p-6 sm:p-8" onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <div className="space-y-4">
        <input
          required
          type="text"
          name="name"
          placeholder="Your Name"
          maxLength={100}
          autoComplete="name"
          className="input-field"
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
          placeholder="Number"
          maxLength={30}
          autoComplete="tel"
          className="input-field"
          disabled={loading}
        />
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Message"
          maxLength={2000}
          className="input-field resize-y"
          disabled={loading}
        />
        {error ? (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          className="btn btn-primary w-full py-3.5"
          disabled={loading}
        >
          {loading ? "Sending…" : "Click for Next Step"}
        </button>
      </div>
    </form>
  );
}
