import UserPanelLayout from "@/components/Layouts/UserPanelLayout";
import ModalProvider from "@/components/Providers/ModalProvider";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { exo2, firaSansCondensed, signika } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata: Metadata = {
  metadataBase: new URL("https://arifulhasan.netlify.app"),
  title: { default: "MD ARIFUL HASAN", template: "%s - MD ARIFUL HASAN" },
  description:
    "Web developer portfolio of MD ARIFUL HASAN created by Next.js, Tailwindcss, Three.js",
  authors: [
    {
      name: "MD ARIFUL HASAN",
    },
  ],
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/me.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/me.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${signika} ${exo2} ${firaSansCondensed} overflow-x-hidden`}
      >
        <ThemeProvider>
          <UserPanelLayout>
            <ModalProvider />
            {children}
          </UserPanelLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
