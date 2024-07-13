import NavBar from "@/components/NavBar/NavBar";
import { Roboto_Condensed } from "next/font/google";
import React from "react";

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  style: "italic",
  weight: "300",
});

const page = () => {
  return (
    <div
      className="bg-black w-screen h-screen text-white text-xl"
      style={{
        backgroundImage: "url('/contact.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full h-screen flex p-2 flex-col justify-center items-center bg-black bg-opacity-40">
        <p className="font-thin text-3xl leading-normal">BOOK YOUR TABLE</p>
        <p className="font-bold text-6xl lg:text-8xl leading-normal">
          Contact Us
        </p>
        <p
          className={`${roboto_Condensed.className} font-bold leading-normal text-center`}
        >
          Simply fill out the form below and have your seat ready
        </p>
      </div>
      <div className="absolute bottom-0 right-0">
        <NavBar />
      </div>
      <div className="flex flex-col lg:flex-row p-10 w-screen h-screen items-center lg:pl-40 lg:pr-40 gap-10 lg:gap-32 text-black">
        <div className="text-black bg-yellow-50 p-10 flex-1 max-w-96 h-fit">
          <div className=" mb-5">
            <h1 className="text-2xl leading-relaxed">Working Hours</h1>
            <p className="text-sm leading-relaxed">Mon – Thurs : 1PM – 12 PM</p>
            <p className="text-sm leading-relaxed">Fri – Sun : 10 AM – 11 PM</p>
          </div>
          <div className=" mb-5">
            <h1 className="text-2xl leading-relaxed">Phone</h1>
            <p className="text-sm leading-relaxed">001-980-123-4567</p>
            <p className="text-sm leading-relaxed">000-980-123-7654</p>
          </div>
          <div>
            <h1 className="text-2xl">Email</h1>
            <p className="text-sm">orders@palermo.com</p>
          </div>
        </div>
        <div className="flex-1">
          <form className="">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
                style={{ outline: "none", boxShadow: "none" }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
                style={{ outline: "none", boxShadow: "none" }}
              />
            </div>
            <div className="mb-4 w-full ">
              <label htmlFor="name" className="block text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border rounded-lg border-gray-300 forced-color-adjust-none"
                rows="5"
                style={{ outline: "none", boxShadow: "none" }}
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white p-2 pl-5 pr-5 font-mono"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
