import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Quattrocento,
  Cinzel_Decorative,
} from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quattrocento = Quattrocento({
  variable: "--font-quattrocento",
  subsets: ["latin"],
  weight: ["400"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Popsicle Sisters",
  description: "Popsicle Sisters Website, done by Guillaume Beuriot.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quattrocento.variable} ${cinzelDecorative.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
