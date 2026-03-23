"use client";

import { useEffect, useRef, useState } from "react";

export function IntroOverlay() {
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.sessionStorage.getItem("introShown") !== "1";
  });
  const startedRef = useRef(false);

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

    window.sessionStorage.setItem("introShown", "1");
    setOpen(false);

    // Kesin navigasyon
    window.location.assign("/intro");
  };

  return (
    <div className="fixed inset-0 z-[60] pointer-events-auto flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-3xl border border-border/60 bg-card/40 p-8 text-center shadow-sm">
        <button
          type="button"
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onStart();
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onStart();
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onStart();
          }}
          className="pointer-events-auto inline-flex w-auto items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
          Başla
        </button>
      </div>
    </div>
  );
}

