import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { ArrowUpIcon, LinkIcon } from "@heroicons/react/solid";
import { MarkGithubIcon } from "@primer/octicons-react";
import home1 from "../../../Media/cognizant/1.png";
import home2 from "../../../Media/cognizant/2.png";
import home3 from "../../../Media/cognizant/3.png";

export const Cognizant = ({ setSeeMoreCognizant, seeMoreCognizant }) => {
  const handleOnClick = () => {
    setSeeMoreCognizant(!seeMoreCognizant);
  };

  return (
    <div className="grid pb-24 grid-cols-2 gap-x-5 gap-y-10 place-items-center place-content-center">
      {/* ------------------------------------- TITULO --------------------------------------------- */}
      <div
        className="col-span-2 flex justify-center  gap-6 pb-4 items-center"
        align="center"
      >
        <Fade triggerOnce>
          <p className="text-3xl font-semibold text-pink-400">
            Cognizant Frontend Challenge
          </p>
          <a
            href="https://cognizant-challenge-delta.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkIcon className="h-6 w-6 text-pink-400 hover:text-pink-100 animate-bounce-slow" />
            <p className="text-xs pt-2 text-pink-200">LINK</p>
          </a>
          {/* <img src={github} alt="github" className="h-6 w-6 fill-pink-400" /> */}
          <a
            href="https://github.com/Facupelli/Cognizant-Challenge"
            target="_blank"
            rel="noreferrer"
          >
            <MarkGithubIcon className="w-6 h-6 text-pink-400 hover:text-pink-100" />
            <p className="text-xs pt-2 text-pink-200">REPO</p>
          </a>
          <ArrowUpIcon
            className="h-6 w-6 ml-4 text-cyan-400 cursor-pointer hover:text-pink-100"
            onClick={handleOnClick}
          />
        </Fade>
      </div>

      {/* ------------------------------------- PRIMER PARRAFO --------------------------------------------- */}
      <div align="right" className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={2000} triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              This project is a frontend challenge using React.js. It is a
              candidate manager for a selection process. The app has five column
              which represent the candidate instances.
            </p>
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1" align="left">
        <Slide duration={1500} triggerOnce>
          <img
            className="shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src={home1}
            alt="landing"
          />
        </Slide>
      </div>

      {/* ------------------------------------- SEGUNDO PARRAFO --------------------------------------------- */}
      <div className="col-span-2 md:col-span-1" align="right">
        <Slide duration={2000} triggerOnce>
          <img
            className="shadow-worksImagesLeft ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src={home2}
            alt="landing"
          />
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={1500} triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              The technologies I used for this project were{" "}
              <span className="font-semibold text-cyan-100">
                React, Styled-components, react-hook-form
              </span>{" "}
              among other libraries for the FRONT-END.
            </p>
          </div>
        </Slide>
      </div>

      {/* ------------------------------------- TERCER PARRAFO --------------------------------------------- */}
      <div align="right" className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={2000} triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              In the app you can add a candidate which will automatically
              display on the first column. Then you can move the candidate one
              column at a time. You can edit the candidate name, and note, where
              you cand add some info of the candidate. Also you can delete a
              candidate.
            </p>
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1" align="cenleftter">
        <Slide duration={1500} triggerOnce>
          <img
            className="shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src={home3}
            alt="landing"
          />
        </Slide>
      </div>
    </div>
  );
};
