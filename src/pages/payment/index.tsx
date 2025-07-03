import React from "react";
import Button from "../../components/Button";
import { get } from "http";

const Payment = () => {
  const getPaymentLink =
    "https://app.sandbox.midtrans.com/snap/v4/redirection/0bf64e17-2b4f-406c-ab41-16a155c8a2de";
  const navigateToLink = () => {
    window.location.href = getPaymentLink;
  };
  return (
    <div className="w-screen h-screen bg-black">
      <Button
        label="Order"
        onClick={navigateToLink}
        className="bg-white text-black rounded-lg p-2 hover:bg-primary"
      />
    </div>
  );
};

export default Payment;
