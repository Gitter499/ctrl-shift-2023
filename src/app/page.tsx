import { Inter } from "next/font/google";
import "./page.css";
import { Placeholder } from "@/components/placeholder";
import { animated  } from "@react-spring/web";
import { Metadata } from "next";
import { siteConfig } from "@/util/config";


const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: siteConfig.name,
  ...siteConfig
}

export default function Home() {
  // make this a global state

  return (
    <>
      <main>
        {/* <PlaceHolder direction="up" /> */}
        <div className="center">
          <h1 className={`${inter.className}`}>
            Hello! Welcome to my 2023 CtrlShift project!
          </h1>
        </div>
      </main>
    </>
  );
}
