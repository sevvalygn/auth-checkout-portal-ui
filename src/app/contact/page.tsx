import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim — auth-checkout-portal-ui",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-lg bg-background px-4 py-12">
      <h1 className="text-2xl font-semibold text-foreground">Bize yaz</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Lütfen bizimle iletişimi geçiniz.
      </p>
      <ContactForm />
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Demo: form gerçekten gönderilmez.
      </p>
    </main>
  );
}
