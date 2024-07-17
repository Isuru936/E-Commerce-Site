import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center text-5xl text-white bg-black w-screen h-screen">
      <Image src="/logo.jpeg" width={200} height={200} alt="logo" />
      <p>Access Denied</p>
      <Link href="/" className="text-2xl">
        Return to <span className="underline italic">homepage</span>
      </Link>
    </div>
  );
};

export default page;
