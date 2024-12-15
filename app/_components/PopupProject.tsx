import Image from "next/image";
import { useProject } from "../_providers/useProject";
import { BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

const PopupProject = () => {
  const { projectList, activeProjectId } = useProject();

  const router = useRouter();

  
  const randomIndex = useMemo(() => {
    const currentIndex = projectList.findIndex(
      (project) => project.id === activeProjectId,
    );
    let randomIndex = Math.floor(Math.random() * projectList.length);
    if (randomIndex == currentIndex) {
      randomIndex = randomIndex + 1;
    }
    return randomIndex;
  }, [activeProjectId]);

  return (
    <div
      className="rounded-lg max-w-[5rem] md:max-w-[15rem] flex flex-col gap-2 group relative z-20"
      role="button"
      onClick={() => router.push(`/project/${projectList[randomIndex].id}`)}>
      <h2 className="text-white text-sm md:text-2xl flex items-center gap-2 whitespace-nowrap">
        See Also <BiChevronRight />
      </h2>
      <Image
        src={projectList[randomIndex].cover}
        alt=""
        height={200}
        width={200}
        className="w-full h-full rounded-lg group-hover:scale-105 transition-all duration-500"
      />
    </div>
  );
};

export default PopupProject;
