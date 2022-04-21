import React from "react";
import Name from "./Name";

const image1 =
  "https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80";

// const image1 =
//   "https://images.unsplash.com/photo-1616836417940-8898b8ef794d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

const insideStyles = {
  background: "",
};

export default function ParallaxComponent({ setLoadImage1 }) {
  const handleLoad = () => {
    setLoadImage1(false);
  };

  return (
    <>
      <div className="">
        <div
          style={{ height: 500 }}
          className="hidden md:block bg-lgIntro bg-cover bg-bottom-18 "
        >
          <Name />
        </div>
        <div className="md:hidden text-white mb-20">
          <Name />
        </div>
      </div>
    </>
  );
}
