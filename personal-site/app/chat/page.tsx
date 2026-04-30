import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProfileChat } from "@/components/profile-chat";

export const metadata: Metadata = {
  title: "Chat with Jingxuan",
  description:
    "A chat interface that answers questions about Jingxuan Lyu's research, projects, interests, and background.",
};

export default function ChatPage() {
  return (
    <Container className="max-w-[52rem] py-8 sm:py-12">
      <section className="mx-auto max-w-3xl">
        <p className="eyebrow-label">Chat</p>
        <h1 className="mt-4 font-serif text-[2.4rem] leading-[1.02] text-ink sm:text-[3rem]">
          Chat with Jingxuan
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
          Ask about my work, research, interests, or what I am looking for.
        </p>
      </section>

      <section className="mt-8">
        <ProfileChat />
      </section>
    </Container>
  );
}
