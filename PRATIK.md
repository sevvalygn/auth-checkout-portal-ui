# Tailwind pratik — dosyalar ne işe yarar?

Terminalde zaten kurulu: `next`, `react`, `tailwindcss`, `@tailwindcss/forms`, `@tailwindcss/typography`. Aşağıdakileri **sen** `page.tsx` ve `globals.css` içinde tek tek ekleyerek öğreneceksin.

---

## 1. `src/app/layout.tsx`

- Tüm sayfaların **dış kabuğu**: `<html>`, `<body>`.
- `import "./globals.css"` → Tailwind’in çalışması için şart (global CSS buradan yüklenir).
- `metadata` → sekme başlığı, SEO için açıklama.
- `children` → asıl sayfa içeriği (`page.tsx`) buraya gelir.

**Pratik fikri:** `body`’ye `className="min-h-screen bg-slate-950 text-white"` gibi sınıflar ekleyerek tüm siteye varsayılan arka plan/metin rengi ver.

---

## 2. `src/app/page.tsx`

- Sitenin **ana sayfası** (`/`).
- Şu an boş `<main />`; Tailwind sınıflarını burada dene.

**Pratik sırası (öneri):**

1. `main`’e `className="min-h-screen p-8"` → minimum yükseklik + iç boşluk.
2. Bir `h1` + `text-3xl font-bold`.
3. Bir `p` + `text-gray-600` (açık tema) veya `text-slate-400` (koyu arka planda).
4. `flex`, `gap-4`, `rounded-lg`, `bg-blue-500` ile küçük bir kart/kutu.

---

## 3. `src/app/globals.css`

- Şu an sadece: `@import "tailwindcss";` → Tailwind’i projeye dahil eder.
- **Sonra buraya ekleyebileceğin şeyler:**
  - `@plugin "@tailwindcss/forms";` → form elemanlarına hazır stiller.
  - `@plugin "@tailwindcss/typography";` → uzun metinler için `prose` sınıfı.
  - `@theme { ... }` → kendi renk/font değişkenlerin (`bg-primary-500` gibi).
  - `@layer base { body { ... } }` → tüm sayfaya varsayılan tipografi/renk.

---

## Silinenler (tekrar sen yazacaksın)

| Ne | Nerede pratik |
|----|----------------|
| Özel renkler (`primary`, `neutral`) | `globals.css` → `@theme` |
| `body` arka plan/metin | `layout.tsx` veya `globals.css` → `@layer base` |
| `site-container`, `site-card`, buton yardımcıları | `globals.css` → `@utility` veya doğrudan JSX’te sınıflar |
| Geist fontları | `layout.tsx` → `next/font/google` |
| Demo sayfa (logo, linkler) | `page.tsx` → kendi düzenin |

`npm run dev` ile çalıştır; her adımda sayfayı yenile.
