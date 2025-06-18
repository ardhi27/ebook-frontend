import React from "react";
import { twMerge } from "tailwind-merge";
interface GroupProps {
  className?: string;
  children: React.ReactNode;
}

const Group: React.FC<GroupProps> = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        `flex flex-row gap-3 items-center flex-wrap`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Group;
