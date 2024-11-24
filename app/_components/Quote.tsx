import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";

function Quote() {
  return (
    <div className="w-full flex justify-center mb-20">
      <div className="flex mx-8 lg:mx-32 flex-col gap-2 items-center text-center p-6 md:p-10 bg-ash-500 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 ">
        <h2 className="text-white text-3xl bg-grass-500 p-2 px-3 rounded-full">
          👋🏻
        </h2>
        <h2 className="text-md lg:text-lg">
         <p>  Hi! I'm <span className="text-grass-500">Roho</span>, 
          a <span className="text-grass-500">Software Engineer</span>.</p>
          <br />
          <p>I'm interested in building products that are <br /> <span className="text-grass-500">useful</span> and <span className="text-grass-500">beautiful</span>.</p>
          <br />
          <p>I'm really quick. So you'll need to keep up.</p>
        </h2>
      </div>
    </div>
  );
}

export default Quote;
