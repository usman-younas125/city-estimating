import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact Us | ${company.shortName}`,
  description: `Contact ${company.shortName} to upload plans or request a construction estimate.`,
};

export default function ContactPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="relative container-site">
          <p className="eyebrow text-orange">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Upload your plans or send a message — our estimators will respond
            quickly.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-navy">
              Get in Touch
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              Fill this form and you will be guided to upload drawings. If you
              have a bid invite, forward it to{" "}
              <a
                href={`mailto:${company.emailQuote}`}
                className="font-semibold text-orange transition hover:text-orange-hover"
              >
                {company.emailQuote}
              </a>{" "}
              or reach us at{" "}
              <a
                href={`mailto:${company.emailInfo}`}
                className="font-semibold text-orange transition hover:text-orange-hover"
              >
                {company.emailInfo}
              </a>
              .
            </p>
            <div className="mt-8 space-y-4 rounded-2xl border border-border bg-muted p-6 text-navy">
              <p>
                <span className="font-bold">Phone:</span>{" "}
                <a
                  href={company.phonePrimary.href}
                  className="text-blue transition hover:text-orange"
                >
                  {company.phonePrimary.display}
                </a>
                <span className="text-slate"> · </span>
                <a
                  href={company.phoneSecondary.href}
                  className="text-blue transition hover:text-orange"
                >
                  {company.phoneSecondary.display}
                </a>
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                <a
                  href={`mailto:${company.emailInfo}`}
                  className="text-blue transition hover:text-orange"
                >
                  {company.emailInfo}
                </a>
              </p>
              <p>
                <span className="font-bold">Quotes:</span>{" "}
                <a
                  href={`mailto:${company.emailQuote}`}
                  className="text-blue transition hover:text-orange"
                >
                  {company.emailQuote}
                </a>
              </p>
              <p>
                <span className="font-bold">Address:</span> {company.addressFull}
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
