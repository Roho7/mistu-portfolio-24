import { useRouter } from "next/navigation";
import React from "react";
import { FiMail } from "react-icons/fi";

function Footer() {
  const router = useRouter();
  return (
    <a
      className="w-full flex flex-col items-center mt-20 p-10 group cursor-pointer"
      href="mailto:suchismitadas.2002@gmail.com">
      <h1 className="text-6xl mb-4"> 👋🏻 Wanna Know More?</h1>
      <h1 className="text-4xl group-hover:text-grass-500 group-hover:rotate-6">
        <FiMail />
      </h1>
    </a>
  );
}

export default Footer;
