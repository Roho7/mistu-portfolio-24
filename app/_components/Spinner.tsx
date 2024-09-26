import React from "react";
import { VscLoading } from "react-icons/vsc";

const Spinner = () => {
  return (
    <div className="text-grass-100 w-full flex items-center justify-center animate-spin text-lg">
      <VscLoading />
    </div>
  );
};

export default Spinner;
