"use client";
import { Placeholder } from "@/components/placeholder";
import { useNavigator } from "@/hooks/useNavigator";
import { animated } from "react-spring";

const About = () => {
  const PlaceHolder = animated(Placeholder);
  return (
    <>
      <div>
        <h1>About</h1>
        <PlaceHolder direction="bottom" />
      </div>
    </>
  );
};

export default About;
