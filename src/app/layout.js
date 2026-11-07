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

export const metadata = {
  title: "Flavora | Modern Casual Dining Restaurant & Cafe",

  description:
    "Explore Flavora's restaurant food menu, chef special dishes, delicious chicken and seafood dishes, and a memorable dining experience.",

  keywords: [
    "modern casual dining restaurant",
    "restaurant and cafe",
    "restaurant food menu",
    "chef special dishes",
    "fresh and delicious food",
    "chicken dishes",
    "seafood dishes",
    "crispy chicken roll",
    "roasted chicken",
    "cheese shrimp roll",
    "baked crab cheese",
    "crispy squid",
    "restaurant table booking",
    "dining experience",
  ],

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Flavora | Modern Casual Dining Restaurant & Cafe",
    description:
      "Discover delicious food, chef special dishes, chicken and seafood options at Flavora.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
