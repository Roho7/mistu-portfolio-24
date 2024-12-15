import { useRouter } from "next/navigation";
import React from "react";
import { ProjectType } from "../_utils/types";
import { useProject } from "../_providers/useProject";
import Image from "next/image";
import Badge from "./Badge";
import { motion } from "motion/react";
import { PiStarFourBold } from "react-icons/pi";

function Card(props: ProjectType) {
  const router = useRouter();
  const { setActiveProjectId } = useProject();

  const handleCardClick = (link: string) => {
    setActiveProjectId(link);
    router.push(`/project/${link}`);
  };


  return (
    <div
      className="group cursor-pointer"
      onClick={() => handleCardClick(props.id)}
    >
      <div className="relative h-40 md:h-96 w-80 md:w-160 card-upper rounded-3xl overflow-hidden ">
        <div className="absolute w-full h-full z-10 bg-gradient-to-tr from-black rounded-3xl"></div>
        <Image
          src={props.cover}
          alt={props.title}
          fill
          priority={true}
          placeholder="blur"
          blurDataURL="/placeholder.png"
          className="object-cover"
        />
        <div className="m-4 md:m-10 absolute bottom-0 z-20 transition-all ease-[cubic-bezier(.57,.21,.69,1.25)]">
          <h1 className="font-normal text-3xl md:text-4xl lg:text-8xl whitespace-nowrap">
            {props.title}
          </h1>
          <div 
            className="flex opacity-0 group-hover:opacity-100 gap-2 transition-all duration-300 ease-[cubic-bezier(.57,.21,.69,1.25)] group-hover:translate-y-0"
          >
            {props.badge1 && <Badge size="sm" icon={<PiStarFourBold className="text-grass-500"/>}>{props.badge1}</Badge>}
            {props.badge2 && <Badge size="sm" icon={<PiStarFourBold className="text-grass-500"/>}>{props.badge2}</Badge>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
