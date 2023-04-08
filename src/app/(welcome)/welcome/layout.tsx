import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Welcome to Yes!",
  description: "Please fill out some of the information below to get started.",
  openGraph: {
    title: "Welcome to Yes!",
    description:
      "Please fill out some of the information below to get started.",
  },
  twitter: {
    title: "Welcome to Yes!",
    description:
      "Please fill out some of the information below to get started.",
  },
};
const WelcomeLayout = async ({ children }: { children: React.ReactNode }) => {
//   const session = await getServerSession(authOptions);

//   if (!session) redirect("/signin");

//   // @ts-ignore
//   if (session?.user?.infoCompleted) redirect("/profile");

  return <>{children}</>;
};

export default WelcomeLayout;
