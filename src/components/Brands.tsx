import { brands } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Brands() {
  const row = [...brands, ...brands];

  return (
    <section className="border-y border-border bg-surface py-14">
      <div className="container-site">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-extrabold text-navy sm:text-3xl">
            Top Construction Brands We Worked For
          </h2>
        </Reveal>
        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface to-transparent" />
          <div className="animate-marquee flex w-max gap-6">
            {row.map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="flex h-16 min-w-[160px] items-center justify-center rounded-xl border border-border bg-muted px-6 transition duration-300 hover:border-orange/40 sm:min-w-[180px]"
              >
                <span className="font-display text-sm font-bold tracking-wide text-navy/70">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
