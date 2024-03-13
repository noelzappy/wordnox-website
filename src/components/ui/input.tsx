import React from "react";

// type Props = {
//   label?: string;
//   placeholder?: string;
//   type?: string;
//   value?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   name?: string;
//   required?: boolean;
//   error?: string;
//   onBlur?: () => void;
// };

export default function Input(props: any) {
  return (
    <>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input
        {...props}
        className="border-2 border-gray-200 rounded-md p-2 focus:outline-none focus:border-primary-500 w-full"
      />

      {props.error && (
        <span className="text-red-500 text-xs">{props.error}</span>
      )}
    </>
  );
}
