import React from "react";
import { Parallax } from "react-parallax";
import MattersQuote from "./MattersQuote";
import manosImage from "../imgs/manosWall.png";

export default function Quotte2({ setLoadImage2 }) {
  const handleLoad = () => {
    setLoadImage2(false);
  };

  return (
    <>
      <div className="hidden md:block shadow-inner mt-32">
        <Parallax bgImage={manosImage} strength={300} onLoad={handleLoad}>
          <div style={{ height: 300 }}>
            <MattersQuote
              text="Voy a subir todo lo más que pueda!"
              icon={false}
            />
          </div>
        </Parallax>
      </div>
    </>
  );
}
