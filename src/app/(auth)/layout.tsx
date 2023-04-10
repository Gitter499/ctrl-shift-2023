"use client"
import { TopicViewer } from "@/components/topic-viewer";
import { getUser } from "@/lib/user/getUser";
import { authTopics } from "@/util/config";
import { Space_Mono } from "next/font/google";
import { redirect } from "next/navigation";

import "./page.css";

interface Props {
  children: React.ReactNode;
}

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
})

const AuthLayout = ({ children }: Props) => {


  return (
    <div className="auth-layout">
      <div className="col col-1">
        <TopicViewer topics={authTopics} show={0} />
      </div>
      <div className={`col col-2 ${spacemono.className}`}>{children}</div>
    </div>
  );
};

export default AuthLayout;
