import { ReactNode } from "react";

export default function SkillIconContainer({
  name,
  icon,
}: {
  name: string;
  icon: ReactNode | null;
}) {
  return (
    <div className="w-48 flex flex-row justify-center text-gray-600 items-center text-xl border-blue-300 border-2 px-2 py-1 rounded-lg mx-4">
      {icon} <p className="text-xl ml-4 ">{name}</p>
    </div>
  );
}
