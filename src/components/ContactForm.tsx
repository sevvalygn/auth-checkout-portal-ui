"use client";

export function ContactForm() {
  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label
          className="block text-sm font-medium text-foreground"
          htmlFor="name"
        >
          İsim Soyisim
        </label>
        <input
          className="mt-1 block w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 focus:ring-offset-2 focus:ring-offset-background"
          id="name"
          name="name"
          type="text"
          placeholder="Adınız"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-foreground"
          htmlFor="email"
        >
          E-posta
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 focus:ring-offset-2 focus:ring-offset-white"
          placeholder="mail@site.com"
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium text-foreground"
          htmlFor="msg"
        >
          Mesaj
        </label>
        <textarea
          id="msg"
          name="msg"
          rows={4}
          className="mt-1 w-full resize-y rounded-lg border border-input bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 focus:ring-offset-2 focus:ring-offset-background"
          placeholder="Mesajın..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
      >
        Mesajı ilet
      </button>
    </form>
  );
}
