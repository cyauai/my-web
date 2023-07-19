"use client";

import NameCard from "../NameCard";
import { IconArrow } from "../icons";

export default function Hero() {
  return (
    <>
      <section id="hero" className="bg-lightBg justify-center flex py-80">
        <NameCard />
        <IconArrow className={`ml-[680px] absolute text-sm animate-bounce`} />
      </section>
    </>
  );
}
