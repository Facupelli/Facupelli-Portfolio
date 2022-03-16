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
import Apps from "./Apps/Apps";

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
      {!seeMoreTodo && (
        <Apps
          title="TODO APP"
          description="create folders, post to-do"
          description2="mark them as complete"
          link="https://to-do-challenge-facupelli.vercel.app"
          repo="https://github.com/Facupelli/TO-DO-Challenge"
          handleOnClick={handleOnClickTodo}
          image={homeTodo1}
        />
      )}

      {/* ----------------------------------- TODO-APP DESPLIEGUE ------------------------------------------ */}

      {seeMoreTodo && (
        <TodoApp setSeeMoreTodo={setSeeMoreTodo} seeMoreTodo={seeMoreTodo} />
      )}

      {/* ----------------------------------- ALKEMY CARD ------------------------------------------ */}

      {!seeMoreAlkemy && (
        <Apps
          title="HOTEL MENU APP"
          description="Create the menu where"
          description2="2 plates have to be vegan"
          repo="https://github.com/Facupelli/Frontend-Alkemy-Challenge"
          handleOnClick={handleOnClickAlkemy}
          image={homeAlkemy}
        />
      )}

      {/* ----------------------------------- ALKEMY DESPLIEGUE ------------------------------------------ */}

      {seeMoreAlkemy && (
        <Alkemy
          setSeeMoreAlkemy={setSeeMoreAlkemy}
          seeMoreAlkemy={seeMoreAlkemy}
        />
      )}

      {/* ----------------------------------- COGNIZANT CHALLENGE CARD ------------------------------------------ */}
      {!seeMoreCognizant && (
        <Apps
          title="COGNIZANT"
          subtitle="CHALLENGE"
          description="interview process app"
          link="https://cognizant-challenge-delta.vercel.app/"
          repo="https://github.com/Facupelli/Cognizant-Challenge"
          handleOnClick={handleOnClickCognizant}
          image={homeCognizant}
        />
      )}

      {/* ----------------------------------- COGNIZANT CHALLENGE DESPLIEGUE ------------------------------------------ */}

      {seeMoreCognizant && (
        <Cognizant
          setSeeMoreCognizant={setSeeMoreCognizant}
          seeMoreCognizant={seeMoreCognizant}
        />
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
