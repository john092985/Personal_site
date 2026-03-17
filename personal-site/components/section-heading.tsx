export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl leading-tight tracking-tightest text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
