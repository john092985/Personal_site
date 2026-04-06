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
    <div className="space-y-4">
      <div className="eyebrow-label">{eyebrow}</div>
      <div className="section-rule max-w-40" />
      <h2 className="font-serif text-4xl leading-none tracking-tightest text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
