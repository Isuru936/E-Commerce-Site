"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";

const topics = [
  { name: "Home", link: "/" },
  { name: "Menu", link: "/menu" },
  { name: "Promotions", link: "/promotions" },
  { name: "About", link: "/about" },
];

const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com",
    icon: "ri:facebook-fill",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com",
    icon: "basil:instagram-solid",
  },
  {
    name: "Twitter",
    link: "https://www.twitter.com",
    icon: "bi:twitter",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com",
    icon: "flowbite:youtube-solid",
  },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(false);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
    } else {
      gsap.fromTo(
        menuRef.current,
        { opacity: 1, x: 0 },
        { opacity: 0, x: 100, duration: 0.5 }
      );
    }
  }, [isMenuOpen]);

  return (
    <div
      className="text-white h-24 w-screen  flex flex-row justify-center items-center px-32 bg-black"
      style={{
        backgroundImage: "url('/bg-menu.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <div className="items-center justify-center flex">
        <Image
          src="/logo.jpeg"
          alt="logo"
          width={200}
          height={240}
          className="object-contain "
        />
      </div>
      <div className="text-2xl flex-1 hidden lg:flex font-semibold justify-evenly items-center align-middle h-full">
        {topics.map((topic) => (
          <a href={topic.link} key={topic.name} className="text-white">
            {topic.name.toUpperCase()}
          </a>
        ))}
      </div>
      <div>
        {
          <div className="hidden lg:flex justify-evenly gap-2 items-center">
            {socials.map((social) => (
              <a
                href={social.link}
                key={social.name}
                className="text-white text-xl"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon={social.icon} />
              </a>
            ))}
          </div>
        }
      </div>
      <div className="lg:hidden absolute right-5">
        <Icon
          icon="fluent:navigation-20-regular"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        />
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute bottom-24 right-5 bg-black bg-opacity-90 p-4 rounded-lg flex flex-col items-start gap-2"
        >
          {topics.map((topic) => (
            <a href={topic.link} key={topic.name} className="text-white">
              {topic.name.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
