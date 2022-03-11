import React, { useRef, useState } from "react";
import Works from "./Works/Works";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import ParallaxComponent from "./Parallax";
import { ContactMe } from "./ContactMe";
import { Freelance } from "./Freelance/Freelance";

export const Home = () => {
  const divRef = useRef(null);


  const [loadImage1, setLoadImage1] = useState(true);
  const [loadImage2, setLoadImage2] = useState(true);

  console.log(loadImage1, loadImage2);

  return (
    <div>
      <ParallaxComponent setLoadImage1={setLoadImage1} />
      <Works divRef={divRef} setLoadImage2={setLoadImage2} />
      <Freelance />
      <AboutMe />
      <ContactMe />
      <Footer divRef={divRef} />
    </div>
  );
};
