import Card from "./Card";
import { useHorizontalScroll } from "../_hooks/useHorizontalScroll";
import { useProject } from "../_providers/useProject";

function Project() {
  const scrollRef = useHorizontalScroll();
  const { projectList } = useProject();

  return (
    <section className="relative mt-20 mb-20 md:mt-40 md:mb-40">
      <div className="flex flex-col w-full items-center gap-10 h-full">
        <div className="flex justify-center items-baseline gap-20">
          <div className="relative">
            <h1>Projects</h1>
            <div className="absolute h-0.5 w-full bg-grass-500"></div>
          </div>
        </div>
        <div
          className="relative cards w-full overflow-x-scroll flex gap-10 md:gap-20 px-10 md:px-20 cursor-all-scroll"
          ref={scrollRef}>
          {projectList.map((item) => {
            return (
              <Card
                key={item.Id}
                Name={item.Name}
                Type={item.Type}
                Cover={item.Cover}
                Software1={item.Software1}
                Id={item.Id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Project;
