import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Register",
  description: "Register a new account",
  openGraph: {
    title: "Register",
    description: "Register a new account",
  },
  twitter: {
    title: "Register",
    description: "Register a new account",
  },
};
const RegisterLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <>{children}</>;
};

export default RegisterLayout;
