import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { ArrowUpIcon, LinkIcon } from "@heroicons/react/solid";
import { MarkGithubIcon } from "@primer/octicons-react";
import home from "../../../Media/alkemy/home.png";
import search from "../../../Media/alkemy/search.png";
import warning from "../../../Media/alkemy/warning.png";

export const Alkemy = ({ setSeeMoreAlkemy, seeMoreAlkemy }) => {
  const handleOnClick = () => {
    setSeeMoreAlkemy(!seeMoreAlkemy);
  };

  return (
    <div className="grid mb-24 grid-cols-2 gap-x-5 gap-y-10 place-items-center place-content-center">
      {/* ------------------------------------- TITULO --------------------------------------------- */}
      <div
        className="col-span-2 flex justify-center  md:gap-6 md:pb-4 items-center"
        align="center"
      >
        <Fade triggerOnce>
          <p className="text-2xl md:text-3xl font-semibold text-pink-400">
            Alkemy Frontend Challenge
          </p>

          <div className="hidden md:flex gap-4 items-end ">
            {/* <a
            href=""
            target="_blank"
            rel="noreferrer"
          > */}

            <LinkIcon className="h-6 w-6 text-pink-400 hover:text-pink-100 animate-bounce-slow" />
            {/* </a> */}
            {/* <img src={github} alt="github" className="h-6 w-6 fill-pink-400" /> */}
            <a
              href="https://github.com/Facupelli/Frontend-Alkemy-Challenge"
              target="_blank"
              rel="noreferrer"
            >
              <MarkGithubIcon className="h-6 w-6 text-pink-400 hover:text-pink-100" />
              <p className="text-xs pt-2 text-pink-200">REPO</p>
            </a>
          </div>

          <ArrowUpIcon
            className="h-6 w-6 ml-4 text-cyan-400 cursor-pointer hover:text-pink-100"
            onClick={handleOnClick}
          />
        </Fade>
      </div>

      {/* ------------------------------------- PRIMER PARRAFO --------------------------------------------- */}
      <div  className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={2000} triggerOnce>
          <div className="px-8 md:p-8 flex justify-end">
            <p className="md:w-3/4 text-white font-body md:text-right">
              This project is a frontend challenge using React.js. It is a menu
              app for a hotel. The menu has four plates, where two have to be
              vegan and the others not. To use the app you have to be logged.
            </p>
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1" align="left">
        <Slide duration={1500} triggerOnce>
          <img
            className="shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src={home}
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
            src={search}
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
                React, Bootstrap, Formik
              </span>{" "}
              among other libraries for the FRONT-END.
            </p>
          </div>
        </Slide>
      </div>

      {/* ------------------------------------- TERCER PARRAFO --------------------------------------------- */}
      <div className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={2000} triggerOnce>
          <div className="px-8 md:p-8 flex justify-end">
            <p className="md:w-3/4 text-white font-body md:text-right">
              In the app you can add a plate to the menu. The menu price,
              average preparation time and avergae health score are calculated
              dinamically according to the plates on the menu. You can search
              for a plate and view the detail with all the plate
              characteristics.
            </p>
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1" align="cenleftter">
        <Slide duration={1500} triggerOnce>
          <img
            className="shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src={warning}
            alt="landing"
          />
        </Slide>
      </div>
    </div>
  );
};
