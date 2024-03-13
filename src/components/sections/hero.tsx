import React from "react";

export default function Hero() {
  return (
    <section className="mt-20  sm:mt-32">
      <div className="px-10">
        <h1 className="text-5xl text-neutral-600 font-bold max-w-4xl sm:text-6xl">
          We develop digital products with the goal to support your business.
        </h1>
        <div className="mt-10 sm:mt-16 text-lg text-gray-800 max-w-4xl">
          <span className="text-gray-800 font-bold cursor-pointer hover:text-gray-600 underline">
            GET STARTED
          </span>
        </div>
      </div>
      <div className="overflow-hidden bg-yellow-300 mt-14">
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
    </section>
  );
}
