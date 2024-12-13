import Card from "./Card";
import { useHorizontalScroll } from "../_hooks/useHorizontalScroll";
import { useProject } from "../_providers/useProject";
import Dropdown from "./Dropdown";
import { BiSort } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import Spinner from "./Spinner";
import { Suspense } from 'react';

function Project() {
  const scrollRef = useHorizontalScroll();
  const { setFilter, loading, projectList } = useProject();


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
          {loading ? (
            <Spinner />
          ) : (
            <Suspense fallback={<Spinner />}>
              {projectList.map((item) => (
                <Card
                  key={item.id}
                  {...item}
                />
              ))}
            </Suspense>
          )}
        </div>
        <div className="relative overflow-x-hidden md:hidden">
          <div className="h-[5vh] md:hidden absolute z-20 -top-1 w-full bg-gradient-to-b from-black to-transparent"></div>
          <div
            className="relative cards w-full overflow-x-scroll flex flex-col gap-10 px-2 snap-y snap-mandatory overflow-y-auto h-[40vh]"
          >
            {loading ? (
              <Spinner />
            ) : (
              <Suspense fallback={<Spinner />}>
                {projectList.map((item) => (
                  <div key={item.timestamp} className="snap-center min-w-full flex justify-center">
                    <Card
                      {...item}
                    />
                  </div>
                ))}
              </Suspense>
            )}
          </div>
          <div className="h-[5vh] md:hidden absolute -bottom-1 w-full bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

export default Project;
