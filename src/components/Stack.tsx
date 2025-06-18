import React from "react";
import { twMerge } from "tailwind-merge";

interface StackProps {
  gap?: number;
  position?: "start" | "end" | "center";
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Stack: React.FC<StackProps> = ({
  gap = 0,
  position = "start",
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <div
      className={twMerge(`flex flex-col flex-wrap gap-4`, className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Stack;
