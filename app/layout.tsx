import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Naviagtion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My-App",
  description: "It is a sample next app, for learning purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-slate-200 flex justify-center pt-5 sticky top-0">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-serif font-bold mb-5">Products</h1>
            <div>
              <Navigation />
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="flex flex-col justify-center py-6 px-10">
          <p className="px-10 text-gray-500 text-center">
            &copy; All copyright reserved
          </p>
        </footer>
      </body>
    </html>
  );
}
