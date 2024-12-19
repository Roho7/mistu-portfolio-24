import { useRouter } from "next/navigation";
import Logo from "../../assets/logo.svg";
import React from "react";
import Image from "next/image";
import { FaGithub, FaTwitterSquare, FaLinkedin, FaBehance } from "react-icons/fa";

function Topbar() {
  const router = useRouter();
  return (
    <div className="p-4 w-screen flex text-white justify-center">
      {typeof window !== "undefined" && (
        <div
          className="h-7 w-7 mb-3 object-contain absolute left-8 md:left-10"
          role="button"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </div>
      )}


      <div className="flex gap-8">
        <FaBehance
          onClick={() => router.push("https://www.behance.net/suchismitadas2")}
          className="cursor-pointer"
        />
        <FaLinkedin
          onClick={() =>
            router.push(
              "https://www.linkedin.com/in/suchismita-das-551b44227/",
            )
          }
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Topbar;
