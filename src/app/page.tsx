import { Inter, Space_Mono } from "next/font/google";
import "./page.css";
import { Metadata } from "next";
import { siteConfig } from "@/util/config";
import Font from "next/font/local";
import { TextAlternator } from "@/components/text-alternator";
import { AH2 } from "@/components/typography";
import { SellingPoint } from "@/components/selling-point";
import ExampleProfile from "@/components/profile/example";
const avaneur = Font({
  src: "../../public/fonts/aveneur.ttf",
});

const spacemono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  ...siteConfig,
};

export default function Home() {
  // make this a global state

  return (
    <>
      <main>
        {/* <PlaceHolder direction="up" /> */}
        
        <div className="main-container">
          <div className={`${spacemono.className} main-display`}>
            {/* <Image
              src="/images/train.png"
              className="train"
              alt="Train"
              width={500}
              height={300}
            /> */}
            <AH2 animationName={"slideFromRight"} className="big-text">
              AI powered business platform <br /> for the next generation of{" "}
              <br />
              <span className="highlight">
                <TextAlternator
                  texts={["developers", "designers", "entrepreneurs"]}
                />
              </span>
            </AH2>
          </div>
          <div className="short-row">
            <div className="col">
              <AH2 animationName="scrollRight" className={spacemono.className}>
                <span className="highlight">AI</span> powered business platform
              </AH2>
              <AH2 animationName="scrollLeft" className={spacemono.className}>
                To make you the best<span className="highlight">you</span>
              </AH2>
            </div>
          </div>
          <div className="tricolumn-container">
            <div className="col-1">
              <SellingPoint
                title="Powered by GPT-3"
                description="Powerful LLM to handle all your business related tasks"
                icon="openai"
                threshold={0.4}
              />
            </div>
            <div className="col-2">
              <SellingPoint
                title="Custom Profiles"
                description="Profiles that are tailored to your needs"
                icon="profile"
                threshold={0.6}
              />
            </div>
            <div className="col-3">
              <SellingPoint
                title="AI Resume Analysis"
              description="Upload a PDF of your resume and let yes! automatically fill out your profile"
                icon="resume"
                threshold={0.4}
              />
            </div>
          </div>
          <div className={`profile-spacer ${spacemono.className}`}>
            <AH2>
              Create a custom profile, so you can be{" "}
              <span className="highlight">
                <TextAlternator texts={["seen", "discovered", "heard", "out there"]} />
              </span>
            </AH2>
          </div>
          <div className="profile">
            {/* @ts-ignore Server components make Typescript confused */}
            <ExampleProfile />
          </div>
          <div className={ `profile-chat-demo ${spacemono.className}`}>
            <h1>
              {" "}
              <span className="highlighted">Chat</span> with a simulated version
              of a person

              <p>
                Work in Progress 🚧
              </p>
            </h1>
          </div>
          <div className="business-chat-demo">
            <div className="col-1">Person Here</div>
            <div className="col-2">Chat here</div>
          </div>
        </div>
      </main>
    </>
  );
}
