import Foods from "@/components/Foods/Foods";
import NavBar from "@/components/NavBar/NavBar";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import React from "react";

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  style: "italic",
  weight: "300",
});

const About = () => {
  return (
    <div
      className="bg-black w-screen h-screen text-white text-xl"
      style={{
        backgroundImage: "url('/aboutpizza.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full h-screen flex flex-col justify-center items-center bg-black bg-opacity-40">
        <p className="font-thin text-3xl text-center leading-normal">
          SOPHISTICATED FINE PIZZA RESTAURANT
        </p>
        <p className="font-bold text-5xl lg:text-8xl leading-normal">
          About Palermo
        </p>
        <p className={`${roboto_Condensed.className} leading-normal`}>
          Dine with great views the bay bridge.
        </p>
      </div>
      <div className="absolute bottom-0 right-0">
        <NavBar />
      </div>
      <div className="flex flex-col lg:flex-row text-black lg:p-24 gap-11 lg:gap-5">
        <div className="flex-1">
          <Image
            src="/about-palermo.jpeg"
            alt="about"
            width={500}
            height={600}
          />
        </div>
        <div className="flex-1 text-base text-slate-700">
          <h1 className={`mb-5 text-5xl ${roboto_Condensed.className}`}>
            Our Story
          </h1>
          <p className="mb-5">
            Ut nec hinc dolor possim.Ea mei nostrum imperdiet deterruisset, mei
            ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend
            definitionem vim. Ut nec hinc dolor possim.
          </p>
          <p className="mb-5">
            Mei ludus efficiendi ei. Sea summo mazim ex, ea errem eleifend
            definitionem vim. Ut nec hinc dolor possim. Ea mei nostrum imperdiet
            deterruisset, mei ludus efficiendi ei. Sea summo mazim ex, ea errem
            eleifend definitionem vim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
