"use client";

import SlideIndicator from "./SlideIndicator";

type NavigationControlsProps = {
  slides: { id: string; title: string }[];
  current: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
};

const buttonBase =
  "flex size-11 items-center justify-center rounded-full border transition-colors";

export default function NavigationControls({
  slides,
  current,
  onPrev,
  onNext,
  onSelect,
}: NavigationControlsProps) {
  const isFirst = current === 0;
  const isLast = current === slides.length - 1;

  return (
    <nav
      aria-label="Navigasi slide"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-5 sm:pb-7"
    >
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-navy-900/80 px-3 py-2 shadow-2xl shadow-black/40 backdrop-blur-md sm:gap-4 sm:px-4">
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          aria-label="Slide sebelumnya"
          className={`${buttonBase} ${
            isFirst
              ? "cursor-not-allowed border-white/5 text-slate-600"
              : "border-white/15 text-slate-100 hover:border-gold-400/60 hover:bg-gold-400/10 hover:text-gold-300"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <SlideIndicator slides={slides} current={current} onSelect={onSelect} />

        <p
          aria-live="polite"
          className="min-w-[5.5rem] text-center font-mono text-sm text-slate-300 sm:text-base"
        >
          <span className="text-gold-400">{current + 1}</span> / {slides.length}
        </p>

        <button
          type="button"
          onClick={onNext}
          disabled={isLast}
          aria-label="Slide berikutnya"
          className={`${buttonBase} ${
            isLast
              ? "cursor-not-allowed border-white/5 text-slate-600"
              : "border-gold-400/50 bg-gold-400/15 text-gold-300 hover:border-gold-400 hover:bg-gold-400/25"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
