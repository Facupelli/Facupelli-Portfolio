import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { ArrowUpIcon, LinkIcon } from "@heroicons/react/solid";
import { MarkGithubIcon } from "@primer/octicons-react";

export default function Dogs({ setSeeMoreDogs, seeMoreDogs }) {
  const handleOnClick = () => {
    setSeeMoreDogs(!seeMoreDogs);
  };

  return (
    <div className="grid mb-8  grid-cols-2 gap-x-5 gap-y-10 mx-10">
      {/* ------------------------------------- TITULO --------------------------------------------- */}
      <div
        className="col-span-2 flex justify-center items-center gap-6 pb-4"
        align="center"
      >
        <Fade triggerOnce>
          <p
            className="text-2xlmd:text-3xl font-semibold text-pink-400"
            color="purple.300"
          >
            THE DOG APP
          </p>
          <a
            href="https://pi-dogs-definitive.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkIcon className="h-6 w-6 text-pink-400 hover:text-pink-100 animate-bounce-slow" />
            <p className="text-xs pt-2 text-pink-200">LINK</p>
          </a>

          {/* <img src={github} alt="github" className="h-6 w-6 fill-pink-400" /> */}
          <a
            href="https://github.com/Facupelli/PI-Dogs"
            target="_blank"
            rel="noreferrer"
          >
            <MarkGithubIcon className="h-6 w-6 text-pink-400 hover:text-pink-100" />
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
          <div className="px-8 md:p-8 ">
            <p className="md:w-3/4 text-white font-body">
              This was my first full stack experience at Henry Bootcamp. The
              Dogg App is a SPA (Single Page Application) that consumes data of
              an API (The Dog API). In the app you can find all dogs breeds,
              search breeds by name, filter breeds by temperament and sort them
              by weight or alphabetically.
            </p>
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1 md:text-left">
        <Slide duration={1500} triggerOnce>
          <div>
            <img
              className="shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
              objectfit="cover"
              src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637709264/landing_pidogs_vqevm5.png"
              alt="landing"
            />
          </div>
        </Slide>
      </div>

      {/* ------------------------------------- SEGUNDO PARRAFO --------------------------------------------- */}
      <div align="right" className="col-span-2 md:col-span-1">
        <Slide duration={2000} triggerOnce>
          <div>
            <img
              className="shadow-worksImagesLeft ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
              objectfit="cover"
              src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637711315/home_pidogs_fgczln.png"
              alt="landing"
            />
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1 mt-auto mb-auto" align="left">
        <Slide duration={1500} triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              The technologies I used for this project were{" "}
              <span className="font-semibold text-cyan-100">React, Redux</span>{" "}
              and pure CSS for the FRONT-END.{" "}
              <span className="font-semibold text-cyan-100">
                Node.js, Express, Sequelize
              </span>{" "}
              and <span className="font-semibold text-cyan-100">PSQL </span>
              for the BACK-END. Other tools I used were{" "}
              <span className="font-semibold text-cyan-100">
                Git, Github, Heroku
              </span>{" "}
              and <span className="font-semibold text-cyan-100">Vercel</span>.
            </p>
          </div>
        </Slide>
      </div>

      {/* ------------------------------------- TERCER PARRAFO --------------------------------------------- */}
      <div className="col-span-2 md:col-span-1 mt-auto mb-auto" align="right">
        <Slide duration={2000} triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              You can create a breed selecting some characteristics and a photo.
              The new breed created is stored in the database. You can then
              filter by API breeds or your own breeds.
            </p>
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1">
        <Slide duration={1500} triggerOnce>
          <img
            className="shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637711182/createbreed_pidogs_j2ehkg.png"
            alt="landing"
          />
        </Slide>
      </div>
    </div>
  );
}
