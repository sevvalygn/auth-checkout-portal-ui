"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ScrambleTextIntro } from "@/components/ScrambleTextIntro";

const INTRO_MS = 5_000;

export default function IntroPage() {
  const router = useRouter();

  useEffect(() => {
    const t = window.setTimeout(() => {
      router.replace("/");
    }, INTRO_MS);

    return () => window.clearTimeout(t);
  }, [router]);

  return (
    <ScrambleTextIntro />
  );
}

