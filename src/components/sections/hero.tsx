import React from "react";
import { NavBar } from "../nav-bar";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-yellow-50" id="home">
      <NavBar className="bg-yellow-50 border-none" />
      <div className="flex flex-col items-center justify-center px-2 h-96">
        <h1 className="text-6xl font-bold text-center text-yellow-900">
          Fostering Business Growth
        </h1>
        <p className="text-2xl text-center text-yellow-900">
          Through Software Development and Marketing Excellence.
        </p>
        <Button className="my-8">Let&apos;s Talk Now</Button>
      </div>
      <div className="relative items-center justify-center flex">
        <Image
          src="/teams.webp"
          width={1500}
          height={500}
          objectFit="cover"
          alt="Hero Image"
          className="rounded-t-3xl"
        />
      </div>
    </div>
  );
};

export default Hero;
