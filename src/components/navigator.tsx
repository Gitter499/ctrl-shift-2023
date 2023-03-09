"use client";

import { Link as LinkType } from "@/types/types";
import { animated, SpringValue } from "@react-spring/web";
import { Inter } from "next/font/google";
import Link from "next/link";

import "@/styles/components/styles.css";
import { ActionCreator } from "easy-peasy";

interface NavigatorProps extends React.HTMLAttributes<HTMLElement> {
  links: LinkType[];
  state: boolean;
  setNavState: ActionCreator<boolean>;
  styles: {
    opacity: SpringValue<number>;
  };
}

const inter = Inter({ subsets: ["latin"] });

export const Navigator: React.FC<NavigatorProps> = ({
  links,
  state,
  styles,
  setNavState,
}) => {
  return (
    <>
        <button
            className="button"
            onClick={(e) => {
              e.preventDefault();

              setNavState(!state);
            }}
          >
            Menu
          </button>
        <animated.div style={styles} className="nav-wrapper">
          <div>
            <div className="link-container">
              {links.map((link, idx) => (
                <Link
                  href={link.url}
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();

                    setNavState(false);
                  }}
                  className={`link ${link.accentColor}`}
                >
                  <span className={inter.className}>{link.name}</span>
                </Link>
              ))}
            </div>
            <h1>{state}</h1>
          </div>
        </animated.div>
      
    </>
  );
};
