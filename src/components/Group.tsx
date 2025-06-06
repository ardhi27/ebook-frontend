import React from "react";
interface GroupProps {
  className?: string;
  children: React.ReactNode;
}

const Group: React.FC<GroupProps> = ({ className, children }) => {
  const defaultClass = "flex";
  return <div className={`${defaultClass} ${className}`}>{children}</div>;
};

export default Group;
