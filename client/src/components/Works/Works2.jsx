import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import s from "./Works.module.css";
import { ArrowDownIcon } from "@heroicons/react/solid";

//Media
import homeAlkemy from "../../Media/alkemy/home.png";
import homeTodo1 from "../../Media/todo/home1.png";
import homeCognizant from "../../Media/cognizant/1.png";
import chat from "../../Media/chatroom.png";

//Components
import { Alkemy } from "./Apps/Alkemy";
import TodoApp from "./Apps/TodoApp";
import { Cognizant } from "./Apps/Cognizant";

export const Works2 = () => {
  const [seeMoreChat, setSeeMoreChat] = useState(false);
  const [seeMoreAlkemy, setSeeMoreAlkemy] = useState(false);
  const [seeMoreTodo, setSeeMoreTodo] = useState(false);
  const [seeMoreCognizant, setSeeMoreCognizant] = useState(false);

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
    <>
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

      {/* <div className="grid grid-cols-3 gap-x-12 items-center  ">
      {!seeMoreChat && (
        <div className="hidden md:col-span-1 md:flex justify-end font-bold  text-white  text-center">
          <div className="">
            <p className="text-3xl">CHAT ROOM APP</p>
            <p className="text-lg">currently working on it</p>
          </div>
        </div>
      )}
      <div className="col-span-3 md:col-span-2">
        <Fade triggerOnce>
          <div className="mt-24 flex justify-center md:justify-start">
            {!seeMoreChat && (
              <div className={s.image}>
                <img className={s.image__img} src={chat} alt="chat_room" />
                <div className={s.image__overlay}> */}
      {/* <button onClick={handleOnClickCuyo}> */}
      {/* <a
                    href="https://github.com/Facupelli/chat-room"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={s.image__title}>
                      <div>SEE MORE</div>
                      <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                    </div>
                  </a> */}
      {/* </button> */}
      {/* </div>
              </div>
            )}
          </div>
        </Fade>
      </div>
    </div> */}

      {/* ----------------------------------- CHAT-ROOM DESPLIEGUE ------------------------------------------ */}

      {/* <div className="pt-20">
      {seeMoreChat && (
        <CuyoBrewers
          setSeeChat={setSeeMoreChat}
          seeMoreChat={seeMoreChat}
        />
      )}
    </div> */}
    </>
  );
};
