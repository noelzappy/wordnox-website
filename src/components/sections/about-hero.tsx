import React from "react";

export default function AboutHero() {
  return (
    <section className="pt-5 sm:pt-10 pb-10 sm:pb-24 px-10">
      <p className="uppercase text-neutral-600">About Us</p>
      <div>
        <h1 className="text-5xl text-neutral-600 font-bold max-w-4xl sm:text-6xl">
          We are{" "}
          <span className="text-black uppercase underline">WORDNOX.</span>
        </h1>
        <h1 className="text-5xl text-neutral-600 font-bold max-w-4xl sm:text-6xl">
          A digital agency focused on digital product development based in
          Accra.
        </h1>
      </div>
      <p className="text-neutral-600 mt-8 sm:mt-10 text-lg max-w-4xl">
        We specialize in developing web, mobile, and desktop applications to
        support your business. We also provide digital marketing services to
        help you grow your business.
      </p>
    </section>
  );
}
