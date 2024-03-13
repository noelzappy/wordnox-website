"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SimpleContactForm from "../sections/simple-contact-form";

type Props = {
  service: {
    id: number;
    name: string;
    description: string;
    slug: string;
  };
};

export default function SingleService({ service }: Readonly<Props>) {
  const [open, setOpen] = useState(false);

  const onSubmit = (vals: any) => {
    console.log("Form Submitted", vals);
  };
  return (
    <>
      <div
        key={service.id}
        className=" bg-neutral-100 p-5 lg:p-12 hover:-mt-4 cursor-pointer relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
      >
        <div key={service.id}>
          <h3 className="text-2xl text-neutral-600 font-bold">
            {service.name}
          </h3>
          <p className="mt-2 text-gray-800">{service.description}</p>
        </div>
        <div className="mt-4">
          <button
            className=" text-gray-800 font-bold cursor-pointer hover:text-gray-600 underline uppercase"
            onClick={() => setOpen(true)}
          >
            Learn More
          </button>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          //   initialFocus={}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-left sm:ml-4 sm:mt-0">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          <span className="text-neutral-600 font-bold">
                            {service.name}{" "}
                          </span>
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Provide your details and we will get back to you.
                          </p>

                          <SimpleContactForm onSubmit={onSubmit} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
