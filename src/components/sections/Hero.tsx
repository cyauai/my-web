import Description from "..//Description";
import Skills from "../Skills";

export default function Hero() {
  return (
    <section id="hero">
      <Description />
      <div className="h-16" />
      <Skills />
      <div className="h-20" />
    </section>
  );
}
