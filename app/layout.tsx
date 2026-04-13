import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "../lib/utils";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OptionsNav from "./components/OptionsNav";
import { ThemeProvider } from "next-themes";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "HigaInk",
  description: "Pagina de tatuajes de HigaInk",
};

export const myFont = localFont({
  src: [
    {
      path: "../public/fonts/InclusiveSans-Regular.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", myFont.className, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Hero />
          <OptionsNav />
          {children}
          <Footer />
        </ThemeProvider>
        {/* <Header /> */}
        </body>
    </html>
  );
}
