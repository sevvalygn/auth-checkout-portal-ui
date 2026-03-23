import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-border bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          className="font-semibold tracking-tight text-foreground"
          href="/"
        >
          Acme
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <Link className="hover:text-foreground" href="/#ozellikler">
            Özellikler
          </Link>
          <Link className="hover:text-foreground" href="/pricing">
            Planlar
          </Link>
          <Link className="hover:text-foreground" href="/contact">
            İletişim
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            href="#"
          >
            Giriş
          </a>
          <button
            type="button"
            className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Hoşgeldin
          </button>
        </div>
      </div>
    </header>
  );
}
