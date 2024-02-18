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
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="grid gap-4">
      <input
        type="email"
        name="email"
        className="input"
        placeholder="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        className="input"
        placeholder="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <RegularButton
        text="Login"
        className="mt-4 text-center"
        onClick={async (e) => {
          e.preventDefault();
          await signIn("credentials", {
            email: form.email,
            password: form.password,
            redirect: false,
          });
          router.replace("/users");
        }}
      />
    </form>
  );
};

export default LoginForm;
