
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// =====================================
// FONTS
// =====================================

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// =====================================
// WEBSITE METADATA
// =====================================

export const metadata: Metadata = {
  title: "Vignesh S | AI Engineer & Data Scientist",

  description:
    "Explore the portfolio of Vignesh S, featuring Artificial Intelligence, Machine Learning, Data Science projects, professional experience, and certifications.",

  keywords: [
    "Vignesh S",
    "AI Engineer",
    "Data Scientist",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "Portfolio",
  ],

  authors: [
    {
      name: "Vignesh S",
    },
  ],

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Vignesh S | AI Engineer & Data Scientist",
    description:
      "AI Engineer & Data Scientist | Projects, Experience, Skills and Certifications.",
    type: "website",
    images: ["/favicon.png"],
  },
};

// =====================================
// ROOT LAYOUT
// =====================================

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
