"use client";

type SlideIndicatorProps = {
  slides: { id: string; title: string }[];
  current: number;
  onSelect: (index: number) => void;
};

export default function SlideIndicator({
  slides,
  current,
  onSelect,
}: SlideIndicatorProps) {
  return (
    <div className="hidden items-center gap-2 sm:flex" role="tablist">
      {slides.map((slide, index) => {
        const isActive = index === current;

        return (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Slide ${index + 1}: ${slide.title}`}
            title={slide.title}
            onClick={() => onSelect(index)}
            className="group flex h-8 items-center px-0.5"
          >
            <span
              className={
                isActive
                  ? "h-2 w-7 rounded-full bg-gold-400 transition-all duration-300"
                  : "h-2 w-2 rounded-full bg-white/25 transition-all duration-300 group-hover:bg-white/50"
              }
            />
          </button>
        );
      })}
    </div>
  );
}
