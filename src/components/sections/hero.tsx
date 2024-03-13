import React from "react";

export default function Hero() {
  return (
    <section className="pt-28 sm:pt-32 pb-32 sm:pb-48">
      <div className="px-10">
        <h1 className="text-5xl text-neutral-600 font-bold max-w-4xl sm:text-6xl">
          We develop digital products with the goal to support your business.
        </h1>
        <div className="mt-10 sm:mt-16 text-lg text-gray-800 max-w-4xl">
          <a
            className="text-gray-800 font-bold cursor-pointer hover:text-gray-600 underline"
            href="/services"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </section>
  );
}
