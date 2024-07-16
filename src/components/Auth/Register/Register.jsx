import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Image from "next/image";
import Login from "../Login/Login";
import { redirect } from "next/dist/server/api-utils";

function Register({ onClose }) {
  return (
    <>
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
            <p className="text-white">I am</p>
            <div className="flex text-gray-400 items-center">
              <button className="w-fit text-white flex-1 border-r-1 rounded-r-none border border-white p-2 hover:bg-red-900 rounded-lg pt-2">
                <a href="/admin/food">Admin</a>
              </button>
              <button className="w-fit text-white flex-1 border rounded-l-none border-white p-2 hover:bg-red-900 rounded-lg pt-2">
                Client
              </button>
            </div>
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
        </div>
      </div>
    </>
  );
}

export default Register;
