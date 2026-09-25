"use client";

import { useState } from "react";
import { trades } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Trades() {
  const [active, setActive] = useState(trades[0].id);
  const current = trades.find((t) => t.id === active) ?? trades[0];

  return (
    <section className="section-pad bg-section-muted">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Our Construction Estimating Trades
            </h2>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {trades.map((trade) => (
              <button
                key={trade.id}
                type="button"
                onClick={() => setActive(trade.id)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-200 ${
                  active === trade.id
                    ? "bg-orange text-white shadow-sm"
                    : "border border-border bg-surface text-navy hover:border-orange/40"
                }`}
              >
                {trade.title}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="card mt-8 rounded-2xl p-6 sm:p-8 lg:p-10">
            <h3 className="font-display text-2xl font-extrabold text-navy">
              {current.title}
            </h3>
            <p className="mt-4 max-w-4xl leading-relaxed text-slate">
              {current.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
