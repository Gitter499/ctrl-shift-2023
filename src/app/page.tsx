"use client";
import { Inter } from "next/font/google";
import "./page.css";
import { Placeholder } from "@/components/placeholder";
import { animated } from "@react-spring/web";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Ctrl-Shift 2023 Project",
  description: "A project for 2023 CtrlShift coding competition",
  twitter: {
    card: "summary",
    title: "Ctrl-Shift 2023 Project",
    description: "A project for 2023 CtrlShift coding competition",
    creator: "@rafayelamirkha1",
  },
};

const PlaceHolder = animated(Placeholder);

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
      </Head>
      <main>
        <PlaceHolder direction="up" />
        <div className="center">
          <h1 className={`${inter.className}`}>
            Hello! Welcome to my 2023 CtrlShift project!
          </h1>
        </div>

        <PlaceHolder direction="bottom" />
      </main>
    </>
  );
}
