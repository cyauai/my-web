import NavIcon from "./NavIcon";
import { AiFillHome, AiFillGithub } from "react-icons/ai";
import { BsPersonWorkspace, BsFillSendFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <div className="fixed flex flex-col">
      <div className="fixed w-16 left-0 top-0 h-screen bg-gray-900" />
      <NavIcon
        icon={<AiFillHome />}
        color="rose"
        name="Home"
        href="hero"
        id="hero"
      />
      <NavIcon
        icon={<BsPersonWorkspace />}
        color="orange"
        name="Work Experience"
        href="jobs"
        id="jobs"
      />
      <NavIcon
        icon={<AiFillGithub />}
        color="indigo"
        name="Project Experience"
        href="projects"
        id="projects"
      />
      <NavIcon
        icon={<BsFillSendFill />}
        color="blue"
        name="Contact Me"
        href="contact"
        id="contact"
      />
    </div>
  );
}
