"use client";

import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import Input from "../ui/input";
import {
  FaFacebookF,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import toast from "react-hot-toast";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const initialValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const onSubmit = (values: typeof initialValues, { setSubmitting }: any) => {
    fetch("/api/forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Form submitted successfully");
          setSubmitting(false);
        } else {
          throw new Error("Form submission failed");
        }
      })

      .catch((error) => {
        toast.error("Form submission failed");
        setSubmitting(false);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-20 mr-32">
      <div>
        <h2 className="text-3xl font-bold text-neutral-600">Contact Details</h2>

        <div>
          <div className="mt-4 flex items-center space-x-4">
            <a href="https://www.facebook.com/wordnox">
              <FaFacebookF
                size={40}
                className="bg-neutral-600 rounded-full p-2"
                color="#f6c056"
              />
            </a>

            <a href="https://www.twitter.com/wordnox">
              <FaTwitter
                size={40}
                className="bg-neutral-600 rounded-full p-2"
                color="#f6c056"
              />
            </a>

            <a href="https://www.linkedin.com/company/wordnoxinc">
              <FaLinkedinIn
                size={40}
                className="bg-neutral-600 rounded-full p-2"
                color="#f6c056"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mt-8 flex items-center space-x-2">
            <FaPhoneAlt
              size={40}
              color="#f6c056"
              className="bg-neutral-600 rounded-full p-2"
            />
            <span>
              <a
                href="tel:+233506441493"
                className="text-neutral-600 font-bold cursor-pointer hover:text-gray-600 text-2xl"
              >
                +233506441493
              </a>
              <br />
              <span className="text-neutral-600 ">Phone Number</span>
            </span>
          </div>

          <div className="mt-8 flex items-center space-x-2">
            <IoMail
              size={40}
              color="#f6c056"
              className="bg-neutral-600 rounded-full p-2"
            />
            <span>
              <a
                href="mailto:info@wordnox.com"
                className="text-neutral-600 font-bold cursor-pointer hover:text-gray-600 text-2xl"
              >
                info@wordnox.com
              </a>
              <br />
              <span className="text-neutral-600 ">Email Address</span>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-md shadow-md border-2 border-gray-200">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleChange, isSubmitting }) => (
            <Form className="mt-4 space-y-6">
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                error={errors.name && touched.name ? errors.name : undefined}
              />
              <Input
                type="number"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                error={errors.phone && touched.phone ? errors.phone : undefined}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                error={errors.email && touched.email ? errors.email : undefined}
              />
              <textarea
                name="message"
                placeholder="Message"
                onChange={handleChange}
                className="border-2 border-gray-200 rounded-md p-2 focus:outline-none focus:border-primary-500 w-full"
              />
              {errors.message && touched.message ? (
                <span className="text-red-500 text-xs">{errors.message}</span>
              ) : null}
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-neutral-600 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
