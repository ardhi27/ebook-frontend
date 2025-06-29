import React, { useEffect, useState } from "react";
import Stack from "../../components/Stack";
import Header from "../../components/Header";
import axios from "axios";
import Group from "../../components/Group";
import Grid from "../../components/Grid";
import Card from "../../components/Card";

interface BooksProps {
  booksId: number;
  booksName: string;
  author: {
    author: string;
  };
  BooksCategory: {
    category: string;
  };
  booksDesc: string;
}

const Market = () => {
  const [books, setBooks] = useState<BooksProps[]>([]);
  const getData = async () => {
    await axios
      .get("http://localhost:3000/api/books/books")
      .then((response) => {
        console.log("Data API : ", response.data);
        setBooks(response.data.data);
        return response.data;
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Stack className="w-screen min-h-screen  bg-black">
      <Header />
      <Group className="w-full h-full justify-center">
        <Grid className="p-5 items-center grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2">
          {books.map((book) => (
            <Card
              key={book.booksId}
              booksId={book.booksId}
              booksName={book.booksName}
              booksAuthor={book.author.author}
              booksDescription={book.booksDesc}
              booksCategory={book.BooksCategory.category}
            />
          ))}
        </Grid>
      </Group>
    </Stack>
  );
};

export default Market;
