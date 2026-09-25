import {
  CheckCircle2,
  Clock3,
  Handshake,
  BadgeDollarSign,
  Settings2,
  CalendarCheck,
  Headset,
} from "lucide-react";
import { whyChoose } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const icons = [
  CheckCircle2,
  Clock3,
  Handshake,
  BadgeDollarSign,
  Settings2,
  CalendarCheck,
  Headset,
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden section-pad">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-navy-deep/95" />

      <div className="relative container-site">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-white">
            <p className="text-sm font-semibold text-orange">
              Frustrated by inaccurate bids and lost profits?
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Why Choose City Estimating?
            </h2>
            <p className="mt-4 text-white/80">
              Enjoy precise bids, on-time projects, and growing profits — our
              expert team turns estimating headaches into a competitive edge.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyChoose.map((item, i) => {
            const Icon = icons[i % icons.length];
            const delay = ((i % 3) + 1) as 1 | 2 | 3;
            return (
              <Reveal key={item.title} delay={delay}>
                <article className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                  <div className="inline-flex rounded-xl bg-orange/15 p-2.5 text-orange transition duration-300 group-hover:bg-orange group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
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
