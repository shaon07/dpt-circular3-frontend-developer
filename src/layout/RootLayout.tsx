import React from "react";
import Navbar from "../components/navbar";

type RootLayout = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <div>
      <Navbar />
      <div className="mt-16">
      {children}
      </div>
    </div>
  );
}
