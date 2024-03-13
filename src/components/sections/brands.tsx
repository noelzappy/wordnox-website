import Image from "next/image";
import React from "react";

export default function Brands() {
  return (
    <>
      <section className="mt-4 sm:mt-6 px-10">
        <h2 className="text-3xl font-bold text-neutral-600 max-w-4xl sm:text-4xl">
          Brands we have worked with
        </h2>
        <p className="text-neutral-600 text-lg max-w-4xl">
          We have worked with a number of brands to help them achieve their
          digital goals.
        </p>
      </section>
      <div className="flex whitespace-no-wrap overflow-x-hidden w-full mt-5">
        <div className="relative">
          <ul className="flex animate-marquee space-x-10">
            {new Array(100).fill(0).map((_, index) => {
              return (
                <Image
                  src="https://images.pexels.com/photos/2016145/pexels-photo-2016145.jpeg"
                  width={200}
                  height={200}
                  alt="brand1"
                  className="rounded-md"
                  key={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

//    <ul className="flex absolute top-0 animate-marquee2 space-x-3">
//      {new Array(50).fill(0).map((_, index) => {
//        return (
//          <Image
//            src="https://images.pexels.com/photos/2016145/pexels-photo-2016145.jpeg"
//            width={100}
//            height={100}
//            alt="brand1"
//            key={index}
//          />
//        );
//      })}
//    </ul>;
