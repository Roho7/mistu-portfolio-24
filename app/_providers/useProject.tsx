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
  activeProjectId: string | null;
  setActiveProjectId: React.Dispatch<React.SetStateAction<string | null>>;
  filter: string | null;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
}

const DEFAULT_FILTER = "development";

const ProjectContext = createContext<ProjectContextType>(null!);

export const ProjectProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [projectList, setProjectList] = useState<ProjectType[]>([]);
  const [filter, setFilter] = useState<string | null>(DEFAULT_FILTER);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const data = await getProjects();
      setProjectList(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = useMemo(() => {
    return filter ? projectList.filter((project) => project.Category === filter) : projectList;
  }, [projectList, filter]);

  useEffect(() => {
    fetchData();
  }, []);

  const values = useMemo(() => {
    return {
      projectList,
      setProjectList,
      filteredProjects,
      activeProjectId,
      setActiveProjectId,
      filter,
      setFilter,
      loading,
      // handleSort,
      // filter,
      // setFilter,
    };
  }, [filter, projectList, filteredProjects, loading]);

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
