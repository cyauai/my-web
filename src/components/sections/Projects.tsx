import ProjectCard from "../ProjectCard";
import cateratScreencap from "../../../public/caterat_screencap.png";
import websiteScreencap from "../../../public/website_screencap.png";
import Title from "../Title";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-lightBg flex flex-col">
      <Title title="What I've done" />
      <div className="h-24" />
      <div className="grid grid-cols-2">
        <ProjectCard
          path={websiteScreencap}
          name="Portfolio Website"
          description="Built with Next.js 13 and Tailwind CSS, this platform aims to catalog all my works and serve as a space to hone my skills."
          githubRepo={"https://github.com/cyauai/my-web"}
          productLink={"https://portfolio-cyauai.vercel.app/"}
          skills={["Next.js", "Tailwind Css", "Typescript"]}
        />
        <ProjectCard
          path={cateratScreencap}
          name="Caterat POS"
          description="A catering system can now provide various ways of placing orders, suitable for the daily operational needs of all kinds of restaurants."
          githubRepo={""}
          productLink={"https://apps.apple.com/mk/app/caterat-pos/id1589037563"}
          skills={["Flutter"]}
        />
      </div>
    </section>
  );
}
