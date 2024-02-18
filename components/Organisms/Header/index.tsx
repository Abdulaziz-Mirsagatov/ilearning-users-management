"use client";

import RegularButton from "@/components/Atoms/Button/Regular";
import { signOut } from "next-auth/react";

export interface HeaderProps {
  username: string;
}

const Header = ({ username }: HeaderProps) => {
  return (
    <div className="h-24 px-4 bg-dark-gray text-lighter-gray flex items-center justify-end">
      <div className="flex gap-4 items-center">
        <h1 className="text-lg">Hello, {username}!</h1>
        <RegularButton
          text="Logout"
          icon="material-symbols:logout"
          onClick={async () => await signOut()}
        />
      </div>
    </div>
  );
};

export default Header;
