"use client";
import NavBar from "@/components/NavBar/NavBar";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
    <div className="bg-black w-screen text-white h-screen">
      <div className="flex justify-center align-middle items-center h-full gap-10">
        <div className="text-left">
          <p ref={text1Ref} className="text-8xl font-extrabold leading-normal">
            WE MAKE THE
          </p>
          <p ref={text2Ref} className="text-8xl font-extrabold leading-normal">
            BEST <span className="bg-red-900 p-2">PIZZAS</span>
          </p>
          <p ref={text3Ref} className="text-8xl font-extrabold leading-normal">
            IN TOWN
          </p>
          <div ref={buttonRef} className="w-full ">
            <button className="bg-red-800 p-4 pl-10 pr-10 justify-center hover:bg-red-700">
              MENU
            </button>
          </div>
        </div>
        <div>
          <div>
            <Image src={"/3d.png"} width={500} height={100} alt="banner" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0">
        <NavBar />
      </div>
    </div>
  );
}
