"use client";
import { Inter } from "next/font/google";
import "./page.css";
import { Placeholder } from "@/components/placeholder";
import { animated, useSpring } from "@react-spring/web";
import { Metadata } from "next";
import { Navigator } from "@/components/navigator";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useNavigator } from "@/hooks/useNavigator";

const inter = Inter({ subsets: ["latin"] });

const PlaceHolder = animated(Placeholder);

export default function Home() {
  // make this a global state

  const {
    Nav,
    navState,
    setNavState,
    api,
  } = useNavigator();

  return (
    <>
      <Nav />
      <main>
        {/* <PlaceHolder direction="up" /> */}
        <div className="center">
          <h1 className={`${inter.className}`}>
            Hello! Welcome to my 2023 CtrlShift project!
          </h1>
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();

              setNavState(!navState);
            }}
          >
            Menu
          </button>
        </div>

        <PlaceHolder direction="bottom" />
      </main>
    </>
  );
}
