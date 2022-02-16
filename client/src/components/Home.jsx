import React, { useRef, useState } from "react";
import Works from "./Works/Works";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import ParallaxComponent from "./Parallax";
import { Fade } from "react-awesome-reveal";

export const Home = () => {

  const divRef = useRef(null);

  const [loadImage1, setLoadImage1] = useState(true)
  const [loadImage2, setLoadImage2] = useState(true)

  console.log(loadImage1, loadImage2)



  return (
    <div>
      <ParallaxComponent setLoadImage1={setLoadImage1} />
      <Works divRef={divRef} setLoadImage2={setLoadImage2} />
      <Fade duration={1500} triggerOnce>
        <AboutMe />
      </Fade>
      <Footer divRef={divRef} />
    </div>
  );
};
