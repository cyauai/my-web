import React from "react";
import NavIcon from "../NavIcon";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";

const DesktopNavBar = () => {
  return (
    <div className="fixed md:flex flex-col z-10">
      <div className="fixed w-16 left-0 top-0 h-screen bg-gray-900" />

      <NavIcon icon={<AiFillHome />} color="rose" name="Home" href="hero" />
      <NavIcon
        icon={<MdWork />}
        color="teal"
        name="Work Experience"
        href="jobs"
      />
      <NavIcon
        icon={<AiFillProject />}
        color="indigo"
        name="Project Experience"
        href="projects"
      />
      <NavIcon
        icon={<BsFillSendFill />}
        color="blue"
        name="Contact Me"
        href="contact"
      />
    </div>
  );
};

export default DesktopNavBar;
