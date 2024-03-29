import { useRouter } from "next/navigation";
import React from "react";
import { FaGithub, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

function Topbar() {
  const router = useRouter();
  return (
    <div className="p-4 w-screen flex text-white justify-center">
      <div className="flex gap-8">
        <FaGithub
          onClick={() => router.push("https://github.com/Roho7")}
          className="cursor-pointer"
        />
        <FaTwitterSquare
          onClick={() => router.push("https://twitter.com/Rohosen_")}
          className="cursor-pointer"
        />
        <FaLinkedin
          onClick={() =>
            router.push(
              "https://www.linkedin.com/in/rohosen-bhattacharya-9311611aa/",
            )
          }
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Topbar;
