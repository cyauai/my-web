"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MobileNavIcon from "./MobileNavIcon";

const MobileNavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isClick, setClick] = useState(false);
  return (
    <div className="fixed flex flex-row z-10 w-[100%] bg-gray-800 opacity-95 h-16">
      <div
        className={`flex flex-row bg-zinc-800
          ${isOpen ?? "border-2"} border-gray-300 ${
          isOpen ? "w-64 h-screen " : "w-0"
        } transition-all transform duration-300`}
      >
        <div className="mt-12 flex flex-col items-center w-[100%]">
          <MobileNavIcon
            key="hero-key"
            href="hero"
            name="Home"
            isOpen={isOpen}
            setOpenFalse={setOpen}
          />
          <MobileNavIcon
            key="job-key"
            href="jobs"
            name="Work Experience"
            isOpen={isOpen}
            setOpenFalse={setOpen}
          />
          <MobileNavIcon
            key="project-key"
            href="projects"
            name="Projects"
            isOpen={isOpen}
            setOpenFalse={setOpen}
          />
          <MobileNavIcon
            key="contact-key"
            href="contact"
            name="Contact Me"
            isOpen={isOpen}
            setOpenFalse={setOpen}
          />
        </div>
      </div>
      <div
        onClick={async () => {
          setClick(true);
          setTimeout(() => {
            setOpen(!isOpen);
            setClick(false);
          }, 300);
        }}
        className={`fixed text-3xl mt-4 ml-4 cursor-pointer 
                      transform transition-all duration-300
                      ${isClick && "scale-0"}
                      `}
      >
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </div>
  );
};

export default MobileNavBar;
