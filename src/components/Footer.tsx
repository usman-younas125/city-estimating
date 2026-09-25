import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="logo-mark flex h-10 w-10 items-center justify-center rounded-xl text-sm font-extrabold">
              {company.logoText}
            </span>
            <span className="font-display text-lg font-extrabold">
              CITY ESTIMATING
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Our Project Managers and Estimators advise on cost issues from first
            discussions through completion of the estimate — and reconcile bids
            to ensure accuracy.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-orange">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {[
              { href: "/services", label: "Cost Estimation" },
              { href: "/estimating-fee", label: "Estimating Fee" },
              { href: "/services", label: "Construction Estimation" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact Us" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition duration-200 hover:text-orange"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-orange">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-orange" aria-hidden />
              <a
                href={company.phonePrimary.href}
                className="transition duration-200 hover:text-orange"
              >
                {company.phonePrimary.display}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-orange" aria-hidden />
              <a
                href={company.phoneSecondary.href}
                className="transition duration-200 hover:text-orange"
              >
                {company.phoneSecondary.display}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-orange" aria-hidden />
              <a
                href={`mailto:${company.emailInfo}`}
                className="transition duration-200 hover:text-orange"
              >
                {company.emailInfo}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-orange" aria-hidden />
              <a
                href={`mailto:${company.emailQuote}`}
                className="transition duration-200 hover:text-orange"
              >
                {company.emailQuote}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden />
              <span>
                {company.addressLine1}
                <br />
                {company.addressLine2}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-orange">
            SMS Privacy
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            No mobile information will be shared with third parties/affiliates
            for marketing/promotional purposes. Text messaging opt-in data and
            consent will not be shared with any third parties.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex items-center justify-center py-5 text-center text-sm text-white/55">
          <p>
            © {new Date().getFullYear()} {company.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
