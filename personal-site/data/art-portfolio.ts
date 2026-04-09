export type ArtGallerySize = "portrait" | "landscape" | "square" | "wide";

export type ArtGalleryItem = {
  src: string;
  alt: string;
  title: string;
  note: string;
  size: ArtGallerySize;
  imageClassName?: string;
};

export type ArtModuleEntry = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  cta: string;
  image: string;
  imageClassName: string;
  baseScale: number;
  variant?: "story" | "standard";
  breakAfter?: boolean;
  detailEyebrow: string;
  detailTitle: string;
  detailBody: string;
  detailNote: string;
  accent: string;
  gallery: readonly ArtGalleryItem[];
};

export const artIntroPanel = {
  kicker: "Painting and Photography",
  title: "Each work begins with a moment—the rest is interpretation.",
  body:
    "This section should feel like one exhibition rail rather than a fixed sidebar plus separate cards. The introduction, Story, and the remaining categories now belong to the same horizontal sequence.",
  primaryLabel: "Enter the collection",
  primaryHref: "#featured",
  secondaryLabel: "Back to home",
  secondaryHref: "/",
  modulesLabel: "Modules",
  modulesText:
    "Story, painting, drawing, design, and photography arranged as a single moving overview.",
} as const;

export const artOutroPanel = {
  eyebrow: "Closing Note",
  title: "Select a module to move deeper into the work.",
  body:
    "Each chapter now opens into its own page, where the collection can expand into a fuller gallery layout with more images, captions, and process notes.",
} as const;

