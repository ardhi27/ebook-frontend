import React from "react";
import Stack from "../../components/Stack";
import Header from "../../components/Header";

const Market = () => {
  const dummyBooks = [
    {
      id: "f1",
      gambar:
        "http://googleusercontent.com/image_collection/image_retrieval/7374448129940424020",
      namaBuku: "Misteri di Balik Kabut",
      deskripsi: "Sebuah novel fiksi yang penuh teka-teki dan intrik.",
    },
    {
      id: "nf1",
      gambar:
        "http://googleusercontent.com/image_collection/image_retrieval/13591147631318737547",
      namaBuku: "Sejarah Dunia dalam 100 Hari",
      deskripsi: "Buku non-fiksi yang merangkum peristiwa penting dunia.",
    },
    {
      id: "c1",
      gambar:
        "http://googleusercontent.com/image_collection/image_retrieval/7057999354881613774",
      namaBuku: "Petualangan Tim Kecil",
      deskripsi: "Buku anak-anak yang penuh warna dan imajinasi.",
    },
    {
      id: "f2",
      gambar:
        "http://googleusercontent.com/image_collection/image_retrieval/7374448129940424020",
      namaBuku: "Cinta di Musim Hujan",
      deskripsi: "Novel romantis dengan latar belakang hujan yang melankolis.",
    },
    {
      id: "nf2",
      gambar:
        "http://googleusercontent.com/image_collection/image_retrieval/13591147631318737547",
      namaBuku: "Memahami Pikiran Manusia",
      deskripsi: "Buku non-fiksi tentang psikologi dan perilaku manusia.",
    },
    {
      id: "c2",
      gambar:
        "http://googleusercontent.com/image_collection/image_retrieval/7057999354881613774",
      namaBuku: "Dongeng Sebelum Tidur",
      deskripsi: "Kumpulan cerita pengantar tidur untuk anak-anak.",
    },
  ];

  return (
    <Stack className="w-screen h-screen bg-black">
      <Header />
      <span className=" text-blue-600 font-primary">This is market pages</span>
    </Stack>
  );
};

export default Market;
