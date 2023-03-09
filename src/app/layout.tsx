"use client";
import { useNavigator } from "@/hooks/useNavigator";
import { navStore } from "@/stores/navStore";
import { StoreProvider } from "@/util/easy-peasy";

import "./globals.css";



export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const { Nav, navState, setNavState, api } = useNavigator();

  return (
    <html lang="en">
      <Nav />
      <body>{children}</body>
    </html>
  );
}
