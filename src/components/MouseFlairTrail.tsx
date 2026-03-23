"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const FLAIR_BASE = "https://assets.codepen.io/16327";
const FLAIR_NAMES = [
  "Revised+Flair.png",
  "Revised+Flair-1.png",
  "Revised+Flair-2.png",
  "Revised+Flair-3.png",
  "Revised+Flair-4.png",
  "Revised+Flair-5.png",
  "Revised+Flair-6.png",
  "Revised+Flair-7.png",
  "Revised+Flair-8.png",
];

/** İki set = daha uzun iz, CodePen örneğiyle aynı mantık */
const FLAIR_SRCS = [...FLAIR_NAMES, ...FLAIR_NAMES].map(
  (name) => `${FLAIR_BASE}/${name}`
);

const GAP = 100;

function playAnimation(shape: Element | string | object | null) {
  const tl = gsap.timeline();
  tl.from(shape, {
    opacity: 0,
    scale: 0,
    ease: "elastic.out(1,0.3)",
  })
    .to(
      shape,
      {
        rotation: gsap.utils.random(-360, 360),
      },
      "<"
    )
    .to(
      shape,
      {
        y: "120vh",
        ease: "back.in(0.4)",
        duration: 1,
      },
      0
    );
}

export function MouseFlairTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const cachedMousePos = useRef({ x: 0, y: 0 });
  const indexRef = useRef(0);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const flairNodes = root.querySelectorAll<HTMLElement>(".flair");
    const flair = Array.from(flairNodes);
    if (!flair.length) return;

    const wrapper = gsap.utils.wrap(0, flair.length);
    gsap.defaults({ duration: 1 });

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    function animateImage() {
      const wrappedIndex = wrapper(indexRef.current) as number;
      const img = flair[wrappedIndex]!;
      gsap.killTweensOf(img);
      gsap.set(img, { clearProps: "all" });
      gsap.set(img, {
        opacity: 1,
        left: mousePos.current.x,
        top: mousePos.current.y,
        xPercent: -50,
        yPercent: -50,
      });
      playAnimation(img);
      indexRef.current++;
    }

    function imageTrail() {
      const mp = mousePos.current;
      const lmp = lastMousePos.current;
      const travelDistance = Math.hypot(lmp.x - mp.x, lmp.y - mp.y);

      cachedMousePos.current.x = gsap.utils.interpolate(
        cachedMousePos.current.x || mp.x,
        mp.x,
        0.1
      );
      cachedMousePos.current.y = gsap.utils.interpolate(
        cachedMousePos.current.y || mp.y,
        mp.y,
        0.1
      );

      if (travelDistance > GAP) {
        animateImage();
        lastMousePos.current = { ...mp };
      }
    }

    window.addEventListener("mousemove", onMove);
    gsap.ticker.add(imageTrail);

    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(imageTrail);
      flair.forEach((el) => gsap.killTweensOf(el));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[12]"
      aria-hidden
    >
      {FLAIR_SRCS.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${src}-${i}`}
          className="flair fixed left-0 top-0 z-[13] w-[50px] opacity-0"
          src={src}
          alt=""
          draggable={false}
        />
      ))}
    </div>
  );
}
