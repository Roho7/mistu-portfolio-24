"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProjects } from "../_actions/projects.actions";
import { ProjectType } from "../_utils/types";
import { set } from "firebase/database";

interface ProjectContextType {
  projectList: ProjectType[];
  setProjectList: React.Dispatch<React.SetStateAction<ProjectType[]>>;
  filteredProjects: ProjectType[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<ProjectType[]>>;
  activeProjectId: string | null;
  setActiveProjectId: React.Dispatch<React.SetStateAction<string | null>>;
  handleFilter: (category: string) => void;
  // handleSort: (sort: string) => void;
}

const ProjectContext = createContext<ProjectContextType>(null!);

export const ProjectProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [projectList, setProjectList] = useState<ProjectType[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const fetchData = async () => {
    const data = await getProjects();
    setProjectList(data);
    setFilteredProjects(data);
  };

  const handleFilter = async (category: string) => {
    const filtered = projectList.filter(
      (project) => project.Category === category,
    );
    setFilteredProjects(filtered);
  };

  // const handleSort = (sort: string) => {
  //   let sortedList = [...filteredProjects];

  //   if (sort === "relevance") {
  //     sortedList.sort((a, b) => a.Relevance - b.Relevance);
  //   } else if (sort === "date") {
  //     sortedList.sort((a, b) => new Date(a.Timestamp) - new Date(b.Timestamp));
  //   }

  //   console.log(sortedList);
  //   setFilteredProjects(sortedList);
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const values = useMemo(() => {
    return {
      projectList,
      setProjectList,
      filteredProjects,
      setFilteredProjects,
      activeProjectId,
      setActiveProjectId,
      handleFilter,
      // handleSort,
      // filter,
      // setFilter,
    };
  }, [projectList, filteredProjects]);

  return (
    <ProjectContext.Provider value={values}>{children}</ProjectContext.Provider>
  );
};

export const useProject = () => {
  const projectContext = useContext(ProjectContext);
  if (!projectContext) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return projectContext;
};
