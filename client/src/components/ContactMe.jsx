import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
// import apiKey from "../utils/emailjs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MailIcon } from "@heroicons/react/solid";
import { Fade } from "react-awesome-reveal";

emailjs.init(process.env.REACT_APP_USER_ID);

const schema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().email(),
  message: yup.string().required().min(2).max(50),
});

export const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data, e) => {
    try {
      console.log(data);

      e.preventDefault();

      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
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
            alert("Error, please try again.", error);
          }
        );

      reset();
    } catch (e) {
      console.log({ onSubmitError: e });
    }
  };

  return (
    <div className="bg-gray-900 pt-16 ">
      <div className="flex items-center gap-x-2 pl-10  pb-16 md:pl-28 md:py-16 ">
        <p className="font-semibold text-4xl text-white ">Contact Me</p>
        <MailIcon className="w-8 text-white" />
      </div>
      <Fade duration={2500} triggerOnce>
        <div className="flex justify-center pb-16 mx-6 md:mx-0">
          <div className=" rounded-lg shadow-modalShadow md:w-3/4">
            <div className="text-white bg-gray-900 rounded-lg px-2 md:px-8 py-6 md:py-12 border-b-2 border-r-4 border-gray-800">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-y-6 grid-cols-6 items-end text-lg mx-auto ">
                  <label className="col-span-2 md:col-span-1 font-semibold ">
                    Name:
                  </label>
                  <input
                    {...register("name")}
                    name="name"
                    className="col-span-4 md:col-span-5  p-2 rounded bg-gray-800 border-b-2 border-cyan-200 focus:outline-none focus:border-pink-400"
                  />
                  <span className="col-span-1"></span>
                  <span className="col-span-5 text-pink-500 font-semibold">
                    {errors.name && errors.name.message}
                  </span>
                  <label className="col-span-2 md:col-span-1 font-semibold">
                    Email:
                  </label>
                  <input
                    {...register("email")}
                    name="email"
                    className="col-span-4 md:col-span-5 rounded bg-gray-800 border-b-2 border-cyan-200 focus:outline-none focus:border-pink-400 p-2"
                  />
                  <span className="col-span-1"></span>
                  <span className="col-span-5 text-pink-500 font-semibold">
                    {errors.email && errors.email.message}
                  </span>
                  <label className="col-span-2 md:col-span-1 font-semibold">
                    Message:
                  </label>
                  <textarea
                    {...register("message")}
                    name="message"
                    className="col-span-4 md:col-span-5 rounded bg-gray-800 border-b-2 border-cyan-200 focus:outline-none focus:border-pink-400 p-2"
                  />
                  <span className="col-span-1"></span>
                  <span className="col-span-5 text-pink-500 font-semibold">
                    {errors.message && errors.message.message}
                  </span>
                  <div className="col-span-3"></div>
                  <button
                    type="submit"
                    className="transition ease-in-out duration-500 col-span-3 w-full mt-6 hover:shadow-quotesHover hover:text-white hover:bg-gray-900 bg-cyan-200 py-2 px-4 text-gray-900 font-bold rounded-sm "
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
