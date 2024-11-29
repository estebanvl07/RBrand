"use client";

import { useResize } from "~/hooks/useResize";

import SideBar from "./SideBar/SideBar";
import MobileNavigator from "./MobileNavigator";

const Navigator = () => {
  const { isDesktop } = useResize();
  return <>{isDesktop ? <SideBar /> : <MobileNavigator />}</>;
};

export default Navigator;
