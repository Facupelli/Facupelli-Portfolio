import React, { useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { ArrowDownIcon, ArrowCircleDownIcon } from "@heroicons/react/solid";
import s from "./Works.module.css";

//Media
import chat from "../../Media/chatroom.png";
import home from "../../Media/cuyobrewers/newHome.png";
import homeAlkemy from "../../Media/alkemy/home.png";
import homeTodo1 from "../../Media/todo/home1.png";
import homeCognizant from "../../Media/cognizant/1.png";

//Components
import Dogs from "./Apps/Dogs";
import WebService from "./Apps/WebService";
import CuyoBrewers from "./Apps/CuyoBrewers";
import Matters from "../MattersQuote";
import { Alkemy } from "./Apps/Alkemy";
import TodoApp from "./Apps/TodoApp";
import { Cognizant } from "./Apps/Cognizant";
import Wallpaper from "./Wallpaper";

// import { ArrowDownIcon } from "@primer/octicons-react";

export default function Works({ divRef, setLoadImage2 }) {
  const [seeMoreDogs, setSeeMoreDogs] = useState(false);
  const [seeMoreWeb, setSeeMoreWeb] = useState(false);
  const [seeMoreCuyo, setSeeMoreCuyo] = useState(false);
  const [seeMoreChat, setSeeMoreChat] = useState(false);
  const [seeMoreAlkemy, setSeeMoreAlkemy] = useState(false);
  const [seeMoreTodo, setSeeMoreTodo] = useState(false);
  const [seeMoreCognizant, setSeeMoreCognizant] = useState(false);

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

  const handleOnClickAlkemy = () => {
    setSeeMoreAlkemy(!seeMoreAlkemy);
  };

  const handleOnClickTodo = () => {
    setSeeMoreTodo(!seeMoreTodo);
  };

  const handleOnClickCognizant = () => {
    setSeeMoreCognizant(!seeMoreCognizant);
  };

  const handleOnClickChat = () => {
    setSeeMoreChat(!seeMoreChat);
  };

  return (
    <div className="bg-gray-900" ref={divRef}>
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

      {/* ----------------------------------- ALKEMY CARD ------------------------------------------ */}

      <div className="grid grid-cols-3 gap-x-12 items-center  ">
        {!seeMoreAlkemy && (
          <div className="hidden md:col-span-1 md:flex justify-end font-bold  text-white  text-center">
            <div className="md:mt-32">
              <p className="text-3xl">HOTEL MENU APP</p>
              <p className="text-lg">Create the menu where</p>
              <p className="text-lg">2 plates have to be vegan</p>
            </div>
          </div>
        )}
        <div className="col-span-3 md:col-span-2">
          <Fade triggerOnce>
            <div className="mt-24 md:mt-32 flex justify-center md:justify-start ">
              {!seeMoreAlkemy && (
                <div className={s.image}>
                  <img
                    className={s.image__img}
                    src={homeAlkemy}
                    alt="chat_room"
                  />
                  <div className={s.image__overlay}>
                    <button onClick={handleOnClickAlkemy}>
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

      {/* ----------------------------------- ALKEMY DESPLIEGUE ------------------------------------------ */}

      {seeMoreAlkemy && (
        <div className="">
          <Alkemy
            setSeeMoreAlkemy={setSeeMoreAlkemy}
            seeMoreAlkemy={seeMoreAlkemy}
          />
        </div>
      )}

      {/* ----------------------------------- TODO-APP CARD ------------------------------------------ */}
      <div className="grid grid-cols-3 gap-x-12 items-center  ">
        {!seeMoreTodo && (
          <div className="hidden md:col-span-1 md:flex justify-end font-bold  text-white  text-center">
            <div className="mt-24">
              <p className="text-3xl">TODO APP</p>
              <p className="text-lg">create folders,post to-do</p>
              <p className="text-lg">mark them as complete</p>
            </div>
          </div>
        )}
        <div className="col-span-3 md:col-span-2">
          <Fade triggerOnce>
            <div className="mt-24 flex justify-center md:justify-start">
              {!seeMoreTodo && (
                <div className={s.image}>
                  <img
                    className={s.image__img}
                    src={homeTodo1}
                    alt="chat_room"
                  />
                  <div className={s.image__overlay}>
                    <button onClick={handleOnClickTodo}>
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

      {/* ----------------------------------- TODO-APP DESPLIEGUE ------------------------------------------ */}

      {seeMoreTodo && (
        <div className="">
          <TodoApp setSeeMoreTodo={setSeeMoreTodo} seeMoreTodo={seeMoreTodo} />
        </div>
      )}

      {/* ----------------------------------- COGNIZANT CHALLENGE CARD ------------------------------------------ */}

      <div className="grid grid-cols-3 gap-x-12 items-center  ">
        {!seeMoreCognizant && (
          <div className="hidden md:col-span-1 md:flex justify-end font-bold  text-white  text-center">
            <div className="mt-24">
              <p className="text-3xl">COGNIZANT</p>
              <p className="text-3xl">CHALLENGE</p>
              <p className="text-lg">interview process app</p>
            </div>
          </div>
        )}
        <div className="col-span-3 md:col-span-2">
          <Fade triggerOnce>
            <div className="mt-24 flex justify-center md:justify-start">
              {!seeMoreCognizant && (
                <div className={s.image}>
                  <img
                    className={s.image__img}
                    src={homeCognizant}
                    alt="chat_room"
                  />
                  <div className={s.image__overlay}>
                    <button onClick={handleOnClickCognizant}>
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

      {/* ----------------------------------- COGNIZANT CHALLENGE DESPLIEGUE ------------------------------------------ */}

      {seeMoreCognizant && (
        <div className="">
          <Cognizant
            setSeeMoreCognizant={setSeeMoreCognizant}
            seeMoreCognizant={seeMoreCognizant}
          />
        </div>
      )}

      {/* ----------------------------------- CHAT-ROOM CARD ------------------------------------------ */}

      <div className="grid grid-cols-3 gap-x-12 items-center  ">
        {!seeMoreCognizant && (
          <div className="hidden md:col-span-1 md:flex justify-end font-bold  text-white  text-center">
            <div className="">
              <p className="text-3xl">CHAT ROOM APP</p>
              <p className="text-lg">currently working on it</p>
            </div>
          </div>
        )}
        <div className="col-span-3 md:col-span-2">
          <Fade triggerOnce>
            <div className="mt-24 flex justify-center md:justify-start md:pb-32">
              {!seeMoreChat && (
                <div className={s.image}>
                  <img className={s.image__img} src={chat} alt="chat_room" />
                  <div className={s.image__overlay}>
                    {/* <button onClick={handleOnClickCuyo}> */}
                    <a
                      href="https://github.com/Facupelli/chat-room"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className={s.image__title}>
                        <div>SEE MORE</div>
                        <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                      </div>
                    </a>
                    {/* </button> */}
                  </div>
                </div>
              )}
            </div>
          </Fade>
        </div>
      </div>

      {/* ----------------------------------- CHAT-ROOM DESPLIEGUE ------------------------------------------ */}

      {/* <div className="pt-20">
        {seeMoreChat && (
          <CuyoBrewers
            setSeeChat={setSeeMoreChat}
            seeMoreChat={seeMoreChat}
          />
        )}
      </div> */}

      {/* --------------------------             MATTERS QUOTE ------------------------------------------ */}
      <div className="md:hidden block">
        <Fade triggerOnce>
          <Matters />
        </Fade>
      </div>

    </div>
  );
}
