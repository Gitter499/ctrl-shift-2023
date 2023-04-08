"use client";
import { AH2 } from "@/components/typography";
import { siteConfig } from "@/util/config";
import { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import Font from "next/font/local";
import Tilty from "react-tilty";

import "./page.css";

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const avaneur = Font({
  src: "../../../../public/fonts/aveneur.ttf",
});

const About = () => {
  return (
    <>
      
      <div className={`about ${spacemono.className}`}>
        <Tilty>
          <div className="card-container magenta">
            <AH2 className="main-text">About</AH2>
            <p>
              Yes! is a simple app made for individuals to network and engage
              with other professionals.
            </p>
            <p>Submission for the 2023 Ctrl Shift competition.</p>
          </div>
        </Tilty>
        <Tilty>
          <div className="card-container ">
            <div className="features">
              <AH2 className="main-text">Features</AH2>
              <ul>
                <li> Simulated AI Chat.</li>
                <li> Custom Profiles</li>
                <li>Authentication</li>
                <li> Database</li>
              </ul>
            </div>
          </div>
        </Tilty>
        <Tilty>
          <div className="card-container ">
            <div className="stats">
              <AH2 className="main-text">Performance</AH2>
              <p>
                Yes! uses Next 13 with React Server Components. It ranks a 100
                on lighthouse.
              </p>
            </div>
          </div>
        </Tilty>
      </div>
    </>
  );
};

export default About;
