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

export default function Skills() {
  return (
    <>
      <div style={{ width: "100%" }} className="mx-12 grid grid-cols-2 gap-y-4">
        <SkillContainer name="Flutter" icon={<SiFlutter />} />

        <SkillContainer name="React" icon={<TbBrandReactNative />} />

        <SkillContainer name="Next.js" icon={<SiNextdotjs />} />

        <SkillContainer name="Spring Boot" icon={<SiSpringboot />} />
        <SkillContainer name="Node.js" icon={<SiNodedotjs />} />

        <SkillContainer name="Python" icon={<SiPython />} />

        <SkillContainer name="Git" icon={<SiGit />} />

        <SkillContainer name="Css" icon={<SiCss3 />} />
      </div>
    </>
  );
}
