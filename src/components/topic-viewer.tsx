"use client"

import { Topic } from "@/types/types";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import Font from "next/font/local"



const avaneur = Font({ src: "../../public/fonts/aveneur.ttf" });

const taruno = Font({ src: "../../public/fonts/Fontspring-DEMO-tarunowide-regular.otf" });

const ragata = Font({ src: "../../public/fonts/ragataregular.otf" });

const inter = Inter({ subsets: ["latin"] });

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
        className={`topic-container ${ragata.className} `}
      >
        <Image
          src={"https://pngfolio.com/images/all_img/copy/1635696779cat-png.png"}
          alt={"kitty kat"}
          width={350}
          height={350}
        />

        <div className="topic-column">
          <h1 className="topic-title">Kitty Kat</h1>
          <p className="topic-description">
            This is a wiki about cats. It is a work in progress, so please be
            patient. If you have any questions, please contact me at
          </p>
        </div>
      </animated.div>
    );
  }

  return (
    <>
      <animated.div style={styles}>
        <div className={`topic-container ${ragata.className} `}>
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
