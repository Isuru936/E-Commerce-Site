"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { Roboto_Condensed } from "next/font/google";
import { Icon } from "@iconify/react";
import gsap from "gsap";

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  style: "italic",
  weight: "100",
});

const ManageFood = () => {
  const [isCurrentMenu, setIsCurrentMenu] = useState(true);
  const [addFood, setAddFood] = useState(false);
  const [addPromotion, setAddPromotion] = useState(false);
  const addFoodRef = useRef(null);
  const addPromotionRef = useRef(null);

  useEffect(() => {
    if (addFood) {
      gsap.fromTo(
        addFoodRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.2 }
      );
    }
  }, [addFood]);

  useEffect(() => {
    if (addPromotion) {
      gsap.fromTo(
        addPromotionRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.2 }
      );
    }
  }, [addPromotion]);

  const closeAddFood = () => {
    gsap.to(addFoodRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      onComplete: () => setAddFood(false),
    });
  };

  const closeAddPromotion = () => {
    gsap.to(addPromotionRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      onComplete: () => setAddPromotion(false),
    });
  };

  return (
    <div className="w-screen h-screen p-5 bg-black">
      <div className="w-full flex-col lg:flex-row flex items-start justify-between ">
        <div className="w-fit h-fit ">
          <a href="/">
            <Image
              src="/logo.jpeg"
              width={400}
              height={200}
              objectFit="cover"
              alt="logo"
            />
          </a>
          <p
            className={`text-white ${roboto_Condensed.className} pt-2 pl-2 align-bottom`}
          >
            Taste buds to the next levels
          </p>
        </div>

        <div className="text-white flex h-full p-2">
          <div className="text-white h-full p-2">
            <button
              className={`p-2 w-full border-2 rounded-lg mb-3 ${
                isCurrentMenu ? "button" : "bg-red-900 pt-3"
              }`}
              onClick={() => setIsCurrentMenu(!isCurrentMenu)}
            >
              Current Promotions
            </button>
            <button
              className={`p-2 w-full border-2 rounded-lg mb-3 ${
                isCurrentMenu ? "bg-red-900 pt-3" : "button"
              }`}
              onClick={() => setIsCurrentMenu(!isCurrentMenu)}
            >
              Current Menu
            </button>
          </div>
          <div className="text-white h-full p-2">
            <button
              className="p-2 border-2 rounded-lg mb-3 button hover:border-2 hover:border-red-900"
              onClick={() => setAddFood(!addFood)}
            >
              Add Food
            </button>
            <button
              className="p-2 border-2 rounded-lg button hover:border-2 hover:border-red-900"
              onClick={() => {
                setAddPromotion(!addPromotion);
              }}
            >
              Add Promotions
            </button>
          </div>
        </div>
      </div>
      <div className="w-full text-white bg-black p-4 overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-4 text-left border-b border-gray-700">
                Food Name
              </th>
              <th className="p-4 text-left border-b border-gray-700">Price</th>
              <th className="p-4 text-left border-b border-gray-700">Image</th>
              <th className="p-4 text-left border-b border-gray-700">
                Content
              </th>
              <th className="p-4 text-left border-b border-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-black hover:bg-red">
              <td className="p-4 border-b border-gray-700">Pizza</td>
              <td className="p-4 border-b border-gray-700">
                <p>Small: 790/=</p>
                <p>Large: 880/=</p>
                <p>Medium: 820/=</p>
              </td>
              <td className="p-4 border-b border-gray-700">
                <Image
                  src="https://max-themes.net/demos/palermo/upload/palermo_demos_08.jpg"
                  width={200}
                  height={600}
                  alt="Pizza"
                />
              </td>
              <td className="p-4 border-b border-gray-700 w-3/6">
                Pineapple, mushrooms, black olives, tomato saucePineapple,
                mushrooms, black olives, tomato saucePineapple, mushrooms, black
                olives, tomato sauce
              </td>
              <td className="p-4 border-b border-gray-700 gap-5">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-green-500/50 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {addFood && (
        <div className="w-screen h-screen bg-[#ffffff63] absolute top-0 left-0 z-50">
          <div className="flex justify-center items-center align-middle h-screen">
            <div
              className="w-3/4 h-fit bg-black flex flex-col rounded-lg p-4 "
              ref={addFoodRef}
            >
              <div className="w-full flex justify-between ">
                <Image src="/logo.jpeg" width={200} height={200} alt="logo" />
                <button className="p-1 h-fit rounded-full text-white hover:bg-white hover:text-black duration-200 ease-in-out transition-colors">
                  <Icon
                    icon="line-md:close"
                    className="hover:bg-white rounded-full text-lg "
                    onClick={closeAddFood}
                  />
                </button>
              </div>
              <div className="text-white w-full gap-10 flex flex-col lg:flex-row p-2 lg:p-10">
                <div className="flex-1 p-1">
                  <div>
                    <Image
                      src="https://max-themes.net/demos/palermo/upload/palermo_demos_08.jpg"
                      alt="food"
                      width={500}
                      height={400}
                    />
                  </div>
                  <div>
                    <label
                      className="block mt-2 text-sm text-white font-extralight"
                      htmlFor="file_input"
                    >
                      Upload file
                    </label>
                    <input
                      className="block w-full text-sm text-gray-400 border border-gray-700 rounded-lg cursor-pointer bg-gray-50 focus:outline-none "
                      id="file_input"
                      type="file"
                    />
                  </div>
                </div>
                <div className="flex-1 ">
                  <form className="w-full">
                    <div className="flex flex-col p-1 ">
                      <label htmlFor="foodName" className="font-extralight">
                        Food Name:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter food name"
                        name="foodName"
                        id="foodName"
                        className="p-1 rounded-lg w-full pl-2 text-black outline-none"
                      />
                    </div>
                    <p className="mt-5 font-extralight ">Food prices:</p> <hr />
                    <div className="flex flex-row gap-5 p-1">
                      <div>
                        <span className="text-pretty text-sm italic">
                          Small
                        </span>
                        <input
                          type="number"
                          name="small"
                          placeholder="Ex: 1,200"
                          className="p-1 pl-2 rounded-lg w-full outline-none text-black"
                        />
                      </div>
                      <div>
                        <span className="text-pretty text-sm italic">
                          Medium
                        </span>
                        <input
                          type="number"
                          placeholder="Ex: 1,200"
                          name="medium"
                          className="p-1 pl-2 rounded-lg w-full outline-none text-black"
                        />
                      </div>
                      <div>
                        <span className="text-pretty text-sm italic">
                          Large
                        </span>
                        <input
                          type="number"
                          name="large"
                          placeholder="Ex: 1,200"
                          className="p-1 pl-2 rounded-lg w-full outline-none text-black"
                        />
                      </div>
                    </div>
                    <div className="mt-5 ">
                      <p className="mb font-extralight">Content</p> <hr />
                      <textarea
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm mt-3 rounded-lg border  bg-white border-gray-600 placeholder-gray-400 text-black outline-none"
                        placeholder="Include the contents here..."
                      ></textarea>
                    </div>
                    <div className="flex h-full justify-end pt-5">
                      <button className="relative inline-flex items-center justify-end p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Add to Menu
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {addPromotion && (
        <div className="w-screen h-screen bg-[#ffffff63] absolute top-0 left-0 z-50">
          <div className="flex justify-center items-center align-middle h-screen">
            <div
              className="w-3/4 h-fit lg:h-3/4 bg-black flex flex-col rounded-lg p-4"
              ref={addPromotionRef}
            >
              <div className="w-full flex justify-between ">
                <Image src="/logo.jpeg" width={200} height={200} alt="logo" />
                <button className="p-1 h-fit rounded-full text-white hover:bg-white hover:text-black duration-200 ease-in-out transition-colors">
                  <Icon
                    icon="line-md:close"
                    className="hover:bg-white rounded-full text-lg "
                    onClick={closeAddPromotion}
                  />
                </button>
              </div>
              <div className="text-white w-full gap-10 flex flex-col lg:flex-row p-3 lg:p-10">
                <div className="flex-1 p-1">
                  <div>
                    <Image
                      src="https://max-themes.net/demos/palermo/upload/palermo_demos_08.jpg"
                      alt="food"
                      width={500}
                      height={400}
                    />
                  </div>
                  <div>
                    <label
                      className="block mt-2 text-sm text-white font-extralight"
                      htmlFor="file_input"
                    >
                      Upload Image
                    </label>
                    <input
                      className="block w-full text-sm text-gray-400 border border-gray-700 rounded-lg cursor-pointer bg-gray-50 focus:outline-none "
                      id="file_input"
                      type="file"
                    />
                  </div>
                </div>
                <div className="flex-1 ">
                  <form className="w-full ">
                    <div className="flex flex-col p-1 ">
                      <label htmlFor="foodName" className="font-extralight">
                        Promotion Name:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter food name"
                        name="foodName"
                        id="foodName"
                        className="p-1 rounded-lg w-full pl-2 text-black outline-none"
                      />
                    </div>
                    <div className="mt-5 flex flex-col lg:flex-row gap-3">
                      <hr />
                      <p className=" font-extralight ">Combo Pack Price: </p>
                      <input
                        type="number"
                        name="price"
                        placeholder="Ex: 1,200"
                        id="price"
                        className="w-fit rounded-lg p-1 pl-2 text-black outline-none"
                      />
                      <hr />
                    </div>
                    <div className="flex flex-row gap-5 p-1"></div>
                    <div className="mt-5 ">
                      <p className="mb font-extralight">Content</p> <hr />
                      <textarea
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm mt-3 rounded-lg border  bg-white border-gray-600 placeholder-gray-400 text-black outline-none"
                        placeholder="Include the contents here..."
                      ></textarea>
                    </div>
                    <div className="flex h-full justify-end pt-5">
                      <button className="relative inline-flex items-center justify-end p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Add Promotion
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageFood;
