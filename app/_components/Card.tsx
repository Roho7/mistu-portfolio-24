import { useRouter } from "next/navigation";
import React from "react";
import { ProjectType } from "../_utils/types";
import { useProject } from "../_providers/useProject";
import Image from "next/image";
import Badge from "./Badge";

function Card(props: ProjectType & { priority: boolean }) {
  const router = useRouter();
  const { setActiveProjectId } = useProject();

  const handleCardClick = (link: string) => {
    setActiveProjectId(link);
    router.push(`/project/${link}`);
  };


  return (
    <div
      className="group cursor-pointer"
      onClick={() => handleCardClick(props.Id)}
    >
      <div className="relative h-40 md:h-96 w-80 md:w-160 card-upper rounded-3xl overflow-hidden ">
        <div className="absolute w-full h-full z-10 bg-gradient-to-tr from-ash-900 rounded-3xl"></div>
        <Image
          src={props.Cover}
          alt={props.Name}
          fill
          priority={props.priority}
          loading={props.priority ? 'eager' : 'lazy'}
          placeholder="blur"
          blurDataURL="/placeholder.png"
          className="object-cover"
        />
        <div className="m-4 md:m-10 absolute bottom-0 z-20  group-hover:mx-6 md:group-hover:mx-16 transition-all ease-[cubic-bezier(.57,.21,.69,1.25)]">
          <h1 className="font-normal text-3xl md:text-4xl lg:text-8xl whitespace-nowrap">
            {props.Name}
          </h1>
          <h2 className="md:mb-2 font-display md:text-3xl">{props.Type}</h2>
          {props.Software1 && <Badge size="sm">{props.Software1}</Badge>}
        </div>
      </div>
    </div>
  );
}

export default Card;
