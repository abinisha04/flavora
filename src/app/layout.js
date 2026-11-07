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
    "restaurant table booking",
    "dining experience",
  ],

  robots: {
    index: true,
    follow: true,
  },

  // icons: {
  //   icon: "/icon.png",
  // },

  openGraph: {
    title: "Flavora | Modern Casual Dining Restaurant & Cafe",
    description:
      "Discover Flavora, a modern casual dining restaurant and café featuring delicious chicken and seafood dishes, chef special meals, fresh flavours, and a welcoming dining experience.",
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
