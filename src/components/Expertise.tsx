import { Calculator, ClipboardList, Layers } from "lucide-react";
import { expertise } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const icons = [Calculator, ClipboardList, Layers];

export function Expertise() {
  return (
    <section className="section-pad bg-section-muted">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Fields of Expertise</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Our Construction Estimating Services
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = icons[i % icons.length];
            const delay = ((i % 3) + 1) as 1 | 2 | 3;
            return (
              <Reveal key={item.title} delay={delay}>
                <article className="card card-hover group h-full p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-muted p-3 text-navy transition duration-300 group-hover:bg-orange group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {item.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
