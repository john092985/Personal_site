import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

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
      <body
        className={`${sans.variable} ${serif.variable} relative min-h-screen bg-canvas text-ink antialiased`}
      >
        <div aria-hidden="true" className="site-atmosphere" />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="mx-auto flex w-full max-w-[104rem] flex-1 flex-col px-4 sm:px-6 lg:px-10">
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
