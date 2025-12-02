import { Sora, Roboto_Flex  } from "next/font/google"
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Sorteador de números",
};

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
})

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${robotoFlex.variable}`}>
      <body className="dark">
        {children}
      </body>
    </html>
  );
}
