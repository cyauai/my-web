import NavIcon from "./NavIcon";
import { AiFillHome, AiFillGithub } from "react-icons/ai";
import { BsPersonWorkspace, BsFillSendFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <>
      <div className="fixed w-16 left-0 top-0 h-screen flex-col bg-gray-900" />
      <NavIcon icon={<AiFillHome />} color="rose" name="Home" />
      <NavIcon
        icon={<BsPersonWorkspace />}
        color="orange"
        name="Work Experience"
      />
      <NavIcon
        icon={<AiFillGithub />}
        color="indigo"
        name="Project Experience"
      />
      <NavIcon icon={<BsFillSendFill />} color="blue" name="Contact Me" />
    </>
  );
}
