import React from "react";

export default function Name() {
  return (
    <div className='pl-12 pt-8 md:pl-28 md:pt-20'>
      <div>
        <h6 className='text-sm font-body'>
          Hi, my name is
        </h6>
        <h2 className='font-semibold text-5xl font-title'>
          Facundo Pellicer.
        </h2>
        <h2 className='font-bold text-3xl font-title'>
          Full Stack Developer
        </h2>
      </div>

      <div  className='w-75% md:w-35% mt-2 text-base font-body'>
        <p>
          I'm a developer with great team work ability. I love code and I'm always trying to
          learn from everything I see and from other people. I love being
          autodidact and I'm very curious. I also love mountains (I live near Cordillera de los Andes) and making
          homemade beer 🍻
        </p>
      </div>
    </div>
  );
}