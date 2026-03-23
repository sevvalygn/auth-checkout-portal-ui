import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fiyatlandırma — Acme",
};

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-5xl bg-background px-4 py-12">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm text-primary">Paketler</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
          Sana uygun planı seç
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Aynı kart yapısı; ortadaki “popüler” plan vurgulu.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <article className="flex flex-col rounded-2xl border border-dashed border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">Başlangıç</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Küçük projeler için.
          </p>
          <p className="mt-6">
            <span className="text-3xl font-bold text-foreground">₺0</span>
            <span className="text-sm text-muted-foreground">/ay</span>
          </p>
          <ul className="mt-6 flex-1 space-y-3 text-sm text-foreground">
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> 1 proje
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> Temel destek
            </li>
            <li className="flex gap-2">
              <span className="text-muted-foreground">—</span> Öncelikli destek
            </li>
          </ul>
          <button
            type="button"
            className="mt-8 w-full rounded-lg border border-border py-2.5 text-sm font-medium text-foreground transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Başla
          </button>
        </article>

        <article className="relative flex flex-col rounded-2xl border-2 border-primary bg-primary/5 p-6 shadow-md">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            En çok tercih edilen
          </span>
          <h2 className="pt-2 text-lg font-semibold text-foreground">Pro</h2>
          <p className="mt-1 text-sm text-muted-foreground">Çoğu ekip için.</p>
          <p className="mt-6">
            <span className="text-3xl font-bold text-foreground">₺199</span>
            <span className="text-sm text-muted-foreground">/ay</span>
          </p>
          <ul className="mt-6 flex-1 space-y-3 text-sm text-foreground">
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> Sınırsız proje
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> Öncelikli destek
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> API erişimi
            </li>
          </ul>
          <button
            type="button"
            className="mt-8 w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            Pro’ya geç
          </button>
        </article>

        <article className="flex flex-col rounded-2xl border border-border border-t-4 border-t-amber-500 bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">Kurumsal</h2>
          <p className="mt-1 text-sm text-muted-foreground">Büyük ekipler.</p>
          <p className="mt-6">
            <span className="text-3xl font-bold text-foreground">Özel</span>
            <span className="mt-1 block text-sm text-muted-foreground">
              Teklif al
            </span>
          </p>
          <ul className="mt-6 flex-1 space-y-3 text-sm text-foreground">
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> SLA
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> Özel entegrasyon
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400">✓</span> Hesap yöneticisi
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-8 block w-full rounded-lg border border-border py-2.5 text-center text-sm font-medium text-foreground transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            İletişime geç
          </Link>
        </article>
      </div>
    </main>
  );
}
