import type {
  Block,
  Point,
  Presenter,
  Slide as SlideData,
  Stat,
  Tone,
} from "@/data/slides";

type SlideProps = {
  slide: SlideData;
  index: number;
  total: number;
};

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * Merender teks biasa, tapi bagian di dalam «guillemet» diberi garis
 * putus-putus sebagai penanda "angka draft, perlu diverifikasi".
 */
function Marked({ children }: { children: string }) {
  const segments = children.split(/(«[^»]*»)/g).filter(Boolean);

  return (
    <>
      {segments.map((segment, index) =>
        segment.startsWith("«") ? (
          <span
            key={index}
            title="Draft — perlu diverifikasi sebelum submit"
            className="decoration-gold-400/70 underline decoration-dashed underline-offset-4"
          >
            {segment.slice(1, -1)}
          </span>
        ) : (
          <span key={index}>{segment}</span>
        ),
      )}
    </>
  );
}

function BlockHeading({ children }: { children: string }) {
  return (
    <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-gold-400/90 sm:text-sm">
      <Marked>{children}</Marked>
    </h3>
  );
}

const toneStyles: Record<Tone, string> = {
  before: "border-white/10 bg-white/[0.03]",
  after: "border-gold-400/25 bg-gold-400/[0.07]",
  core: "border-gold-400/35 bg-gold-400/[0.08]",
  satellite: "border-white/12 bg-navy-800/50",
  external: "border-white/10 bg-white/[0.03]",
};

const toneDot: Record<Tone, string> = {
  before: "bg-slate-500",
  after: "bg-gold-400",
  core: "bg-gold-400",
  satellite: "bg-slate-400",
  external: "bg-slate-500",
};

function Profile({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="grid gap-x-8 gap-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
      {rows.map((row, index) => (
        <div key={index} className="sm:flex sm:gap-6">
          <dt className="font-mono text-xs uppercase tracking-[0.18em] text-gold-400/80 sm:w-52 sm:shrink-0 sm:pt-1 sm:text-sm">
            {row.label}
          </dt>
          <dd className="mt-1 text-lg text-slate-200 sm:mt-0 lg:text-xl">
            <Marked>{row.value}</Marked>
          </dd>
        </div>
      ))}
    </dl>
  );
}

