"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, navLinks, serviceLinks } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/80 bg-surface/95 shadow-[0_4px_20px_rgba(15,39,68,0.06)] backdrop-blur-md"
          : "border-border/60 bg-surface/90 backdrop-blur-sm"
      }`}
    >
      <div className="container-site flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-3.5">
        <Link href="/" className="group flex min-w-0 shrink items-center gap-2.5 sm:gap-3">
          <span className="logo-mark flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base font-extrabold text-white transition duration-300 group-hover:scale-[1.03] sm:h-11 sm:w-11 sm:text-lg">
            {company.logoText}
          </span>
          <span className="font-display text-base font-extrabold tracking-tight text-navy sm:text-lg md:text-xl">
            CITY <span className="text-orange">ESTIMATING</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`link-nav inline-flex items-center gap-1 ${
                    pathname.startsWith("/services") ? "link-nav-active" : ""
                  }`}
                >
                  Services
                  <ChevronDown className="h-4 w-4 transition duration-200 group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-72 max-w-[calc(100vw-2rem)] translate-y-2 rounded-xl border border-border bg-surface p-2 opacity-0 shadow-lg transition duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item}
                      href="/services"
                      className="block rounded-lg px-3 py-2.5 text-sm text-slate transition duration-150 hover:bg-muted hover:text-navy"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`link-nav ${pathname === link.href ? "link-nav-active" : ""}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <Link href="/contact" className="btn btn-primary hidden lg:inline-flex">
          Upload Your Plan
        </Link>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-navy transition hover:bg-muted lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-surface transition-all duration-300 lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="container-site flex flex-col gap-1 py-4">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div key={link.href}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-navy"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <div className="mb-2 ml-3 space-y-1 border-l-2 border-orange/30 pl-3">
                    {serviceLinks.slice(0, 8).map((item) => (
                      <Link
                        key={item}
                        href="/services"
                        className="block py-1.5 text-sm text-slate transition hover:text-navy"
                        onClick={() => setOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-navy transition hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="btn btn-primary mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Upload Your Plan
          </Link>
        </div>
      </div>
    </header>
  );
}
