import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { company } from "@/lib/data";

export function AboutPreview() {
  return (
    <section className="section-pad">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl shadow-[0_18px_48px_rgba(15,39,68,0.12)]">
            <div
              className="aspect-[4/3] bg-cover bg-center transition duration-700 hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-border bg-surface p-4 shadow-md">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-orange">
                About Us
              </p>
              <p className="mt-1 font-display text-lg font-extrabold text-navy">
                {company.name}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <p className="eyebrow">About Us</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            {company.name}
          </h2>
          <p className="mt-5 leading-relaxed text-slate">
            At {company.shortName}, a leading construction estimating company in
            the USA, we believe that high-performance design is good design. Our
            range of in-house expertise enables us to offer top-tier construction
            estimating services and construction takeoff services that are
            holistic, integrative, and data-driven.
          </p>
          <p className="mt-4 leading-relaxed text-slate">
            Starting from the earliest stages of a project, we use advanced
            software tools to understand how estimating decisions impact energy
            use, indoor environment quality, and carbon emissions — resulting in
            higher-performing buildings that meet schedules and budgets.
          </p>
          <p className="mt-4 text-sm font-medium text-navy">
            {company.addressFull}
          </p>
          <Link href="/about" className="btn btn-primary mt-8">
            About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
