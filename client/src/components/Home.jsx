import React, { useRef } from "react";
import Works from "./Works/Works";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import ParallaxComponent from "./Parallax";
import { Fade } from "react-awesome-reveal";

export const Home = () => {

  const divRef = useRef(null);


  return (
    <div>
      <ParallaxComponent />
      <Works divRef={divRef} />
      <Fade duration={1500} triggerOnce>
        <AboutMe />
      </Fade>
      <Footer divRef={divRef} />
    </div>
  );
};
