"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import { IconCode } from "@/components/icons";
import SkillContainer from "./SkillContainer";
import useIsMobile from "@/utils/UseIsMobile";

function JobCard({
  name,
  descriptions,
  skills,
  post,
  date,
  url,
}: {
  name: string;
  post: string;
  descriptions: string[];
  skills: string[];
  date: string[];
  url: string;
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <div className="mx-5 border-2 p-5 rounded-lg">
          <a href={url} className="text-xl flex flex-row">
            <p className="text-blue-500">{name}</p>
            <FaExternalLinkAlt className="ml-3 text-sm animate-bounce mt-2" />
          </a>
          <p>{post}</p>

          <div className="flex flex-row items-center text-sm text-gray-400">
            <p>{date[0]}</p>
            <p className="mx-2">-</p>
            <p>{date[1]}</p>
          </div>

          <div className="mt-8 ">
            {descriptions.map((description, index) => (
              <div
                key={`${description}-${index}`}
                className="flex flex-row items-start text-base mb-2"
              >
                <div className="mr-4 mt-1">
                  <IconCode className="text-sm" />
                </div>
                <div>{description}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-start justify-start">
            {skills.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="flex flex-wrap text-lg mb-2"
              >
                <div className="mr-2 mt-2">
                  <SkillContainer className="px-2" name={skill} icon={null} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (!isMobile) {
    return (
      <>
        <a href={url}>
          <div className="group hover:bg-gray-700 transition-all duration-500 cursor-pointer px-12 py-8 rounded-lg border-2 border-gray-400">
            <div className="w-[40rem]">
              <div className="flex flex-row text-xl">
                <p>{post}</p>
                <p className="ml-2 text-blue-500">@ {name}</p>
                <FaExternalLinkAlt className="ml-3 text-sm group-hover:animate-bounce mt-2" />
              </div>
              <div className="flex flex-row items-center text-sm text-gray-400">
                <p>{date[0]}</p>
                <p className="mx-2">-</p>
                <p>{date[1]}</p>
              </div>
              <div className="mt-8">
                {descriptions.map((description, index) => (
                  <div
                    key={`${description}-${index}`}
                    className="flex flex-row items-start text-lg mb-2"
                  >
                    <div className="mr-4 mt-1">
                      <IconCode className="text-sm" />
                    </div>
                    <div>{description}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-row items-start justify-start">
                {skills.map((skill, index) => (
                  <div
                    key={`${skill}-${index}`}
                    className="flex flex-row items-start text-lg mb-2"
                  >
                    <div className="mr-2 mt-2">
                      <SkillContainer name={skill} icon={null} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </a>
      </>
    );
  }
}

export default JobCard;
