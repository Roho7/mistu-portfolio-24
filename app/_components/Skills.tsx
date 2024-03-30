import React from "react";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiNotion,
  SiObsidian,
  SiAdobexd,
  SiC,
  SiJinja,
  SiNextdotjs,
} from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";

import {
  BiLogoFirebase,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoFigma,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoFlask,
} from "react-icons/bi";
import { skillArray } from "../_utils/data";

function Skills() {
  return (
    <div className="w-full flex flex-col items-center mt-20 md:mt-40">
      <div className="relative">
        <h1>Skills</h1>
        <div className="absolute h-0.5 w-full bg-grass-500"></div>
      </div>
      <div className="grid gap-y-8 md:grid-cols-4 md:gap-16 p-10">
        <div>
          {skillArray
            .filter((item) => item.type === "languages")
            .map((skill, index) => {
              return (
                <div
                  className=" text-ash-100 flex items-center gap-2 whitespace-nowrap"
                  key={index}>
                  <div className="text-grass-500 -translate-y-2">
                    {skill.icon}
                  </div>
                  <span> {skill.name} </span>
                </div>
              );
            })}
        </div>
        <div>
          {skillArray
            .filter((item) => item.type === "development")
            .map((skill, index) => {
              return (
                <div
                  className=" text-ash-100 flex items-center gap-2 whitespace-nowrap"
                  key={index}>
                  <div className="text-grass-500 -translate-y-2">
                    {skill.icon}
                  </div>
                  <span> {skill.name} </span>
                </div>
              );
            })}
        </div>
        <div>
          {skillArray
            .filter((item) => item.type === "ui")
            .map((skill, index) => {
              return (
                <div
                  className="text-ash-100 flex items-center gap-2 whitespace-nowrap"
                  key={index}>
                  <div className="text-grass-500 -translate-y-2">
                    {skill.icon}
                  </div>
                  <span> {skill.name} </span>
                </div>
              );
            })}
          <div>
            {skillArray
              .filter((item) => item.type === "design")
              .map((skill, index) => {
                return (
                  <div
                    className="text-ash-100 flex items-center gap-2 whitespace-nowrap"
                    key={index}>
                    <div className="text-grass-500 -translate-y-2">
                      {skill.icon}
                    </div>
                    <span> {skill.name} </span>
                  </div>
                );
              })}
          </div>
        </div>

        <div>
          {skillArray
            .filter((item) => item.type === "pkm")
            .map((skill, index) => {
              return (
                <div
                  className="text-ash-100 flex items-center gap-2 whitespace-nowrap"
                  key={index}>
                  <div className="text-grass-500 -translate-y-2">
                    {skill.icon}
                  </div>
                  <span> {skill.name} </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
