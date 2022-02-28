import React, { useEffect } from "react";

export const ContactMe = ({setModal}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

const handleCloseModal = () => {
    setModal(false)
    document.body.style.overflow = "unset";

}

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex justify-center items-center md:inset-0  sm:h-full">
      <div className="relative px-4 w-full max-w-3xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow-modalShadow">
          <div className="text-white bg-gray-800 rounded-sm p-6">
            <div className="flex justify-end">
              <p onClick={handleCloseModal} className="font-bold pr-4 m-0 cursor-pointer text-pink-400">X</p>
            </div>
            <form>
              <div className="grid gap-y-6 grid-cols-6 items-end text-lg mx-auto ">
                <label className="col-span-1 font-semibold ">Name:</label>
                <input className="col-span-5  p-2 bg-gray-800 border-b-2 border-cyan-200 focus:outline-none focus:border-pink-400" />
                <label className="col-span-1 font-semibold">Email:</label>
                <input className="col-span-5 bg-gray-800 border-b-2 border-cyan-200 focus:outline-none focus:border-pink-400 p-2" />
                <label className="col-span-1 font-semibold">Message:</label>
                <textarea className="col-span-5 bg-gray-800 border-b-2 border-cyan-200 focus:outline-none focus:border-pink-400 p-2" />
                <div className="col-span-3"></div>
                <button className="transition ease-in-out col-span-3 w-full mt-6  bg-cyan-200 py-2 px-4 text-gray-900 font-bold rounded-sm hover:bg-pink-400">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
