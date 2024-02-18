"use client";

import { BUTTON_TYPES } from "@/constants";
import { Icon } from "@iconify/react";

interface RegularButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: string;
  type?: BUTTON_TYPES;
}

const RegularButton = ({
  text,
  icon,
  type = BUTTON_TYPES.REGULAR,
  ...props
}: RegularButtonProps) => {
  return (
    <button
      {...props}
      className={`${
        type === BUTTON_TYPES.REGULAR ? "bg-dark-gray" : "bg-ruby"
      } text-white-smoke hover:opacity-70 py-2 px-4 rounded-md flex items-center gap-2 ${
        props.className
      }`}
    >
      {icon && <Icon icon={icon} className="text-lg" />}
      <span className="text-lg w-full text-center">{text}</span>
    </button>
  );
};

export default RegularButton;
