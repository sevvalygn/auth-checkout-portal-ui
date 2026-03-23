"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

function IconBase({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center text-zinc-500">
      {children}
    </span>
  );
}

export function MediumShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const navItems = useMemo<NavItem[]>(
    () => [
      {
        label: "Home",
        href: "/",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 10.5 12 3l9 7.5" />
            <path d="M5 9.5V21h14V9.5" />
          </svg>
        ),
      },
      {
        label: "Library",
        href: "/pricing",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5V6.5A2.5 2.5 0 0 1 6.5 4H20" />
            <path d="M8 20h12" />
            <path d="M8 20V4" />
          </svg>
        ),
      },
      {
        label: "Profile",
        href: "/contact",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21a8 8 0 1 0-16 0" />
            <circle cx="12" cy="8" r="4" />
          </svg>
        ),
      },
      {
        label: "Stories",
        href: "/play",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h10" />
          </svg>
        ),
      },
      {
        label: "Stats",
        href: "#",
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19V5" />
            <path d="M10 19v-9" />
            <path d="M16 19v-6" />
            <path d="M22 19V9" />
          </svg>
        ),
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Topbar (mobile + desktop) */}
      <div className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md md:hidden hover:bg-zinc-100"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </button>

            <Link href="/" className="text-[38px] font-semibold tracking-tight text-zinc-900 leading-none">
              Medium
            </Link>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <input
              type="search"
              placeholder="Search"
              className="w-[220px] rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm text-zinc-900 outline-none transition focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2 focus:ring-offset-white"
            />
          </div>
          <div className="md:hidden">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-500">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Desktop sidebar */}
        <aside
          className={[
            "hidden shrink-0 border-r border-zinc-200 md:flex md:flex-col",
            "transition-[width] duration-200 ease-in-out",
            collapsed ? "w-20" : "w-64",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-3 py-3">
            <span className="sr-only">Toggle sidebar</span>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-zinc-100"
              onClick={() => setCollapsed((v) => !v)}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {collapsed ? (
                  <>
                    <path d="M3 12h18" />
                    <path d="m14 5 7 7-7 7" />
                  </>
                ) : (
                  <>
                    <path d="M21 12H3" />
                    <path d="m10 19-7-7 7-7" />
                  </>
                )}
              </svg>
            </button>
            {!collapsed ? (
              <span className="text-sm font-medium text-zinc-500">Navigation</span>
            ) : null}
          </div>

          <div className="flex-1 overflow-auto px-3 py-1">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900"
                >
                  <IconBase>{item.icon}</IconBase>
                  <span className={collapsed ? "hidden" : "font-medium"}>{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-6 border-t border-zinc-200 pt-6">
              <div className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-zinc-500">
                <IconBase>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6" />
                    <path d="M23 11h-6" />
                  </svg>
                </IconBase>
                <span className={collapsed ? "hidden" : "font-medium"}>Following</span>
              </div>

              <div className="mt-2 flex items-center justify-between rounded-lg px-2 text-sm text-zinc-900">
                <div className="flex items-center gap-3 py-1">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
                    M
                  </span>
                  <span className={collapsed ? "hidden" : "font-medium"}>Medium Staff</span>
                </div>
              </div>

              <div className="mt-3 rounded-lg px-2 text-sm text-zinc-500">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-300 bg-zinc-100 text-zinc-500">
                    +
                  </span>
                  <div className={collapsed ? "hidden" : undefined}>
                    <p className="leading-relaxed">
                      Find writers and publications to follow.
                    </p>
                    <a
                      href="#"
                      className="mt-1 inline-block underline decoration-zinc-400"
                    >
                      See suggestions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">
          {/* Mobile drawer */}
          {open ? (
            <div className="fixed inset-0 z-[80] md:hidden">
              <div
                className="absolute inset-0 bg-black/30"
                onClick={() => setOpen(false)}
                aria-hidden
              />
              <div className="absolute left-0 top-0 h-full w-72 overflow-auto border-r border-zinc-200 bg-white">
                <div className="flex items-center justify-between px-4 py-4">
                  <span className="text-lg font-semibold">Menu</span>
                  <button
                    type="button"
                    className="rounded-md border border-zinc-200 px-3 py-1 text-sm hover:bg-zinc-100"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
                <div className="px-3 pb-6">
                  <nav className="space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900"
                      >
                        <IconBase>{item.icon}</IconBase>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          ) : null}

          {children}
          <SiteFooter />
        </main>
      </div>
    </div>
  );
}

