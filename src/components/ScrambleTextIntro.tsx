"use client";

import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./ScrambleTextIntro.module.css";

export function ScrambleTextIntro() {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const curIndexRef = useRef(0);

  const blurbs = useMemo(
    () => [
      "Scramble or unscramble text progressively.",
      "Use specific chars like 'XO' or use only numbers, UPPERCASE or lowercase.",
      "Even add a class to the new or old text.",
    ],
    [],
  );

  const [text, setText] = useState(blurbs[0]!);

  useEffect(() => {
    gsap.registerPlugin(ScrambleTextPlugin);
  }, []);

  const scrambleTo = (nextIndex: number) => {
    const el = textRef.current;
    if (!el) return;

    curIndexRef.current = nextIndex;
    const nextText = blurbs[nextIndex]!;

    gsap.to(el, {
      scrambleText: {
        text: nextText,
        chars: "upperAndLowerCase",
        revealDelay: 0.2,
        tweenLength: true,
        // Kodpen'deki gibi border efekti, ama Tailwind ile çakışmasın diye CSS module class'ı basıyoruz.
        newClass: nextIndex === 2 ? styles.border : "",
      },
      ease: "power2.inOut",
      overwrite: "auto",
      duration: 4.2,
      onComplete: () => setText(nextText),
    });
  };

  useEffect(() => {
    // Intro sayfasına gelince animasyonu başlat.
    const t = window.setTimeout(() => scrambleTo(1), 0);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onNext = () => {
    const nextIndex = (curIndexRef.current + 1) % blurbs.length;
    scrambleTo(nextIndex);
  };

  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-center bg-background px-4">
      <h1
        ref={textRef}
        className={styles.text + " text-foreground"}
      >
        {text}
      </h1>

      <div className={styles.buttonWrapper}>
        <button
          id="next"
          type="button"
          onClick={onNext}
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
          Next
        </button>
      </div>
    </main>
  );
}

