import { collection, getDocs } from "firebase/firestore";
import { db } from "../_utils/firebase";
import { ProjectType } from "../_utils/types";

const getProjects = async () => {
  const projectData = collection(db, "Project");

  const data = await getDocs(projectData);
  const filteredData = data.docs.map((doc) => ({
    ...(doc.data() as ProjectType),
    Id: doc.id,
  }));
};
