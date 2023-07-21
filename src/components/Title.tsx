function Title({ title }: { title: string }) {
  return (
    <div
      className="flex flex-row md:items-center md:justify-center
                  md:text-4xl md:font-semibold animate-pulse 
                  text-2xl ml-5 md:ml-0"
    >
      {title}
    </div>
  );
}

export default Title;
