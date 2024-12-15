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
import Badge from "./Badge";
import { PiStarFourBold, PiWrench, PiWrenchBold } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";

function Skills() {
  return (
    <div className="w-full flex flex-col items-center mt-20 md:mt-40 md:px-20">
      <div className="relative">
        <h1>Skills</h1>
        <div className="absolute h-0.5 w-full bg-grass-500"></div>
      </div>
      <div className="grid md:grid-cols-2 p-10 gap-4 mx-auto w-full">
        <div className="flex gap-2 flex-wrap h-fit">
          {skillArray
            .filter((item) => item.type === "skill")
            .map((skill, index) => {
              return (
                <Badge key={index} size="md" icon={<PiStarFourBold className="text-grass-500"/>} highlighted={skill.highlighted}>
                  {skill.name}
                </Badge>
              );
            })}
        </div>
        <div className="flex gap-2 flex-wrap h-fit">
          {skillArray
            .filter((item) => item.type === "software")
            .map((skill, index) => {
              return (
                <Badge key={index} size="md" icon={<PiWrenchBold className="text-grass-500"/>} highlighted={skill.highlighted}>
                  {skill.name}
                </Badge>
              );
            })}
        </div>

      </div>
    </div>
  );
}

export default Skills;
