"use client";

import { animated, useSpring } from "react-spring";
import "../styles/components/styles.css";

export const Placeholder: React.FC<{
  direction: "up" | "bottom";
}> = ({ direction }) => {
  const props = useSpring({
    from: {
      fill: "#e7008a",
    },
    to: {
      fill: "#dceb0e",
    },
    loop: {
      reverse: true,
    },
    config: {
      duration: 6000,

    },
  });
  return (
    <>
      <div className={direction}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <animated.path
            style={props}
            fill="#e7008a"
            fill-opacity="1"
            d="M0,64L10.4,53.3C20.9,43,42,21,63,53.3C83.5,85,104,171,125,208C146.1,245,167,235,188,229.3C208.7,224,230,224,250,234.7C271.3,245,292,267,313,266.7C333.9,267,355,245,376,224C396.5,203,417,181,438,160C459.1,139,480,117,501,144C521.7,171,543,245,563,266.7C584.3,288,605,256,626,234.7C647,213,668,203,689,170.7C709.6,139,730,85,751,90.7C772.2,96,793,160,814,197.3C834.8,235,856,245,877,229.3C897.4,213,918,171,939,165.3C960,160,981,192,1002,197.3C1022.6,203,1043,181,1064,181.3C1085.2,181,1106,203,1127,197.3C1147.8,192,1169,160,1190,128C1210.4,96,1231,64,1252,80C1273,96,1294,160,1315,208C1335.7,256,1357,288,1377,288C1398.3,288,1419,256,1430,240L1440,224L1440,320L1429.6,320C1419.1,320,1398,320,1377,320C1356.5,320,1336,320,1315,320C1293.9,320,1273,320,1252,320C1231.3,320,1210,320,1190,320C1168.7,320,1148,320,1127,320C1106.1,320,1085,320,1064,320C1043.5,320,1023,320,1002,320C980.9,320,960,320,939,320C918.3,320,897,320,877,320C855.7,320,835,320,814,320C793,320,772,320,751,320C730.4,320,710,320,689,320C667.8,320,647,320,626,320C605.2,320,584,320,563,320C542.6,320,522,320,501,320C480,320,459,320,438,320C417.4,320,397,320,376,320C354.8,320,334,320,313,320C292.2,320,271,320,250,320C229.6,320,209,320,188,320C167,320,146,320,125,320C104.3,320,83,320,63,320C41.7,320,21,320,10,320L0,320Z"
          ></animated.path>
        </svg>
      </div>
    </>
  );
};
