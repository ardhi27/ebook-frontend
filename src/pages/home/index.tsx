import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from "../../components/Stack";
import Header from "../../components/Header";
import Group from "../../components/Group";
import Button from "../../components/Button";

const HomePage = () => {
  const navigate = useNavigate();
  const toMarketPage = () => {
    navigate("/market");
  };
  return (
    <Stack className="w-full">
      <Header />
      <div className="absolute z-10 w-full h-screen max-md:h-full">
        <img src="/images/homepagebackground.png" className="w-full h-full" />
        <Group className="w-full absolute justify-center items-center inset-0 text-white p-8 mt-20 max-md:text-center">
          {/* Left content */}
          {/* <Group className="h-full text-left items-center transform -rotate-90 gap-x-5">
            <span className=" text-7xl  font-bold max-md:text-lg">Rent</span>
            <span className=" text-7xl  max-md:text-lg">Your</span>
            <span className=" text-7xl  max-md:text-lg">Book</span>
          </Group> */}

          <Stack className="items-center gap-y-5">
            <span className="text-6xl font-bold max-md:text-5xl">Welcome</span>
            <span className="text-3xl max-md:text-xl">
              We’re here to help you explore the world, and gain limitless
              knowledge
            </span>
            <Button
              onClick={toMarketPage}
              label="Services"
              className="rounded-3xl text-white bg-black w-[7rem] h-[3rem] hover:bg-white hover:text-black"
            ></Button>
          </Stack>
        </Group>
      </div>
    </Stack>
  );
};

export default HomePage;
