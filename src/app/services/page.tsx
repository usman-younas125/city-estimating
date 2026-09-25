import type { Metadata } from "next";
import { expertise, serviceLinks } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | City Estimating",
  description:
    "Construction estimating and takeoff services across residential, commercial, MEP, concrete, masonry, and more.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="relative container-site">
          <p className="eyebrow text-orange">Services</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
            Our Construction Estimating Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            End-to-end estimating and takeoff support for every major trade.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <article key={item.title} className="card card-hover h-full p-6">
                <h2 className="font-display text-lg font-bold text-navy">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>

          <h2 className="mt-16 font-display text-2xl font-extrabold text-navy">
            Takeoff Specialties
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-transparent border-l-4 border-l-orange bg-muted px-4 py-3.5 text-sm font-semibold text-navy transition duration-200 hover:bg-surface hover:shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn btn-primary px-7 py-3.5">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
