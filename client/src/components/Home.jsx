import React, { useRef, useState } from "react";
import Works from "./Works/Works";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import ParallaxComponent from "./ParallaxComponent";
import { ContactMe } from "./ContactMe";
import { Freelance } from "./Freelance/Freelance";
import Quotte2 from "./Quotte2";

export const Home = () => {
  const divRef = useRef(null);

  const [loadImage1, setLoadImage1] = useState(true);
  const [loadImage2, setLoadImage2] = useState(true);

  console.log(loadImage1, loadImage2);

  return (
    <div className="bg-gray-900">
      <ParallaxComponent setLoadImage1={setLoadImage1} />
      <div className="max-w-7xl mx-auto">
        <Works divRef={divRef} setLoadImage2={setLoadImage2} />
        <Freelance />
        <AboutMe />
        <Quotte2 />
        <ContactMe />
        <Footer divRef={divRef} />
      </div>
    </div>
  );
};
