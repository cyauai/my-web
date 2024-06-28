import ContactButton from "../ContactButton";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Title from "../Title";
import coding from "../../../public/me.png";
import Image from "next/image";
import Terminal from "../terminal/Terminal";

export default function Contact() {
  return (
    <section id="contact" className="bg-darkBg flex flex-col md:items-center">
      <div className="w-[80%] h-[700px] mt-[100px] hidden md:block">
        <Terminal></Terminal>
      </div>
      <div className="justify-center items-center pt-[32px] flex">
        <Image
          className="rounded-xl"
          width={300}
          height={300}
          src={coding}
          alt={""}
        />
      </div>
      <div className="h-6 md:h-12" />
      <Title title="Contact Me" />
      <div className="h-6 md:h-12" />
      <div className="ml-5 md:ml-0 md:items-center md:justify-center">
        <div className="text-base md:text-xl md:text-center">
          Thanks for your reading !
        </div>
        <div className="text-base md:text-xl md:text-center">
          Welcome to any feedback, comment and job opportunity
        </div>
        <div className="flex flex-row mt-3 md:justify-center">
          <ContactButton icon={<BsGithub />} href="https://github.com/cyauai" />
          <ContactButton icon={<MdEmail />} href="mailto: cyauai@gmail.com" />
          <ContactButton
            icon={<BsLinkedin />}
            href="https://www.linkedin.com/in/cheukyin-au-aba236201/"
          />
        </div>
      </div>
      <div className="h-12" />
    </section>
  );
}
