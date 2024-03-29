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

interface ProjectContextType {
  projectList: ProjectType[];
  activeProjectId: string | null;
  setActiveProjectId: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProjectContext = createContext<ProjectContextType>(null!);

export const ProjectProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [projectList, setProjectList] = useState<ProjectType[]>([]);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const fetchData = async () => {
    const data = await getProjects();
    setProjectList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const values = useMemo(() => {
    return {
      projectList,
      activeProjectId,
      setActiveProjectId,
    };
  }, [projectList]);

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
