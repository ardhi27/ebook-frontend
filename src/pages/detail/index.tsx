import { useEffect, useState } from "react";
import Group from "../../components/Group";
import Header from "../../components/Header";
import Stack from "../../components/Stack";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";

interface BookProps {
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

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [bookDetail, setBookDetail] = useState<BookProps | null>(null);
  const fetchBookDetails = async () => {
    await axios
      .get(`http://localhost:3000/api/books/books/${id}`)
      .then((response) => {
        console.log("Books Detail Example : ", response.data);
        setBookDetail(response.data.data);
        return response.data;
      });
  };

  const imagePath = "http://localhost:3000/static/images/";
  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  return (
    <Stack className="w-screen min-h-screen bg-black">
      <Header />
      <Group className="h-full justify-center text-white max-md:p-5">
        <Group className="border-white border-2 p-4 rounded-lg">
          <img
            src={`${imagePath}${bookDetail?.booksImage}`}
            className="w-[15rem] h-[15rem] object-contain"
          ></img>
          <Stack className="h-full">
            <span>
              <b>Books Name:</b> {bookDetail?.booksName}{" "}
            </span>
            <span>
              <b>Books Author:</b> {bookDetail?.author.author}
            </span>
            <span>
              <b>Books Category :</b> {bookDetail?.BooksCategory.category}
            </span>
            <span>
              <b>Books Description :</b> {bookDetail?.booksDesc}
            </span>
            <Button
              label="Order"
              className="bg-white text-black rounded-lg p-2 hover:bg-primary"
            />
          </Stack>
        </Group>
      </Group>
    </Stack>
  );
};

export default BookDetail;
