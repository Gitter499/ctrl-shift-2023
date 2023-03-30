import { Metadata } from "next";
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
const LoginLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <>{children}</>;
};

export default LoginLayout;
