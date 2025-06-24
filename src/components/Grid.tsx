import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
twMerge;
interface GridProps {
  className: string;
  children: ReactNode;
  column?: number;
  gap?: number;
}

const Grid: React.FC<GridProps> = ({
  className,
  children,
  column = 2,
  gap = 4,
}) => {
  return (
    <div className={twMerge(`grid grid-cols-${column} gap-${gap}`, className)}>
      {children}
    </div>
  );
};

export default Grid;
