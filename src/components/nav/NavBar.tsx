"use client";

import useIsMobile from "@/utils/UseIsMobile";
import DesktopNavBar from "./desktop/DesktopNavBar";
import MobileNavBar from "./mobile/MobileNavBar";

export default function NavBar() {
  const isMobile = useIsMobile();

  return <>{isMobile ? <MobileNavBar /> : <DesktopNavBar />}</>;
}
