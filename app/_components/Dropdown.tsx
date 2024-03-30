"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import { getProjects } from "../_actions/projects.actions";
import { useProject } from "../_providers/useProject";

type DropdownProps = {
  options: string[];
  onclick: (arg: string) => void;
  children: React.ReactNode;
};

const Dropdown = ({ options, onclick, children }: DropdownProps) => {
  const [filter, setFilter] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [dropwdownOpen, setDropdownOpen] = useState(false);
  const { projectList, setFilteredProjects } = useProject();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      {filter && (
        <MdCancel
          className="absolute -right-[10%] -top-[30%] text-grass-500 h-3 w-3"
          role="button"
          onClick={async () => {
            setFilter(null);
            setFilteredProjects(projectList);
          }}
        />
      )}
      <button
        className="border px-2 text-xs py-1 max-h-min hover:bg-white hover:text-black text-white border-white relative rounded-md"
        onClick={() => setDropdownOpen(!dropwdownOpen)}
        role="button">
        {children}
        {/* {filter && <BsCircleFill className="text-grass-500 h-1 w-1" />} */}
      </button>
      {dropwdownOpen && (
        <div className=" min-w-full text-xs bg-white text-black absolute bottom-[110%] rounded-md border p-1 ">
          {options.map((option: string, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  "px-1 py-0.5 rounded hover:bg-grass-100 capitalize",
                  filter === option && "bg-grass-100",
                )}
                role="button"
                onClick={() => {
                  setFilter(option);
                  onclick(option);
                }}>
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
