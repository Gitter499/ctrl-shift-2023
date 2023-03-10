"use client";

import { Link as LinkType } from "@/types/types";
import { animated, SpringValue, useSpring } from "@react-spring/web";
import { Inter } from "next/font/google";
import Link from "next/link";

import "@/styles/components/styles.css";
import { ActionCreator } from "easy-peasy";
import { Dispatch } from "react";

interface NavigatorProps extends React.HTMLAttributes<HTMLElement> {
  links: LinkType[];
  state: boolean;
  render: boolean;
  setNavState: Dispatch<boolean>;
  styles: {
    opacity: SpringValue<number>;
  };
}

const inter = Inter({ subsets: ["latin"] });

export const Navigator: React.FC<NavigatorProps> = ({
  links,
  state,
  render,
  styles,
  setNavState,
}) => {
  return (
    <>
      <button
        className={`button ${state ? "open" : "close"} ${inter.className} `}
        onClick={(e) => {
          e.preventDefault();

          setNavState(!state);
        }}
      >
        {" "}
        {state ? "close" : "menu"}
      </button>
      {render && (
        <animated.div style={styles} className="nav-wrapper">
          <div className="container">
            <div className="big-column beige"></div>
            <div className="column link-container">
              {links.map((link, idx) => (
                <Link
                  href={link.url}
                  key={idx}
                  onClick={(e) => {
                    setTimeout(() => {
                      setNavState(false);
                    }, 50);
                  }}
                  className={` link`}
                >
                  <span className={`${inter.className}`}>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </animated.div>
      )}
    </>
  );
};
