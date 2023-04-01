"use client";
import { FC } from "react";
import { animated, useInView } from "react-spring";
import "../styles/components/styles.css";
import { AH2 } from "./typography";
import { Space_Mono } from "next/font/google";

import { SiOpenai } from "react-icons/si";
import { IconType } from "react-icons";
import Tilty from "react-tilty";

interface SellingPointProps {
  title: string;
  description: string;
  icon: string;
  threshold?: number;
}

const spacemono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

type Icon = {
  name: string;
  icon: IconType;
};
const icons: Icon[] = [
  {
    name: "openai",
    icon: SiOpenai,
  },
];

export const SellingPoint: FC<SellingPointProps> = ({
  title,
  description,
  icon,
  threshold,
}) => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 40,
        boxShadow: "0px 5px 0px 0px #ffffff",
      },
      to: {
        opacity: 1,
        y: 0,
        boxShadow: "4px 5px 10px 0px #ffffff",
      },
    }),

    {
      amount: threshold || 0.5,
    }
  );

  const Icon = icons.find((i) => i.name === icon)?.icon!!;

  return (
    <>
      <Tilty>
        <animated.div
          ref={ref}
          style={springs}
          className={`selling-point ${spacemono.className}`}
        >
          <div >
              <Icon className="selling-icon" />
          </div>
          <AH2 className="text-black">{title}</AH2>
          <p className="description">{description}</p>
        </animated.div>
      </Tilty>
    </>
  );
};
