"use client";
import Login from "@/components/Auth/Login/Login";
import NavBar from "@/components/NavBar/NavBar";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

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

  const fetchDetails = async () => {
    const session = await getServerSession();
    if (!session) {
      return null;
    }

    return session;
  };

  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
  };

  const [toggleLogin, setToggleLogin] = useState(false);

  const onToggle = () => {
    setToggleLogin(!toggleLogin);
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
      <div className="w-screen relative flex justify-between pl-3 pr-3 pb-3">
        <p className="font-bold">{session && `Hi, ${session.user.name}`}</p>
        {!session ? (
          <button
            onClick={onToggle}
            className=" border border-white rounded-lg pl-3 pr-3 pt-2 pb-2 hover:bg-white hover:text-black duration-200 ease-in-out transition-colors"
          >
            Login
          </button>
        ) : (
          <button
            onClick={() => {
              handleLogout();
            }}
            className=" border border-white rounded-lg pl-3 pr-3 pt-2 pb-2 hover:bg-white hover:text-black duration-200 ease-in-out transition-colors"
          >
            Logout
          </button>
        )}
      </div>

      <div className="flex flex-col pt-3 lg:flex-row justify-center align-middle items-center h-fit lg:gap-10">
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
          <div ref={buttonRef} className="w-full">
            <a href="/menu">
              <button className="bg-red-800 p-2 lg:p-4 pl-3 lg:pl-10 pr-3 lg:pr-10 justify-center hover:bg-red-700">
                MENU
              </button>
            </a>
          </div>
        </div>
        <div>
          <div className="relative p-5">
            <Image
              src={"/3d.png"}
              width={400}
              height={100}
              alt="banner"
              className={`object-contain ${styles.img}`}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <NavBar />
      </div>
      {toggleLogin && !session && <Login onClose={onToggle} />}
    </div>
  );
}
