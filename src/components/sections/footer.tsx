import React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "../icons";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="flex flex-col items-center justify-center my-10">
        <h2 className="text-4xl font-bold text-center text-yellow-500">
          Let&apos;s Talk About Your Next Project
        </h2>
        <Button className="mt-10">Contact Us</Button>
      </div>

      <div className="flex flex-row items-center justify-between mx-5">
        <div className="flex flex-row items-center justify-center gap-5">
          <a href="/services" className="text-white hover:text-yellow-500">
            Our Services
          </a>
          <a href="/about-us" className="text-white hover:text-yellow-500">
            Why Us
          </a>
          <a href="/portfolio" className="text-white hover:text-yellow-500">
            Portfolio & Case Studies
          </a>
        </div>
        <div className="flex flex-row items-center justify-between gap-3 ">
          <a
            href="https://facebook.com/wordnox"
            target="_blank"
            className="text-white hover:text-yellow-500"
          >
            <Icons.FaceBook />
          </a>
          <a
            href="https://linkedin.com/company/wordnoxinc"
            target="_blank"
            className="text-white hover:text-yellow-500"
          >
            <Icons.LinkedIn />
          </a>
          <a
            href="https://twitter.com/wordnox"
            target="_blank"
            className="text-white hover:text-yellow-500"
          >
            <Icons.Twitter />
          </a>
        </div>
      </div>
      <hr className="w-full mx-auto border-yellow-500" />
      <div className="flex flex-row items-center justify-between mx-5 mt-10">
        <div>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        <div className="flex flex-row items-center justify-center gap-5">
          <a
            href="/privacy-policy"
            className="text-white hover:text-yellow-500"
          >
            Privacy Policy
          </a>
          <a href="/terms" className="text-white hover:text-yellow-500">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
