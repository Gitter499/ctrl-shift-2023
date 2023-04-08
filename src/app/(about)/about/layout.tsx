import { siteConfig } from "@/util/config";
import { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: `About ${siteConfig.name}`,
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: `About ${siteConfig.name}`,
    creator: "@rafayelamirkha1",
  },
};
const AboutLayout = async ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default AboutLayout;
