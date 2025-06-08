import React, { ReactNode } from "react";
import Stack from "./Stack";
import Group from "./Group";
import Button from "./Button";
import { Head } from "next/document";

interface HeaderProps {
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const HandleClick = () => {
    console.log("Button is clicked");
  };

  return (
    <Stack className=" bg-transparent z-20 w-full flex justify-between py-3 px-2 gap-y-2">
      <span className="text-xl font-bold text-white">RYB</span>
      <div className="w-full h-[0.1rem] bg-white"></div>
    </Stack>
  );
};

export default Header;
