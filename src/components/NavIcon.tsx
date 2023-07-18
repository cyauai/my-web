"use client";
import { ReactNode, useState } from "react";

type IconProps = {
  icon: React.ReactNode;
  color: string;
  name: string;
};

export default function NavIcon({ icon, color, name }: IconProps) {
  const hoverColor = {
    indigo: "hover:bg-indigo-500",
    rose: "hover:bg-rose-500",
    orange: "hover:bg-orange-500",
    blue: "hover:bg-blue-500",
  };
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div className="flex">
      <div
        className={`relative flex items-center justify-center
                    w-12 h-12 mt-2 mb-2 mx-2 shadow-lg
                    bg-gray-800 text-white ${
                      hoverColor[color as keyof typeof hoverColor]
                    }
                    rounded-3xl hover:rounded-xl
                    transition-all duration-100 ease-linear cursor-pointer`}
        onMouseEnter={() => setShowPopUp(true)}
        onMouseLeave={() => setShowPopUp(false)}
      >
        {icon}
      </div>
      {showPopUp && (
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-900 transform rotate-45 -translate-x-[-14px]" />

          <div
            className="bg-gray-900 relative h-10 px-2
                        rounded-md flex items-center justify-cente
                        text-sm font-semibold"
          >
            {name}
          </div>
        </div>
      )}
    </div>
  );
}
