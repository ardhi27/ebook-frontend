import { useState } from "react";

const useModal = () => {
  const [isOpen, setOpenModal] = useState(false);
  const open = () => setOpenModal(true);
  const close = () => setOpenModal(false);

  return {
    isOpen,
    open,
    close,
  };
};

export default useModal;
