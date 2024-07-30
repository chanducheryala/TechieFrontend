import Navbar from "@/components/Navbar";
import React from "react";
export default function CreateBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
