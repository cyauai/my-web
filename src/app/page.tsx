import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Jobs from "@/components/sections/Jobs";
import Projects from "@/components/sections/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Hero />

      <Jobs />

      <Projects />

      <Contact />
    </>
  );
}
