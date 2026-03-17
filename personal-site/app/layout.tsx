import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jingxuanlyu.com"),
  title: {
    default: "Jingxuan Lyu",
    template: "%s | Jingxuan Lyu",
  },
  description:
    "Portfolio website for Jingxuan Lyu, a UC Berkeley student studying Computer Science and Data Science.",
  openGraph: {
    title: "Jingxuan Lyu",
    description:
      "UC Berkeley student in Computer Science and Data Science building thoughtful, practical software.",
    url: "https://jingxuanlyu.com",
    siteName: "Jingxuan Lyu",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-canvas text-ink antialiased">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[20rem] sm:h-[24rem]"
          style={{
            backgroundColor: "rgb(247, 245, 241)",
            backgroundImage:
              "linear-gradient(180deg, rgba(247, 245, 241, 0) 0%, rgba(247, 245, 241, 0.2) 52%, rgba(247, 245, 241, 0.96) 100%), url('/painting-detail-transparent.png')",
            backgroundPosition: "center top, right top",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "100% 100%, min(52.5rem, 65vw) auto",
          }}
        />
        <div className="relative mx-auto flex min-h-screen max-w-[96rem] flex-col px-4 sm:px-6 lg:px-8">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
