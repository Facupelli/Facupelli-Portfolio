import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { ArrowUpIcon, LinkIcon } from "@heroicons/react/solid";
import { MarkGithubIcon } from "@primer/octicons-react";

export default function WebService({ setSeeMoreWeb, seeMoreWeb }) {
  const handleOnClick = () => {
    setSeeMoreWeb(!seeMoreWeb);
  };
  return (
    <div className="grid pb-24 grid-cols-2 gap-x-5 gap-y-10 place-items-center place-content-center">
      {/* ------------------------------------- TITULO --------------------------------------------- */}
      <div
        className="col-span-2 flex justify-center  gap-4 pb-4 items-center"
        align="center"
      >
        <Fade triggerOnce>
          <p className="text-3xl font-semibold text-pink-400 hover:text-pink-100">
            WEBSERVICE
          </p>
          <a
            href="https://pf-web-service.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkIcon className="h-6 w-6 text-pink-400 hover:text-pink-100 animate-bounce-slow" />
          </a>
          {/* <img src={github} alt="github" className="h-6 w-6 fill-pink-400" /> */}
          <a
            href="https://github.com/Facupelli/PI-Dogs"
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
        <Slide duration={1500} triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              This was my last project at Henry Bootcamp, I worked with 7
              teammates both in the FRONT-END and BACK-END to create this app.
              WebService is a service e-commerce where you can offer or buy a
              service.
            </p>
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1" align="left">
        <Slide triggerOnce>
          <img
            className="shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785254/webservice_1_hs8uig.png"
            alt="landing"
          />
        </Slide>
      </div>

      {/* ------------------------------------- SEGUNDO PARRAFO --------------------------------------------- */}
      <div className="col-span-2 md:col-span-1" align="right">
        <Slide duration={1500} triggerOnce>
          <img
            className="shadow-worksImagesLeft ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785253/webservice_2_goezem.png"
            alt="landing"
          />
        </Slide>
      </div>

      {/* <GridItem colSpan={1} align="right">
        <Image
          w="300px"
          h="250px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785251/webservice_3_vd7kaj.png"
          alt="landing"
        />
      </GridItem> */}

      <div className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              The technologies we used for this project were React, Redux,
              Material UI among other libraries for the FRONT-END. Node.js,
              Express, Sequelize and PSQL for the BACK-END. Other tools we used
              were Git, Github, Heroku and Vercel. We also worked with SCRUM
              methodology.
            </p>
          </div>
        </Slide>
      </div>

      {/* ------------------------------------- TERCER PARRAFO --------------------------------------------- */}
      <div align="right" className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={1500} triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              In the app you can post a service, add a service to favourites,
              buy a service and then rate it among other functions. As the Admin
              user you can view all kind of statistics related to users and to
              the services offered.
            </p>
          </div>
        </Slide>
      </div>

      {/* <GridItem colSpan={1} align="cenleftter">
        <Image
          w="300px"
          h="250px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785253/webservice_4_bm6mog.png"
          alt="landing"
        />
      </GridItem> */}

      <div className="col-span-2 md:col-span-1" align="cenleftter">
        <Slide triggerOnce>
          <img
            className="shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785251/webservice_5_injoqw.png"
            alt="landing"
          />
        </Slide>
      </div>
    </div>
  );
}
