import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar"; // Navbar ইম্পোর্ট করা হলো

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// আপনার এসইও (SEO) এর জন্য মেটাডাটা আপডেট করা হলো
export const metadata: Metadata = {
  title: "Niloy H. | Automation Expert & Next.js Developer",
  description: "Building automated lead systems and futuristic websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'scroll-smooth' ক্লাস যোগ করা হয়েছে যাতে মেনুতে ক্লিক করলে স্মুথলি স্ক্রল হয়
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar টি এখানে বসানো হলো যাতে সব পেজে উপরে থাকে */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}