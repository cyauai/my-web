function Title({ title }: { title: string }) {
  return (
    <div
      className="flex flex-row items-center justify-center
                    text-4xl font-semibold animate-pulse"
    >
      {title}
    </div>
  );
}

export default Title;
