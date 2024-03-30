"use client";
import React from "react";
import Logo from "../assets/logo.png";
import Noise from "../assets/noise-blog.png";
import Topbar from "./_components/Topbar";
import SvgGrid from "./_components/SvgGrid";
import { FaStarOfLife } from "react-icons/fa";
import About from "./_components/About";
import Footer from "./_components/Footer";
import Project from "./_components/Project";
import Quote from "./_components/Quote";
import Skills from "./_components/Skills";
import Image from "next/image";
import Streamer from "./_components/Streamer";
import { handleScrollSvg } from "./_utils/scroll";
import { streamers } from "./_utils/data";

function Page() {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScrollSvg);
    window.addEventListener("touchmove", handleScrollSvg);
  }

  return (
    <>
      <Topbar />
      <div className="flex relative mt-10">
        <div className="mx-4 lg:mx-20">
          <div className="h-10 w-10 mb-3 object-contain">
            <Image src={Logo} alt="" />
          </div>
          <h2>Rohosen Bhattacharya</h2>
          <h1>Research</h1>
          <h1 className="text-grass-500">Design</h1>
          <h1>Development</h1>
        </div>
        <SvgGrid />
        <div className="noise absolute -left-1/6 top-1/6 opacity-60">
          <Image src={Noise} alt="" />
        </div>
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
