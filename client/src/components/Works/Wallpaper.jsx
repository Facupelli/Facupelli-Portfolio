import React from "react";
import { Parallax } from "react-parallax";
import Matters from "../MattersQuote";
import codeImage from '../../imgs/codeWallpaper4.png'

const image1 =
  "https://images.hdqwalls.com/wallpapers/progamming-code-4k-nt.jpg";

const insideStyles = {
  background: "",
};




export default function Wallpaper({setLoadImage2}) {

  const handleLoad = () => {
    setLoadImage2(false)
  }

  return (
    <>
      <div className="hidden md:block shadow-inner ">
        <Parallax bgImage={codeImage} strength={200} onLoad={handleLoad}>
          <div style={{ height: 370 }}>
            <div style={insideStyles} className="mt-16" >
                <Matters />
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
}
