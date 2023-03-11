import { Link, Topic } from "@/types/types";

export const siteConfig = {
  name: "Ctrl-Shift 2023 Project",
  description: "A project for 2023 CtrlShift coding competition",
  twitter: {
    card: "summary",
    title: "Ctrl-Shift 2023 Project",
    description: "A project for 2023 CtrlShift coding competition",
    creator: "@rafayelamirkha1",
  },
};

export const links: Link[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Login",
    url: "/login",
  },
  {
    name: "Register",
    url: "/register",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export const authTopics: Topic[] = [
  {
    name: "Login",
    description: "This is the login page, where you can login to your account",
    imageURL: "/images/seek-cuate.png",
  },
  {
    name: "Register",
    description: "This is the register page, where you can register to our website",
    imageURL: "/images/Acorns-cuate.png",
  },
];


export const navTopics: Topic[] = [
  {
    name: "Home",
    description: "This is the home page, where everything starts",
    imageURL: "/images/Honey-cuate.png",
  },
  {
    name: "About",
    description: "This is the about page, where you can learn more about us",
    imageURL: "/images/Kitsune-mask-cuate.png",
  },
  {
    name: "Login",
    description: "This is the login page, where you can login to your account",
    imageURL: "/images/seek-cuate.png",
  },
  {
    name: "Register",
    description: "This is the register page, where you can register to our website",
    imageURL: "/images/Acorns-cuate.png",
  },
  {
    name: "Contact",
    description: "This is the contact page, where you can contact us",
    imageURL: "/images/Get-in-touch-cuate.png",
  }
];
