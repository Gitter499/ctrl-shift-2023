import { getUser } from "@/lib/user/getUser";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Signin",
  description: "Sign in to your account",
  openGraph: {
    title: "Signin",
    description: "Signin to your account",
  },
  twitter: {
    title: "Signin",
    description: "Signin to your account",
  },
};
const LoginLayout = ({ children }: { children: React.ReactNode }) => {

  return <>{children}</>;
};

export default LoginLayout;
