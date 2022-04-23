import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { ArrowUpIcon, LinkIcon } from "@heroicons/react/solid";
import { MarkGithubIcon } from "@primer/octicons-react";
import uploadImgs from '../../../Media/virtual360/uploadImgs.png'
import linkImgs from '../../../Media/virtual360/linkImgs.png'
import viewTour from '../../../Media/virtual360/viewTour.png'


export default function Virtual360({
  setSeeMoreVirtual360,
  seeMoreVirtual360,
}) {
  const handleOnClick = () => {
    setSeeMoreVirtual360(!seeMoreVirtual360);
  };
  return (
    <div className="grid mb-16 md:mb-24 grid-cols-2 gap-x-5 gap-y-10 place-items-center place-content-center mx-10">
      {/* ------------------------------------- TITULO --------------------------------------------- */}
      <div
        className="col-span-2 flex justify-center  gap-2 md:gap-6 md:pb-4 items-center"
        align="center"
      >
        <Fade triggerOnce>
          <p className="text-2xl md:text-3xl font-semibold text-pink-400 hover:text-pink-100">
            VIRTUAL 360 TOUR
          </p>
          <div className="hidden md:flex gap-4 items-end ">
            <a
              href="https://virtual360-tour.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon className="h-6 w-6 text-pink-400 hover:text-pink-100 animate-bounce-slow" />
              <p className="text-xs pt-2 text-pink-200">LINK</p>
            </a>
            {/* <img src={github} alt="github" className="h-6 w-6 fill-pink-400" /> */}
            <a
              href="https://github.com/Facupelli/Virtual360Tour"
              target="_blank"
              rel="noreferrer"
            >
              <MarkGithubIcon className="w-6 h-6 text-pink-400 hover:text-pink-100" />
              <p className="text-xs pt-2 text-pink-200">REPO</p>
            </a>
          </div>
          <ArrowUpIcon
            className="h-6 w-6 md:ml-4 text-cyan-400 cursor-pointer hover:text-pink-100"
            onClick={handleOnClick}
          />
        </Fade>
      </div>

      {/* ------------------------------------- PRIMER PARRAFO --------------------------------------------- */}
      <div className="col-span-2 md:col-span-1 mt-auto mb-auto ">
        <Slide duration={2000} triggerOnce>
          <div className="px-8 md:p-8 flex justify-end">
            <p className="md:w-3/4 text-white font-body md:text-right">
              App to create a 360 photos tour, where photos are linked to each
              other. First you upload the 360 photos, then you link them and
              finally you can view it complete.
            </p>
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1 " align="left">
        <Slide duration={1500} triggerOnce>
          <img
            className="md:shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src={uploadImgs}
            alt="landing"
          />
        </Slide>
      </div>

      {/* ------------------------------------- SEGUNDO PARRAFO --------------------------------------------- */}
      <div className="col-span-2 md:col-span-1" align="right">
        <Slide duration={2000} triggerOnce>
          <img
            className="shadow-none md:shadow-worksImagesLeft ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src={linkImgs}
            alt="landing"
          />
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={1500} triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              The technologies I used for this project were{" "}
              <span className="font-semibold text-cyan-100">React, Sass, Panellum-React, </span>
              among other libraries for the FRONT-END. Other tools I used were{" "}
              <span className="font-semibold text-cyan-100">
                Git, Github
              </span>{" "}
              and
              <span className="font-semibold text-cyan-100"> Vercel</span>
            </p>
          </div>
        </Slide>
      </div>

      {/* ------------------------------------- TERCER PARRAFO --------------------------------------------- */}
      <div className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={2000} triggerOnce>
          <div className="px-8 md:p-8 flex justify-end">
            <p className="md:w-3/4 text-white font-body md:text-right">
              In the app you choose the tour name, the front photo, and upload
              all the 360 photos for the tour. Then you link them to one another
              and set the initial coordinates of the view. Finally you create it
              and view it.
            </p>
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1" align="cenleftter">
        <Slide duration={1500} triggerOnce>
          <img
            className="md:shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src={viewTour}
            alt="landing"
          />
        </Slide>
      </div>
    </div>
  );
}
