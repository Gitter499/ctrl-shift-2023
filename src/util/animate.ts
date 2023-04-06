"use client";
import {
  config,
  Lookup,
  SpringRef,
  SpringValue,
  to,
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
    name: "slideFromLeft",
    initial: {
      from: {
        x: "-100vw",
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
    scroll: (yProgress: SpringValue<number>) => {
      const x = to([yProgress], (y) => `${0.85 / ( y + 0.001)}vw`);

      return {
        x,
      };
    },
  },

  {
    name: "scrollLeft",
    scroll: (yProgress: SpringValue<number>) => {
      const x = to([yProgress], (y) => `${-0.85 / y}vw`);

      return {
        x,
      };
    }
  },

];
// @ts-ignore
export const animate = (animation: string): Omit<Animation, "name"> => {
  const anim = animations.find((a) => a.name === animation);
  
  if (anim && anim.scroll) {
    return {
      scroll: anim.scroll,
    };
  } else if (anim) {
    return {
      initial: anim.initial,
      onLoad: anim.onLoad,
    };
  }

};
