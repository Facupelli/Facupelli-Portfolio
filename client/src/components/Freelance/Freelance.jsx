import React, { useState } from "react";
import s from "../Works/Works.module.css";
import { ArrowDownIcon, ArrowCircleDownIcon } from "@heroicons/react/solid";
import { Fade } from "react-awesome-reveal";
import alalaCasa1 from "../../Media/AlalaCampo/alalaCasa1.png";

export const Freelance = () => {
  const [alalaCampo, setAlalaCampo] = useState(false);

  const handleOnClickAlala = () => {
    setAlalaCampo(true);
  };

  return (
    <div className="bg-gray-900 pb-16">
      <div className="flex items-center gap-x-2 pl-10 py-8 md:py-16 ">
        <h1 className="font-semibold pb-2 text-4xl text-white border-b-2 border-gray-900 transition ease-in-out duration-500 hover:border-cyan-200">
          Freelance
        </h1>
        <ArrowCircleDownIcon
          className={`w-8 text-white  animate-bounce-slow`}
        />
      </div>

      <div className="grid grid-cols-3 gap-x-12 items-center ">
        {!alalaCampo && (
          <div className="hidden md:col-span-1 md:flex justify-end font-bold  text-white text-2xl text-center">
            <div className="">
              <p>ALALA CAMPO</p>
              <p className="text-xl">Info website</p>
            </div>
          </div>
        )}
        <div className="col-span-3 md:col-span-2 ">
          <Fade triggerOnce>
            <div className=" flex justify-center md:justify-start">
              {!alalaCampo && (
                <div className={s.image}>
                  <img
                    className={s.image__img}
                    src={alalaCasa1}
                    alt="alalaCasa1"
                  />
                  <div className={s.image__overlay}>
                    {/* <button onClick={handleOnClickAlala}> */}
                    <a
                      href="https://alalacampo.com"
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
    </div>
  );
};
