import React, { ReactNode } from "react";
import Group from "./Group";
import Stack from "./Stack";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

interface CardProps {
  booksId: number;
  booksName: string;
  booksAuthor: string;
  booksDescription: string;
  booksCategory: string;
  className?: string;
}
const Card: React.FC<CardProps> = ({
  booksId,
  booksName,
  booksAuthor,
  booksDescription,
  booksCategory,
  className,
}) => {
  const reserveClick = () => {
    console.log("book clicked on id : " + booksId);
  };
  return (
    <Stack
      className={twMerge(
        `rounded-lg border-white border-1 items-center p-3 max-w-md min-h-[15rem]`,
        className
      )}
    >
      <img
        src="/images/bookscoverexample.jpg"
        className="w-[15rem] h-[15rem] object-contain"
      ></img>
      <Stack className="w-[20rem] text-white text-xs font-bold p-1">
        <span>Name</span>
        <span className="px-2">{booksName}</span>
        <span>Category</span>
        <span className="px-2">{booksCategory}</span>
        <span>Author</span>
        <span className="px-2">{booksAuthor}</span>
        <span>Description</span>
        <span className="px-2">{booksDescription}</span>
      </Stack>
    </Stack>
  );
};

export default Card;
