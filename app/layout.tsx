import type { Metadata } from "next";
import "@/public/scss/main.scss";
import InitAnimations from "@/components/layout/InitAnimations";

export const metadata: Metadata = {
  title: "Hostech - Web hosting & WHMCS React NextJs Template",
  description: "Web hosting & WHMCS React NextJs Template",
  keywords: [
    "clean",
    "cloud hosting",
    "domain",
    "hosting",
    "Typescript",
    "React",
    "nextjs",
  ],
  authors: [
    {
      name: "themeies",
      url: "https://themeforest.net/user/themeies",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children} <InitAnimations />
      </body>
    </html>
  );
}
