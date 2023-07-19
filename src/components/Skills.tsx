import SkillContainer from "./SkillContainer";
import {
  SiFlutter,
  SiNextdotjs,
  SiNodedotjs,
  SiSpringboot,
  SiHtml5,
  SiGit,
  SiCss3,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";

export default function Skills() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="inline-flex rounded-lg px-8 py-2 border-zinc-200 border-2 bg-gray-500">
          <p className="text-xl font-semibold">Skills</p>
        </div>
      </div>

      <div className="h-8" />

      <div className="rounded-xl mx-36 px-8 py-4 bg-zinc-300 ">
        <div className="flex flex-row items-center justify-center">
          <SkillContainer name="Flutter" icon={<SiFlutter />} />

          <SkillContainer name="React" icon={<TbBrandReactNative />} />

          <SkillContainer name="Next.js" icon={<SiNextdotjs />} />

          <SkillContainer name="Spring Boot" icon={<SiSpringboot />} />
        </div>
        <div className="h-8" />
        <div className="flex flex-row items-center justify-center">
          <SkillContainer name="Node.js" icon={<SiNodedotjs />} />

          <SkillContainer name="Html" icon={<SiHtml5 />} />

          <SkillContainer name="Git" icon={<SiGit />} />

          <SkillContainer name="Css" icon={<SiCss3 />} />
        </div>
      </div>
    </>
  );
}
