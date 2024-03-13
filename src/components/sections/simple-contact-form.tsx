import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../ui/input";

type Props = {
  onSubmit: SubmitHandler<FormValues>;
};

type FormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function SimpleContactForm(props: Readonly<Props>) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <form action="#" method="POST" className="mt-4 space-y-6">
      <Input
        type="text"
        required
        placeholder="Full Name"
        error={errors.name && "Name is required"}
        {...register("name", { required: true })}
      />

      <Input
        type="tel"
        required
        placeholder="Phone"
        error={errors.phone && "Phone is required"}
        {...register("phone", { required: true })}
      />

      <Input
        type="email"
        required
        placeholder="Email"
        error={errors.email && "Email is required"}
        {...register("email", { required: true })}
      />

      <div>
        <textarea
          className="w-full h-32 border border-gray-300 rounded-md shadow-sm p-2"
          placeholder="Message"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs">Message is required</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-neutral-600 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
          onClick={handleSubmit(props.onSubmit)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
