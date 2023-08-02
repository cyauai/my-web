import ProjectCard from "../ProjectCard";
import cateratScreencap from "../../../public/caterat_screencap.png";
import websiteScreencap from "../../../public/website_screencap.png";
import jsonToDart from "../../../public/json_to_dart.png";
import Title from "../Title";

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 bg-lightBg flex flex-col">
      <Title title="What I've done" />
      <div className="h-12 md:h-24" />
      <div className="grid grid-cols-1 gap-12 md:gap-0 md:grid-cols-2">
        <ProjectCard
          path={websiteScreencap}
          name="Portfolio Website"
          description="Built with Next.js 13 and Tailwind CSS, this platform aims to catalog all my works and serve as a space to hone my skills."
          githubRepo={"https://github.com/cyauai/my-web"}
          productLink={"https://portfolio-cyauai.vercel.app/"}
          skills={["Next.js", "Tailwind", "Typescript"]}
        />
        <ProjectCard
          path={cateratScreencap}
          name="Caterat POS"
          description="A catering system can now provide various ways of placing orders, suitable for the daily operational needs of all kinds of restaurants."
          githubRepo={""}
          productLink={"https://apps.apple.com/mk/app/caterat-pos/id1589037563"}
          skills={["Flutter"]}
        />
        <ProjectCard
          path={jsonToDart}
          name="Json To Dart"
          description="A tool to convert json to dart file with json serializable. Provides some conventional method like copyWith, get props."
          githubRepo={"https://github.com/cyauai/json-to-dart"}
          productLink={"https://json-to-dart-nu.vercel.app/"}
          skills={["Next.js", "Tailwind", "Typescript", "Shadcn"]}
        />
      </div>
    </section>
  );
}
