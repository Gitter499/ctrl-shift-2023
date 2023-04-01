"use client";
import { useEffect, FC } from "react";

import { useSpring, animated, config, useScroll } from "react-spring";
import { animate } from "@/util/animate";

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  font?: string;
  animationName?: string;
}

export const AH2: FC<H2Props> = ({
  children,
  font,
  animationName,
  ...rest
}) => {
  const { scrollYProgress } = useScroll();

  const animation = animate(animationName!!);

  const [props, api] = useSpring(
    animationName
      ? () => animation.initial
      : () => ({
          from: {
            opacity: 0,
          },
          config: {
            duration: 500,
            ...config.gentle,
          },
        })
  );

  useEffect(() => {
    if (animation && animation.onLoad) {
      api.start(animation.onLoad(api));
    } else {
      api.start({
        to: {
          opacity: 1,
        },
      });
    }
  }, []);

  if (animation && animation.scroll) {
    return (
      <>
        <animated.h2 style={animation.scroll(scrollYProgress)} {...rest}>
          {children}
        </animated.h2>
      </>
    );
  }

  return (
    <>
      <animated.h2 style={props} {...rest}>
        {children}
      </animated.h2>
    </>
  );
};
