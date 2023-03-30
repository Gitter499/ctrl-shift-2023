import { usePathname } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { config, useSpring } from "react-spring";
import { Navigator } from "@/components/navigator";
import { links } from "@/util/config";

export const useNavigator = () => {
  const [navState, setNavState] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(navState);

  const [props, api] = useSpring(() => ({
    from: {
      opacity: 0,
      blur: "0px",
      y: "-100vh",
    },
    config: {
      duration: 500,
      ...config.gentle
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setRender(navState);
    }, !navState ? 200 : 100)

    api.start({
      to: {
        opacity: navState ? 1 : 0,
        blur: navState ? "0px" : "10px",
        y: navState ? "0vw" : "-100vw",
      },
    });

    return () => {};
  }, [navState]);

  const Nav = useMemo(() => {
    const Menu = () => {
      return (
        <Navigator
          links={links}
          state={navState}
          render={render}
          setNavState={setNavState}
          styles={props}
        />
      );
    };

    return Menu;
  }, [navState, props]);

  return { Nav, navState, setNavState, api };
};
