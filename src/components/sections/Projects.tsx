import ProjectCard from "../ProjectCard";
import cateratScreencap from "../../../public/caterat_screencap.png";
import websiteScreencap from "../../../public/website_screencap.png";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-lightBg flex flex-col">
      <div
        className="flex flex-row items-center justify-center
                    text-4xl font-semibold animate-pulse mb-24"
      >
        What I've done
      </div>
      <div className="grid grid-cols-2">
        <ProjectCard
          path={websiteScreencap}
          name="Portfolio Website"
          description="Built with Next.js 13 and Tailwind CSS, this platform aims to catalog all my works and serve as a space to hone my skills."
          githubRepo={"https://github.com/cyauai/my-web"}
          productLink={"http://localhost:3000/"}
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
