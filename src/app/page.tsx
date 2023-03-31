import { Inter, Space_Mono } from "next/font/google";
import "./page.css";
import { Metadata } from "next";
import { siteConfig } from "@/util/config";
import Font from "next/font/local";
import { TextAlternator } from "@/components/text-alternator";
import { AH2 } from "@/components/typography";
import { animate, animations } from "@/util/animate";
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
        <h1 className={`${avaneur.className} stylistic-left`}>
          {siteConfig.name}
        </h1>
        <div className="main-container">
          <div className={`${spacemono.className} main-display`}>
            <h1 className="top-left">
              Saying <span className={`highlight`}>YES</span> to the world of AI
            </h1>
            <AH2 animationName={"slideFromRight"}>
              AI powered business platform for the next generation of{" "}
              <span className="highlight">
                <TextAlternator
                  texts={["developers", "designers", "entrepreneurs"]}
                />
              </span>
            </AH2>
          </div>
          <div className="short-row">
            <AH2 animationName="scrollRight" className={spacemono.className}>
              <span className="highlight">AI</span> powered business platform
            </AH2>
          </div>
          <div className="tricolumn-container">
            <div className="col-1">
              <h2>
                <span>Selling Point 1</span>
              </h2>
            </div>
            <div className="col-2">
              <h2>
                <span>Selling Point 2</span>
              </h2>
            </div>
            <div className="col-3">
              <h2>
                <span>Selling Point 3</span>
              </h2>
            </div>
          </div>
          <div className="profile">
            <h1>
              {" "}
              Make your own <span className="highlighted">Profile</span>
            </h1>
            <div>Replace this jawn with image</div>
          </div>
          <div className="profile-chat-demo">
            <h1>
              {" "}
              <span className="highlighted">Chat</span> with a simulated version
              of a person
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
