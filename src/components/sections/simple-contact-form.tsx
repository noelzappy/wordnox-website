import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import Input from "../ui/input";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

type Props = {
  onSubmit: (values: typeof initialValues) => void;
};

const initialValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export default function SimpleContactForm(props: Readonly<Props>) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {({ errors, touched, handleChange }) => (
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
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
