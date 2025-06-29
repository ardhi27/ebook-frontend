import { useEffect, useState } from "react";
import Group from "../../components/Group";
import Header from "../../components/Header";
import Stack from "../../components/Stack";
import axios from "axios";
import { useParams } from "react-router-dom";

interface BookProps {
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
  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  return (
    <Stack className="w-screen min-h-screen  bg-black">
      <Header />
      <Group className="w-full h-full justify-center text-white">
        <span>Books Name: {bookDetail?.booksName} </span>
        <span>Books ID : {bookDetail?.booksId}</span>
        <span>Books Description : {bookDetail?.booksDesc}</span>
      </Group>
    </Stack>
  );
};

export default BookDetail;
