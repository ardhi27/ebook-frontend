import React, { useEffect, useState } from "react";
import Stack from "../../components/Stack";
import Header from "../../components/Header";
import axios from "axios";
import Group from "../../components/Group";
import Grid from "../../components/Grid";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

interface BooksProps {
  booksId: number;
  booksImage: string;
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
  const navigate = useNavigate();
  const getData = async () => {
    await axios
      .get("http://localhost:3000/api/books/books")
      .then((response) => {
        console.log("Data API : ", response.data);
        setBooks(response.data.data);
        return response.data;
      });
  };

  const toDetailPage = (booksId: number) => {
    navigate(`/detail/${booksId}`);
  };
  const imagePath = "http://localhost:3000/static/images/";
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
              booksImage={`${imagePath}${book.booksImage}`}
              key={book.booksId}
              booksId={book.booksId}
              booksName={book.booksName}
              booksAuthor={book.author.author}
              booksDescription={book.booksDesc}
              booksCategory={book.BooksCategory.category}
            >
              <Button
                label="Reserve"
                onClick={() => {
                  toDetailPage(book.booksId);
                }}
                className="bg-white rounded-lg p-1"
              />
            </Card>
          ))}
        </Grid>
      </Group>
    </Stack>
  );
};

export default Market;
