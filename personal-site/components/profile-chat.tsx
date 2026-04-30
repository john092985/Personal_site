"use client";

import { startTransition, useEffect, useRef, useState } from "react";

type Message = {
  role: "assistant" | "user";
  content: string;
  attachment?: {
    href: string;
    label: string;
    kind: "pdf";
  };
};

const starterQuestions = [
  "What kinds of projects are you looking for?",
  "Tell me about your rainfall forecasting research.",
  "What are your interests outside of coursework?",
];

const initialMessage: Message = {
  role: "assistant",
  content:
    "Hi, I am Jingxuan. You can ask me about my research, projects, interests, or what kinds of work I am excited about.",
};

export function ProfileChat() {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (rawMessage: string) => {
    const trimmed = rawMessage.trim();

    if (!trimmed || isLoading) {
      return;
    }

    const nextUserMessage: Message = { role: "user", content: trimmed };
    const nextMessages = [...messages, nextUserMessage];

    startTransition(() => {
      setMessages(nextMessages);
      setInput("");
      setError("");
    });
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = (await response.json().catch(() => null)) as
        | {
            message?: string;
            error?: string;
            attachment?: Message["attachment"];
          }
        | null;

      if (!response.ok || !data?.message) {
        throw new Error(data?.error ?? "I could not get a reply just now.");
      }

      startTransition(() => {
        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content: data.message as string,
            attachment: data.attachment,
          },
        ]);
      });
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "I could not get a reply just now.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="scene-panel rounded-[1.8rem] px-4 py-4 sm:px-6 sm:py-6">
      <div className="flex flex-wrap gap-2">
        {starterQuestions.map((question) => (
          <button
            key={question}
            type="button"
            onClick={() => void sendMessage(question)}
            disabled={isLoading}
            className="rounded-full border border-[rgba(31,40,51,0.08)] bg-transparent px-3 py-1.5 text-[0.92rem] text-muted transition hover:border-[rgba(31,40,51,0.18)] hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
          >
            {question}
          </button>
        ))}
      </div>

      <div className="mt-5 border-t border-[rgba(31,40,51,0.08)] pt-5">
        <div className="max-h-[60vh] min-h-[24rem] space-y-4 overflow-y-auto pr-1">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`}>
              <div
                className={`max-w-[88%] text-[0.97rem] leading-7 sm:max-w-[80%] ${
                  message.role === "user" ? "ml-auto text-ink" : "text-ink"
                }`}
              >
                <p className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  {message.role === "user" ? "You" : "Jingxuan"}
                </p>
                <div
                  className={
                    message.role === "user"
                      ? "rounded-[1.2rem] bg-[rgba(31,40,51,0.08)] px-4 py-3"
                      : "px-0 py-0"
                  }
                >
                  <p className={message.attachment ? "mb-3" : ""}>{message.content}</p>
                  {message.attachment ? (
                    <a
                      href={message.attachment.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-[rgba(31,40,51,0.12)] bg-[rgba(31,40,51,0.05)] px-4 py-2 text-sm font-medium text-ink transition hover:border-[rgba(31,40,51,0.24)] hover:bg-[rgba(31,40,51,0.08)]"
                    >
                      {message.attachment.label}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}

          {isLoading ? (
            <div className="text-sm text-muted">
              <p className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted">
                Jingxuan
              </p>
              <div>Thinking...</div>
            </div>
          ) : null}

          <div ref={bottomRef} />
        </div>

        <form
          className="mt-6 border-t border-[rgba(31,40,51,0.08)] pt-4"
          onSubmit={(event) => {
            event.preventDefault();
            void sendMessage(input);
          }}
        >
          <label htmlFor="chat-input" className="sr-only">
            Ask a question
          </label>
          <textarea
            id="chat-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void sendMessage(input);
              }
            }}
            placeholder="Ask about research, projects, interests, or contact..."
            rows={3}
            className="w-full resize-none border-0 bg-transparent px-0 py-0 text-[0.98rem] leading-7 text-ink outline-none placeholder:text-[rgba(95,103,115,0.7)]"
          />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted">
              Grounded in this portfolio.
            </p>
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="rounded-full bg-[#1f2833] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#111827] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Sending..." : "Ask"}
            </button>
          </div>
          {error ? <p className="mt-3 text-sm text-[rgb(146,55,55)]">{error}</p> : null}
        </form>
      </div>
    </div>
  );
}
