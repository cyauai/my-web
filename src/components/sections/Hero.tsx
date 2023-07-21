"use client";

import useIsMobile from "@/utils/UseIsMobile";
import NameCard from "../NameCard";
import MobileSelfDescription from "../MobileSelfDescription";

export default function Hero() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <section id="hero" className="bg-lightBg">
          <MobileSelfDescription />
        </section>
      </>
    );
  } else {
    return (
      <>
        <section id="hero" className="bg-lightBg justify-center flex py-80">
          <NameCard />
        </section>
      </>
    );
  }
}
