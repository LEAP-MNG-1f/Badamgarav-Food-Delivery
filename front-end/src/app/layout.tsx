import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FoodProvider } from "@/provider/Food";
import { OrderProvider } from "@/provider/Order";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FoodProvider>
          <OrderProvider>{children}</OrderProvider>
        </FoodProvider>
      </body>
    </html>
  );
}
