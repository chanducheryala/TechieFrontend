import Navbar from "@/components/Navbar";
import React from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-slate-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
