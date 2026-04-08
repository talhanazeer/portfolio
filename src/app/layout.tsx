import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Outfit, JetBrains_Mono } from "next/font/google";
import { AmbientBackdrop } from "@/components/ambient/AmbientBackdrop";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/lib/constants";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.vercel.app",
  ),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#060607",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrains.variable} h-full scroll-pt-16`}
    >
      <body className="grain flex min-h-full flex-col antialiased">
        <ClientProviders>
          <Header />
          <main className="relative flex flex-1 flex-col overflow-x-hidden pt-16">
            <AmbientBackdrop
              variant="soft"
              className="fixed inset-x-0 bottom-0 top-16 -z-10 min-h-[calc(100dvh-4rem)]"
            />
            <div className="relative z-0 flex flex-1 flex-col">{children}</div>
          </main>
          <Footer />
        </ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}
