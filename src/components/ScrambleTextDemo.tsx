"use client";

import { useMemo, useState } from "react";

export function ScrambleTextDemo() {
  const blurbs = useMemo(
    () => [
      "Scramble or unscramble text progressively.",
      "Use specific chars like 'XO' or use only numbers, UPPERCASE or lowercase.",
      "Even add a class to the new or old text.",
    ],
    [],
  );

  const [curIndex, setCurIndex] = useState(0);
  const next = () => setCurIndex((i) => (i + 1) % blurbs.length);

  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center gap-8 px-4 py-16">
      <h1
        className="text text-center text-2xl font-medium leading-relaxed text-foreground
          w-full max-w-[50ch]
          rounded-xl
          outline outline-2 outline-dashed outline-gray-400 outline-offset-4"
      >
        {blurbs[curIndex]!}
      </h1>

      <button
        type="button"
        id="next"
        onClick={next}
        className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      >
        Next
      </button>
    </div>
  );
}

