import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <div id="about" className="items-center justify-center flex my-10">
      <div className="flex flex-col md:flex-row px-10 justify-center self-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-center text-yellow-900 md:text-left">
            About Us
          </h2>
          <p className="text-center  md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            nostrum eligendi excepturi, id nisi inventore aperiam deserunt
            labore itaque, ullam vitae incidunt reprehenderit non dolore
            accusantium iusto corporis dignissimos! Accusamus?
          </p>

          <Button className="my-8">Learn More</Button>
        </div>
        <div className="items-center justify-center flex">
          <Image
            width={500}
            height={200}
            src="/about.jpg"
            alt="About Us"
            className="rounded-t-3xl md:self-center md:ml-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
