"use client";

import { Link as LinkType } from "@/types/types";
import { animated, SpringValue, useSpring } from "@react-spring/web";
import { Inter } from "next/font/google";
import Font from "next/font/local";
import Link from "next/link";
import { navTopics } from "@/util/config";
import Image from "next/image";

import "@/styles/components/styles.css";
import { ActionCreator } from "easy-peasy";
import { Dispatch, useState } from "react";
import { TopicViewer } from "./topic-viewer";

import { Tomorrow } from "next/font/google";
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

const customFont = Font({ src: "../../public/fonts/aveneur.ttf" });

export const Navigator: React.FC<NavigatorProps> = ({
  links,
  state,
  render,
  styles,
  setNavState,
}) => {
  const [show, setShow] = useState(-1);
  return (
    <>
      <button
        className={`button ${state ? "open" : "close"} ${customFont.className} `}
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
            <Image
              src={
                "https://pngfolio.com/images/all_img/copy/1635696779cat-png.png"
              }
              alt="Kitty kat"
              className="kitty"
              width={180}
              height={200}
            />
            <div className="big-column beige topic-container">
              <div>
                <TopicViewer topics={navTopics} show={show} />
              </div>
              <h1 className={`${customFont.className} logo-text`}>Backward Revolution</h1>
            </div>
            <div className="column link-container">
              {links.map((link, idx) => (
                <Link
                  href={link.url}
                  key={idx}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      if (idx <= 5) {
                        setShow(idx);
                      }
                    }, 250);
                  }}
                  onClick={(e) => {
                    setTimeout(() => {
                      setNavState(false);
                    }, 50);
                  }}
                  className={`link`}
                >
                  <span className={`${customFont.className}`}>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </animated.div>
      )}
    </>
  );
};
