import React from "react";
import { InformationCircleIcon } from "@heroicons/react/solid";

export default function AboutMe() {
  return (
    <div className="md:pt-0 pb-24 pt-16 bg-gray-900   ">
      <div className="flex items-center gap-x-2 pl-10  pb-16 md:pl-28 md:py-16 ">
        <p className="font-semibold text-4xl text-white ">About Me</p>
        <InformationCircleIcon className="w-8 text-white" />
      </div>

      <div className="grid grid-cols-2 gap-12 place-items-center px-6 md:px-0 md:text-left place-self-end ">
        <img
          className="col-span-2 md:col-span-1 md:ml-auto  w-3/4 md:w-1/2 shadow-worksImagesRight rounded-lg transition ease-in-out duration-500 hover:shadow-worksImagesLeft"
          objectfit="cover"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637793310/foto1-min_opt_obfq5t.png"
          alt="landing"
        />
        <div>
          <p className="col-span-2 md:col-span-1 mr-auto  md:w-2/3 text-white">
            Hello, my name is Facundo and I enjoy creating things since I was a
            child. I had always been passionate about technology and making
            things with the internet so I decided to start learning web
            development at Henry Bootcamp. I am now graduated and looking for my
            first opportunity to contribute on challenging projects with
            everything I have learned and still learning everyday. I am a very{" "}
            <span className="font-bold border-b border-pink-400">curious</span>{" "}
            person, always willing to{" "}
            <span className="font-bold border-b border-pink-400">learn</span>{" "}
            more. I like challenges and{" "}
            <span className="font-bold border-b border-pink-400">solve</span>{" "}
            problems. I don't like going to bed with unfinished works, I don't
            like giving up. I am always looking forward to{" "}
            <span className="font-bold border-b border-pink-400">improve</span>,
            to learn from everybody and to{" "}
            <span className="font-bold border-b border-pink-400">share</span>{" "}
            what I know.
          </p>
          <p className="text-white mt-6">
            <span className="text-cyan-200 font-bold">Contact me:</span>{" "}
            <span className="font-semibold">
              facundopellicer4@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
