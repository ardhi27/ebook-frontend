import React, { ReactNode } from "react";
import Stack from "./Stack";

interface FormProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
  children?: ReactNode;
}

const Form: React.FC<FormProps> = ({ onSubmit, className, children }) => {
  return (
    <form onSubmit={onSubmit} className="w-full items-center justify-center">
      {children}
    </form>
  );
};

export default Form;
