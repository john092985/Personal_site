import { notFound } from "next/navigation";
import { PortfolioDetailPage } from "@/components/portfolio-detail-page";
import { getProjectBySlug, projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }
  return (
    <PortfolioDetailPage
      entry={project}
      kindLabel="Project"
      backHref="/#projects"
      backLabel="Back to Home"
    />
  );
}
