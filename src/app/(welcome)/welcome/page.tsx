"use client";
import { AH2 } from "@/components/typography";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Sendable } from "@/types/types";
import { FileUploader } from "react-drag-drop-files";

import "./page.css";

import { getUser } from "@/lib/user/getUser";
import { getSession, useSession } from "next-auth/react";
import { Space_Mono } from "next/font/google";

type Props = {};

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const WelcomePage = (props: Props) => {
  const [file, setFile] = useState<Blob | undefined>(undefined);
  const [sendable, setSendable] = useState<Sendable>({
    bio: "",
    location: "",
    website: "",
    birthday: "",
    resume: undefined,
  });

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSendable({
      bio: e.currentTarget.bio.value,
      location: e.currentTarget.location.value,
      website: e.currentTarget.website.value,
      birthday: e.currentTarget.birthday.value,
      resume: file,
    });

    if (!sendable.resume) {
      alert("Please upload a resume.");
    } else {
      const res = await fetch("/api/user/info", {
        method: "POST",
        body: JSON.stringify(sendable),
      });

      if (res.status == 200) {
        redirect(`/profile`);
      }
    }
  };

  return (
    <>
      <div className={`container ${spacemono.className}`}>
        <div className="welcome-container">
          <div className="top-text">
            <AH2 animationName="slideFromLeft">Welcome to Yes!</AH2>
            <p>Please fill out some of the information below to get started.</p>
          </div>
          <div className="info-container">
            <form className="info-form" onSubmit={onSubmit}>
              <div className="raw">
                <div className="bio">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    name="bio"
                    required
                    id="bio"
                    cols={30}
                    rows={10}
                    spellCheck
                    
                    placeholder="I love eating pizza #NYC"
                  />
                </div>
                <div className="location">
                  <label htmlFor="location">Location</label>
                  <input
                    required
                    type="text"
                    name="location"
                    id="location"
                    placeholder="New York, NY"
                  />
                </div>
                <div className="website">
                  <label htmlFor="website">Website</label>
                  <input
                    required
                    type="text"
                    name="website"
                    id="website"
                    placeholder="https://example.com"
                  />
                </div>
                <div className="birthday">
                  <label htmlFor="birthday">Birthday</label>
                  <input type="date" name="birthday" id="birthday" />
                </div>
              </div>
              <div className="resume-container">
                <AH2 className="resume-text">
                  Resume
                </AH2>
                <p>Upload your resume to get started.</p>
                <div className="resume-dropzone">
                  <FileUploader
                    handleChange={(file: Blob) => setFile(file)}
                    name="file"
                    types={["PDF"]}
                  />
                </div>
                <div className="btn-container">
                <button
                  className={`submit-btn ${spacemono.className}`}
                  type="submit"
                >
                  Submit
                </button>
              </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
