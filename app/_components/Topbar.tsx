import { useRouter } from "next/navigation";
import Logo from "../../assets/logo.png";
import React from "react";
import Image from "next/image";
import { FaGithub, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

function Topbar() {
  const router = useRouter();
  return (
    <div className="p-4 w-screen flex text-white justify-center">
      {typeof window !== "undefined" && window.location.pathname !== "/" && (
        <div
          className="h-7 w-7 mb-3 object-contain absolute left-8 md:left-10"
          role="button"
          onClick={() => {
            router.push("/");
          }}>
          <Image src={Logo} alt="" />
        </div>
      )}
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
