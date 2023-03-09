import { usePathname } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { config, useSpring } from "react-spring";
import { Navigator } from "@/components/navigator";
import { Actions, State, useStoreActions, useStoreState } from "easy-peasy";
import { NavModel } from "@/stores/navStore";

export const useNavigator = () => {
  const [navState, setNavState] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(navState);

  const pathname = usePathname();

  const [props, api] = useSpring(() => ({
    from: {
      opacity: 0,
      y: "-100vh",
    },
    config: config.stiff
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
          links={[
            {
              name: "Home",
              url: "/",
              accentColor: pathname == "/" ? "primary" : "accent",
            },
            {
              name: "About",
              url: "/about",
              accentColor: pathname == "/about" ? "primary" : "accent",
            },
            {
              name: "Contact",
              url: "/contact",
              accentColor: pathname == "/contact" ? "primary" : "accent",
            },
          ]}
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
