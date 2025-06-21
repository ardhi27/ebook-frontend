import { PropsWithChildren, useState } from "react";
import Stack from "./Stack";
import Group from "./Group";
import Button from "./Button";

interface AlertNotificationProps extends PropsWithChildren {
  label?: string;
  description?: string;
  isOpen: boolean;
  close: () => void;
  variant: keyof typeof modalHeaderClass;
}

const modalHeaderClass = {
  primary: "bg-primary text-white",
  danger: "bg-danger text-white",
  warning: "bg-warning text-white",
};

const Modal: React.FC<AlertNotificationProps> = ({
  label,
  isOpen,
  close,
  children,
  variant = "primary",
}) => {
  if (!isOpen) return null;
  return (
    <Stack className="w-screen h-screen fixed z-100 ">
      <Stack className="relative w-full h-full">
        <Stack
          onClick={close}
          className="bg-black/50 w-full h-full absolute top-0 left-0 z-50"
        />
        <Stack className="w-[320px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-60 gap-0">
          <Group
            className={`justify-between items-center py-2 px-3.5 w-full rounded-t-lg ${modalHeaderClass[variant]} `}
          >
            <span className="text-black text-2xl">{label}</span>
            <Button onClick={close} className="text-xl">
              ⛌
            </Button>
          </Group>
          <Stack className="w-full p-4 bg-amber-100 rounded-b-lg">
            {children}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Modal;
