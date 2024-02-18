"use client";

import CheckboxInput from "@/components/Atoms/Input/Checkbox";
import { useEffect, useState } from "react";

export interface TableHeader {
  key: string;
  label: string;
}

export interface TableProps<T> {
  data: T[];
  headers: TableHeader[];
  checkedItems: T[];
  setCheckedItems: React.Dispatch<React.SetStateAction<T[]>>;
}

const Table = <T extends Record<string, any>>({
  data,
  headers,
  checkedItems,
  setCheckedItems,
}: TableProps<T>) => {
  const renderValue = (value: T, key: string) => {
    if (Object.hasOwn(value, key) && (value[key] || value[key] === 0)) {
      if (key === "lastLogin" || key === "registrationTime")
        return new Date(value[key]).toLocaleString("en-US");
      return value[key];
    }
    return "-";
  };
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    if (checkedItems.length === data.length) setIsAllChecked(true);
    else setIsAllChecked(false);
  }, [checkedItems]);

  return (
    <table className="border-collapse border-2">
      <thead className="bg-medium-gray text-white-smoke">
        <tr>
          <th className="text-center p-2">
            <CheckboxInput
              isChecked={isAllChecked}
              onChange={() => {
                if (isAllChecked) setCheckedItems([]);
                else setCheckedItems(data);
              }}
            />
          </th>
          {headers.map((header) => (
            <th key={header.key} className="text-center p-2">
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={`${index % 2 ? "bg-medium-gray text-white-smoke" : ""}`}
          >
            <td className="text-center p-2">
              <CheckboxInput
                isChecked={checkedItems.includes(row)}
                onChange={() => {
                  if (checkedItems.includes(row))
                    setCheckedItems(
                      checkedItems.filter((item) => item.email !== row.email)
                    );
                  else setCheckedItems([...checkedItems, row]);
                }}
                bgColor={`${
                  index % 2 ? "var(--white-smoke)" : "var(--medium-gray)"
                }`}
                color={`${
                  index % 2 ? "var(--medium-gray)" : "var(--white-smoke)"
                }`}
              />
            </td>
            {headers.map((header) => (
              <td key={header.key} className="text-center p-2">
                {renderValue(row, header.key)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
