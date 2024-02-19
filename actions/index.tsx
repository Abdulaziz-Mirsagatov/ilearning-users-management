"use server";

import { RegisterFormData } from "@/components/Organisms/Form/Register";
import { revalidateTag } from "next/cache";

export const registerUser = async (form: RegisterFormData) => {
  const res = await fetch(`${process.env.API_URL}/api/register`, {
    method: "POST",
    body: JSON.stringify(form),
  });
  if (!res.ok) throw new Error(res.statusText);

  revalidateTag("users");
  return res.json();
};

interface UserPartial {
  name?: string;
  email?: string;
  position?: string;
  status?: "active" | "blocked";
  lastLogin?: string;
  password?: string;
}

export const updateUser = async (email: string, user: UserPartial) => {
  const res = await fetch(`${process.env.API_URL}/api/user/${email}`, {
    method: "PUT",
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error(res.statusText);

  revalidateTag("users");
  return res.json();
};

export const deleteUser = async (email: string) => {
  const res = await fetch(`${process.env.API_URL}/api/user/${email}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error(res.statusText);

  revalidateTag("users");
  return res.json();
};
