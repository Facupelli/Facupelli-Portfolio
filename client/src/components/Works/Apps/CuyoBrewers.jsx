import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { ArrowUpIcon, LinkIcon } from "@heroicons/react/solid";
import { MarkGithubIcon } from "@primer/octicons-react";
import detail from '../../../Media/cuyobrewers/newDetail.png'
import form from '../../../Media/cuyobrewers/newFrom.png'
import home from '../../../Media/cuyobrewers/newHome.png'


export default function CuyoBrewers({ setSeeMoreCuyo, seeMoreCuyo }) {
  const handleOnClick = () => {
    setSeeMoreCuyo(!seeMoreCuyo);
  };
  return (
    <div className="grid pb-24 grid-cols-2 gap-x-5 gap-y-10 place-items-center place-content-center">
      {/* ------------------------------------- TITULO --------------------------------------------- */}
      <div
        className="col-span-2 flex justify-center  gap-4 pb-4 items-center"
        align="center"
      >
        <Fade triggerOnce>
          <p className="text-3xl font-semibold text-pink-400">
            CUYO-BREWERS-FRIENDS
          </p>
          <a
            href="https://cuyo-brewers-friends.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <LinkIcon className="h-6 w-6 text-pink-400 hover:text-pink-100 animate-bounce-slow" />
          </a>
          {/* <img src={github} alt="github" className="h-6 w-6 fill-pink-400" /> */}
          <a
            href="https://github.com/Facupelli/Cuyo-Brewers-Friends"
            target="_blank"
            rel="noreferrer"
          >
            <MarkGithubIcon size={26} className="text-pink-400 hover:text-pink-100"/>
          </a>
          <ArrowUpIcon
            className="h-6 w-6 ml-6 text-cyan-400 cursor-pointer hover:text-pink-100"
            onClick={handleOnClick}
          />
        </Fade>
      </div>

      {/* ------------------------------------- PRIMER PARRAFO --------------------------------------------- */}
      <div align="right" className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={1500} triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              This project is like a "social-network" for beer homebrewers.
              Brewers can post their recipes and get feedback with a score and a
              comment.
            </p>
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1" align="left">
        <Slide triggerOnce>
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
        <Slide duration={1500} triggerOnce>
          <img
            className="shadow-worksImagesLeft ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src={form}
            alt="landing"
          />
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              The technologies I used for this project were React, Redux with
              Typescript, Tailwind, react-hook-form among other libraries for
              the FRONT-END. Node.js, Express, MongoDB and Mongoose for the
              BACK-END. THe project is deployed on Heroku and Vercel.
            </p>
          </div>
        </Slide>
      </div>

      {/* ------------------------------------- TERCER PARRAFO --------------------------------------------- */}
      <div align="right" className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={1500} triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              In the app you can post a recipe, where the OG, FG, ABV and SRM
              are calculated automatically, add a recipe to favourites, you can
              view the recipe detail where you can comment and rate it. You can
              search a recipe by name, style or username among others.
            </p>
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1" align="cenleftter">
        <Slide triggerOnce>
          <img
            className="shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src={detail}
            alt="landing"
          />
        </Slide>
      </div>
    </div>
  );
}
