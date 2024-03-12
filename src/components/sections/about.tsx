import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Counter from "../elements/counter";

const AboutSection = () => {
  return (
    <div id="about" className="items-center justify-center flex my-16">
      <div className="flex flex-col md:flex-row px-10 justify-center self-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-center text-yellow-900 md:text-left">
            About Us
          </h2>
          <p className="text-center  md:text-left">
            As a forward-thinking digital agency, we specialize in delivering
            comprehensive software development solutions and results-driven
            digital marketing strategies. Our mission is to empower businesses
            across Africa with innovative technology and effective online
            visibility, fostering growth and success in the digital age.
          </p>
          <div className="flex flex-col items-center justify-center my-10 md:items-start md:justify-start">
            <Button className="btn">Learn More</Button>
          </div>

          <div className="flex flex-row items-center justify-between my-10 min-h-11 bg-yellow-900 text-white rounded-md p-5 gap-3">
            <Counter title="Happy Clients" count={40} interval={50} />
            <Counter title="Completed Projects" count={100} interval={20} />
            <Counter title="Years of Experience" count={5} interval={100} />
          </div>
        </div>
        <div className="items-center justify-center flex">
          <Image
            width={300}
            height={100}
            src="/about.jpg"
            alt="About Us"
            className="rounded-md md:self-center md:ml-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
