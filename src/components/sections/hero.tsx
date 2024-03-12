import React from "react";
import Image from "next/image";
import QuickContactForm from "@/components/elements/quick-contact-form";

const Hero = () => {
  return (
    <div className="bg-yellow-50" id="home">
      <div className="flex flex-col items-center justify-center px-2 h-96">
        <h1 className="text-6xl font-bold text-center text-yellow-900">
          Fostering Business Growth
        </h1>
        <p className="text-2xl text-center text-yellow-900">
          Through Software Development and Marketing Excellence.
        </p>

        <div className="my-8">
          <QuickContactForm />
        </div>
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
