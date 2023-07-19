"use client";
import qrcode from "../../public/qrcode.png";
import Image from "next/image";

import { useState } from "react";
import Skills from "./Skills";

function NameCard() {
  const [isFlip, setFlip] = useState(false);

  return (
    <div
      onClick={() => {
        setFlip(!isFlip);
      }}
      className="flip-card bg-transparent z-0"
      style={{ perspective: "1000px", width: "700px", height: "400px" }}
    >
      <div
        className={`flip-card-inner relative text-center ${
          isFlip ? "rotate-y-180" : ""
        }`}
        style={{
          width: "100%",
          height: "100%",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{ width: "100%", height: "100%" }}
          className="flip-card-front absolute backface-hidden border-2 border-gray-300"
        >
          <div
            style={{ height: "100%" }}
            className="justify-center items-center flex flex-col bg-gray-800"
          >
            <p className="text-3xl">KEN AU</p>
            <div style={{ height: "2px" }} className="mt-1 w-32 bg-gray-300" />
            <p className="mt-1 text-lg">FRONT DEVELOPER</p>
          </div>
        </div>
        <div
          style={{ width: "100%", height: "100%" }}
          className="flex items-center flip-card-back absolute backface-hidden rotate-y-180 bg-gray-800 border-2 border-gray-300"
        >
          <div className="mx-12 flex flex-col justify-center">
            <div style={{ width: "150px", height: "150px" }}>
              <Image className="rounded-xl" src={qrcode} alt="" />
            </div>
          </div>
          <div
            style={{ width: "2px", height: "300px" }}
            className="bg-gray-300"
          ></div>
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default NameCard;
