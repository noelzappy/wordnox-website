import React from "react";

type Props = {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
  error?: string;
};

export default function Input(props: Readonly<Props>) {
  return (
    <>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input
        className={`border-2 border-gray-200 rounded-md p-2 focus:outline-none focus:border-primary-500 w-full`}
        {...props}
      />
      {props.error && <p className="text-red-500 text-xs">{props.error}</p>}
    </>
  );
}
