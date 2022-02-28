import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
// import apiKey from "../utils/emailjs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
emailjs.init(process.env.REACT_APP_USER_ID );

const schema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().email(),
  message: yup.string().required().min(2).max(50),
});

export const ContactMe = ({ setModal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data,e) => {
    try {
      console.log(data);

      e.preventDefault()

      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID ,
          process.env.REACT_APP_TEMPLATE_ID ,
          data
        )
        .then(
          (response) => {
            console.log(
              "Mail Sent! I will contact you soon.",
              response.status,
              response.text
            );
            alert("Mail Sent! I will contact you soon.");
          },
          (error) => {
            console.log("FAILED...", error);
            alert("Error, pleas try again.", error);
          }
        );

      setModal(false);
      document.body.style.overflow = "unset";
    } catch (e) {
      console.log({ onSubmitError: e });
    }
  };

  console.log("ERRORS:", errors);

  const handleCloseModal = () => {
    setModal(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex justify-center items-center md:inset-0  sm:h-full">
      <div className="relative px-4 w-full max-w-3xl h-full md:h-auto">
        <div className="relative bg-gray-900 rounded-lg shadow-modalShadow">
          <div className="text-white bg-gray-800 rounded-lg p-6">
            <div className="flex justify-end">
              <p
                onClick={handleCloseModal}
                className="font-bold pr-4 m-0 cursor-pointer text-pink-400"
              >
                X
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-6 grid-cols-6 items-end text-lg mx-auto ">
                <label className="col-span-1 font-semibold ">Name:</label>
                <input
                  {...register("name")}
                  name="name"
                  className="col-span-5  p-2 bg-gray-800 border-b-2 border-cyan-200 focus:outline-none focus:border-pink-400"
                />
                <label className="col-span-1 font-semibold">Email:</label>
                <input
                  {...register("email")}
                  name="email"
                  className="col-span-5 bg-gray-800 border-b-2 border-cyan-200 focus:outline-none focus:border-pink-400 p-2"
                />
                <label className="col-span-1 font-semibold">Message:</label>
                <textarea
                  {...register("message")}
                  name="message"
                  className="col-span-5 bg-gray-800 border-b-2 border-cyan-200 focus:outline-none focus:border-pink-400 p-2"
                />
                <div className="col-span-3"></div>
                <button
                  type="submit"
                  className="transition ease-in-out col-span-3 w-full mt-6  bg-cyan-200 py-2 px-4 text-gray-900 font-bold rounded-sm hover:bg-pink-400"
                >
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
