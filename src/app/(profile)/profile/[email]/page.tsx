import React from "react";
import { getUser } from "@/lib/user/getUser";
import Profile from "@/components/profile/profile.server";
import "@/app/(profile)/profile/page.css";

type Props = {
  params: {
    email: string;
  };
};

const PublicProfilePage = async (props: Props) => {
  const stringifiedEmail = decodeURIComponent(props.params.email);
  const user = await getUser(stringifiedEmail);

  console.log(user);

  if (!user) {
    return (
      <>
        <div className="white-text"> No user with email {stringifiedEmail} exists</div>
      </>
    );
  }

  return (
   
      <div className="profile-container">
        {/* @ts-ignore */}
        <Profile email={stringifiedEmail} />
      </div>
   
  );
};

export default PublicProfilePage;
