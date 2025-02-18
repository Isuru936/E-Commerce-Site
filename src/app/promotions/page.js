import Foods from "@/components/Foods/Foods";
import NavBar from "@/components/NavBar/NavBar";
import React from "react";
import { Roboto_Condensed } from "next/font/google";

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  style: "italic",
  weight: "300",
});
const Promotions = () => {
  return (
    <div
      className="bg-black w-screen h-screen text-white text-xl"
      style={{
        backgroundImage: "url('/promotionsBg.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="text-3xl font-extralight leading-10">
          EXPLORE OUR PIZZAS
        </p>
        <p className="font-bold lg:font-normal text-7xl lg:text-8xl leading-normal">
          Promotions
        </p>
        <p className={`${roboto_Condensed.className} text-wrap leading-normal`}>
          Meticulously Crafted catering to a wide taste pallet.
        </p>
      </div>
      <div className="absolute bottom-0 right-0">
        <NavBar />
      </div>
      <div></div>
    </div>
  );
};

export default Promotions;
