import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Near Changs",
  description: "Find and book trusted home repair services near you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
