import { ReactNode } from "react";

export default function SkillContainer({
  name,
  icon,
  className,
}: {
  name: string;
  icon: ReactNode | null;
  className?: string | null;
}) {
  if (icon !== null)
    return (
      <div className="flex flex-row justify-start items-center">
        {icon} <p className="text-lg ml-2 ">{name}</p>
      </div>
    );
  else
    return (
      <>
        <div
          className={`flex flex-row justify-center text-white items-center text-xl border-blue-300 border-2 px-4 py-1 rounded-3xl ${className}`}
        >
          <p className="text-xs">{name}</p>
        </div>
      </>
    );
}
