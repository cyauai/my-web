import Description from "..//Description";
import Skills from "../Skills";

export default function Hero() {
  return (
    <section id="hero" className="bg-lightBg">
      <Description />
      <div className="h-12" />
      <Skills />
      <div className="h-content-spacing" />
    </section>
  );
}
