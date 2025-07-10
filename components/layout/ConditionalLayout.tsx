// components/layout/ConditionalLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({
  children,
}: ConditionalLayoutProps) {
  const pathname = usePathname();

  // Define routes that should not show header and footer
  const routesWithoutHeaderFooter = [
    "/apps/privacypolicy",
    "/ampswap/privacypolicy",
    "/associatelegal/privacypolicy",
    "/devdharma/privacypolicy",
    "/legalaction/privacypolicy",
    "/parakh/privacypolicy",
    "/propkonnect/privacypolicy",
    "/user-account-deletion-request",
  ];

  const shouldShowHeaderFooter = !routesWithoutHeaderFooter.includes(pathname);

  if (shouldShowHeaderFooter) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    );
  }
  // For pages without header/footer, render children directly
  return <>{children}</>;
}
