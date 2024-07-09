import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

const topics = [
  { name: "Home", link: "/" },
  { name: "Menu", link: "/menu" },
  { name: "About", link: "/about" },
  { name: "Promotions", link: "/promotions" },
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
  return (
    <div
      className="text-white h-24 w-screen flex justify-center items-center px-32 bg-black"
      style={{ backgroundImage: "url('/bg-menu.jpeg')" }}
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
      <div className="text-2xl flex-1 flex font-semibold justify-evenly items-center align-middle h-full">
        {topics.map((topic) => (
          <a href={topic.link} key={topic.name} className="text-white">
            {topic.name.toUpperCase()}
          </a>
        ))}
      </div>
      <div>
        {
          <div className="flex justify-evenly gap-2 items-center">
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
    </div>
  );
};

export default NavBar;
