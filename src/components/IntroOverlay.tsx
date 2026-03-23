"use client";

import { useEffect, useRef, useState } from "react";

export function IntroOverlay() {
  // Hydration mismatch yaşamamak için SSR'da overlay'i kapalı render ediyoruz.
  // Client'ta useEffect ile sessionStorage'a göre açıyoruz.
  const [open, setOpen] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    // Overlay her girişte görünsün (sessionStorage ile kilitlemeyelim).
    window.setTimeout(() => {
      setOpen(true);
    }, 0);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  const onStart = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    setOpen(false);

    // Navigasyon tarayıcının default davranışıyla da garanti edilecek.
  };

  return (
    <div className="fixed inset-0 z-[1000] pointer-events-auto flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-3xl border border-border/60 bg-card/40 p-8 text-center shadow-sm">
        <a
          href="/intro"
          onPointerDown={(e) => {
            e.stopPropagation();
            onStart();
          }}
          onClick={(e) => {
            e.stopPropagation();
            // Navigasyonu kesinleştiriyoruz; Link/Next router bazı overlay durumlarında yarışabiliyor.
            e.preventDefault();
            onStart();
            window.location.assign("/intro");
          }}
          className="pointer-events-auto inline-flex w-auto items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
          Başla
        </a>
      </div>
    </div>
  );
}

