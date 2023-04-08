"use client";

import { Topic } from "@/types/types";
import Image from "next/image";
import { Inter, Space_Mono } from "next/font/google";
import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import Font from "next/font/local";

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});
export const TopicViewer: React.FC<{
  topics: Topic[];
  show: number;
}> = ({ show, topics }) => {
  const [styles, api] = useSpring(() => ({
    from: {
      opacity: 0,
      x: "-120vw",
    },
  }));

  useEffect(() => {
    api.start({
      to: {
        opacity: 1,
        x: "0vw",
      },
    });

    return () => {};
  }, [show]);

  if (show == -1) {
    return (
      <animated.div
        style={styles}
        className={`topic-container ${spacemono.className} `}
      >
        <div className="topic-column">
          <h1 className="topic-title">
            This is the
            <span className="highlight"> navigator</span>
          </h1>
          <p className="topic-description">
            You can use this to navigate around yes!
          </p>
        </div>
      </animated.div>
    );
  }

  return (
    <>
      <animated.div style={styles}>
        <div className={`topic-container ${spacemono.className} `}>
          <Image
            src={topics[show].imageURL}
            alt={topics[show].name}
            width={400}
            height={400}
          />
          <div className="topic-column">
            <h1 className="topic-title">{topics[show].name}</h1>
            <p className="topic-description">{topics[show].description}</p>
          </div>
        </div>
      </animated.div>
    </>
  );
};
