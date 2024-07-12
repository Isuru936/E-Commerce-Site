import { Icon } from "@iconify/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const AddPromotions = ({ onClose }) => {
  const addPromotionRef = useRef(null);
  const closeAddPromotion = () => {
    gsap.to(addPromotionRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      onComplete: onClose(),
    });
  };
  return (
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
  );
};

export default AddPromotions;
