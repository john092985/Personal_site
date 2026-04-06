import Link from "next/link";

type Action = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions = [],
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: Action[];
}) {
  return (
    <section className="scene-panel relative overflow-hidden rounded-[2.5rem] px-6 py-10 sm:px-9 sm:py-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(190,170,128,0.16),transparent_22rem)]"
      />
      <div className="relative z-10">
        <div className="eyebrow-label">{eyebrow}</div>
        <div className="section-rule mt-5 max-w-48" />
        <h1 className="balance mt-7 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tightest text-ink sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
        {actions.length > 0 ? (
          <div className="mt-9 flex flex-wrap gap-3">
            {actions.map((action) => {
              const isSecondary = action.variant === "secondary";

              return (
                <Link
                  key={action.href}
                  href={action.href}
                  className={
                    isSecondary
                      ? "rounded-full border border-[rgba(120,128,138,0.18)] px-5 py-3 text-sm font-medium text-muted hover:border-[rgba(190,170,128,0.52)] hover:text-ink"
                      : "rounded-full border border-[rgba(190,170,128,0.42)] bg-[rgba(190,170,128,0.14)] px-5 py-3 text-sm font-semibold text-ink hover:bg-[rgba(190,170,128,0.22)]"
                  }
                >
                  {action.label}
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
