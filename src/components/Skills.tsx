import SkillContainer from "./SkillContainer";
import {
  SiFlutter,
  SiNextdotjs,
  SiNodedotjs,
  SiAmazonaws,
  SiCss3,
  SiPython,
  SiSwift,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";

export default function Skills() {
  return (
    <>
      <div style={{ width: "100%" }} className="mx-8 grid grid-cols-2 gap-y-4">
        <SkillContainer name="Flutter" icon={<SiFlutter />} />

        <SkillContainer name="React" icon={<TbBrandReactNative />} />

        <SkillContainer name="Next.js" icon={<SiNextdotjs />} />

        <SkillContainer name="AWS" icon={<SiAmazonaws />} />

        <SkillContainer name="Node.js" icon={<SiNodedotjs />} />

        <SkillContainer name="Python" icon={<SiPython />} />

        <SkillContainer name="iOS Native, SwiftUI" icon={<SiSwift />} />

        <SkillContainer name="Css" icon={<SiCss3 />} />
      </div>
    </>
  );
}
