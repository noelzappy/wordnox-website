import { SERVICES } from "@/data";
import React from "react";

export default function ServiceSection() {
  return (
    <section className="mt-20 px-10 sm:mt-32 flex flex-col md:flex-row">
      <div className="flex-1 m-3 md:max-w-60 lg:max-w-full">
        <div>
          <a
            className="text-gray-800 font-bold cursor-pointer hover:text-gray-600 underline uppercase"
            href="/services"
          >
            What We Do
          </a>

          <h2 className="text-2xl text-neutral-600 font-bold sm:text-3xl">
            Our Services
          </h2>
          <p
            className="mt-4 text-gray-800 lg:max-w-2xl"
            style={{ lineHeight: "1.5" }}
          >
            At <span className="font-bold uppercase">WORDNOX</span>, we offer a
            wide range of services to meet your digital needs. Explore how we
            can help you succeed in the digital world.
          </p>
        </div>
        <div className="mt-5 text-gray-800 mb-10">
          <a
            href="/services"
            className="text-gray-800 font-bold cursor-pointer hover:text-gray-600 underline uppercase"
          >
            Learn More About Our Services
          </a>
        </div>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-10 ">
          {SERVICES.map((service) => {
            return (
              <div
                key={service.id}
                className=" bg-neutral-100 p-5 lg:p-12 rounded-lg shadow-lg"
              >
                <div key={service.id}>
                  <h3 className="text-2xl text-neutral-600 font-bold">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-gray-800">{service.description}</p>
                </div>
                <div className="mt-4 ">
                  <a
                    href={`/services/${service.slug}`}
                    className=" text-gray-800 font-bold cursor-pointer hover:text-gray-600 underline uppercase"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
