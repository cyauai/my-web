import React from "react";
import { Link } from "react-scroll";

const MobileNavIcon = ({
  setOpenFalse,
  name,
  href,
  isOpen,
}: {
  setOpenFalse(data: boolean): void;
  href: string;
  name: string;
  isOpen: boolean;
}) => {
  return (
    <Link to={href} spy={true} smooth={true} duration={500}>
      {!isOpen && <div className="h-screen"></div>}
      {isOpen && (
        <>
          <div
            onClick={() => setOpenFalse(false)}
            className="cursor-pointer my-4 text-xl"
          >
            {name}
          </div>
        </>
      )}
    </Link>
  );
};

export default MobileNavIcon;
