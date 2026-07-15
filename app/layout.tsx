import { headers } from "next/headers";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hyperaiforce.com"),
  title: {
    default: "Hyper AI Force Limited | AI Robotics",
    template: "%s"
  },
  description:
    "Hyper AI Force Limited develops AI robotics, autonomous patrol and industrial inspection systems for real-world operations.",
  openGraph: {
    title: "Hyper AI Force Limited",
    description:
      "AI robotics, autonomous patrol and industrial inspection solutions.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_HK"],
    images: [
      {
        url: "/images/generated/hyper-hero-robotics.png",
        width: 1536,
        height: 864,
        alt: "Hyper AI Force autonomous robotics"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = headers().get("x-hyper-pathname") ?? "/";
  const lang = pathname.startsWith("/zh-hk")
    ? "zh-HK"
    : pathname.startsWith("/zh-cn")
      ? "zh-CN"
      : "en";

  return (
    <html lang={lang}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
