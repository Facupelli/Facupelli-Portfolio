import React from "react";

export default function Name() {
  return (
    <div className="pl-12 pt-12 md:pl-28 md:pt-20  ">
      <div>
        <h6 className="text-sm font-body">Hi, my name is</h6>
        <h2 className="font-semibold text-5xl font-title">Facundo Pellicer.</h2>
        <h2 className="font-bold text-3xl font-title">Full Stack Developer.</h2>
      </div>

      <div className="w-75% md:w-35%  mt-2 text-base font-body">
        <p>
          I'm a developer who loves to code and like challenges. I like playing paddle.
          Everything is better with music. I also love mountains (San Juan) and
          making homebrew beer. 🍻
        </p>
      </div>
    </div>
  );
}
