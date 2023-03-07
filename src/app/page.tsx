"use client"
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./page.css";
import { Placeholder } from "@/components/placeholder";
import { animated } from "@react-spring/web";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ctrl-Shift 2023 Project",
  description: "A project for 2023 CtrlShift coding competition",
  twitter: {
    card: "summary",
    title: "Ctrl-Shift 2023 Project",
    description: "A project for 2023 CtrlShift coding competition",
    creator: "@rafayelamirkha1",
  }
};

const PlaceHolder = animated(Placeholder);

export default function Home() {
 
  return (
    <main>
      <PlaceHolder direction="up" />
      <div className="center">
        <h1 className={`${inter.className}`} >
          Hello! Welcome to my 2023 CtrlShift project!
        </h1>
      </div>

      <PlaceHolder direction="bottom" />
    </main>
  );
}
