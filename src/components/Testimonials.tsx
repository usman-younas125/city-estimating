import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="section-pad bg-navy-deep">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              What Our Clients Say About Us
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="mb-4 flex gap-1 text-orange">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-orange" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-white/85">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-display font-bold text-white">{item.name}</p>
                  <p className="text-sm text-orange">{item.role}</p>
                  <p className="mt-1 text-xs text-white/50">{item.date}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
