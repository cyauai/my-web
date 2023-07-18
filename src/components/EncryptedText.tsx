"use client";
import { useEffect, useState } from "react";

interface EncryptedTextProps {
  text: string;
  interval?: number;
  textStyle: string;
}

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";

export const EncryptedText: React.FC<EncryptedTextProps> = ({
  text,
  interval = 50,
}) => {
  const [outputText, setOutputText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (outputText !== text) {
      timer = setInterval(() => {
        if (outputText.length < text.length) {
          setOutputText((prev) => prev + text[prev.length]);
        } else {
          clearInterval(timer);
        }
      }, interval);
    }

    return () => clearInterval(timer);
  }, [text, interval, outputText]);

  const remainder =
    outputText.length < text.length
      ? text
          .slice(outputText.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  if (!isMounted) {
    return <span> </span>;
  }

  return (
    <span className="text-white mx-60 text-center">
      {outputText}
      {remainder}
    </span>
  );
};
