import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { ArrowUpIcon, LinkIcon } from "@heroicons/react/solid";
import { MarkGithubIcon } from "@primer/octicons-react";
import detail from "../../../Media/cuyobrewers/newDetail.png";
import form from "../../../Media/cuyobrewers/newFrom.png";
import home from "../../../Media/cuyobrewers/newHome.png";

export default function CuyoBrewers({ setSeeMoreCuyo, seeMoreCuyo }) {
  const handleOnClick = () => {
    setSeeMoreCuyo(!seeMoreCuyo);
  };
  return (
    <div className="grid mb-16 md:mb-24 grid-cols-2 gap-x-5 gap-y-10 place-items-center place-content-center mx-10">
      {/* ------------------------------------- TITULO --------------------------------------------- */}
      <div
        className="col-span-2 flex justify-center  gap-6 pb-4 items-center"
        align="center"
      >
        <Fade triggerOnce>
          <p className="text-2xl md:text-3xl font-semibold text-pink-400">
            CUYO-BREWERS-FRIENDS
          </p>
          <a
            href="https://cuyo-brewers-friends.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <LinkIcon className="h-6 w-6 text-pink-400 hover:text-pink-100 animate-bounce-slow" />
            <p className="text-xs pt-2 text-pink-200">LINK</p>
          </a>
          {/* <img src={github} alt="github" className="h-6 w-6 fill-pink-400" /> */}
          <a
            href="https://github.com/Facupelli/Cuyo-Brewers-Friends"
            target="_blank"
            rel="noreferrer"
          >
            <MarkGithubIcon
              className="h-6 w-6 text-pink-400 hover:text-pink-100"
            />
            <p className="text-xs pt-2 text-pink-200">REPO</p>
          </a>
          <ArrowUpIcon
            className="h-6 w-6 md:ml-4 text-cyan-400 cursor-pointer hover:text-pink-100"
            onClick={handleOnClick}
          />
        </Fade>
      </div>

      {/* ------------------------------------- PRIMER PARRAFO --------------------------------------------- */}
      <div align="right" className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={2000} triggerOnce>
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
            src={form}
            alt="landing"
          />
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={1500} triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              The technologies I used for this project were{" "}
              <span className="font-semibold text-cyan-100">React, Redux</span>{" "}
              with{" "}
              <span className="font-semibold text-cyan-100">
                Typescript, Tailwind, react-hook-form
              </span>{" "}
              among other libraries for the FRONT-END.{" "}
              <span className="font-semibold text-cyan-100">
                Node.js, Express, MongoDB
              </span>{" "}
              and <span className="font-semibold text-cyan-100">Mongoose</span>{" "}
              for the BACK-END. THe project is deployed on Heroku and Vercel.
            </p>
          </div>
        </Slide>
      </div>

      {/* ------------------------------------- TERCER PARRAFO --------------------------------------------- */}
      <div align="right" className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={2000} triggerOnce>
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
        <Slide duration={1500} triggerOnce>
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
