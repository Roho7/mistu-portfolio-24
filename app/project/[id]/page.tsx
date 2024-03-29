"use client";
import { db } from "@/app/_utils/firebase";
import { ProjectType } from "@/app/_utils/types";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

function ProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [project, setProject] = useState<ProjectType>();
  const handleBackButton = () => {
    router.push("/");
  };

  const projectData = doc(db, "Project", params.id);

  useEffect(() => {
    const getProjectData = async () => {
      try {
        const data = await getDoc(projectData);
        const filteredData = data.data();

        setProject(filteredData as ProjectType);
      } catch (err) {
        console.log(err);
      }
    };
    getProjectData();
  }, []);

  return project ? (
    <div>
      <button className="m-8 mb-0" onClick={handleBackButton}>
        <FaAngleLeft /> Back
      </button>

      <div key={project.Id} className="relative flex flex-col">
        <div className="m-8 mt-2">
          <h1 className="">{project.Name}</h1>
          <h1 className="text-4xl mb-4 text-ash-100">{project.Type}</h1>
          <h2 className="font-bold text-xl">Context</h2>
          <h2 className="mb-4 md:w-1/2">{project.Description}</h2>
          <div className="flex gap-4">
            <span className=" text-white text-sm p-2 border border-white rounded-full">
              {project.Software1}
            </span>
            <span
              className={
                project.Software2
                  ? " text-white text-sm p-2 border border-white rounded-full"
                  : "hidden"
              }>
              {project.Software2}
            </span>
          </div>
          <Link
            href={project.Link ?? "/"}
            className={
              project.Link ? "text-ash-500 hover:text-grass-500" : "hidden"
            }>
            <p className="mt-4">View Project</p>
          </Link>
        </div>
        <div className="">
          <img src={project.Image} className="object-cover" />
        </div>
        {project.Video && (
          <div className="h-72 md:h-screen">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.Video}`}
              className={project.Video ? "w-full h-full" : "hidden"}></iframe>
          </div>
        )}
      </div>
    </div>
  ) : null;
}

export default ProjectPage;
