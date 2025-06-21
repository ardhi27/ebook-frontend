import { HTMLAttributes, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const inputType = {
  password: "password",
  text: "text",
};
const Input = ({ type = "text", placeholder, ...props }: InputProps) => {
  return (
    <input
      type={type}
      className="w-full bg-black border border-white rounded-lg text-white px-2 py-3 focus:border-teal focus:ring-0"
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
