import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Estimating Fee | City Estimating",
  description:
    "Affordable construction estimating fees designed to fit your project size and budget.",
};

const packages = [
  {
    name: "Starter Takeoff",
    price: "From $200",
    desc: "Ideal for smaller residential scopes and single-trade takeoffs.",
    points: ["1–2 trades", "12–24 hr turnaround", "Excel / PDF report"],
  },
  {
    name: "Standard Estimate",
    price: "Custom Quote",
    desc: "Full multi-trade estimating for residential and light commercial.",
    points: ["Multiple trades", "Labor + material", "Bid-ready packaging"],
    featured: true,
  },
  {
    name: "Commercial Package",
    price: "Project-Based",
    desc: "Complex commercial and industrial scopes with dedicated estimators.",
    points: ["Full CSI divisions", "Revisions included", "Priority support"],
  },
];

export default function EstimatingFeePage() {
  return (
    <div>
      <section className="page-hero">
        <div className="relative container-site">
          <p className="eyebrow text-orange">Pricing</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
            Estimating Fee
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Competitive rates designed around your project size — average
            starting cost around $200.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`flex flex-col rounded-2xl p-7 transition duration-300 hover:-translate-y-1 ${
                pkg.featured
                  ? "border border-orange bg-navy text-white shadow-md"
                  : "card card-hover"
              }`}
            >
              {pkg.featured && (
                <span className="mb-3 inline-flex w-fit rounded-full bg-orange/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange">
                  Most Popular
                </span>
              )}
              <h2
                className={`font-display text-xl font-bold ${
                  pkg.featured ? "text-white" : "text-navy"
                }`}
              >
                {pkg.name}
              </h2>
              <p className="mt-3 font-display text-3xl font-extrabold text-orange">
                {pkg.price}
              </p>
              <p
                className={`mt-3 text-sm ${
                  pkg.featured ? "text-white/75" : "text-slate"
                }`}
              >
                {pkg.desc}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {pkg.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-orange">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`btn mt-8 w-full ${
                  pkg.featured ? "btn-primary" : "btn-secondary"
                }`}
              >
                Get a Quote
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
