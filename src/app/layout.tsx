import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
