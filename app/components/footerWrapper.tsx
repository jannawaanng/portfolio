"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer"; // Ensure this matches your Footer file name (Footer.tsx)

export default function FooterWrapper() {
  const pathname = usePathname();

  // Hide the global footer ONLY on the 'about-me' page
  if (pathname === "/pages/about-me") {
    return null;
  }

  return <Footer />;
}