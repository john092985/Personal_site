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
    <section className="rounded-[2.25rem] border border-border bg-surface/95 p-7 shadow-card sm:p-10">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted">
        {eyebrow}
      </p>
      <h1 className="balance mt-5 max-w-4xl font-serif text-4xl leading-tight tracking-tightest text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
        {description}
      </p>
      {actions.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-3">
          {actions.map((action) => {
            const isSecondary = action.variant === "secondary";

            return (
              <Link
                key={action.href}
                href={action.href}
                className={
                  isSecondary
                    ? "rounded-full border border-border px-5 py-3 text-sm font-medium text-muted transition hover:border-ink hover:text-ink"
                    : "rounded-full border border-ink bg-ink px-5 py-3 text-sm font-medium text-white"
                }
              >
                {action.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
