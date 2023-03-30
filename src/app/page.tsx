import { Inter } from "next/font/google";
import "./page.css";
import { Placeholder } from "@/components/placeholder";
import { animated } from "@react-spring/web";
import { Metadata } from "next";
import { siteConfig } from "@/util/config";
import Font from "next/font/local";
import { TextAlternator } from "@/components/text-alternator";

const avaneur = Font({ src: "../../public/fonts/aveneur.ttf" });

const inter = Inter({ subsets: ["latin"] });

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
        <div className="">
          <h1 className={`${avaneur.className} orange stylistic-left`}>
            {siteConfig.name}
          </h1>
          <div>
            <h1>
              Say <span className="highlight">YES</span> to the world of AI
            </h1>
            <h2>
              AI powered business platform for the next generation of{" "}
              <span className="highlight">
                <TextAlternator
                  texts={["developers", "designers", "entrepreneurs"]}
                />
              </span>
            </h2>
          </div>
          <div className="short-row">
            <h1>
              <span className="highlight">AI</span> powered business platform
            </h1>
          </div>
          <div className="tricolumn-container">
            <div className="col-1">
              <h2>
                <span className="orange">Selling Point 1</span>
              </h2>
            </div>
            <div className="col-2">
              <h2>
                <span className="orange">Selling Point 2</span>
              </h2>
            </div>
            <div className="col-3">
              <h2>
                <span className="orange">Selling Point 3</span>
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
            <div className="col-1"></div>
            <div className="col-2"></div>
          </div>
        </div>
      </main>
    </>
  );
}
