import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Uji Kompetensi ICT Developer Staff — Muhammad Yos Sularko",
  description:
    "Materi presentasi Uji Kompetensi ICT Developer Staff: pengembangan Odoo Community 17 dan ekosistem aplikasi internal oleh Tim ICT PT Adyawinsa Telecommunication and Electrical.",
};

export const viewport: Viewport = {
  themeColor: "#050b18",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-navy-950 font-sans text-slate-100">{children}</body>
    </html>
  );
}
