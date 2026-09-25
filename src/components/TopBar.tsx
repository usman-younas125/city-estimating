import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/data";

export function TopBar() {
  return (
    <div className="border-b border-white/10 bg-navy-deep text-sm text-white">
      <div className="container-site flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-2.5 text-center sm:justify-between sm:text-left">
        <a
          href={company.phonePrimary.href}
          className="inline-flex items-center gap-2 text-white/90 transition duration-200 hover:text-orange"
        >
          <Phone className="h-3.5 w-3.5 text-orange" aria-hidden />
          {company.phonePrimary.display}
        </a>
        <a
          href={`mailto:${company.emailInfo}`}
          className="inline-flex items-center gap-2 text-white/90 transition duration-200 hover:text-orange"
        >
          <Mail className="h-3.5 w-3.5 text-orange" aria-hidden />
          {company.emailInfo}
        </a>
        <span className="hidden items-center gap-2 text-white/70 sm:inline-flex">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-orange" aria-hidden />
          <span className="max-w-[16rem] truncate lg:max-w-none lg:whitespace-normal">
            {company.addressFull}
          </span>
        </span>
      </div>
    </div>
  );
}
