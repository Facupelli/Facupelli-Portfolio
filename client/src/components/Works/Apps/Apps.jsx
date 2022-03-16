import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  ArrowDownIcon,
  ArrowCircleDownIcon,
  LinkIcon,
} from "@heroicons/react/solid";
import s from "../Works.module.css";
import { MarkGithubIcon } from "@primer/octicons-react";

export default function Apps({
  title,
  subtitle,
  description,
  description2,
  link,
  repo,
  handleOnClick,
  image
}) {
  

  return (
    <div className="grid grid-cols-3 gap-x-12 items-center mb-24">
      <div className="hidden md:col-span-1 md:flex justify-end font-bold  text-white text-3xl text-center">
        <div className="">
          <p>{title}</p>
          {subtitle && <p>{subtitle}</p>}
          <p className="text-lg">{description}</p>
          {description2 && <p className="text-lg">{description2}</p>}
          <div className="flex items-center justify-center mt-2 gap-6">
            <div className="flex flex-col text-gray-400 hover:text-pink-200 pt-4">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <LinkIcon className="h-6 w-6  " />
                <p className="text-xs pt-2  ">LINK</p>
              </a>
            </div>
            <div className="flex flex-col text-gray-400 hover:text-pink-100 p-0">
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
              >
                <MarkGithubIcon className="h-6 w-6 " />
                <p className="text-xs pt-2">REPO</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-3 md:col-span-2 ">
        <Fade triggerOnce>
          <div className=" flex justify-center md:justify-start">
            <div className={s.image}>
              <img className={s.image__img} src={image} alt="webservice" />
              <div className={s.image__overlay}>
                <button onClick={handleOnClick}>
                  <div className={s.image__title}>
                    <div>SEE MORE</div>
                    <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
