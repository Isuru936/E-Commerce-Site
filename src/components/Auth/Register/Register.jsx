import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";

function Register({ setClose, setIsLogin }) {
  return (
    <div className="w-screen h-screen bg-[#ffffff56] absolute flex justify-center items-center top-0 text-black">
      <div className="w-96 h-4/6 p-5 text-white rounded-lg bg-black flex flex-col">
        <div className="flex justify-end">
          <button
            className="p-1 rounded-full hover:bg-white hover:text-black duration-200 ease-in-out transition-colors"
            onClick={() => {
              setClose(true);
            }}
          >
            <Icon icon="line-md:close" className="text-sm" />
          </button>
        </div>
        <div className="w-full flex flex-col justify-center">
          <Image
            src="/logo.jpeg"
            width={130}
            height={100}
            alt="logo"
            className="m-auto"
          />
          <p className="text-lg text-center mt-3">Register</p>
          <form className="w-full gap-2 flex-col flex">
            <div className="w-full gap-2 p-5 text-black flex-col flex">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 focus:ring-white rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 focus:ring-white rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 rounded-lg"
              />
              <button className="mt-3 w-full border-white border p-2 rounded-lg button">
                Register
              </button>
            </div>
          </form>
          <div className="flex text-gray-400 items-center gap-5">
            <hr className="w-full" />
            <p className="pl-2 pr-2">OR</p>
            <hr className="w-full" />
          </div>
          <div className="mt-3 text-red-700">
            Already a member?{" "}
            <button
              className="w-full border border-white p-2 text-white rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
              onClick={() => setIsLogin(true)} // Switch to Login component
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