function PointList({
  points,
  emphasized,
}: {
  points: Point[];
  emphasized?: boolean;
}) {
  const single = points.length === 1;

  return (
    <ul className={single ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
      {points.map((point, index) => (
        <li
          key={index}
          className={
            emphasized
              ? "rounded-2xl border border-gold-400/25 bg-gold-400/[0.07] p-6"
              : "rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          }
        >
          {point.lead ? (
            <p className="text-xl font-semibold text-gold-300 lg:text-2xl">
              <Marked>{point.lead}</Marked>
            </p>
          ) : null}
          <p className="mt-1.5 text-base leading-relaxed text-slate-300 lg:text-lg">
            <Marked>{point.text}</Marked>
          </p>
        </li>
      ))}
    </ul>
  );
}

function Flow({ steps }: { steps: { label: string; caption?: string }[] }) {
  return (
    <ol className="flex flex-col lg:flex-row lg:items-stretch">
      {steps.map((step, index) => (
        <li
          key={index}
          className="flex flex-col items-center lg:flex-1 lg:flex-row"
        >
          <div className="w-full rounded-2xl border border-white/10 bg-navy-800/50 px-5 py-5 text-center lg:flex lg:h-full lg:flex-1 lg:flex-col lg:justify-center">
            <p className="text-lg font-semibold text-white lg:text-xl">
              {step.label}
            </p>
            {step.caption ? (
              <p className="mt-1.5 text-sm text-slate-400 lg:text-base">
                {step.caption}
              </p>
            ) : null}
          </div>

          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="shrink-0 py-2 text-gold-400/70 lg:px-3 lg:py-0"
            >
              <span className="lg:hidden">↓</span>
              <span className="hidden lg:inline">→</span>
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function Compare({
  columns,
}: {
  columns: { title: string; tone: Tone; items: string[] }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {columns.map((column, index) => (
        <div
          key={index}
          className={`rounded-2xl border p-6 ${toneStyles[column.tone]}`}
        >
          <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-slate-200">
            {column.title}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {column.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className={`mt-2.5 size-1.5 shrink-0 rounded-full ${toneDot[column.tone]}`}
                />
                <span className="text-base leading-relaxed text-slate-300 lg:text-lg">
                  <Marked>{item}</Marked>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Columns({
  columns,
}: {
  columns: { title: string; items: string[] }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {columns.map((column, index) => (
        <div
          key={index}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-gold-400">
            {column.title}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {column.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-400/70"
                />
                <span className="text-base leading-relaxed text-slate-300 lg:text-lg">
                  <Marked>{item}</Marked>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: { cells: string[]; tone?: "drop" | "keep" }[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[44rem] border-collapse text-left">
        <thead>
          <tr className="bg-white/[0.05]">
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-5 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-gold-400 sm:text-sm"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                row.tone === "drop"
                  ? "border-t border-white/10 bg-white/[0.015] text-slate-400"
                  : "border-t border-white/10 text-slate-200"
              }
            >
              {row.cells.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={
                    cellIndex === 0
                      ? "px-5 py-4 text-base font-medium lg:text-lg"
                      : cellIndex === row.cells.length - 1
                        ? `px-5 py-4 text-base lg:text-lg ${
                            row.tone === "drop"
                              ? "text-slate-400"
                              : "text-gold-300"
                          }`
                        : "px-5 py-4 text-base lg:text-lg"
                  }
                >
                  <Marked>{cell}</Marked>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Steps({ items }: { items: { title: string; detail: string }[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item, index) => (
        <li
          key={index}
          className="rounded-2xl border border-white/10 bg-navy-800/45 p-5"
        >
          <span className="font-mono text-sm text-gold-400/70">
            {pad(index + 1)}
          </span>
          <p className="mt-2 text-lg font-semibold text-white">{item.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-400 lg:text-base">
            <Marked>{item.detail}</Marked>
          </p>
        </li>
      ))}
    </ol>
  );
}

function StatRow({ items }: { items: Stat[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((stat, index) => (
        <div
          key={index}
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-6 text-center"
        >
          <p className="text-3xl font-black tracking-tight text-gold-400 sm:text-4xl lg:text-5xl">
            {stat.value}
          </p>
          <p className="mt-2 text-sm font-medium text-slate-400 lg:text-base">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function Architecture({
  layers,
}: {
  layers: { label: string; caption?: string; tone: Tone; items: string[] }[];
}) {
  return (
    <div className="space-y-2">
      {layers.map((layer, index) => (
        <div key={index}>
          <div className={`rounded-2xl border p-5 ${toneStyles[layer.tone]}`}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-gold-400">
                {layer.label}
              </h3>
              {layer.caption ? (
                <p className="text-sm text-slate-400">{layer.caption}</p>
              ) : null}
            </div>
            <ul className="mt-3.5 flex flex-wrap gap-2">
              {layer.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="rounded-full border border-white/12 bg-navy-900/60 px-4 py-1.5 text-sm font-medium text-slate-100 lg:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {index < layers.length - 1 ? (
            <p
              aria-hidden="true"
              className="py-1 text-center text-lg text-gold-400/60"
            >
              ↕
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function Impact({ items }: { items: { label: string; text: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-gold-400">
            {item.label}
          </p>
          <p className="mt-2 text-base leading-snug text-slate-200 lg:text-lg">
            <Marked>{item.text}</Marked>
          </p>
        </div>
      ))}
    </div>
  );
}

function Callout({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-gold-400/30 bg-gold-400/[0.07] p-6 sm:p-7">
      <h3 className="text-xl font-bold text-gold-300 lg:text-2xl">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-400"
            />
            <span className="text-base leading-relaxed text-slate-200 lg:text-lg">
              <Marked>{item}</Marked>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "profile":
      return <Profile rows={block.rows} />;
    case "points":
      return (
        <div>
          {block.heading ? <BlockHeading>{block.heading}</BlockHeading> : null}
          <PointList points={block.items} emphasized={block.emphasized} />
        </div>
      );
    case "flow":
      return (
        <div>
          {block.heading ? <BlockHeading>{block.heading}</BlockHeading> : null}
          <Flow steps={block.steps} />
        </div>
      );
    case "compare":
      return <Compare columns={block.columns} />;
    case "columns":
      return <Columns columns={block.columns} />;
    case "table":
      return (
        <div>
          {block.heading ? <BlockHeading>{block.heading}</BlockHeading> : null}
          <Table headers={block.headers} rows={block.rows} />
        </div>
      );
    case "steps":
      return (
        <div>
          {block.heading ? <BlockHeading>{block.heading}</BlockHeading> : null}
          <Steps items={block.items} />
        </div>
      );
    case "stats":
      return (
        <div>
          {block.heading ? <BlockHeading>{block.heading}</BlockHeading> : null}
          <StatRow items={block.items} />
        </div>
      );
    case "arch":
      return <Architecture layers={block.layers} />;
    case "callout":
      return <Callout title={block.title} items={block.items} />;
    case "impact":
      return (
        <div>
          {block.heading ? <BlockHeading>{block.heading}</BlockHeading> : null}
          <Impact items={block.items} />
        </div>
      );
  }
}

function PresenterStrip({
  presenter,
  centered,
}: {
  presenter: Presenter;
  centered?: boolean;
}) {
  return (
    <div
      className={
        centered
          ? "flex flex-col items-center border-t border-white/10 pt-7"
          : "border-t border-white/10 pt-7"
      }
    >
      <p className="text-xl font-semibold text-white sm:text-2xl">
        {presenter.name}
      </p>
      <p className="mt-1 text-base text-slate-400 sm:text-lg">
        {presenter.role}
      </p>
      <ul
        className={`mt-4 flex flex-wrap gap-2 ${centered ? "justify-center" : ""}`}
      >
        {presenter.meta.map((item, index) => (
          <li
            key={index}
            className="rounded-full border border-gold-400/25 bg-gold-400/[0.08] px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-gold-300 sm:text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
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
      className="flex min-h-svh w-full snap-start items-center justify-center px-6 pt-16 pb-28 sm:px-10 lg:px-14"
    >
      <div
        className={
          centered
            ? "slide-reveal w-full max-w-4xl text-center"
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
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-gold-400 sm:text-sm">
            {slide.eyebrow}
          </p>
        ) : null}

        <h1 className="mt-8 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {slide.title}
        </h1>

        {slide.subtitle ? (
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl lg:text-2xl">
            {slide.subtitle}
          </p>
        ) : null}

        <div className="mx-auto mt-10 h-1 w-20 rounded-full bg-gold-400" />

        {slide.presenter ? (
          <div className="mt-10">
            <PresenterStrip presenter={slide.presenter} centered />
          </div>
        ) : null}
      </SlideSection>
    );
  }

  if (slide.variant === "closing") {
    return (
      <SlideSection slide={slide} centered>
        <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {slide.title}
        </h2>

        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-gold-400" />

        {slide.content ? (
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl lg:text-2xl">
            {slide.content}
          </p>
        ) : null}

        {slide.presenter ? (
          <div className="mt-12">
            <PresenterStrip presenter={slide.presenter} centered />
          </div>
        ) : null}
      </SlideSection>
    );
  }

  return (
    <SlideSection slide={slide}>
      <p className="font-mono text-xs uppercase tracking-[0.26em] text-gold-400/90 sm:text-sm">
        {pad(index + 1)} / {pad(total)}
        {slide.eyebrow ? ` — ${slide.eyebrow}` : ""}
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
        {slide.title}
      </h2>

      <div className="mt-5 h-1 w-16 rounded-full bg-gold-400" />

      {slide.blocks ? (
        <div className="mt-8 space-y-7">
          {slide.blocks.map((block, blockIndex) => (
            <BlockView key={blockIndex} block={block} />
          ))}
        </div>
      ) : null}
    </SlideSection>
  );
}
