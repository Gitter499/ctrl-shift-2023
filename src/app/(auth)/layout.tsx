"use client"
import { TopicViewer } from "@/components/topic-viewer";
import { getUser } from "@/lib/user/getUser";
import { authTopics } from "@/util/config";
import { redirect } from "next/navigation";

import "./page.css";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {


  return (
    <div className="auth-layout">
      <div className="col col-1">
        <TopicViewer topics={authTopics} show={0} />
      </div>
      <div className="col col-2">{children}</div>
    </div>
  );
};

export default AuthLayout;
