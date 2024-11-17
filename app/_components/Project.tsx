import Card from "./Card";
import { useHorizontalScroll } from "../_hooks/useHorizontalScroll";
import { useProject } from "../_providers/useProject";
import Dropdown from "./Dropdown";
import { BiSort } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import Spinner from "./Spinner";

function Project() {
  const scrollRef = useHorizontalScroll();
  const { filteredProjects, setFilter, loading, } = useProject();


  return (
    <section className="relative mt-20 mb-20 md:mt-40 md:mb-40">
      <div className="flex flex-col w-full items-center justify-center gap-10 h-full">
        <div className="relative flex justify-center items-center w-full">
          <div className="relative ">
            <h1>Projects</h1>
            <div className="absolute h-0.5 w-full bg-grass-500"></div>
          </div>
        </div>
        <div className="top-1/2 flex gap-4">
          <Dropdown
            options={["design", "development"]}
            onclick={(filter) => setFilter(filter)}
          />
        </div>

        <div
          className="relative cards w-full overflow-x-scroll flex gap-10 md:gap-20 px-10 md:px-20 cursor-all-scroll max-md:hidden"
          ref={scrollRef}
        >
          {loading && <Spinner />}
          {filteredProjects.map((item) => {
            return (
              <Card
                key={item.Id}
                Name={item.Name}
                Type={item.Type}
                Cover={item.Cover}
                Software1={item.Software1}
                Id={item.Id}
                Relevance={item.Relevance}
              />
            );
          })}
        </div>
        <div className="relative overflow-x-hidden md:hidden">
          <div className="h-[5vh] md:hidden absolute z-20 -top-1 w-full bg-gradient-to-b from-black to-transparent"></div>
          <div
            className="relative cards w-full overflow-x-scroll md:overflow-x-scroll flex flex-col md:flex-row gap-10 md:gap-20 px-2 md:px-20 snap-y snap-mandatory md:snap-none overflow-y-auto md:cursor-all-scroll h-[40vh] md:h-auto"
          >
            {loading && <Spinner />}
            {filteredProjects.map((item) => {
              return (
                <div
                  key={item.Id}
                  className="snap-center min-w-full md:min-w-fit flex justify-center"
                >
                  <Card
                    Name={item.Name}
                    Type={item.Type}
                    Cover={item.Cover}
                    Software1={item.Software1}
                    Id={item.Id}
                    Relevance={item.Relevance}
                  />
                </div>
              );
            })}
          </div>
          <div className="h-[5vh] md:hidden absolute -bottom-1 w-full bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

export default Project;
