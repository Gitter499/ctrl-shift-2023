"use client";
import { useNavigator } from "@/hooks/useNavigator";

import { siteConfig } from "@/util/config";

import Font from "next/font/local";


import "./globals.css";

const avaneur = Font({
  src: "../../public/fonts/aveneur.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { Nav, navState, setNavState, api } = useNavigator();

  return (
    <html lang="en">
      <Nav />
      <body>
        <h1 className={`${avaneur.className} stylistic-left`}>
          {siteConfig.name}
        </h1>
        {children}
      </body>
    </html>
  );
}
