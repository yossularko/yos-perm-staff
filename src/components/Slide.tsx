import type {
  BadgeGroup,
  Point,
  Slide as SlideData,
  Stat,
  TimelineItem,
} from "@/data/slides";

type SlideProps = {
  slide: SlideData;
  index: number;
  total: number;
};

const pad = (value: number) => String(value).padStart(2, "0");

function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 text-center"
        >
          <p className="text-4xl font-black tracking-tight text-gold-400 sm:text-5xl lg:text-6xl">
            {stat.value}
          </p>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-400 sm:text-base">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative mt-10 space-y-7 border-l border-navy-600 pl-8 sm:space-y-8 sm:pl-10">
      {items.map((item) => (
        <li key={item.period} className="relative">
          <span
            className={
              item.current
                ? "absolute -left-[2.53rem] top-2 size-4 rounded-full bg-gold-400 ring-4 ring-gold-400/25 sm:-left-[3.03rem]"
                : "absolute -left-[2.53rem] top-2 size-4 rounded-full border-2 border-navy-600 bg-navy-900 sm:-left-[3.03rem]"
            }
          />
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-gold-400 sm:text-base">
            {item.period}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
            {item.title}
          </h3>
          {item.detail ? (
            <p className="mt-1 text-base text-slate-400 sm:text-lg">
              {item.detail}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function Badges({ groups }: { groups: BadgeGroup[] }) {
  const lastSpansFullWidth = groups.length % 2 === 1;

  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {groups.map((group, index) => (
        <div
          key={group.category}
          className={
            lastSpansFullWidth && index === groups.length - 1
              ? "rounded-2xl border border-white/10 bg-navy-800/40 p-6 sm:col-span-2"
              : "rounded-2xl border border-white/10 bg-navy-800/40 p-6"
          }
        >
          <h3 className="font-mono text-sm uppercase tracking-[0.22em] text-gold-400">
            {group.category}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-gold-400/25 bg-gold-400/10 px-4 py-2 text-base font-medium text-slate-100 sm:text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function PointList({
  points,
  emphasized,
}: {
  points: Point[];
  emphasized?: boolean;
}) {
  return (
    <ul className="mt-10 grid gap-5 sm:grid-cols-2">
      {points.map((point, index) => (
        <li
          key={point.text}
          className={
            emphasized
              ? "rounded-2xl border border-gold-400/20 bg-gold-400/[0.06] p-6 sm:p-7"
              : "flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7"
          }
        >
          {emphasized ? null : (
            <span className="font-mono text-lg text-gold-400/60">
              {pad(index + 1)}
            </span>
          )}
          <div>
            {point.lead ? (
              <p
                className={
                  emphasized
                    ? "text-2xl font-bold text-gold-300 lg:text-3xl"
                    : "text-xl font-semibold text-gold-300 lg:text-2xl"
                }
              >
                {point.lead}
              </p>
            ) : null}
            <p className="mt-1.5 text-lg leading-relaxed text-slate-300 lg:text-xl">
              {point.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function SlideSection({
  slide,
  children,
  centered,
}: {
  slide: SlideData;
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <section
      id={slide.id}
      aria-label={slide.title}
      className="flex min-h-svh w-full snap-start items-center justify-center px-6 pt-20 pb-32 sm:px-10 lg:px-16"
    >
      <div
        className={
          centered
            ? "slide-reveal w-full max-w-5xl text-center"
            : "slide-reveal w-full max-w-6xl"
        }
      >
        {children}
      </div>
    </section>
  );
}

export default function Slide({ slide, index, total }: SlideProps) {
  if (slide.variant === "cover") {
    return (
      <SlideSection slide={slide} centered>
        {slide.eyebrow ? (
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-slate-400 sm:text-sm">
            {slide.eyebrow}
          </p>
        ) : null}

        <div className="mt-10">
          <p className="bg-gradient-to-b from-gold-200 via-gold-400 to-gold-500 bg-clip-text text-[6.5rem] font-black leading-[0.85] tracking-tighter text-transparent sm:text-[9rem] lg:text-[12rem]">
            {slide.hook}
          </p>
          {slide.hookLabel ? (
            <p className="mt-4 text-lg font-medium uppercase tracking-[0.2em] text-slate-300 sm:text-xl">
              {slide.hookLabel}
            </p>
          ) : null}
        </div>

        <div className="mx-auto mt-12 h-px w-24 bg-gold-400/50" />

        <h1 className="mt-12 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          {slide.title}
        </h1>

        {slide.subtitle ? (
          <p className="mt-6 text-xl text-slate-300 sm:text-2xl lg:text-3xl">
            {slide.subtitle}
          </p>
        ) : null}
      </SlideSection>
    );
  }

  if (slide.variant === "closing") {
    return (
      <SlideSection slide={slide} centered>
        <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
          {slide.title}
        </h2>

        <div className="mx-auto mt-10 h-1 w-24 rounded-full bg-gold-400" />

        {slide.content ? (
          <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-slate-300 sm:text-2xl lg:text-3xl">
            {slide.content}
          </p>
        ) : null}

        {slide.subtitle ? (
          <p className="mt-12 font-mono text-base uppercase tracking-[0.2em] text-gold-400 sm:text-lg">
            {slide.subtitle}
          </p>
        ) : null}
      </SlideSection>
    );
  }

  return (
    <SlideSection slide={slide}>
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold-400/80 sm:text-sm">
        {pad(index + 1)} / {pad(total)}
        {slide.eyebrow ? ` — ${slide.eyebrow}` : ""}
      </p>

      <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {slide.title}
      </h2>

      <div className="mt-6 h-1 w-20 rounded-full bg-gold-400" />

      {slide.timeline ? <Timeline items={slide.timeline} /> : null}
      {slide.badges ? <Badges groups={slide.badges} /> : null}
      {slide.points ? (
        <PointList
          points={slide.points}
          emphasized={slide.variant === "highlight"}
        />
      ) : null}
      {slide.stats ? <StatRow stats={slide.stats} /> : null}
    </SlideSection>
  );
}
