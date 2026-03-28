import type { Metadata } from "next";
import { Abril_Fatface, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

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
  title: "Ibukun Agboola | Software Engineer",
  description:
    "I build mobile and web products that scale. 4+ years shipping React Native and frontend apps across fintech, crypto, and marketplace — reaching 40K+ users.",
  keywords: [
    "Ibukun Agboola",
    "highbeek",
    "React Native",
    "Frontend Engineer",
    "Software Engineer",
    "TypeScript",
    "Next.js",
    "Fintech",
    "Mobile Developer",
    "Squareme",
    "Squareme developer",
    "Lagos",
    "Nigeria",
  ],
  authors: [{ name: "Ibukun Agboola Peter", url: "https://highbeek.dev" }],
  verification: {
    google: "t-LYO0kGCzZoBaL0K--MPVOh72vsxEdoy8N3qsD3y7E",
  },
  openGraph: {
    title: "Ibukun Agboola | Software Engineer",
    description:
      "I build mobile and web products that scale. 4+ years shipping React Native and frontend apps across fintech, crypto, and marketplace — reaching 40K+ users.",
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
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
