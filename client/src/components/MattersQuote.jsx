import React from "react";
import { HeartIcon } from "@heroicons/react/solid";

export default function Matters() {
  return (
    <div className="flex justify-center mt-10 pb-36">
      <div className="transition ease-in-out duration-500 flex items-center w-3/4 md:w-auto gap-2 p-2 md:p-4 mt-24 shadow-quotes hover:shadow-quotesHover rounded-lg " >
        <p className="text-white  font-semibold tracking-wider md:text-3xl font-title">
          Do what you love. Love what you do.
        </p>
        <HeartIcon className="h-16 md:h-10 md:w-10 text-cyan-300 animate-pulse-slow hover:animate-none" />
      </div>
    </div>
  );
}
