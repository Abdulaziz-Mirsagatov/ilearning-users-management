"use client";

import RegularButton from "@/components/Atoms/Button/Regular";
import { BUTTON_TYPES } from "@/constants";
import Table from "../../Table";

const UsersForm = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john@doe",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@does",
    },
  ];

  const headers = ["id", "name", "email"];

  return (
    <div className="grid gap-4">
      <div className="flex gap-4">
        <RegularButton text="Block" icon="fa6-solid:lock" />
        <RegularButton text="Unblock" icon="fa6-solid:lock-open" />
        <RegularButton
          text="Delete"
          icon="tabler:trash"
          type={BUTTON_TYPES.DELETE}
        />
      </div>
      <Table data={data} headers={headers} />
    </div>
  );
};

export default UsersForm;
