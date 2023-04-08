"use client";
import { AH2 } from "@/components/typography";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Sendable } from "@/types/types";
import { FileUploader } from "react-drag-drop-files";

import "./page.css";

import { getUser } from "@/lib/user/getUser";
import { getSession, useSession } from "next-auth/react";

type Props = {};

// export const metadata: Metadata = {
//   title: "Welcome to Yes!",
//   description: "Please fill out some of the information below to get started.",
// };

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
      <div className="container">
        <div className="welcome-container">
          <AH2 animationName="slideFromLeft">Welcome to Yes!</AH2>
          <p>Please fill out some of the information below to get started.</p>
          <div className="info-container">
            <form className="info-form" onSubmit={onSubmit}>
              <div className="bio">
                <label htmlFor="bio">Bio</label>
                <textarea
                  name="bio"
                  required
                  id="bio"
                  cols={30}
                  rows={10}
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
              <div className="resume-container">
                <AH2 animationName="slideFromLeft">Resume</AH2>
                <p>Upload your resume to get started.</p>
                <div className="resume-dropzone">
                  <FileUploader
                    handleChange={(file: Blob) => setFile(file)}
                    name="file"
                    types={["PDF"]}
                  />
                </div>
              </div>
              <div className="submit-container">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
