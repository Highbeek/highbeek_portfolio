import type { Metadata } from "next";
import { Abril_Fatface, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const abrilFatface = Abril_Fatface({
  variable: "--font-abril-fatface",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ibukun Agboola | Senior React Native & Frontend Engineer",
  description:
    "Senior React Native & Frontend Engineer with 4+ years building scalable fintech, crypto, and marketplace applications used by 40K+ users.",
  keywords: [
    "React Native",
    "Frontend Engineer",
    "TypeScript",
    "Next.js",
    "Fintech",
    "Mobile Developer",
    "Lagos",
  ],
  authors: [{ name: "Ibukun Agboola Peter" }],
  openGraph: {
    title: "Ibukun Agboola | Senior React Native & Frontend Engineer",
    description:
      "Senior React Native & Frontend Engineer building scalable fintech and marketplace apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${abrilFatface.variable}`}
    >
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t)}catch(e){}})()` }} />
        <ThemeProvider>
          <Cursor />
          <div className="grid-bg" aria-hidden="true" />
          <div className="blob-container" aria-hidden="true">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
          </div>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
