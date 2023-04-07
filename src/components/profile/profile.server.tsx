import React from "react";
import "@/styles/components/styles.css";
import Image from "next/image";
import { getUser } from "@/lib/user/getUser";
import { redirect } from "next/navigation";
import { Conditional } from "../conditional";
import { Info, Resume, User } from "@prisma/client";
import { filterObject } from "@/util/filter";
import { Space_Mono } from "next/font/google";

type Props = {
  email: string;
};

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const Profile = async ({ email }: Props) => {
  const user = (await getUser(email, {
    info: {
      include: {
        resume: true,
      },
    },
  })) as User & {
    info: Info & {
      resume: Resume;
    };
  };

  if (!user) {
    redirect("/signin");
  }

  // Check through the user object to see what data is available

  if (!user.infoCompleted) {
    redirect("/welcome");
  }

  return (
    <>
      <div className={`profile-container ${spacemono.className}`}>
        <div className="profile">
          <div>
            <Image
              className="profile-image"
              src={user.image || "https://api.dicebear.com/6.x/thumbs/png"}
              alt="profile"
              width={200}
              height={200}
            />
          </div>

          <div className="profile-name">
            <h1>{user.name}</h1>
          </div>

          <div className="profile-info">
            <div className="p-card profile-bio">
              <h2>Bio</h2>
              <p>{user.info.bio}</p>
            </div>

            <div className="p-card profile-location">
              <h2>Location</h2>
              <p>{user.info.location}</p>
            </div>

            <div className="p-card profile-website">
              <h2>Website</h2>
              <p>{user.info.website}</p>
            </div>

            <div className="p-card profile-skills">
              <h2>Skills</h2>
              <ul>
                {user.info.resume.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="p-card profile-education">
              <h2>Education</h2>
              <ul>
                {user.info.resume.education.map((school, index) => (
                  <li key={index}>{school}</li>
                ))}
              </ul>
            </div>

            <div className="p-card profile-work">
              <h2>Work</h2>
              <ul>
                {user.info.resume.work.map((job, index) => (
                  <li key={index}>{job}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
