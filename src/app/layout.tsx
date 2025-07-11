import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { NextAuthProvider } from "src/provider";
import { app } from "src/config/app";
import { ThemeProvider } from "src/provider/theme";
import { Toaster } from "@components/ui/toaster";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">
          <NextAuthProvider>{children}</NextAuthProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
