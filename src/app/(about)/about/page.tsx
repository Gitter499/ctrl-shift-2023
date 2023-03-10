import { siteConfig } from "@/util/config";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: siteConfig.name,
  description: `About ${siteConfig.name}`,
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: `About ${siteConfig.name}`,
    creator: "@rafayelamirkha1",
  },
}




const About = () => {

  return (
    <>
      <div>
        <h1>About</h1>
      </div>
    </>
  );
};

export default About;
