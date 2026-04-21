import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medi Assistant with Amani | Your Health & Wellness on WhatsApp",
  description: "One assistant for your body and mind — available instantly on WhatsApp. Get health guidance and mental wellness support from Amani, your empathetic AI companion.",
  keywords: ["health assistant", "mental wellness", "WhatsApp", "AI assistant", "South Africa", "healthcare", "therapy", "wellness"],
  openGraph: {
    title: "Medi Assistant with Amani",
    description: "Your personal health & wellness companion on WhatsApp",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-warm-50 text-warm-900">
        {children}
      </body>
    </html>
  );
}
