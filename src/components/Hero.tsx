import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock, ShieldCheck } from "lucide-react";
import { company } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-navy-deep/90" />

      <div className="relative container-site grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
        <div className="animate-fade-up">
          <p className="eyebrow text-orange">
            <span className="h-px w-8 bg-orange" aria-hidden />
            Construction Estimating
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.15] sm:text-4xl md:text-5xl lg:text-[3.2rem]">
            Construction Estimating Services &amp; Construction Takeoffs{" "}
            <span className="text-orange">Within 12-24 Hours</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
            Save time with our Construction Estimating Services and Construction
            Takeoff Services, designed for contractors, builders, and architects
            who demand precision.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="btn btn-primary w-full px-7 py-3.5 text-base sm:w-auto"
            >
              Next Step
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#book"
              className="btn btn-outline-light w-full px-7 py-3.5 text-base sm:w-auto"
            >
              Book Our Services
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/90">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-orange" aria-hidden />
              Money-back guarantee
            </span>
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-orange" aria-hidden />
              100% satisfaction
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange" aria-hidden />
              Fast customer support
            </span>
          </div>
        </div>

        <div className="animate-fade-up-delay rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-7">
          <h2 className="font-display text-xl font-bold">Upload Your Plans</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            Fill this form and you will be guided to upload drawings — or forward
            a bid invite to{" "}
            <span className="font-semibold text-orange">{company.emailQuote}</span>
          </p>
          <form className="mt-5 space-y-3.5" action="#" method="post">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              maxLength={100}
              autoComplete="name"
              className="hero-field"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              maxLength={254}
              autoComplete="email"
              className="hero-field"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Number"
              maxLength={30}
              autoComplete="tel"
              className="hero-field"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              maxLength={2000}
              className="hero-field min-h-[5.5rem] resize-y"
            />
            <button type="button" className="btn btn-primary w-full py-3.5">
              Click for Next Step
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
