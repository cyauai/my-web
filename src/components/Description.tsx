import RevealText from "./RevealText";
import { EncryptedText } from "./EncryptedText";

function Description() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-content-spacing" />
      <RevealText
        fontSize="text-6xl"
        text="Ken Au Frontend Developer"
        animationRate={0.05}
      />
      <div className="h-8" />
      <EncryptedText
        textStyle="text-lg"
        interval={5}
        text=" I have been working as a software developer for two years since
        graduating. I am deeply passionate about programming because it provides
        me with the ability to create something new and useful, both in my
        personal life and in my professional career."
      />
    </div>
  );
}

export default Description;
