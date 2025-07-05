import { useEffect, useState } from "react";
import Group from "../../components/Group";
import Header from "../../components/Header";
import Stack from "../../components/Stack";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface BookProps {
  booksId: number;
  booksImage: string;
  booksName: string;
  booksPrice: number;
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
  const [snapToken, setSnapToken] = useState("");

  const MIDTRANS_CLIENT_KEY = "Mid-client-hlxwwZ8QCSeHWnOo";

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", MIDTRANS_CLIENT_KEY);
    script.async = true;

    document.body.appendChild(script);

    // Cleanup function untuk menghapus skrip saat komponen di-unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // useEffect(() => {
  //   const fetchPaymentUrl = async () => {
  //     const response = await axios.get(
  //       `http://localhost:3000/api/payment/simulate/${id}`
  //     );
  //     if (response.data) {
  //       console.log("Response : ", response.data.data);
  //       // window.location.href = response.data.data.redirect_url;
  //       setSnapToken(response.data.data.token);
  //     }
  //   };
  //   fetchPaymentUrl();
  // }, []);
  const navigate = useNavigate();

  const handlePay = async () => {
    if (!window.snap) {
      alert("Payment is not ready");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/api/payment/simulate/${id}`
      );
      if (response.data) {
        console.log("Response : ", response.data.data);
        setSnapToken(response.data.data.token);
      }

      window.snap.pay(snapToken, {
        onSuccess: function (result: any) {
          console.log("success");
          console.log(result);
          navigate("/detail/success");
        },
        onPending: function (result: any) {
          console.log("pending");
          console.log(result);
        },
        onError: function (result: any) {
          console.log("error");
          console.log(result);
        },
        onClose: function () {
          console.log(
            "customer closed the popup without finishing the payment"
          );
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

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
            <span>
              <b>Books Price: Rp.{bookDetail?.booksPrice}</b>
            </span>
            <button
              onClick={handlePay}
              className="bg-white text-black rounded-lg p-2 hover:bg-primary"
            >
              Order
            </button>
          </Stack>
        </Group>
      </Group>
    </Stack>
  );
};

export default BookDetail;
