"use client";

import { FC, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

interface Props {
  texts: string[];
  ms?: number;
}

export const TextAlternator: FC<Props> = ({ texts, ms }) => {
  const [text, setText] = useState(texts[0]);

  const [props, api] = useSpring(() => ({

  }));

  const interval = setInterval(() => {
    setText((prev) => {
      const index = texts.indexOf(prev);
      return index === texts.length - 1 ? texts[0] : texts[index + 1];
    });
  }, ms || 3000);

  useEffect(() => {
    api.start({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    });

    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      <animated.h1 style={props}>{text}</animated.h1>
    </>
  );
};
