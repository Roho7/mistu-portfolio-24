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
import { streamers } from "./_utils/data";
import Scene from "./_components/3DScene";
import { motion } from "motion/react";
import Grid from "../assets/grid.svg";

function Page() {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScrollSvg);
    window.addEventListener("touchmove", handleScrollSvg);
  }

  return (
    <>
      <Topbar />
      <div className="flex relative mt-10" id="hero">
        <div className="mx-4 lg:mx-20 z-10">
          <div className="h-10 w-10 mb-3 object-contain">
            <Image src={Logo} alt="" />
          </div>
          <h2>Rohosen Bhattacharya</h2>
          <div className="lg:text-[90px] text-4xl">
          <motion.h1 initial={{ opacity: 0, translateY: -20 }} whileInView={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: -10 }} transition={{ duration: 1 }}>Research</motion.h1>
          <motion.h1 initial={{ opacity: 0, translateX: 20 }} whileInView={{ opacity: 1, translateX: 0 }} exit={{ opacity: 0, translateX: 10 }} transition={{ duration: 1 }} className="text-grass-500">Design</motion.h1>
            <motion.h1 initial={{ opacity: 0, translateY: 20 }} whileInView={{ opacity: 1, translateY: 0 }} exit={{ opacity: 0, translateY: 10 }} transition={{ duration: 1 }}>Development</motion.h1>
          </div>
        </div>

        <Scene />
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image src={Grid} alt="grid" />
      </div>
      <div className="mt-20 md:mt-80 overflow-x-hidden">
        <div className="streamer-container1">
          {streamers.streamerArray1.map((txt, index) => {
            return <Streamer text={txt} key={index} />;
          })}
        </div>
        <div className="streamer-container2 ">
          {streamers.streamerArray2.map((txt, index) => {
            return <Streamer text={txt} key={index} />;
          })}
        </div>
      </div>
      <Project />
      <Quote />
      <About />
      <Skills />
      <Footer />
    </>
  );
}

export default Page;
