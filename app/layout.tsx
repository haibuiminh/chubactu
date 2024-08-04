import { Footer, ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./animated.scss";
import "./globals.css";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trang Chủ",
  description: "Chử Bạc Tử Trang Chủ",
  icons: "logo.webp"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>

      <body className={inter.className}>
        <div className="stars">
            {Array.from({ length: 35 }).map((item, idx) => <div key={idx} className={`star ${idx % 2 === 0 ? 'star-custom' : '' }`} />)}
        </div>
        {children}
      </body>
    </html>
  );
}
