import Profile from "@/components/profile/profile.server";
import React from "react";
import "@/app/(profile)/profile/page.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

type Props = {};

const ProfilePage = async (props: Props) => {
  const session = await getServerSession(authOptions);


  if (!session) redirect("/signin");

  const email = session?.user?.email;

  return (
    <>
      <div className="container">
        {/* @ts-ignore */}
        <Profile email={email} />
      </div>
    </>
  );
};

export default ProfilePage;
