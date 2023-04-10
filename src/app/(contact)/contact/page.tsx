"use client";
import { AH2 } from "@/components/typography";

import { Space_Mono } from "next/font/google";
import { AiFillGithub } from "react-icons/ai";
import Tilty from "react-tilty";

import "./page.css";

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const Contact = () => {
  return (
    <>
      <div className={`contact ${spacemono.className}`}>
        <div className="github">
          <AiFillGithub />
          <a className="contact-link"href="https://github.com/Gitter499">
            My Github
          </a>
        </div>
        <Tilty>
          <div className="card-container magenta">
            <AH2 className="main-text">Contact</AH2>

            <p>
              For any questions, comments, or concerns, please contact me at the
              following email address:
              <br />
              <a  className="contact-link" href="mailto:rafayel.amirkhanyan@gmail.com">
                rafayel.amirkhanyan@gmail.com
              </a>
            </p>
            <p>
              Made by Rafayel Amirkhanyan for the 2023 Ctrl Shift competition.
            </p>
            <br />
          </div>
        </Tilty>
      </div>
    </>
  );
};

export default Contact;
