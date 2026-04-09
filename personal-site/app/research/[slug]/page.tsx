import { notFound } from "next/navigation";
import { PortfolioDetailPage } from "@/components/portfolio-detail-page";
import { getResearchBySlug, research } from "@/data/portfolio";

export function generateStaticParams() {
  return research.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getResearchBySlug(slug);

  if (!entry) {
    return {
      title: "Research",
    };
  }

  return {
    title: entry.name,
    description: entry.description,
  };
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getResearchBySlug(slug);

  if (!entry) {
    notFound();
  }
  return (
    <PortfolioDetailPage
      entry={entry}
      kindLabel="Research"
      backHref="/#research"
      backLabel="Back to Home"
    />
  );
}
