import SearchBar from "@/components/search-bar";
import { Metadata } from "next";
import "../../globals.css";

import "./page.css"
export const metadata: Metadata = {
  title: "Profile",
  description: "Profile",
  openGraph: {
    title: "Profile",
    description: "Profile",
  },
  twitter: {
    title: "Profile",
    description: "Profile",
  },
};
  
const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container">
        <SearchBar />
        {children}
      </div>
    </>
  );
};

export default ProfileLayout;
