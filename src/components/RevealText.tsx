function RevealText({
  text,
  fontSize,
  animationRate,
}: {
  text: string;
  fontSize: string;
  animationRate: number;
}) {
  return (
    <h1 className={`overflow-hidden ${fontSize} font-semibold  text-white`}>
      {text.match(/./gu)!.map((char, index) => (
        <span
          className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
          key={`${char}-${index}`}
          style={{ animationDelay: `${index * animationRate}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}

export default RevealText;
