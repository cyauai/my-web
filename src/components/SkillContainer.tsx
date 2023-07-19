import { ReactNode } from "react";

export default function SkillContainer({
  name,
  icon,
}: {
  name: string;
  icon: ReactNode | null;
}) {
  if (icon !== null)
    return (
      <div className="w-60 flex flex-row justify-center text-gray-600 items-center text-xl border-blue-300 border-2 px-2 py-1 rounded-lg mx-4">
        {icon} <p className="text-xl ml-4 ">{name}</p>
      </div>
    );
  else
    return (
      <>
        <div className="flex flex-row justify-center text-white items-center text-xl border-blue-300 border-2 px-4 py-1 rounded-3xl">
          <p className="text-xs">{name}</p>
        </div>
      </>
    );
}
