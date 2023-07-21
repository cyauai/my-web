import React from "react";
import ContactButton from "./ContactButton";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import SkillContainer from "./SkillContainer";
import {
  SiFlutter,
  SiNextdotjs,
  SiNodedotjs,
  SiSpringboot,
  SiGit,
  SiCss3,
  SiPython,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";

const MobileSelfDescription = () => {
  return (
    <div className="pt-24 pl-5">
      <div>
        <div className="text-3xl">Ken Au</div>
        <div className="mt-1 text-lg">Frontend Developer</div>
      </div>

      <div className="flex flex-row mt-3">
        <ContactButton icon={<BsGithub />} href="https://github.com/cyauai" />
        <ContactButton icon={<MdEmail />} href="mailto: cyauai@gmail.com" />
        <ContactButton
          icon={<BsLinkedin />}
          href="https://www.linkedin.com/in/cheukyin-au-aba236201/"
        />
      </div>

      <div className="text-3xl mt-12">Skills</div>

      <div className="grid grid-cols-2 mt-4 gap-2 pb-12">
        <SkillContainer name="Flutter" icon={<SiFlutter />} />

        <SkillContainer name="React" icon={<TbBrandReactNative />} />

        <SkillContainer name="Next.js" icon={<SiNextdotjs />} />

        <SkillContainer name="Spring Boot" icon={<SiSpringboot />} />
        <SkillContainer name="Node.js" icon={<SiNodedotjs />} />

        <SkillContainer name="Python" icon={<SiPython />} />

        <SkillContainer name="Git" icon={<SiGit />} />

        <SkillContainer name="Css" icon={<SiCss3 />} />
      </div>
    </div>
  );
};

export default MobileSelfDescription;
