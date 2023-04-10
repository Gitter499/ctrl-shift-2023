"use client";

import { FC, useState } from "react";
import { getSession, signIn, useSession } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";


interface Props {}

const SignInPage: FC<Props> = () => {
  const [loading, setLoading] = useState(false);

  

  return (
    <div>
      <div className="auth-card">
        <h2>Sign in to your account</h2>

        <div>
          <button
            className="signin-button"
            onClick={() => {
              setLoading(true);
              signIn("github", {
                callbackUrl: "/profile",
              });
            }}
            disabled={loading}
          >
            {loading ? <AiFillGithub /> : <span>Sign in with Github</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
