import { IntroOverlay } from "@/components/IntroOverlay";

export default function Home() {
  return (
    <>
    <IntroOverlay />
    <main className="relative z-10 bg-background">
      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm text-primary">Tailwind mini proje</p>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Basit ama etkili bir landing page hazırlıyoruz.
            </h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Bu projede spacing, renk kullanımı, border yapıları, hover
              efektleri, responsive tasarım ve kart düzeni üzerine pratik
              yapacağız.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-lg bg-foreground px-4 py-2.5 font-medium text-background transition hover:opacity-90 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                Butonlar şu an yalnızca metin içeriyor.
              </button>
              <button
                type="button"
                className="rounded-lg border border-primary px-4 py-2.5 font-medium text-foreground transition hover:bg-primary/20 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              >
                Dokümantasyon
              </button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Not: Her butonda aynı yapı, farklı class’lar var.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Örnek kart</p>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-xs text-primary">
                Yeni
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-muted/50 p-4">
                <p className="text-xs text-muted-foreground">Kullanıcı</p>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  1,248
                </p>
              </div>
              <div className="rounded-xl border border-border bg-muted/50 p-4">
                <p className="text-xs text-muted-foreground">Dönüşüm</p>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  %4.6
                </p>
              </div>
              <div className="rounded-xl border border-border bg-muted/50 p-4">
                <p className="text-xs text-muted-foreground">Süre</p>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  2:31
                </p>
              </div>
              <div className="rounded-xl border border-border bg-muted/50 p-4">
                <p className="text-xs text-muted-foreground">Skor</p>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  A+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="ozellikler"
        className="mx-auto max-w-5xl scroll-mt-20 bg-background px-4 pb-16"
      >
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Özellikler
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Aynı kartı 3 kez kopyalayıp küçük farklar vereceğiz.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <article className="rounded-2xl border-2 border-emerald-500/50 bg-card p-5 shadow-sm transition hover:scale-[1.02] hover:bg-muted/40">
            <p className="text-sm font-medium text-foreground before:mr-2 before:text-primary before:content-['✦']">
              Hızlı
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Spacing+hover+border pratik
            </p>
          </article>
          <article className="rounded-2xl border border-dashed border-border bg-card p-5 shadow-sm transition hover:scale-[1.02] hover:bg-muted/40">
            <p className="text-sm font-medium text-foreground before:mr-2 before:text-emerald-400 before:content-['+']">
              Responsive
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              `sm:` `md:` `lg:` ile düzen.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:scale-[1.02] hover:bg-muted/40">
            <p className="text-sm font-medium text-foreground before:mr-2 before:text-primary before:content-['⚡']">
              Temiz UI
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Renk + tipografi denge.
            </p>
          </article>
          <article className="rounded-2xl border-2 border-border bg-muted/30 p-5 transition hover:scale-[1.02] hover:bg-muted/50 lg:col-span-3 lg:justify-self-center">
            <p className="text-sm font-medium text-foreground before:mr-2 before:text-amber-400 before:content-['⚠️']">
              Geliştirilebilir.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Yeni + Güncel.
            </p>
          </article>
        </div>
      </section>
    </main>
    </>
  );
}
