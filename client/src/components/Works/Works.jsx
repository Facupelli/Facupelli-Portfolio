import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { ArrowDownIcon, ArrowCircleDownIcon } from "@heroicons/react/solid";
import s from "./Works.module.css";

//Media
import home from "../../Media/cuyobrewers/newHome.png";

//Components
import Dogs from "./Apps/Dogs";
import WebService from "./Apps/WebService";
import CuyoBrewers from "./Apps/CuyoBrewers";
import Matters from "../MattersQuote";
import Wallpaper from "./Wallpaper";
import { Works2 } from "./Works2";

// import { ArrowDownIcon } from "@primer/octicons-react";

export default function Works({ divRef, setLoadImage2 }) {
  const [seeMoreProjects, setSeeMoreProjects] = useState(false);

  const [seeMoreDogs, setSeeMoreDogs] = useState(false);
  const [seeMoreWeb, setSeeMoreWeb] = useState(false);
  const [seeMoreCuyo, setSeeMoreCuyo] = useState(false);

  const [clickWorks, setClickWorks] = useState(false);

  const handleClickWorks = () => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
    setClickWorks(true);
  };

  const dogImage =
    "https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637709264/landing_pidogs_vqevm5.png";

  const webImage =
    "https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785254/webservice_1_hs8uig.png";

  const handleOnClickDog = () => {
    setSeeMoreDogs(!seeMoreDogs);
  };

  const handleOnClickWeb = () => {
    setSeeMoreWeb(!seeMoreWeb);
  };

  const handleOnClickCuyo = () => {
    setSeeMoreCuyo(!seeMoreCuyo);
  };

  const handleSeeProjects = () => {
    setSeeMoreProjects(true);
  };

  return (
    <div className="bg-gray-900 pb-10" ref={divRef}>
      <div
        className="flex items-center gap-x-2 pl-10 py-8 md:pl-28 md:py-16 "
        onClick={handleClickWorks}
      >
        <h1 className="font-semibold pb-2 text-4xl text-white cursor-pointer border-b-2 border-gray-900 transition ease-in-out duration-500 hover:border-cyan-200">
          Works
        </h1>
        <ArrowCircleDownIcon
          className={`w-8 text-white cursor-pointer ${
            clickWorks ? "" : "animate-bounce-slow"
          } `}
        />
      </div>

      {/* ----------------------------------- WEBSERVICE CARD ------------------------------------------ */}

      <div className="grid grid-cols-3 gap-x-12 items-center ">
        {!seeMoreWeb && (
          <div className="hidden md:col-span-1 md:flex justify-end font-bold  text-white text-3xl text-center">
            <div className="">
              <p>SERVICES</p>
              <p>E-COMMERCE</p>
              <p className="text-xl">buy and offer services</p>
            </div>
          </div>
        )}
        <div className="col-span-3 md:col-span-2 ">
          <Fade triggerOnce>
            <div className=" flex justify-center md:justify-start">
              {!seeMoreWeb && (
                <div className={s.image}>
                  <img
                    className={s.image__img}
                    src={webImage}
                    alt="webservice"
                  />
                  <div className={s.image__overlay}>
                    <button onClick={handleOnClickWeb}>
                      <div className={s.image__title}>
                        <div>SEE MORE</div>
                        <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Fade>
        </div>
      </div>

      {/* ----------------------------------- DESPLIEGUE WEBSERVICE ------------------------------------------ */}

      {seeMoreWeb && (
        <div className="">
          <WebService setSeeMoreWeb={setSeeMoreWeb} seeMoreWeb={seeMoreWeb} />
        </div>
      )}

      {/* ----------------------------------- CUYOBREWERS CARD ------------------------------------------ */}

      <div className="grid grid-cols-3 gap-x-12 items-center  ">
        {!seeMoreCuyo && (
          <div className="hidden md:col-span-1 md:flex justify-end font-bold  text-white  text-center">
            <div className="mt-24">
              <p className="text-3xl">HOMEBREW APP</p>
              <p className="text-3xl">RECIPE BUILDER</p>
              <p className="text-lg">post, comment and</p>
              <p className="text-lg">follow beer recipes</p>
            </div>
          </div>
        )}
        <div className="col-span-3 md:col-span-2">
          <Fade triggerOnce>
            <div className="mt-24 flex justify-center md:justify-start ">
              {!seeMoreCuyo && (
                <div className={s.image}>
                  <img className={s.image__img} src={home} alt="webservice" />
                  <div className={s.image__overlay}>
                    <button onClick={handleOnClickCuyo}>
                      <div className={s.image__title}>
                        <div>SEE MORE</div>
                        <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Fade>
        </div>
      </div>

      {/* ----------------------------------- DESPLIEGUE CUYOBREWRES ------------------------------------------ */}

      {seeMoreCuyo && (
        <div className="">
          <CuyoBrewers
            setSeeMoreCuyo={setSeeMoreCuyo}
            seeMoreCuyo={seeMoreCuyo}
          />
        </div>
      )}

      {/* ----------------------------------- DOGS CARD ------------------------------------------ */}

      <div className="grid grid-cols-3 gap-x-12 items-center  ">
        {!seeMoreDogs && (
          <div className="hidden md:col-span-1 md:flex justify-end font-bold  text-white text-3xl text-center">
            <div className="mt-24">
              <p>DOG APP</p>
              <p className="text-3xl">API CONSUMER</p>
              <p className="text-xl">thedogapi.com</p>
            </div>
          </div>
        )}
        <div className="col-span-3 md:col-span-2">
          <Fade triggerOnce>
            <div className="mt-24 flex justify-center md:justify-start ">
              {!seeMoreDogs && (
                <div className={s.image}>
                  <img className={s.image__img} src={dogImage} alt="dogs" />
                  <div className={s.image__overlay}>
                    <button onClick={handleOnClickDog}>
                      <div className={s.image__title}>
                        <div>SEE MORE</div>
                        <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Fade>
        </div>
      </div>

      {/* ----------------------------------- DESPLIEGUE DOGS ------------------------------------------ */}

      {seeMoreDogs && (
        <div className="">
          <Dogs setSeeMoreDogs={setSeeMoreDogs} seeMoreDogs={seeMoreDogs} />
        </div>
      )}

      {/* ------------------------------------- QUOTTE ----------------------------------------------------- */}

      <div className="mt-32 hidden md:block ">
        <Wallpaper setLoadImage2={setLoadImage2} />
      </div>

      {/* ----------------------- SEE MORE PROJECTS ----------------------------- */}

      <div className="md:hidden block">
        <Fade triggerOnce>
          <Matters />
        </Fade>
      </div>

      {!seeMoreProjects && (
        <div className="flex justify-center mt-16">
          <button
            onClick={handleSeeProjects}
            className="transition ease-in-out duration-500 py-4 px-8 bg-gray-700 text-white font-bold rounded-lg hover:shadow-quotesHover hover:bg-gray-900"
          >
            SEE MORE PROJECTS
          </button>
        </div>
      )}

      {seeMoreProjects && <Works2 />}

      {/* --------------------------             MATTERS QUOTE ------------------------------------------ */}
    </div>
  );
}
