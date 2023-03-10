import { Topic } from "@/types/types";
import { topics } from "@/util/config";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const TopicViewer: React.FC<{
  show: number;
}> = ({ show }) => {
  if (show == -1) {
    return (
      <div className={`topic-container ${inter.className} `}>
        <Image
          src={"https://pngfolio.com/images/all_img/copy/1635696779cat-png.png"}
          alt={"kitty kat"}
          width={350}
          height={350}
        />
        <div className="topic-column">
          <h1 className="topic-title">Kitty Kat</h1>
          <p className="topic-description">
            This is a wiki about cats. It is a work in progress, so please be
            patient. If you have any questions, please contact me at
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className={`topic-container ${inter.className} `}>
        <Image
          src={topics[show].imageURL}
          alt={topics[show].name}
          width={400}
          height={400}
        />
        <div className="topic-column">
          <h1 className="topic-title">{topics[show].name}</h1>
          <p className="topic-description">{topics[show].description}</p>
        </div>
      </div>
    </>
  );
};
