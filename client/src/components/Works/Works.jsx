import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  ArrowCircleDownIcon,
} from "@heroicons/react/solid";

//Media
import home from "../../Media/cuyobrewers/newHome.png";

//Components
import Dogs from "./Apps/Dogs";
import WebService from "./Apps/WebService";
import CuyoBrewers from "./Apps/CuyoBrewers";
import Matters from "../MattersQuote";
import Wallpaper from "./Wallpaper";
import { Works2 } from "./Works2";
import Apps from "./Apps/Apps";

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
    <div className="bg-gray-900 pb-10 max-w-7xl mx-auto" ref={divRef}>
      <div
        className="flex items-center mb-16 gap-x-2 pl-10 pt-8 md:pt-16 "
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

      {!seeMoreWeb && (
        <Apps
          title="SERVICES"
          subtitle="E-COMMERCE"
          description="buy and offer services"
          link="https://pf-web-service.vercel.app/"
          repo="https://github.com/Facupelli/PF-WebService"
          handleOnClick={handleOnClickWeb}
          image={webImage}
        />
      )}

      {/* ----------------------------------- DESPLIEGUE WEBSERVICE ------------------------------------------ */}

      {seeMoreWeb && (
        <WebService setSeeMoreWeb={setSeeMoreWeb} seeMoreWeb={seeMoreWeb} />
      )}

      {/* ----------------------------------- CUYOBREWERS CARD ------------------------------------------ */}

      {!seeMoreCuyo && (
        <Apps
          title="HOMEBREW APP"
          subtitle="RECIPE BUILDER"
          description="post, comment and"
          description2="follow beer recipes"
          link="https://cuyo-brewers-friends.vercel.app/"
          repo="https://github.com/Facupelli/Cuyo-Brewers-Friends"
          handleOnClick={handleOnClickCuyo}
          image={home}
        />
      )}

      {/* ----------------------------------- DESPLIEGUE CUYOBREWRES ------------------------------------------ */}

      {seeMoreCuyo && (
        <CuyoBrewers
          setSeeMoreCuyo={setSeeMoreCuyo}
          seeMoreCuyo={seeMoreCuyo}
        />
      )}

      {/* ----------------------------------- DOGS CARD ------------------------------------------ */}

      {!seeMoreDogs && (
        <Apps
          title="DOG APP"
          subtitle="API CONSUMER"
          description="thedogapi.com"
          link="https://pi-dogs-definitive.vercel.app/"
          repo="https://github.com/Facupelli/PI-Dogs"
          handleOnClick={handleOnClickDog}
          image={dogImage}
        />
      )}

      {/* ----------------------------------- DESPLIEGUE DOGS ------------------------------------------ */}

      {seeMoreDogs && (
        <Dogs setSeeMoreDogs={setSeeMoreDogs} seeMoreDogs={seeMoreDogs} />
      )}

      {/* ------------------------------------- QUOTTE ----------------------------------------------------- */}

      <div className="md:mt-32 hidden md:block mb-24">
        <Wallpaper setLoadImage2={setLoadImage2} />
      </div>


      <div className="md:hidden block mb-24">
        <Fade triggerOnce>
          <Matters text="Do what you love. Love what you do." icon/>
        </Fade>
      </div>

      {/* ----------------------- SEE MORE PROJECTS ----------------------------- */}


      {!seeMoreProjects && (
        <div className="flex justify-center mt-16 ">
          <button
            onClick={handleSeeProjects}
            className="transition ease-in-out duration-500 w-full md:w-auto mx-10 md:mx-0 py-4 px-8 bg-gray-700 text-white font-bold rounded-lg hover:shadow-quotesHover hover:bg-gray-900"
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
