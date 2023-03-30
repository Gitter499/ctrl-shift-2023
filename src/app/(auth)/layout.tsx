"use client";
import { TopicViewer } from "@/components/topic-viewer";
import { authTopics } from "@/util/config";
import { animated, useSpring } from "@react-spring/web";
import { usePathname } from "next/navigation";
import { FC, useEffect } from "react";
import "./page.css";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: FC<Props> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="auth-layout">
      <div className="col col-1">
        <TopicViewer topics={authTopics} show={pathname == "/login" ? 0 : 1} />
      </div>
      <div className="col col-2">{children}</div>
    </div>
  );
};

export default AuthLayout;
