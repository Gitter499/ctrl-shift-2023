import { Link, Topic } from "@/types/types";

export const siteConfig = {
  name: "Yes!",
  description: "A platform for AI powered business connections",
  twitter: {
    card: "summary",
    title: "Yes!",
    description: "A platform for AI powered business connections",
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
    "name": "Signup",
    "url": "/signup",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export const authTopics: Topic[] = [
  {
    name: "Signin",
    description: "This is the signin page, where you can signin to your account",
    imageURL: "/images/Fingerprint-cuate.png",
  },
  {
    name: "Signup",
    description: "This is the signup page, where you can signup to your account",
    imageURL: "/images/Queue-cuate.png",
  }
];


export const navTopics: Topic[] = [
  {
    name: "Home",
    description: "This is the home page, where everything starts",
    imageURL: "/images/Lo-fi-concept-cuate.png",
  },
  {
    name: "About",
    description: "This is the about page, where you can learn more about us",
    imageURL: "/images/About us page-cuate.png",
  },
  {
    name: "Signin",
    description: "Signin to your account",
    imageURL: "/images/Fingerprint-cuate.png",
  },
  {
    name: "Signup",
    description: "Signup to your account",
    imageURL: "/images/Queue-cuate.png",

  },

  {
    name: "Contact",
    description: "This is the contact page, where you can contact us",
    imageURL: "/images/Get-in-touch-cuate.png",
  }
];
