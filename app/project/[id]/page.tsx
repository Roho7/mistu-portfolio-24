"use client";
import { getSingleProject } from "@/app/_actions/projects.actions";
import Footer from "@/app/_components/Footer";
import PopupProject from "@/app/_components/PopupProject";
import Spinner from "@/app/_components/Spinner";
import Topbar from "@/app/_components/Topbar";
import { ProjectType } from "@/app/_utils/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { FaAngleLeft, FaGithub, FaGlobe } from "react-icons/fa";
import Button from "@/app/_components/Button";
import Badge from "@/app/_components/Badge";

function getProjectLinkType(link: string){
  if(link.includes("youtube.com")){
    return "youtube"
  } else if(link.includes("github.com")){
    return "github"
  } else {
    return "external"
  }
}

function ProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [project, setProject] = useState<ProjectType>();
  const [popup, setPopup] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const handleBackButton = () => {
    router.back();
  };

  useEffect(() => {
    const getProjectData = async () => {
      try {
        const data = await getSingleProject(params.id);
        setProject(data as ProjectType);
      } catch (err) {
        console.log(err);
      }
    };
    getProjectData();

    const timeout = setTimeout(() => {
      setPopup(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return project ? (
    <div>
      <Topbar />
      <div
        className={clsx(
          "absolute transition-all duration-500 top-10 ",
          popup ? "right-10" : "right-[-100%]",
        )}
      >
        <PopupProject />
      </div>
      <Button size="md" color="grass" buttonProps={{ className: "m-8 mb-0" }} onClick={handleBackButton}>
        <FaAngleLeft /> Back
      </Button>
      <div key={project.Id} className="relative flex flex-col">
        <div className="m-8 mt-2">
          <h1 className="">{project.Name}</h1>
          <h1 className="text-4xl mb-4 text-ash-100">{project.Type}</h1>
          <h2 className="font-bold text-xl">Context</h2>
          <h2 className="mb-4 md:w-1/2">{project.Description}</h2>
          <div className="flex gap-4 mb-2">
            {project.Software1 && <Badge size="sm">{project.Software1}</Badge>}
            {project.Software2 && <Badge size="sm">{project.Software2}</Badge>}
          </div>
          {project.Link && <Button size="sm" onClick={() => window.open(project.Link, "_blank")} color="white" icon={getProjectLinkType(project.Link) === "external" ? <FaGlobe /> : <FaGithub />}>View Project</Button>}
        </div>
        {project.Video && (
          <div className="h-72 md:h-screen">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.Video}`}
              className={project.Video ? "w-full h-full" : "hidden"}
            ></iframe>
          </div>
        )}
        <div className="">
          {imageLoading ? (
            <div className="h-screen w-full flex items-center justify-center">
              <Spinner />
            </div>
          ) : (
            <Suspense
              fallback={
              <div className="h-screen w-full flex items-center justify-center">
                <Spinner />
              </div>
            }
          >
            {project.Image && (
              <Image
                src={project.Image}
                alt={project.Name}
                loading={"eager"}
                width={10000}
                height={1000}
                className="object-cover"
                onLoadStart={() => setImageLoading(true)}
                onLoadingComplete={() => setImageLoading(false)}
              />
              )}
            </Suspense>
          )}
        </div>
      </div>
      <Footer />
    </div>
  ) : null;
}

export default ProjectPage;
