import React, { Fragment } from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <Fragment>
      <div className="mt-14 text-center items-center bg-black py-20">
        <h1 className="text-5xl text-white font-bold sm:text-6xl uppercase">
          Start a project with us
        </h1>
        <div className="mt-10 sm:mt-16 text-lg text-white">
          <a
            className="text-white font-bold cursor-pointer hover:text-gray-600 underline"
            href="/contact"
          >
            CONTACT US
          </a>
        </div>
      </div>

      <div className="overflow-hidden bg-yellow-300">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-4xl text-neutral-600 font-bold sm:text-6xl px-10 sm:px-0 uppercase">
            Best Creative Agency ❤️{" "}
          </span>
          <span className="text-4xl text-neutral-600 font-bold sm:text-6xl px-10 sm:px-0 uppercase">
            Best Creative Agency ❤️{" "}
          </span>
          <span className="text-4xl text-neutral-600 font-bold sm:text-6xl px-10 sm:px-0 uppercase">
            Best Creative Agency ❤️{" "}
          </span>
          <span className="text-4xl text-neutral-600 font-bold sm:text-6xl px-10 sm:px-0 uppercase">
            Best Creative Agency ❤️{" "}
          </span>
        </div>
      </div>
      <footer className="bg-black text-white p-10 py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">WORDNOX</h3>
            <p className="mt-4">
              We are a digital agency that specializes in developing digital
              products to support your business.
            </p>
            <ul className="mt-4">
              <li className="mb-2">
                <a
                  href="mailto:info@wordnox.com"
                  className="text-white font-bold cursor-pointer hover:text-gray-600"
                >
                  Email: <span className="underline">info@wordnox.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+233506441493"
                  className="text-white font-bold cursor-pointer hover:text-gray-600"
                >
                  Phone: <span className="underline">+233506441493</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <p className="mt-4">
              <a
                href="/services"
                className="text-white font-bold cursor-pointer hover:text-gray-600 uppercase underline"
              >
                Services
              </a>
              <br />
              <a
                href="/projects"
                className="text-white font-bold cursor-pointer hover:text-gray-600 uppercase underline"
              >
                Projects
              </a>
              <br />
              <a
                href="/contact"
                className="text-white font-bold cursor-pointer hover:text-gray-600 uppercase underline"
              >
                Contact
              </a>
              <br />
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Social</h3>
            <div className="mt-4 flex items-center space-x-4">
              <a href="https://www.facebook.com/wordnox">
                <FaFacebook size={30} />
              </a>

              <a href="https://www.twitter.com/wordnox">
                <AiFillTwitterCircle size={35} />
              </a>

              <a href="https://www.linkedin.com/company/wordnoxinc">
                <BsLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} WORDNOX. All rights reserved.</p>
        </div>
      </footer>
    </Fragment>
  );
}
