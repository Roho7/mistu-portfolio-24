import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../_utils/firebase";
import { ProjectType } from "../_utils/types";

export const getProjects = async () => {
  const dataRef = query(
    collection(db, "Projects"),
    orderBy("timestamp", "desc"),
  );

  const data = await getDocs(dataRef);
  const filteredData = data.docs.map((doc) => ({
    ...(doc.data() as ProjectType),
    id: doc.id,
  }));
  return filteredData;
};

export const getProjectsByCategory = async (category: string) => {
  const dataRef = query(
    collection(db, "Project"),
    where("Category", "==", category),
  );

  const data = await getDocs(dataRef);
  const filteredData = data.docs.map((doc) => ({
    ...(doc.data() as ProjectType),
    Id: doc.id,
  }));

  return filteredData;
};

export const getSingleProject = async (id: string) => {
  const projectRef = doc(db, "Projects", id);

  const data = await getDoc(projectRef);
  const filteredData = data.data();

  return filteredData as ProjectType;
};
