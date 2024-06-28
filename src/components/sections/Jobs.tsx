import JobCard from "../JobCard";
import Title from "../Title";

export default function Jobs() {
  return (
    <section id="jobs" className="bg-gray-800">
      <div className="md:h-24 h-12" />
      <Title title="Work Experience" />
      <div className="md:h-24 h-12" />
      <div className="flex justify-center flex-col md:items-center">
        <JobCard
          url="https://synpulse8.com/our-solutions/pulse8-digital-banking-platform?gclid=Cj0KCQjwk96lBhDHARIsAEKO4xbaaZIU6R6hvf5x6ZSIVriDb2we8iQzhGWwy2zVrVicd73YMPispAIaAqGkEALw_wcB"
          name="Synpulse"
          date={["January 2021", "Present"]}
          post="Senior, System Analyst"
          descriptions={[
            "Developed and maintained code for client & internal projects",
            "Clients are mainly in Financial Industry",
            "Setting up CICD pipeline for several projects with Github Action",
          ]}
          skills={[
            "Flutter",
            "ReactNative",
            "SwiftUI",
            "React",
            "AWS",
            "CICD",
            "CSS",
            "TypeScript",
          ]}
        />
        <div className="h-12" />
        <JobCard
          url="https://www.caterat.com/"
          name="R Cube App Studio Limited"
          date={["June 2020", "December 2020"]}
          post="Software Developer"
          descriptions={[
            "Co-developed a Point of Sales (POS) Frontend application",
            "Co-developed a backend system to support the frontend application",
            "Mainly focus on flutter mobile development and participate in web & backend development",
          ]}
          skills={["Flutter", "Node.js", "React", "POS", "Stripe"]}
        />
        <div className="h-12 md:h-24" />
      </div>
    </section>
  );
}
