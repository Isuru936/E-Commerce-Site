"use client";
import Auth from "@/components/Auth/Auth";
import Login from "@/components/Auth/Login/Login";
import NavBar from "@/components/NavBar/NavBar";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const textVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Home() {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const buttonRef = useRef(null);
  const [toggle, setToggle] = useState(true);
  const [close, setClose] = useState(false);

  const onToggle = () => {
    setClose(false);
    console.log(toggle, close);
    console.log(toggle);
  };

  useEffect(() => {
    gsap.fromTo(
      text1Ref.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.5 }
    );

    gsap.fromTo(
      text2Ref.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.5, delay: 0.5 }
    );

    gsap.fromTo(
      text3Ref.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.5, delay: 1 }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.5, delay: 1.5 }
    );
  });
  return (
    <div className="bg-black pt-4 w-screen text-white h-screen">
      <button
        onClick={() => {
          setToggle(!toggle);
          onToggle();
        }}
        className="right-3 absolute border border-white rounded-lg pl-3 pr-3 pt-2 pb-2 hover:bg-white hover:text-black duration-200 ease-in-out transition-colors"
      >
        Login
      </button>

      <div className="flex flex-col lg:flex-row justify-center align-middle items-center h-full lg:gap-10">
        <div className="text-center lg:text-left">
          <p
            ref={text1Ref}
            className=" text-4xl lg:text-8xl font-extrabold leading-normal lg:leading-normal"
          >
            WE MAKE THE
          </p>
          <p
            ref={text2Ref}
            className=" text-4xl lg:text-8xl font-extrabold leading-normal lg:leading-normal"
          >
            BEST <span className="bg-red-900 p-2">PIZZAS</span>
          </p>
          <p
            ref={text3Ref}
            className=" text-4xl lg:text-8xl font-extrabold leading-normal lg:leading-normal"
          >
            IN TOWN
          </p>
          <div ref={buttonRef} className="w-full ">
            <button className="bg-red-800 p-2 lg:p-4 pl-3 lg:pl-10 pr-3 lg:pr-10 justify-center hover:bg-red-700">
              MENU
            </button>
          </div>
        </div>
        <div>
          <div className="relative">
            <Image
              src={"/3d.png"}
              width={400}
              height={100}
              alt="banner"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <NavBar />
      </div>
      {toggle && <Auth />}
    </div>
  );
}
