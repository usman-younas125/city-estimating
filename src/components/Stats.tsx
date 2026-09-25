"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Successful Projects", value: 450 },
  { label: "Quality Customers", value: 170 },
  { label: "Trusted Partners", value: 150 },
  { label: "Years of Experience", value: 10 },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return count;
}

function StatItem({
  label,
  value,
  active,
}: {
  label: string;
  value: number;
  active: boolean;
}) {
  const count = useCountUp(value, active);
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-center transition duration-300 hover:bg-white/10">
      <p className="font-display text-4xl font-extrabold text-orange sm:text-5xl">
        {count}+
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/80">
        {label}
      </p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-pad bg-navy">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            How Do Our Construction Estimating Services Guarantee Your Next Win?
          </h2>
          <p className="mt-4 text-white/80">
            With hundreds of successful projects, thrilled clients, and trusted
            partners, we deliver precise estimating that turns plans into
            profits.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
