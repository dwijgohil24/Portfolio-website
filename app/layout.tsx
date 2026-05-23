import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dwijsinh Gohil — Software Development Engineer",
  description:
    "Portfolio of Dwijsinh Gohil — Full-Stack SDE at TCS. Reduced certificate workflows by 93%, Global Rank 141 at TechGig Code Gladiators 2023.",
  keywords: [
    "Dwijsinh Gohil",
    "Software Engineer",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Dwijsinh Gohil" }],
  openGraph: {
    title: "Dwijsinh Gohil — Software Development Engineer",
    description: "Full-Stack SDE | Java · Spring Boot · AWS · Angular",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
