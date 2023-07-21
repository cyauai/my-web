import { ReactNode } from "react";

function ContactButton({ icon, href }: { icon: ReactNode; href: string }) {
  return (
    <a href={href}>
      <div
        className={`text-xl relative flex items-center justify-center
                    w-12 h-12 mt-2 mb-2 mr-4
                    bg-gray-700 text-white 
                    hover:rounded-xl rounded-3xl hover:bg-stone-500
                    transition-all duration-100 ease-linear cursor-pointer`}
      >
        {icon}
      </div>
    </a>
  );
}

export default ContactButton;
