"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import NavigationControls from "./NavigationControls";

type SlideRef = { id: string; title: string };

type SlideContainerProps = {
  slides: SlideRef[];
  children: React.ReactNode;
};

const NEXT_KEYS = ["ArrowRight", "ArrowDown", "PageDown"];
const PREV_KEYS = ["ArrowLeft", "ArrowUp", "PageUp"];

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function SlideContainer({
  slides,
  children,
}: SlideContainerProps) {
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  const goTo = useCallback(
    (index: number) => {
      const target = Math.min(Math.max(index, 0), slides.length - 1);
      const element = document.getElementById(slides[target].id);
      if (!element) return;

      setCurrent(target);
      element.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });
    },
    [slides],
  );

  const goBy = useCallback(
    (delta: number) => goTo(currentRef.current + delta),
    [goTo],
  );

  // Menandai deck sudah hidup di client, sekaligus gerbang animasi fade-in.
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.deckReady = "true";
    return () => {
      delete root.dataset.deckReady;
    };
  }, []);

  // Sinkronkan index saat user scroll manual, dan picu fade-in tiap slide.
  useEffect(() => {
    const elements = slides
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    // Slide yang melewati garis tengah viewport dianggap slide aktif.
    const activeObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = slides.findIndex(({ id }) => id === entry.target.id);
          if (index !== -1) setCurrent(index);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.visible = "true";
          revealObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    for (const element of elements) {
      activeObserver.observe(element);
      revealObserver.observe(element);
    }

    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [slides]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      if (NEXT_KEYS.includes(event.key)) {
        event.preventDefault();
        goBy(1);
      } else if (PREV_KEYS.includes(event.key)) {
        event.preventDefault();
        goBy(-1);
      } else if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
      } else if (event.key === "End") {
        event.preventDefault();
        goTo(slides.length - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goBy, goTo, slides.length]);

  const progress = ((current + 1) / slides.length) * 100;

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-50 h-1 bg-white/5"
      >
        <div
          className="h-full bg-gold-400 transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <main>{children}</main>

      <NavigationControls
        slides={slides}
        current={current}
        onPrev={() => goBy(-1)}
        onNext={() => goBy(1)}
        onSelect={goTo}
      />
    </>
  );
}
