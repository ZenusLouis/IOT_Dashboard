import { ToasterProvider } from "@/providers/toast-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer"; // Import Footer component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Wire Twisting Monitor",
  description: "Smart Wire Twisting Monitor using Thingsboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ToasterProvider />
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Thêm Footer */}
      </body>
    </html>
  );
}
