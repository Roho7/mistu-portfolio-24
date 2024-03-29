import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";

function Quote() {
  return (
    <div className="w-full flex justify-center mb-20 ">
      <div className="flex mx-8 lg:mx-32 flex-col gap-2 items-center text-center p-6 md:p-10 bg-ash-500 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 ">
        <h2 className="text-white text-3xl bg-grass-500 p-2 rounded-full">
          <BiSolidQuoteRight />
        </h2>
        <h3>
          <strike>Cool Design, Complex Code</strike>
        </h3>
        {/* <h3>
          <strike>Great Design, Poor Code</strike>
        </h3> */}
        <h2 className="text-lg lg:text-xl whitespace-nowrap">
          <span className="text-grass-500">Correct </span>Design,{" "}
          <span className="text-grass-500">Optimized</span> Code
        </h2>
      </div>
    </div>
  );
}

export default Quote;
