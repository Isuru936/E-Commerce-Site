import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";
import Register from "../Register/Register";

function Login({ onClose }) {
  const [toggleSignUp, setToggleSignUp] = useState(false);

  const toggleSignUpHandler = () => {
    setToggleSignUp(!toggleSignUp);
  };

  return (
    <div className="w-screen h-screen bg-[#ffffff56] absolute flex justify-center items-center top-0 text-black">
      <div className="w-96 h-5/5 p-5 text-white rounded-lg bg-black flex flex-col">
        {toggleSignUp && <Register onClose={onClose} />}
        <div className={`${toggleSignUp ? "hidden" : ""}`}>
          <div className="flex justify-end">
            <button
              className="p-1 rounded-full hover:bg-white hover:text-black duration-200 ease-in-out transition-colors"
              onClick={onClose}
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
            <p className="text-lg text-center mt-3">
              Join with us to taste that inevitable
            </p>
            <form className="w-full flex-col flex">
              <div className="w-full gap-2 p-5 text-black flex-col flex">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-2 focus:ring-white rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 rounded-lg"
                />
                <div className="w-full flex pb-0 p-2">
                  <button className="w-fit text-white flex-1 border-r-0 rounded-r-none border border-white p-2 hover:bg-red-900 rounded-lg pt-2">
                    <a href="/admin/food">Admin</a>
                  </button>
                  <button className="w-fit text-white flex-1 border rounded-l-none border-white p-2 hover:bg-red-900 rounded-lg pt-2">
                    Client
                  </button>
                </div>
                <button className="mt-3 w-full border-white border p-2 pb-0 rounded-lg button">
                  Login
                </button>
              </div>
            </form>
            <div className="flex text-gray-400 items-center gap-5">
              <hr className="w-full" />
              <p className="pl-2 pr-2">OR</p>
              <hr className="w-full" />
            </div>
            <div className="mt-3">
              <button
                type="button"
                className="text-white w-full bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center me-2 mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                Sign in with Google
              </button>

              <button
                className="w-full border border-white p-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
                onClick={toggleSignUpHandler} // Switch to Register component
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
