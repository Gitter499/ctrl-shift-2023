"use client";
import {
  config,
  Lookup,
  SpringRef,
  SpringValue,
  useSpring,
} from "react-spring";

export type Animation = {
  name: string;
  initial?: Parameters<typeof useSpring>[0];
  onLoad?: <T extends Lookup<any>>(api: any) => any;
  scroll?: (yProgress: SpringValue<number>) => any;
};

export const animations: Animation[] = [
  {
    name: "slideFromRight",
    initial: {
      from: {
        x: "100vw",
      },
      config: {
        duration: 500,
        ...config.gentle,
      },
    },
    onLoad: (api: SpringRef<{ x: string }>) =>
      api.start({
        x: "0vw",
      }),
  },
  {
    name: "scrollRight",
    scroll: (yProgress: SpringValue<number>) => ({
      x: yProgress.to([0, 1], ["0vw", "100vw"]),
    }),
  },
];

export const animate = (animation: string): Omit<Animation, "name"> => {
  const anim = animations.find((a) => a.name === animation);
  if (!anim) {
    throw new Error(`No animation found with name ${animation}`);
  }

  if (anim.scroll) {
    return {
      scroll: anim.scroll,
    };
  } else {
    return {
      initial: anim.initial,
      onLoad: anim.onLoad,
    };
  }
};
