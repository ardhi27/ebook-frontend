import React, { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  label?: string;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  className,
  children,
}) => {
  const defaultClass = "font-primary";
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`${defaultClass} ${className}`}
    >
      <span>{label}</span>
      {children}
    </button>
  );
};

export default Button;
