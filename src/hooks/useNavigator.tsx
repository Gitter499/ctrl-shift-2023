import { usePathname } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { useSpring } from "react-spring";
import { Navigator } from "@/components/navigator";
import { Actions, State, useStoreActions, useStoreState } from "easy-peasy";
import { NavModel } from "@/stores/navStore";

export const useNavigator = () => {
  const navState = useStoreState((state: State<NavModel>) => state.nav);
  const setNavState = useStoreActions((actions: Actions<NavModel>) =>  actions.setNav)

  const pathname = usePathname();

  const [props, api] = useSpring(() => ({
    from: {
      opacity: 0,
      y: "-100vh",
    },
    config: {
      duration: 1000,
    },
  }));

  useEffect(() => {
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
          setNavState={setNavState}
          styles={props}
        />
      );
    };

    return Menu;
  }, [navState, props]);

  return { Nav, navState, setNavState, api };
};
