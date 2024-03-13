import Image from "next/image";
import React from "react";

export default function Story() {
  return (
    <section className="pt-28 sm:pt-32 pb-32 sm:pb-48">
      <div className="flex flex-col justify-center sm:flex-row">
        <div className="px-10">
          <h1 className="text-5xl text-neutral-600 font-bold max-w-4xl sm:text-6xl uppercase">
            Who we are
          </h1>
          <div className="mt-10 sm:mt-16 text-lg text-gray-800 max-w-4xl">
            <Image
              src="/dorine.webp"
              width={1000}
              height={600}
              alt="our-story"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="px-10 mt-20 max-w-3xl">
          <p className="text-neutral-600 mt-8 sm:mt-10 text-lg max-w-4xl">
            Welcome to{" "}
            <span className="font-bold text-black uppercase">Wordnox,</span>{" "}
            your dedicated digital partner. As a specialized digital agency,
            we&apos;re committed to delivering top-tier services that drive your
            business forward. Since our establishment in 2019, we&apos;ve been
            on a mission to transform the digital landscape by offering a range
            of solutions tailored to your needs.
          </p>
          {/* grid with single column on mobile but two columns on larger screens
           */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <div>
              <h2 className="text-3xl font-bold text-neutral-600 max-w-4xl sm:text-4xl">
                Our Vision
              </h2>
              <p className="text-neutral-600 text-lg max-w-4xl">
                To be the leading digital agency in Africa, providing
                world-class solutions to businesses and individuals.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-neutral-600 max-w-4xl sm:text-4xl">
                Our Mission
              </h2>
              <p className="text-neutral-600 text-lg max-w-4xl">
                To help businesses and individuals achieve their digital goals
                by providing top-tier digital solutions.
              </p>
            </div>
          </div>
          <p className="text-neutral-600 text-lg max-w-4xl mt-10 sm:mt-16">
            Step into the world of Wordnox.com and embark on a transformative
            journey towards digital brilliance. Let&apos;s shape the digital
            future together.
          </p>
        </div>
      </div>
    </section>
  );
}
