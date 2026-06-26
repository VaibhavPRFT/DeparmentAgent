"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Dashboard" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/quarterly-plan", label: "Quarterly Plan" },
  { href: "/accelerators", label: "Accelerators" },
  { href: "/projects", label: "Projects" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-r from-[#0a4f30] via-[#0f6e41] to-[#1f9a57] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime text-sm font-extrabold tracking-tight text-lime-ink">
            RC
          </div>
          <div>
            <div className="text-base font-bold leading-tight">
              Royal Cyber — Optimizely Insights
            </div>
            <div className="text-xs text-white/80">
              Agent-powered trends, content & weekly planning
            </div>
          </div>
        </Link>
        <nav className="flex flex-wrap items-center gap-1.5 text-sm font-semibold">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-1.5 transition ${
                  active
                    ? "bg-lime text-lime-ink shadow-sm"
                    : "text-white/90 hover:bg-lime/25 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
