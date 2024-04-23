import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "src/config/provider";
import { app } from "src/config/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: app.title,
    template: "%s | " + app.title,
  },
  description: app.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
