import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { ArrowUpIcon, LinkIcon } from "@heroicons/react/solid";
import { MarkGithubIcon } from "@primer/octicons-react";
import home1 from "../../../Media/todo/home1.png";
import home2 from "../../../Media/todo/home2.png";

export default function TodoApp({ setSeeMoreTodo, seeMoreTodo }) {
  const handleOnClick = () => {
    setSeeMoreTodo(!seeMoreTodo);
  };

  return (
    <div className="grid mb-8 grid-cols-2 gap-x-5 gap-y-10">
      {/* ------------------------------------- TITULO --------------------------------------------- */}
      <div
        className="col-span-2 flex justify-center items-center gap-4 pb-4"
        align="center"
      >
        <Fade triggerOnce>
          <p
            className="text-3xl font-semibold text-pink-400"
            color="purple.300"
          >
            TODO APP
          </p>
          <a
            href="https://to-do-challenge-facupelli.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkIcon className="h-6 w-6 text-pink-400 hover:text-pink-100 animate-bounce-slow" />
          </a>

          {/* <img src={github} alt="github" className="h-6 w-6 fill-pink-400" /> */}
          <a
            href="https://github.com/Facupelli/TO-DO-Challenge"
            target="_blank"
            rel="noreferrer"
          >
            <MarkGithubIcon
              size={26}
              className="text-pink-400 hover:text-pink-100"
            />
          </a>

          <ArrowUpIcon
            className="h-6 w-6 ml-6 text-cyan-400 cursor-pointer hover:text-pink-100"
            onClick={handleOnClick}
          />
        </Fade>
      </div>

      {/* ------------------------------------- PRIMER PARRAFO --------------------------------------------- */}
      <div align="right" className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={2000} triggerOnce>
          <div className="px-8 md:p-8 ">
            <p className="md:w-3/4 text-white font-body">
              This project is a Todo app, where you can add and remove folders,
              navigate through them. Add and remove todo items and mark them as
              completed. All info is stored in a database.
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
              src={home1}
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
              src={home2}
              alt="landing"
            />
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1 mt-auto mb-auto" align="left">
        <Slide uration={1500} triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              The technologies I used for this project were{" "}
              <span className="font-semibold text-cyan-100">
                React, react-hook-form
              </span>{" "}
              and{" "}
              <span className="font-semibold text-cyan-100">tailwind-css </span>
              for the FRONT-END.{" "}
              <span className="font-semibold text-cyan-100">
                Node.js, Express, Sequelize
              </span>{" "}
              and <span className="font-semibold text-cyan-100">PSQL</span> for
              the BACK-END. Other tools I used were Git, Github, Heroku and
              Vercel.
            </p>
          </div>
        </Slide>
      </div>

      {/* ------------------------------------- TERCER PARRAFO --------------------------------------------- */}
      {/* <div className="col-span-2 md:col-span-1 mt-auto mb-auto" align="right">
        <Slide duration={1500} triggerOnce>
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
        <Slide triggerOnce>
          <img
            className="shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637711182/createbreed_pidogs_j2ehkg.png"
            alt="landing"
          />
        </Slide>
      </div> */}
    </div>
  );
}
