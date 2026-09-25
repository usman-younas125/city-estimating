import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: `About Us | ${company.shortName}`,
  description: `Learn about ${company.name} — a Georgia-based construction estimating company serving contractors across the USA.`,
};

export default function AboutPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="relative container-site">
          <p className="eyebrow text-orange">About</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold sm:text-5xl">
            {company.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            A leading construction estimating company delivering precise,
            data-driven takeoffs and estimates across the USA — based in Lilburn,
            Georgia.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div
            className="min-h-[320px] rounded-2xl bg-cover bg-center shadow-[0_18px_48px_rgba(15,39,68,0.12)]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80')",
            }}
          />
          <div>
            <h2 className="font-display text-3xl font-extrabold text-navy">
              How We Work
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              From the earliest stages of a project, we use advanced software to
              understand how estimating decisions impact performance, schedule,
              and budget. Our team partners with contractors, architects, and
              builders to deliver estimates that win bids.
            </p>
            <ol className="mt-8 space-y-4">
              {[
                "Share your plans or bid invite",
                "Our estimators review scope and trades",
                "Receive a detailed takeoff within 12–24 hours",
                "Bid confidently with accurate pricing",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange text-sm font-bold text-white shadow-sm">
                    {i + 1}
                  </span>
                  <span className="pt-1.5 font-semibold text-navy">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-slate">
              <span className="font-semibold text-navy">Office:</span>{" "}
              {company.addressFull}
            </p>
            <Link href="/contact" className="btn btn-primary mt-8">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
