"use client";

import Image from "next/image";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";

const MENU = [
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "About Us",
    link: "/about",
  },
];

export default function NavBar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-4 px-10 bg-yellow-50 pt-5 sticky top-0 z-50">
        <div className="flex items-center flex-1">
          <a href="/">
            <span className="border p-2 rounded-sm font-bold text-gray-800 uppercase flex items-center">
              <Image
                src="/logo.png"
                width={20}
                height={20}
                alt="logo"
                className="mr-2"
              />
              WORDNOX
            </span>
          </a>
        </div>

        <div>
          <div className="hidden md:flex flex-row flex-1 items-center">
            <ul className="flex">
              {MENU.map((item) => {
                return (
                  <li key={item.name} className="m-2">
                    <a
                      href={item.link}
                      className="text-gray-800 font-bold cursor-pointer hover:text-gray-600 underline uppercase"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              <li className="m-2">
                <a
                  href="/contact"
                  className="text-white font-bold cursor-pointer hover:bg-yellow-300 uppercase bg-yellow-700 p-10 py-2 rounded-md"
                >
                  HIRE US
                </a>
              </li>
            </ul>
          </div>

          <div className="md:hidden">
            <button
              className=" text-gray-800 font-bold cursor-pointer hover:text-gray-600 underline"
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              MENU
            </button>
          </div>
        </div>
      </div>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        direction="top"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex items-center flex-1">
            <a href="/">
              <span className="border p-2 rounded-sm font-bold text-gray-800 uppercase flex items-center">
                <Image
                  src="/logo.png"
                  width={20}
                  height={20}
                  alt="logo"
                  className="mr-2"
                />
                WORDNOX
              </span>
            </a>
          </div>
          <ul className="flex flex-col items-center">
            {MENU.map((item) => {
              return (
                <li key={item.name} className="m-3">
                  <a
                    href={item.link}
                    className="text-gray-800 font-bold cursor-pointer hover:text-gray-600 underline uppercase"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
            <li className="m-3">
              <a
                href="/contact"
                className="text-gray-800 font-bold cursor-pointer hover:text-gray-600 underline uppercase"
              >
                HIRE US
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
}
