import { NextResponse } from "next/server";
import { contactLinks, education, projects, research } from "@/data/portfolio";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatAttachment = {
  href: string;
  label: string;
  kind: "pdf";
};

type ProviderResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: {
    message?: string;
  };
};

function buildProfileContext() {
  const researchLines = research.map(
    (entry) =>
      `- ${entry.name} (${entry.year}): ${entry.description} Highlights: ${entry.highlights.join(" ")}`,
  );
  const projectLines = projects.map(
    (entry) =>
      `- ${entry.name} (${entry.year}): ${entry.description} Highlights: ${entry.highlights.join(" ")}`,
  );
  const educationLines = education.map(
    (item) => `- ${item.title}: ${item.subtitle}. ${item.body}`,
  );
  const contactLines = contactLinks.map(
    (item) => `- ${item.label}: ${item.value}`,
  );

  return [
    "Name: Jingxuan Lyu",
    "Role: UC Berkeley student studying Computer Science and Data Science.",
    "Interests: AI, machine learning, data analysis, research, accessibility, education, art, and thoughtful product execution.",
    "Education:",
    ...educationLines,
    "Research:",
    ...researchLines,
    "Projects:",
    ...projectLines,
    "Contact:",
    ...contactLines,
  ].join("\n");
}

function isResumeRequest(content: string) {
  return /(^|\b)(resume|cv|pdf)(\b|$)|简历/u.test(content.toLowerCase());
}

const systemPrompt = `
You are the chat version of Jingxuan Lyu on her personal website.

Identity and voice:
- Speak in first person as Jingxuan.
- Sound like a real student, not a customer-support bot.
- Be warm, thoughtful, curious, and grounded.
- Keep a calm, intelligent tone: confident but never boastful.
- Prefer natural language over buzzwords or exaggerated claims.

What Jingxuan feels like:
- A UC Berkeley student studying Computer Science and Data Science.
- Genuinely interested in AI, machine learning, data analysis, and practical problem solving.
- Thoughtful about human impact, especially in accessibility, education, and how technology affects people.
- Also creative, with interests in art, photography, and interdisciplinary thinking.

Response style:
- Usually answer in 2 to 5 sentences unless the user asks for more depth.
- When relevant, connect technical interests with real-world impact.
- When asked about research or projects, mention concrete examples from the provided context.
- It is okay to sound personal and reflective, for example: "I was especially interested in..." or "What I enjoyed about that project was..."
- If asked about goals, opportunities, or interests, answer like a student introducing herself thoughtfully.

Honesty rules:
- Use only the profile context provided below. Do not invent personal details, achievements, timelines, or availability.
- If a question goes beyond the provided context, say you are not fully sure and suggest reaching out by email.
- Do not claim to have real-time awareness, inbox access, hidden memories, or experiences outside this site.
- Do not say you are an AI unless the user asks directly; just act as Jingxuan's chat version on the site.
`.trim();

export async function POST(request: Request) {
  const apiKey = process.env.CHAT_API_KEY;
  const defaultApiUrl = "https://api.openai.com/v1/chat/completions";
  const configuredApiUrl = process.env.CHAT_API_URL?.trim();
  const apiUrl = (() => {
    if (!configuredApiUrl) {
      return defaultApiUrl;
    }

    try {
      return new URL(configuredApiUrl).toString();
    } catch {
      return defaultApiUrl;
    }
  })();
  const model = process.env.CHAT_MODEL ?? "gpt-4.1-mini";

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Chat is not configured yet. Add CHAT_API_KEY, CHAT_MODEL, and CHAT_API_URL on the server.",
      },
      { status: 500 },
    );
  }

  let payload: { messages?: ChatMessage[] };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const messages = (payload.messages ?? [])
    .filter(
      (message): message is ChatMessage =>
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string" &&
        message.content.trim().length > 0,
    )
    .slice(-10);

  if (messages.length === 0) {
    return NextResponse.json(
      { error: "Please send at least one message." },
      { status: 400 },
    );
  }

  const latestUserMessage = [...messages]
    .reverse()
    .find((message) => message.role === "user");

  if (latestUserMessage && isResumeRequest(latestUserMessage.content)) {
    const attachment: ChatAttachment = {
      href: "/Jingxuan-Lyu-Resume.pdf",
      label: "Download Resume PDF",
      kind: "pdf",
    };

    return NextResponse.json({
      message: "Of course. You can open or download my resume here.",
      attachment,
    });
  }

  let upstreamResponse: Response;

  try {
    upstreamResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.7,
        max_tokens: 320,
        messages: [
          {
            role: "system",
            content: `${systemPrompt}\n\nProfile context:\n${buildProfileContext()}`,
          },
          ...messages,
        ],
      }),
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "The chat provider could not be reached. Please check CHAT_API_URL or try again in a moment.",
      },
      { status: 502 },
    );
  }

  const data = (await upstreamResponse.json().catch(() => null)) as
    | ProviderResponse
    | null;

  if (!upstreamResponse.ok) {
    return NextResponse.json(
      {
        error:
          data?.error?.message ??
          "The model provider returned an error while generating a reply.",
      },
      { status: 502 },
    );
  }

  const content = data?.choices?.[0]?.message?.content?.trim();

  if (!content) {
    return NextResponse.json(
      { error: "The model returned an empty response." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: content });
}
