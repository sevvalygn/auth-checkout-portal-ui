# proje1-next → auth-checkout-portal-ui (mevcut yapı)

`proje1` HTML’indeki içerik burada; rotalar Next’e uyarlandı.

| Eski (HTML)     | Yeni (Next)        |
|-----------------|--------------------|
| `index.html`    | `/` → `app/page.tsx` |
| `pricing.html`  | `/pricing` → `app/pricing/page.tsx` |
| `contact.html`  | `/contact` → `app/contact/page.tsx` |

**Ortak:** `SiteHeader`, `SiteFooter` → `src/components/` (navbar + footer tek yerde).  
**Form:** `ContactForm` → client bileşen (`onSubmit` için).

## Alıştırma fikirleri

1. **Sadece sınıflar:** `page.tsx` içinde bir kartın `hover:` / `rounded-*` değerlerini değiştir.
2. **Yeni sayfa:** `app/hakkimizda/page.tsx` ekle; header’a `Link` ile bağla.
3. **Header’ı kopyala:** `SiteHeader` içeriğini `page.tsx`’e taşımayı dene → tekrarın neden bileşende kaldığını görürsün.
4. **`globals.css`:** `@theme` ile `primary` rengi tanımla; bir butonda `bg-primary-500` kullan.

`npm run dev` → http://localhost:3000
