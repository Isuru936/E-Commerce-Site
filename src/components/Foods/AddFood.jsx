import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import uploadImage from "@/utils/handleImageUploads.js";
import gsap from "gsap";

const AddFood = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const addFoodRef = useRef(null);
  const imageRef = useRef(null);

  const [formData, setFormData] = useState({
    productName: "",
    smallPrice: "",
    mediumPrice: "",
    largePrice: "",
    image: "https://max-themes.net/demos/palermo/upload/palermo_demos_08.jpg",
    content: "",
  });

  const closeAddFood = () => {
    gsap.to(addFoodRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      onComplete: onClose(),
    });
  };

  const handleUpload = async (file) => {
    if (file) {
      try {
        setLoading(true);
        const url = await uploadImage(file);
        setFormData((prevFormData) => ({ ...prevFormData, image: url }));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        alert("Error");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.smallPrice === "" &&
      formData.mediumPrice === "" &&
      formData.largePrice === ""
    ) {
      console.log(formData.smallPrice, "fasdasd");
      alert("At least one price must be included");
      return;
    }
    try {
      const req = await fetch("/api/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await req.json();
      alert("Food added successfully");
      closeAddFood();
      if (res.status === 201) {
        console.log("Food added successfully");
      }

      if (res.status === 500) {
        console.log("Error adding food");
        alert("Error adding food");
      }

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
            <div className="  flex-1 p-1 w-full  justify-center flex flex-col">
              <div className="relative">
                {loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-40">
                    <Icon
                      icon="line-md:loading-loop"
                      className="text-red-500 font-extrabold text-5xl"
                    />
                    <span className="text-black font-normal text-2xl"></span>
                  </div>
                )}
                <Image
                  src={formData.image}
                  alt="food"
                  width={500}
                  onClick={() => {
                    imageRef.current.click();
                  }}
                  height={100}
                  objectFit="cover"
                  className="object-fit w-full max-w-full bg-white rounded-lg max-h-96"
                />
              </div>
              <div>
                <input
                  ref={imageRef}
                  className=" hidden w-full text-sm text-gray-400 border border-gray-700 rounded-lg cursor-pointer bg-gray-50 focus:outline-none "
                  id="file_input"
                  required
                  onChange={(e) => {
                    const selectedFile = e.target.files[0];
                    if (selectedFile) {
                      handleUpload(selectedFile);
                    }
                  }}
                  type="file"
                />
              </div>
            </div>
            <div className="flex-1 ">
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col p-1 ">
                  <label htmlFor="foodName" className="font-extralight">
                    Food Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter food name"
                    name="productName"
                    required
                    onChange={(e) => handleChange(e)}
                    id="foodName"
                    className="p-1 rounded-lg w-full pl-2 text-black outline-none"
                  />
                </div>
                <p className="mt-5 font-extralight ">Food prices:</p> <hr />
                <div className="flex flex-row gap-5 p-1">
                  <div>
                    <span className="text-pretty text-sm italic">Small</span>
                    <input
                      type="number"
                      name="smallPrice"
                      onChange={(e) => handleChange(e)}
                      placeholder="Ex: 1,200"
                      className="p-1 pl-2 rounded-lg w-full outline-none text-black"
                    />
                  </div>
                  <div>
                    <span className="text-pretty text-sm italic">Medium</span>
                    <input
                      type="number"
                      placeholder="Ex: 1,200"
                      name="mediumPrice"
                      onChange={(e) => handleChange(e)}
                      className="p-1 pl-2 rounded-lg w-full outline-none text-black"
                    />
                  </div>
                  <div>
                    <span className="text-pretty text-sm italic">Large</span>
                    <input
                      type="number"
                      name="largePrice"
                      onChange={(e) => handleChange(e)}
                      placeholder="Ex: 1,200"
                      className="p-1 pl-2 rounded-lg w-full outline-none text-black"
                    />
                  </div>
                </div>
                <div className="mt-5 ">
                  <p className="mb font-extralight">Content</p> <hr />
                  <textarea
                    id="content"
                    rows="4"
                    onChange={(e) => handleChange(e)}
                    name="content"
                    required
                    className="block p-2.5 w-full text-sm mt-3 rounded-lg border  bg-white border-gray-600 placeholder-gray-400 text-black outline-none"
                    placeholder="Include the contents here..."
                  ></textarea>
                </div>
                <div className="flex h-full justify-end pt-5">
                  <button
                    disabled={loading}
                    className="relative inline-flex items-center justify-end p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                  >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      {loading ? (
                        <div className="flex justify-center items-center gap-1">
                          <Icon
                            icon="line-md:uploading-loop"
                            className="text-xl"
                          />
                          <span>Uploading Image</span>
                        </div>
                      ) : (
                        "Add to Menu"
                      )}
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

export default AddFood;
