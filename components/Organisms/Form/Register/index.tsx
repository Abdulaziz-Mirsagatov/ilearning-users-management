"use client";

import { registerUser } from "@/actions";
import RegularButton from "@/components/Atoms/Button/Regular";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface RegisterFormData {
  name: string;
  email: string;
  position: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const [form, setForm] = useState<RegisterFormData>({
    name: "",
    email: "",
    position: "",
    password: "",
    confirmPassword: "",
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
        type="text"
        name="name"
        className="input"
        placeholder="name"
        value={form.name}
        onChange={handleChange}
        required
      />
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
        type="text"
        name="position"
        className="input"
        placeholder="position (optional)"
        value={form.position}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        className="input"
        placeholder="password"
        required
        value={form.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        className="input"
        placeholder="confirm password"
        required
        value={form.confirmPassword}
        onChange={handleChange}
      />
      <RegularButton
        text="Register"
        className="mt-4 text-center"
        onClick={async (e) => {
          e.preventDefault();
          const res = await registerUser(form);
          if (res) router.replace("/login");
        }}
      />
    </form>
  );
};

export default RegisterForm;
