import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { ArrowUpIcon, LinkIcon } from "@heroicons/react/solid";
import { MarkGithubIcon } from "@primer/octicons-react";

export default function WebService({ setSeeMoreWeb, seeMoreWeb }) {
  const handleOnClick = () => {
    setSeeMoreWeb(!seeMoreWeb);
  };
  return (
    <div className="grid mb-16 md:mb-24 grid-cols-2 gap-x-5 gap-y-10 place-items-center place-content-center mx-10">
      {/* ------------------------------------- TITULO --------------------------------------------- */}
      <div
        className="col-span-2 flex justify-center  gap-2 md:gap-6 md:pb-4 items-center"
        align="center"
      >
        <Fade triggerOnce>
          <p className="text-2xl md:text-3xl font-semibold text-pink-400 hover:text-pink-100">
            WEBSERVICE
          </p>
          <div className="hidden md:flex gap-4 items-end ">
            <a
              href="https://pf-web-service.vercel.app/"
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
              <MarkGithubIcon className="w-6 h-6 text-pink-400 hover:text-pink-100" />
              <p className="text-xs pt-2 text-pink-200">REPO</p>
            </a>
          </div>
          <ArrowUpIcon
            className="h-6 w-6 md:ml-4 text-cyan-400 cursor-pointer hover:text-pink-100"
            onClick={handleOnClick}
          />
        </Fade>
      </div>

      {/* ------------------------------------- PRIMER PARRAFO --------------------------------------------- */}
      <div className="col-span-2 md:col-span-1 mt-auto mb-auto ">
        <Slide duration={2000} triggerOnce>
          <div className="px-8 md:p-8 flex justify-end">
            <p className="md:w-3/4 text-white font-body md:text-right">
              This was my last project at Henry Bootcamp, I worked with 7
              teammates both in the FRONT-END and BACK-END to create this app.
              WebService is a service e-commerce where you can offer or buy a
              service.
            </p>
          </div>
        </Slide>
      </div>

      <div className="col-span-2 md:col-span-1 " align="left">
        <Slide duration={1500} triggerOnce>
          <img
            className="md:shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785254/webservice_1_hs8uig.png"
            alt="landing"
          />
        </Slide>
      </div>

      {/* ------------------------------------- SEGUNDO PARRAFO --------------------------------------------- */}
      <div className="col-span-2 md:col-span-1" align="right">
        <Slide duration={2000} triggerOnce>
          <img
            className="shadow-none md:shadow-worksImagesLeft ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
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
        <Slide duration={1500} triggerOnce>
          <div className="px-8 md:p-8">
            <p className="md:w-3/4 text-white font-body">
              The technologies we used for this project were{" "}
              <span className="font-semibold text-cyan-100">
                React, Redux, Material UI
              </span>
              among other libraries for the FRONT-END.{" "}
              <span className="font-semibold text-cyan-100">
                Node.js, Express, Sequelize
              </span>
              and <span className="font-semibold text-cyan-100">PSQL </span> for
              the BACK-END. Other tools we used were{" "}
              <span className="font-semibold text-cyan-100">
                Git, Github, Heroku
              </span>{" "}
              and
              <span className="font-semibold text-cyan-100"> Vercel</span>. We
              also worked with SCRUM methodology.
            </p>
          </div>
        </Slide>
      </div>

      {/* ------------------------------------- TERCER PARRAFO --------------------------------------------- */}
      <div  className="col-span-2 md:col-span-1 mt-auto mb-auto">
        <Slide duration={2000} triggerOnce>
          <div className="px-8 md:p-8 flex justify-end">
            <p className="md:w-3/4 text-white font-body md:text-right">
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
        <Slide duration={1500} triggerOnce>
          <img
            className="md:shadow-worksImagesRight ml-6 md:ml-0 rounded-lg w-90% md:w-3/4"
            objectfit="cover"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785251/webservice_5_injoqw.png"
            alt="landing"
          />
        </Slide>
      </div>
    </div>
  );
}
