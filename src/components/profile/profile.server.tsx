import React from "react";
import "@/styles/components/styles.css";
import Image from "next/image";
import { getUser } from "@/lib/user/getUser";
import { redirect } from "next/navigation";
import { Conditional } from "../conditional";
import { Info, Resume, User } from "@prisma/client";
import { filterObject } from "@/util/filter";

const Profile = async () => {
  const user = (await getUser({
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

  const { info } = user;
  const { skills, education, work } = info.resume;

  const _info = filterObject<
    Info & {
      resume: Resume;
    }
  >(info);

  const _skills = filterObject<string[]>(skills);
  const _education = filterObject<string[]>(education);
  const _work = filterObject<string[]>(work);

  return (
    <>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-image">
            <Image
              src={user.image || "https://api.dicebear.com/6.x/thumbs/png"}
              alt="profile"
              width={200}
              height={200}
            />
          </div>
          <Conditional condition={user.name}>
            <div className="profile-name">
              <h1>{user.name}</h1>
            </div>
          </Conditional>
          <div className="profile-info">
            <Conditional condition={_info.bio}>
              <div className="p-card profile-bio">
                <h2>Bio</h2>
                <p>{user.info.bio}</p>
              </div>
            </Conditional>
            <Conditional condition={_info.location}>
              <div className="p-card profile-location">
                <h2>Location</h2>
                <p>{user.info.location}</p>
              </div>
            </Conditional>
            <Conditional condition={_info.website}>
              <div className="p-card profile-website">
                <h2>Website</h2>
                <p>{_info.website}</p>
              </div>
            </Conditional>
            <Conditional condition={_skills}>
              <div className="p-card profile-skills">
                <div>
                  <h2>Skills</h2>
                  <ul>
                    {_skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Conditional>
            <Conditional condition={_education}>
              <div>
                <h2>Education</h2>
                <ul>
                  {_education.map((school, index) => (
                    <li key={index}>{school}</li>
                  ))}
                </ul>
              </div>
            </Conditional>
            <Conditional condition={_work}>
              <div>
                <h2>Work</h2>
                <ul>
                  {_work.map((job, index) => (
                    <li key={index}>{job}</li>
                  ))}
                </ul>
              </div>
            </Conditional>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
