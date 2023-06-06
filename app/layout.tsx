import "./globals.css";
import { Inter } from "next/font/google";

import { MoralisProvider } from "react-moralis";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blockchain Lottery System",
  description: "A lottery system based on blockchain technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MoralisProvider initializeOnMount={false}>{children}</MoralisProvider>
      </body>
    </html>
  );
}
