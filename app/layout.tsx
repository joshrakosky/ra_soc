import type { Metadata } from "next";
import SocBackground from "@/components/SocBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Republic Airways SOC Appreciation Gifts",
  description: "SOC appreciation gift ordering for Republic Airways",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SocBackground />
        {children}
      </body>
    </html>
  );
}
