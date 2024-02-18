"use client";

import { Icon } from "@iconify/react";

interface CheckboxInputProps {
  isChecked: boolean;
  onChange: () => void;
  bgColor?: string;
  color?: string;
}

const CheckboxInput = ({
  isChecked,
  onChange,
  bgColor = "var(--white-smoke)",
  color = "var(--medium-gray)",
}: CheckboxInputProps) => {
  return (
    <label
      className="flex items-center cursor-pointer w-8 h-8 rounded-md relative"
      style={{ backgroundColor: bgColor }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        style={{ display: "none" }}
      />
      {isChecked && (
        <Icon
          icon={"bxs:checkbox-checked"}
          className={`absolute top-0 left-0 w-full h-full`}
          style={{ color }}
        />
      )}
    </label>
  );
};

export default CheckboxInput;
