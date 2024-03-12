"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import { parsePhoneNumber } from "awesome-phonenumber";
import { Input } from "../ui/input";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string()
    .test("phoneNumber", "Phone number is not valid", (str) => {
      const pn = parsePhoneNumber(str ?? "");
      return pn.valid;
    })
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  name: "",
  phoneNumber: "",
  email: "",
  message: "",
};

const QuickContactForm = () => {
  const onSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: any
  ) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        toast.success("Your message has been sent!");
      }
    } catch (error) {
      toast.error("An error occurred, please try again later");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Talk to us</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Send us a message and we will get back to you
          </AlertDialogTitle>
          <AlertDialogDescription>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({
                errors,
                touched,
                values,
                handleChange,
                handleBlur,
                isSubmitting,
              }) => (
                <Form>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border border-gray-400 rounded-md h-10 p-2"
                      />
                      {errors.name && touched.name && (
                        <div className="text-red-500">{errors.name}</div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="+233123456789"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border border-gray-400 rounded-md h-10 p-2"
                      />

                      {errors.phoneNumber && touched.phoneNumber && (
                        <div className="text-red-500">{errors.phoneNumber}</div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border border-gray-400 rounded-md h-10 p-2"
                      />
                      {errors.email && touched.email && (
                        <div className="text-red-500">{errors.email}</div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border border-gray-400 rounded-md h-20 resize-none p-2"
                      />
                      {errors.message && touched.message && (
                        <div className="text-red-500">{errors.message}</div>
                      )}
                    </div>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send"}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default QuickContactForm;
