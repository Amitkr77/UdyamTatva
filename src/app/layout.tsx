import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Udyam Tatva | Build Different",
  description:
    "From idea to execution with the ultimate founder roadmap. No fluff, just leverage.",
  keywords: ["startup", "founder", "roadmap", "execution", "growth", "India"],
  openGraph: {
    title: "Udyam Tatva | Build Different",
    description: "The ultimate founder operating system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}