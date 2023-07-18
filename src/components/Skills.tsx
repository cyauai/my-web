import SkillIconContainer from "./SkillContainer";
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

      <div className="rounded-xl mx-40 px-8 py-4 bg-zinc-200">
        <div className="flex flex-row items-center justify-center">
          <SkillIconContainer name="Flutter" icon={<SiFlutter />} />

          <SkillIconContainer name="React" icon={<TbBrandReactNative />} />

          <SkillIconContainer name="Next.js" icon={<SiNextdotjs />} />

          <SkillIconContainer name="Spring Boot" icon={<SiSpringboot />} />
        </div>
        <div className="h-8" />
        <div className="flex flex-row items-center justify-center">
          <SkillIconContainer name="Node.js" icon={<SiNodedotjs />} />

          <SkillIconContainer name="Html" icon={<SiHtml5 />} />

          <SkillIconContainer name="Git" icon={<SiGit />} />

          <SkillIconContainer name="Css" icon={<SiCss3 />} />
        </div>
      </div>
    </>
  );
}
