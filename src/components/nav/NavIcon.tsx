"use client";
import { ReactNode, useState } from "react";
import { Link } from "react-scroll";

type IconProps = {
  icon: ReactNode;
  color: string;
  name: string | null;
  href: string | null;
};

export default function NavIcon({ icon, color, name, href }: IconProps) {
  const colors = {
    rose: "#f43f5e",
    indigo: "#6366f1",
    blue: "#3b82f6",
    teal: "#14b8a6",
    stone: "#78716c",
  };

  const [showPopUp, setShowPopUp] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <Link
      onSetInactive={(_to: string, _element: HTMLElement) => {
        setActive(false);
      }}
      onSetActive={async (_to: string, _element: HTMLElement) => {
        setActive(true);
      }}
      className="flex"
      spy={true}
      smooth={true}
      duration={500}
      to={`${href}`}
    >
      <div
        style={{
          backgroundColor:
            showPopUp || active ? colors[color as keyof typeof colors] : "",
        }}
        className={`text-xl relative flex items-center justify-center
                    w-12 h-12 mt-2 mb-2 mx-2
                    bg-gray-800 text-white rounded-3xl 
                    ${active || showPopUp ? "rounded-xl " : "rounded-3xl"}
                    transition-all duration-100 ease-linear cursor-pointer`}
        onMouseEnter={() => setShowPopUp(true)}
        onMouseLeave={() => setShowPopUp(false)}
      >
        {icon}
      </div>
      {showPopUp && name && (
        <div className="flex items-center z-10">
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