export const artModules: readonly ArtModuleEntry[] = [
  {
    slug: "story",
    title: "Story",
    eyebrow: "Module 01",
    description:
      "An opening chapter for process, memory, and artistic voice before the viewer enters the mediums themselves.",
    cta: "Open chapter",
    image: "/art/story-tree.jpg",
    imageClassName: "object-cover object-center",
    baseScale: 1.04,
    variant: "story",
    breakAfter: true,
    detailEyebrow: "Story / Process",
    detailTitle: "Fragments, atmosphere, and the emotional rhythm around the work.",
    detailBody:
      "This page gathers the quieter images that feel like the narrative margin of the portfolio: motion, night light, silhouettes, and small observations. Rather than reading as one medium, it works as the chapter that frames how the rest of the portfolio is meant to be entered.",
    detailNote:
      "The right side is arranged like a visual notebook, so later we can keep adding process stills, references, and text fragments without redesigning the page.",
    accent: "#8a6a18",
    gallery: [
      {
        src: "/art/story-tree.jpg",
        alt: "Rotational tree study against the sky",
        title: "Motion Tree",
        note: "A blurred rotation that opens the exhibition with movement instead of a static scene.",
        size: "square",
      },
      {
        src: "/art/story/leaf-evening.jpg",
        alt: "Single leaf hanging against a blue evening sky",
        title: "Leaf at Dusk",
        note: "A minimal frame that reads almost like punctuation between larger chapters.",
        size: "portrait",
      },
      {
        src: "/art/story/lotus-glow.jpg",
        alt: "Backlit lotus leaves over reflective water",
        title: "Lotus Glow",
        note: "Light, silhouette, and reflection used as a more lyrical narrative pause.",
        size: "portrait",
      },
      {
        src: "/art/story/night-lines.jpg",
        alt: "Night traffic light trails through a city",
        title: "Night Lines",
        note: "Long exposure introduces speed and memory, not just documentation.",
        size: "square",
      },
    ],
  },
  {
    slug: "painting",
    title: "Painting",
    eyebrow: "Module 02",
    description:
      "Oil and acrylic studies centered on brushwork, blossom structure, and textured color.",
    cta: "View paintings",
    image: "/art/painting-blossom-detail.jpg",
    imageClassName: "object-cover object-center",
    baseScale: 1.02,
    variant: "standard",
    detailEyebrow: "Painting / Surface",
    detailTitle: "Brushwork, bloom structure, and the material surface of colour.",
    detailBody:
      "The painting chapter focuses on close looking: how petals are simplified into rhythm, how colour shifts are layered, and how the canvas texture stays visible inside the image. For now, the gallery uses one finished blossom piece in several crops so the page already reads like a painting study wall.",
    detailNote:
      "When you send the next batch of painting photos, we can replace these repeated study crops with full works immediately without changing the layout.",
    accent: "#7f6942",
    gallery: [
      {
        src: "/art/painting-blossom-detail.jpg",
        alt: "Blossom painting detail",
        title: "Blossom Study I",
        note: "A fuller crop that keeps both the petal rhythm and branch structure visible.",
        size: "portrait",
        imageClassName: "object-cover object-center",
      },
      {
        src: "/art/painting-blossom-detail.jpg",
        alt: "Painting texture detail focused on petals and brushwork",
        title: "Surface Detail",
        note: "A tighter crop that highlights the layered brush texture and color blending.",
        size: "square",
        imageClassName: "object-cover object-[32%_center]",
      },
      {
        src: "/art/painting-blossom-detail.jpg",
        alt: "Painting crop focused on the blossom cluster",
        title: "Blossom Cluster",
        note: "A second crop that reads more like a study of composition and negative space.",
        size: "wide",
        imageClassName: "object-cover object-[78%_center]",
      },
    ],
  },
  {
    slug: "drawing",
    title: "Drawing",
    eyebrow: "Module 03",
    description:
      "Portrait and eye studies focused on facial structure, graphite shading, and line control.",
    cta: "View drawings",
    image: "/art/drawing-eye.jpg",
    imageClassName: "object-cover object-center",
    baseScale: 1.13,
    variant: "standard",
    detailEyebrow: "Drawing / Observation",
    detailTitle: "Graphite studies that focus on eye structure, lashes, and tonal edges.",
    detailBody:
      "This chapter is built around careful observation. The eye studies already show a strong interest in texture, reflected light, and anatomical contour, so the gallery is laid out almost like pinned studio sheets on the right.",
    detailNote:
      "If you later send portraits or sculpture sketches, they can slot straight into this same grid without changing the page structure.",
    accent: "#56524a",
    gallery: [
      {
        src: "/art/drawing-eye.jpg",
        alt: "Large graphite eye drawing",
        title: "Eye Study",
        note: "A close graphite rendering built around eyelash density, reflected interior light, and tonal transitions.",
        size: "wide",
      },
      {
        src: "/art/drawing/eye-study.jpg",
        alt: "Pencil drawing of an eye",
        title: "Eye Sketch",
        note: "A cleaner study with lighter shading and more emphasis on line control.",
        size: "landscape",
      },
      {
        src: "/art/drawing/eye-large.jpg",
        alt: "Detailed charcoal eye drawing",
        title: "Large Eye Rendering",
        note: "A more dramatic scale study that brings texture and shadow forward.",
        size: "landscape",
      },
    ],
  },
  {
    slug: "design",
    title: "Design",
    eyebrow: "Module 04",
    description:
      "Branding, interior concepts, posters, and presentation graphics gathered into one design chapter.",
    cta: "View designs",
    image: "/art/design-laundry-space.png",
    imageClassName: "object-cover object-[34%_center]",
    baseScale: 1.02,
    variant: "standard",
    detailEyebrow: "Design / Systems",
    detailTitle: "Identity, interior space, and presentation graphics collected in one chapter.",
    detailBody:
      "The design section works best as a broader gallery because the projects move between branding, product posters, interior planning, and presentation spreads. The right side is arranged like a magazine wall so the variety still feels intentional instead of scattered.",
    detailNote:
      "This layout is especially easy to keep growing: posters can sit beside rendered spaces, and brand marks can drop into smaller tiles without breaking the rhythm.",
    accent: "#175e86",
    gallery: [
      {
        src: "/art/design-laundry-space.png",
        alt: "Interior design drawing of a laundry space",
        title: "Laundry Space",
        note: "Spatial perspective study with a calm blue palette and visible circulation path.",
        size: "portrait",
      },
      {
        src: "/art/design/kon-building.png",
        alt: "K-ON brand visual with building rendering",
        title: "Brand Environment",
        note: "Architecture, identity, and tone brought together in one presentation visual.",
        size: "wide",
      },
      {
        src: "/art/design/kon-logo.png",
        alt: "K-ON logo on dark background",
        title: "Logo Exploration",
        note: "A compact mark study that works well as a smaller accent tile in the layout.",
        size: "square",
      },
      {
        src: "/art/design/office-services.png",
        alt: "Office design brochure page",
        title: "Office Solutions",
        note: "Brochure spread balancing rendered space with informational hierarchy.",
        size: "wide",
      },
      {
        src: "/art/design/brochure-commitment.png",
        alt: "Brochure spread about sustainability commitment",
        title: "Commitment Spread",
        note: "A strong editorial page with color blocks and illustrated inserts.",
        size: "landscape",
      },
      {
        src: "/art/design/office-chair.png",
        alt: "Poster for ergonomic office chair concept",
        title: "Product Poster",
        note: "Graphic communication focused on labels, function, and product silhouette.",
        size: "portrait",
      },
      {
        src: "/art/design/cloud-table.jpg",
        alt: "Cloud-shaped desk concept rendering",
        title: "Cloud Desk Concept",
        note: "Furniture idea rendered as a clean concept tile.",
        size: "square",
      },
      {
        src: "/art/design/skateboard.jpg",
        alt: "Skateboard technical drawing with K-ON wordmark",
        title: "Board Sketch",
        note: "A spare technical composition that introduces a sharper product language.",
        size: "landscape",
      },
    ],
  },
  {
    slug: "photography",
    title: "Photography",
    eyebrow: "Module 05",
    description:
      "Photography studies of architecture, blossoms, seasonal light, and city atmosphere.",
    cta: "View photographs",
    image: "/art/photography-white-blossoms.jpg",
    imageClassName: "object-cover object-[62%_center]",
    baseScale: 1.02,
    variant: "standard",
    detailEyebrow: "Photography / Series",
    detailTitle: "Architecture, blossoms, snow, and city light arranged as one visual sequence.",
    detailBody:
      "This chapter is built as a fuller image wall because the photography already spans multiple moods: blossoms, roof details, skyline studies, snow scenes, and long-exposure urban light. The gallery on the right is meant to feel like pinned prints rather than a uniform photo feed.",
    detailNote:
      "As you send more photographs, we can keep expanding this page by series and eventually add lightbox-style viewing if you want.",
    accent: "#7c5a2f",
    gallery: [
      {
        src: "/art/photography-white-blossoms.jpg",
        alt: "Close photograph of white blossoms",
        title: "White Blossoms",
        note: "A shallow-depth opening image with soft spring light and muted background color.",
        size: "portrait",
      },
      {
        src: "/art/photography/snow-pavilion.jpg",
        alt: "Snow falling around a pavilion",
        title: "Snow Pavilion",
        note: "Architectural stillness offset by snowfall and visitor movement.",
        size: "portrait",
      },
      {
        src: "/art/photography/city-sunburst.jpg",
        alt: "City street with sunburst and reflective building",
        title: "City Sunburst",
        note: "Urban energy, glass reflection, and directional light in one frame.",
        size: "landscape",
      },
      {
        src: "/art/photography/roof-skyline.jpg",
        alt: "Traditional roofline with skyline in the distance",
        title: "Roof and Skyline",
        note: "A compressed telephoto composition that mixes old and new structures.",
        size: "portrait",
      },
      {
        src: "/art/photography/roof-detail.jpg",
        alt: "Close photograph of ornate roof detail against blue sky",
        title: "Roof Detail",
        note: "A tighter architectural study of ornament and edge rhythm.",
        size: "landscape",
      },
      {
        src: "/art/photography/night-river.jpg",
        alt: "Night skyline reflected on the river",
        title: "Night River",
        note: "Long exposure turns the waterfront into a smoother, more atmospheric field.",
        size: "wide",
      },
      {
        src: "/art/photography/framed-skyline.jpg",
        alt: "Distant skyline framed by leaves at sunset",
        title: "Framed Skyline",
        note: "A softer, more cinematic city view held inside a natural foreground.",
        size: "portrait",
      },
    ],
  },
] as const;

export function getArtModule(slug: string) {
  return artModules.find((module) => module.slug === slug);
}
