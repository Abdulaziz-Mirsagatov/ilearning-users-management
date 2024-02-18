"use client";

import Link from "next/link";

import { Icon } from "@iconify/react";

export interface HeaderProps {
  username: string;
}

const Header = ({ username }: HeaderProps) => {
  return (
    <div className="h-24 px-4 bg-dark-gray text-lighter-gray flex items-center justify-end">
      <div className="flex gap-4 items-center">
        <h1 className="text-lg">Hello, {username}!</h1>
        <Link
          href="/logout"
          className="flex items-center gap-2 py-2 hover:opacity-70 transition-colors"
        >
          <Icon icon="material-symbols:logout" className="text-lg" />
          <span className="text-lg text-white-smoke">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
