import React from "react";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";

export default function Footer({divRef}) {

  const handleClick = () => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex justify-center  gap-24 md:gap-24 py-12 bg-gray-900 border-t border-gray-900 transition ease-in-out duration-500 hover:border-cyan-200">
      <div className="">
        <a
          className="text-lg text-cyan-200 font-bold font-body transition ease-in-out duration-300 hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          href="https://www.linkedin.com/in/facundo-pellicer-full-stack-developer/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
      <div>
        <a
          className="text-lg text-cyan-200 font-bold font-body transition ease-in-out duration-300 hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          href="https://github.com/Facupelli"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
      <div>
        <a
          className="text-lg text-cyan-200 font-bold font-bod transition ease-in-out duration-300 hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
          href="https://www.instagram.com/facu_pellicer/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
      <div className="">
        <ArrowCircleUpIcon className="h-8 w-8 cursor-pointer text-cyan-200 transition ease-in-out duration-300 hover:text-pink-500" onClick={handleClick}/>
      </div>
    </div>
  );
}
