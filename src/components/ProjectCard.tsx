"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import SkillContainer from "./SkillContainer";
import { FaGithub, FaLink } from "react-icons/fa";

function ProjectCard({
  path,
  name,
  description,
  githubRepo,
  productLink,
  skills,
}: {
  path: StaticImageData | string;
  name: string;
  description: string;
  githubRepo: string | null;
  productLink: string | null;
  skills: string[];
}) {
  const [isHover, setHover] = useState(false);
  const [childHeight, setChildHeight] = useState(0);
  const childRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (childRef.current) {
      setChildHeight(childRef.current.offsetHeight);
    }
  });

  return (
    <>
      <div className="relative mx-12">
        <div>
          <Image
            ref={childRef}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            className={`rounded-xl ${isHover ? "bg-gray-900 opacity-20" : ""} `}
            src={path}
            alt=""
          />
        </div>

        {isHover && (
          <>
            <div
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className="absolute top-0 px-4 pt-4 md:pt-0"
            >
              <div style={{ height: `${childHeight - 170}px` }} />
              <div className="text-lg md:text-2xl">{name}</div>
              <div className="text-sm md:text-base">{description}</div>
              <div className="flex flex-row items-start justify-start">
                {skills.map((skill, index) => (
                  <div
                    key={`${skill}-${index}`}
                    className="flex flex-row items-start text-sm md:text-lg mb-2"
                  >
                    <div className="mr-2 mt-2">
                      <SkillContainer name={skill} icon={null} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row justify-end">
                {productLink && (
                  <>
                    <a href={productLink}>
                      <div className="animate-bounce text-blue-300 flex flex-row">
                        Product
                        <FaLink className="ml-3 text-sm mt-2 animate-bounce" />
                      </div>
                    </a>
                  </>
                )}

                {githubRepo && (
                  <>
                    <a href={githubRepo}>
                      <div className="animate-bounce text-green-300 flex flex-row ml-6">
                        Repo
                        <FaGithub className="ml-3 text-sm mt-1" />
                      </div>
                    </a>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ProjectCard;
