import { techPartners } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Technology() {
  return (
    <section className="section-pad">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Technology Partners We Use</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
              To Give You a 100% Accurate Estimate
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {techPartners.map((name, i) => (
            <Reveal
              key={name}
              delay={(((i % 3) + 1) as 1 | 2 | 3)}
            >
              <div className="card card-hover flex h-24 items-center justify-center px-3 text-center">
                <span className="font-display text-sm font-bold text-navy/70">
                  {name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
