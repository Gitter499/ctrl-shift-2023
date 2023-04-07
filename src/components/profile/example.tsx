import { Result } from "@/types/types";
import { Space_Mono } from "next/font/google";
import Image from "next/image";

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const ExampleProfile = async () => {
  const data = await fetch("https://randomuser.me/api/");
  const json = await data.json();
  const user = json.results[0] as Result;

  const skills = ["HTML", "CSS", "Team Work", "JavaScript"];

  const work = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Bar Tender",
    "Dog Walker",
  ];



  return (
    <>
      <div className={`profile-container ${spacemono.className}`}>
        <div className="profile">
          <div>
            <Image
              className="profile-image"
              src={user.picture.large}
              alt="profile"
              width={200}
              height={200}
            />
          </div>

          <div className={`profile-name`}>
            <h1>
              {user.name.first} {user.name.last}
            </h1>
          </div>

          <div className="profile-info">
            <div className="p-card profile-bio">
              <h2>Bio</h2>
              <p>I am {user.dob.age} years old</p>
            </div>

            <div className="p-card profile-location">
              <h2>Location</h2>
              <p>
                {user.location.city}, {user.location.country}
              </p>
            </div>

            <div className="p-card profile-website">
              <h2>Website</h2>
              <a href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>
                {user.name.first}{user.name.last}.com
              </a>
            </div>
          
              <div className="p-card profile-skills">
                <h2>Skills</h2>
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="p-card profile-education">
                <h2>Education</h2>
                <h3>University of {user.location.city}</h3>
              </div>
              <div className="p-card profile-work">
                <h2>Work</h2>
                <ul>
                  {work.map((job, index) => (
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

export default ExampleProfile;
