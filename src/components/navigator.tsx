"use client";

import { Link as LinkType } from "@/types/types";
import { animated, SpringValue, useSpring } from "@react-spring/web";
import { Inter, Space_Mono } from "next/font/google";
import Font from "next/font/local";
import Link from "next/link";
import { navTopics } from "@/util/config";
import Image from "next/image";

import "@/styles/components/styles.css";
import { Dispatch, useState } from "react";
import { TopicViewer } from "./topic-viewer";

interface NavigatorProps extends React.HTMLAttributes<HTMLElement> {
  links: LinkType[];
  state: boolean;
  render: boolean;
  setNavState: Dispatch<boolean>;
  styles: {
    opacity: SpringValue<number>;
  };
}

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

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
        className={`button ${state ? "open" : "close"} ${
          spacemono.className
        } `}
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
            <div className="big-column beige topic-container">
              <div>
                <TopicViewer topics={navTopics} show={show} />
              </div>
              <h1 className={`${spacemono.className} logo-text`}>
                Backward Revolution
              </h1>
            </div>
            <div className="column link-container">
              {links.map((link, idx) => (
                <Link
                  href={link.url}
                  key={idx}
                  onMouseEnter={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      if (idx <= 4) {
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
                  <span className={`${spacemono.className}`}>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </animated.div>
      )}
    </>
  );
};
