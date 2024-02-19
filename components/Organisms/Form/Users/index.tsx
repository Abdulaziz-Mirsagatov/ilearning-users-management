"use client";

import RegularButton from "@/components/Atoms/Button/Regular";
import { BUTTON_TYPES } from "@/constants";
import Table, { TableHeader } from "../../Table";
import { User } from "@/types";
import { useState } from "react";
import { deleteUser, updateUser } from "@/actions";
import { signOut } from "next-auth/react";

export interface UsersFormProps {
  data: User[];
  headers: TableHeader[];
  email: string;
}

const UsersForm = ({ data, headers, email }: UsersFormProps) => {
  const [checkedUsers, setCheckedUsers] = useState<User[]>([]);

  const blockCheckedUsers = async () => {
    let out = false;
    const blockedUsersPromises = checkedUsers.map((user) => {
      if (user.email === email) out = true;
      return updateUser(user.email, { status: "blocked" });
    });

    Promise.all(blockedUsersPromises).then(() => {
      setCheckedUsers([]);
    });
    if (out) signOut();
  };
  const unblockCheckedUsers = async () => {
    const unblockedUsersPromises = checkedUsers.map((user) =>
      updateUser(user.email, { status: "active" })
    );

    Promise.all(unblockedUsersPromises).then(() => {
      setCheckedUsers([]);
    });
  };

  const deleteCheckedUsers = async () => {
    const deletedUsersPromises = checkedUsers.map((user) =>
      deleteUser(user.email)
    );

    Promise.all(deletedUsersPromises).then(() => {
      setCheckedUsers([]);
    });
  };

  return (
    <div className="grid gap-4">
      <div className="flex gap-4">
        <RegularButton
          text="Block"
          icon="fa6-solid:lock"
          onClick={blockCheckedUsers}
        />
        <RegularButton
          text="Unblock"
          icon="fa6-solid:lock-open"
          onClick={unblockCheckedUsers}
        />
        <RegularButton
          text="Delete"
          icon="tabler:trash"
          type={BUTTON_TYPES.DELETE}
          onClick={deleteCheckedUsers}
        />
      </div>
      <Table
        data={data}
        headers={headers}
        checkedItems={checkedUsers}
        setCheckedItems={setCheckedUsers}
      />
    </div>
  );
};

export default UsersForm;
