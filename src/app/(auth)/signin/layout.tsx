import { getUser } from "@/lib/user/getUser";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

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
const LoginLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    console.log(session)
    redirect("/profile")
    
  }

  return <>{children}</>;
};

export default LoginLayout;
