import React from "react";

interface StackProps {
  gap?: number;
  position?: "start" | "end" | "center";
  children: React.ReactNode;
  className?: string;
}

const Stack: React.FC<StackProps> = ({
  gap = 0,
  position = "start",
  children,
  className,
  ...props
}) => {
  const defaultClass = `flex flex-col space-y-${gap}`;
  return <div className={`${defaultClass} ${className}`}>{children}</div>;
};

export default Stack;
