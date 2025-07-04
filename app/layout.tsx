import "./globals.css";

import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { generateMeta } from "@/lib/meta";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Adjust as needed
});
export const viewport = "width=device-width, initial-scale=1";

export const generateMetadata = () => {
  return generateMeta({ title: "Home - Bereej Technologies" });
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <div className="relative w-full bg-white">
              <Header />
              <main className="flex-1">{children}</main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
