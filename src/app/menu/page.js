"use client";
import React, { useEffect, useRef } from "react";
import NavBar from "@/components/NavBar/NavBar";
import Foods from "@/components/Foods/Foods";
import { Roboto_Condensed } from "next/font/google";

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  style: "italic",
  weight: "300",
});

function Menu() {
  return (
    <div
      className="bg-black w-screen h-screen text-white text-xl"
      style={{
        backgroundImage: "url('/menu.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="font-thin text-3xl leading-normal">SIMPLY DELICIOUS</p>
        <p className="font-bold text-8xl leading-normal">Pizza</p>
        <p className={`${roboto_Condensed.className}  leading-normal`}>
          Best Pizzas you will ever find, we cook with love.
        </p>
      </div>
      <div className="absolute bottom-0 right-0">
        <NavBar />
      </div>
      <div>
        <Foods />
      </div>
    </div>
  );
}

export default Menu;
