"use client";
import { ReactNode, useState } from "react";
import { Link } from "react-scroll";

type IconProps = {
  icon: ReactNode;
  color: string;
  name: string;
  href: string;
  id: string;
};

export default function NavIcon({ icon, color, name, href, id }: IconProps) {
  const activeColors = {
    indigo: "bg-indigo-500",
    rose: "bg-rose-500",
    orange: "bg-orange-500",
    blue: "bg-blue-500",
  };
  const activeColor = activeColors[color as keyof typeof activeColors];
  const hoverColor = `hover:${activeColor}`;
  const [showPopUp, setShowPopUp] = useState(false);
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <Link
      onSetInactive={(_to: string, _element: HTMLElement) => {
        setActive(false);
      }}
      onSetActive={(_to: string, _element: HTMLElement) => {
        setActive(true);
      }}
      className="flex"
      spy={true}
      smooth={true}
      duration={500}
      to={`${href}`}
    >
      <div
        className={`relative flex items-center justify-center
                    w-12 h-12 mt-2 mb-2 mx-2
                    bg-gray-800 text-white ${hoverColor}
                    ${active ? "rounded-xl " + activeColor : "rounded-3xl"}
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
    </Link>
  );
}
