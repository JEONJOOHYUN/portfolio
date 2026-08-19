import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

const paperlogy = localFont({
  variable: "--font-paperlogy",
  src: [
    { path: "../fonts/Paperlogy/Paperlogy-1Thin.ttf", weight: "100", style: "normal" },
    { path: "../fonts/Paperlogy/Paperlogy-2ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../fonts/Paperlogy/Paperlogy-3Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Paperlogy/Paperlogy-4Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Paperlogy/Paperlogy-5Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Paperlogy/Paperlogy-6SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/Paperlogy/Paperlogy-7Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Paperlogy/Paperlogy-8ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/Paperlogy/Paperlogy-9Black.ttf", weight: "900", style: "normal" },
  ],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolioData.hero.name} | ${portfolioData.hero.role}`,
  description: portfolioData.hero.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${paperlogy.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
