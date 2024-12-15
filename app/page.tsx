"use client";
import React from "react";
import Logo from "../assets/logo.png";
import Topbar from "./_components/Topbar";
import About from "./_components/About";
import Footer from "./_components/Footer";
import Project from "./_components/Project";
import Quote from "./_components/Quote";
import Skills from "./_components/Skills";
import Image from "next/image";
import Streamer from "./_components/Streamer";
import { handleScrollSvg } from "./_utils/scroll";
import Scene from "./_components/3DScene";
import { motion } from "motion/react";
import Grid from "../assets/grid.svg";
import Mistu from "../assets/mistu.jpeg";
import { PiStarFourBold, PiUserCircleDuotone } from "react-icons/pi";
import Badge from "./_components/Badge";

const tags = [
  "UI Design",
  "User Experience",
  "Interaction Design",
  "Figma",
  "Framer",
  "Wix",
  "Design-to-Development Collaboration",
  "Wireframing",
  "After Effects",
  "Photoshop",
  "Motion Graphics",
  "Graphic Design",
  "Illustrator",
  "Premiere Pro"
]

function Page() {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScrollSvg);
    window.addEventListener("touchmove", handleScrollSvg);
  }

  return (
    <>
      <Topbar />
      <div className="flex relative mt-10 w-full h-[80vh] justify-center" id="hero">
        <div className="mx-4 lg:mx-20 z-10 flex items-center justify-center gap-10">
          {/* <div className="text-4xl text-white"><PiUserCircleDuotone size={400}/></div> */}
          <div className="rounded-full overflow-hidden h-80 w-80 border-8 border-white"><Image src={Mistu} alt="mistu" width={400} height={400} className=" origin-bottom-left"/></div>
          <div className="lg:text-[90px] text-4xl group">
          <motion.h1 initial={{ opacity: 0, translateY: -20 }} whileInView={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: -10 }} transition={{ duration: 1 }}>Hi!</motion.h1>
          <motion.h1 className="text-sm text-right bg-grass-500 text-black w-fit px-4 py-1 rounded-full ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 rotate-3">a.k.a Suchismita Das</motion.h1>
          <motion.h1 initial={{ opacity: 0, translateX: 20 }} whileInView={{ opacity: 1, translateX: 0 }} exit={{ opacity: 0, translateX: 10 }} transition={{ duration: 1 }} className="text-white peer">I am{" "}<span className="text-grass-500 font-bold italic">Mistu</span></motion.h1>
          <div className="flex gap-2 items-center w-[40vw] overflow-hidden h-10 relative">
          <div className="absolute top-0 left-0 w-10 h-10 from-black to-transparent bg-gradient-to-r z-10"></div>
            <motion.div 
              className="flex gap-2 flex-nowrap absolute"
              animate={{ 
                x: [0, -1000]
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {[...tags, ...tags, ...tags].map((tag, index) => (
                <Badge key={index} size="sm" icon={<PiStarFourBold className="text-grass-500"/>}>{tag}</Badge>
              ))}
            </motion.div>
            <div className="absolute top-0 right-0 w-10 h-10 from-black to-transparent bg-gradient-to-l z-10"></div>
          </div>
          </div>
        </div>

      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image src={Grid} alt="grid" />
      </div>
      <Project />
      <About />
      <Skills />
      <Footer />
    </>
  );
}

export default Page;
