import React from "react";
import Stack from "./Stack";
import Group from "./Group";
import Button from "./Button";
Button;

const Header = () => {
  const HandleClick = () => {
    console.log("Button is clicked");
  };

  return (
    <Group className=" bg-transparent z-20 w-full flex justify-between p-5 items-center">
      <span className="text-xl font-bold text-white">RYB</span>
    </Group>
  );
};

export default Header;
