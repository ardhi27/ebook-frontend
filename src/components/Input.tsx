import React from "react";

interface InputProps {
  placeholder?: string;
}
const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="w-full bg-black border border-white rounded-lg text-white px-2 py-3 focus:border-teal focus:ring-0"
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
