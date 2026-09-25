import { features } from "@/lib/data";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Features() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Features</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Accurate Construction Estimates That Power Your Bids
            </h2>
            <p className="mt-4 text-slate">
              Don&apos;t let the cost of estimating slow you down. Bid with
              confidence, win more contracts, and grow your business.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {features.map((item, i) => (
            <Reveal key={item.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className="card card-hover h-full border-l-4 border-l-orange p-6">
                <div className="inline-flex rounded-xl bg-orange/10 p-2.5 text-orange">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {item.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
