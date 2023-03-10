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
      y: "-100vh",
    },
    config: {
      duration: 300,
      ...config.gentle
    }
  }));

  useEffect(() => {
    
      setTimeout(
        () => {
          setRender(navState);
        },
        !navState ? 200 : 50
      );

      api.start({
        to: {
          opacity: navState ? 1 : 0,
          y: navState ? "0vh" : "-100vh",
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
