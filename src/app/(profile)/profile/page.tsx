import Profile from "@/components/profile/profile.server";
import React from "react";

type Props = {};

const ProfilePage = (props: Props) => {
  return (
    <>
    {/* @ts-ignore */}
    <Profile />
    </>
  );
};

export default ProfilePage;
