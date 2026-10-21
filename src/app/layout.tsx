// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://driftwatch.example.com"),
  title: "DriftWatch – Beta 1",
  description: "Detect drift. Understand impact. Make better decisions.",
  openGraph: {
    title: "DriftWatch – Beta 1",
    description: "Detect drift. Understand impact. Make better decisions.",
    url: "https://driftwatch.example.com",
    siteName: "DriftWatch",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DriftWatch beta landing page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
