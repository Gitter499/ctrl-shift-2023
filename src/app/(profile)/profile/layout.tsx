import { Metadata } from "next";
import "../../globals.css";


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
  return <>{children}</>;
};

export default ProfileLayout;
