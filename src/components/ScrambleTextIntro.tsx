"use client";

import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { useEffect, useMemo, useRef, useState } from "react";

const OUTLINE_CLASS =
  "outline outline-2 outline-dashed outline-gray-400 outline-offset-5 rounded-[10px]";

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
    setText(nextText);

    gsap.to(el, {
      scrambleText: {
        text: nextText,
        chars: "upperAndLowerCase",
        revealDelay: 0.2,
        tweenLength: true,
        // Tailwind'de `border` sınıfı utility olduğu için çakışmaması adına outline tabanlı sınıf set ediyoruz.
        newClass: OUTLINE_CLASS,
      },
      ease: "power2.inOut",
      overwrite: "auto",
      duration: 4.2,
    });
  };

  useEffect(() => {
    // Intro sayfasına gelince animasyonu başlat.
    const t = window.setTimeout(() => scrambleTo(1), 350);
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
        className="text-center font-mono text-base leading-relaxed text-foreground w-full max-w-[50ch] h-[300px] py-10"
      >
        {text}
      </h1>

      <button
        id="next"
        type="button"
        onClick={onNext}
        className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        Next
      </button>
    </main>
  );
}

