import React from "react";
import Line from "../../assets/Line.png";
import Link from "next/link";
import Image from "next/image";
import Tooltip from "./Tooltip";
import { BiSolidInfoCircle } from "react-icons/bi";

const experience = [
  {
    company: "Droprave",
    role: "UI/UX Designer",
    year: "August 24 - November 24",
    link: "https://droprave.com/",
  },
  {
    company: "Brain Quest",
    role: "UI/UX Designer",
    year: "June 24 - August 24",
    link: "https://brainquest.ai/",
  },
  {
    company: "Marcadors",
    role: "Animator & Motion Designer",
    year: "January 23 - May 23",
    link: "https://marcadors.com/",
  },
];

const education = [
  {
    course: "Bachelor of Fine Arts (Animation)",
    university: "Amity University Noida",
    year: "2020 - 2024",
  }
];

function About() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="mx-8 lg:mx-32 flex flex-col gap-16 items-center">
        <div className="relative">
          <h1>About</h1>
          <div className="absolute h-0.5 w-full bg-grass-500"></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-4">
          <div className="about-cards p-8">
            <h1 className="text-2xl font-normal">Age</h1>
            <h1 className="about-text">22</h1>
          </div>
          <div className="about-cards p-8">
            <h1 className="text-2xl font-normal">Location</h1>
            <h1 className="about-text">India</h1>
          </div>
          <div className="about-cards p-8 lg:col-span-2 lg:row-span-2">
            <h1 className="text-2xl font-normal">Experience</h1>
            {experience.map((exp) => (
              <div key={exp.company} className="mb-4">
                <Link href={exp.link}>
                <h1 className="about-text relative">
                  <span>{exp.company}</span>
                </h1>
                </Link>
                <h2>{exp.role}</h2>
                <span className="text-ash-100">{exp.year}</span>
              </div>
            ))}
          </div>
          <div className="about-cards p-8 lg:col-span-2">
            <h1 className="text-2xl font-normal">Education</h1>
            {education.map((edu) => (
              <div key={edu.course} className="mb-4">
                <h1 className="about-text relative">
                  <span>{edu.course}</span>
                </h1>
                <h2>{edu.university}</h2>
                <span className="text-ash-100">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sine-container md:scale-150 absolute top-1/2 -z-30 flex">
        <Image src={Line} alt="" className="sine-wave" />
        <Image src={Line} alt="" className="sine-wave" />
      </div>
    </div>
  );
}

export default About;
