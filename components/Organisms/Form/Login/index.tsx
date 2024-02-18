"use client";

import RegularButton from "@/components/Atoms/Button/Regular";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [form, setForm] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [isWrongCredentials, setIsWrongCredentials] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setIsWrongCredentials(false);
  };

  const handleSubmit = async () => {
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });
    if (res?.error === null) router.replace("/users");
    else setIsWrongCredentials(true);
  };

  return (
    <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        name="email"
        className="input"
        style={{
          borderColor: isWrongCredentials ? "red" : "inherit",
          color: isWrongCredentials ? "red" : "inherit",
          outline: isWrongCredentials ? "red" : "inherit",
        }}
        placeholder="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        className="input"
        style={{
          borderColor: isWrongCredentials ? "red" : "inherit",
          color: isWrongCredentials ? "red" : "inherit",
          outline: isWrongCredentials ? "red" : "inherit",
        }}
        placeholder="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <RegularButton
        text="Login"
        className="mt-4 text-center"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default LoginForm;
