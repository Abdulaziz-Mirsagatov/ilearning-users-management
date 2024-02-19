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
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [userExists, setUserExists] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setPasswordsMatch(true);
    setUserExists(false);
  };

  const handleRegister = async () => {
    if (form.password !== form.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    const res = await registerUser(form);
    if (res.error) setUserExists(true);
    else router.replace("/login");
  };

  return (
    <form className="grid gap-4" onClick={(e) => e.preventDefault()}>
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
        style={{
          borderColor: !passwordsMatch ? "red" : "inherit",
          color: !passwordsMatch ? "red" : "inherit",
          outline: !passwordsMatch ? "red" : "inherit",
        }}
        required
        value={form.password}
        onChange={handleChange}
      />
      <div className="relative">
        <input
          type="password"
          name="confirmPassword"
          className="input"
          placeholder="confirm password"
          style={{
            borderColor: !passwordsMatch ? "red" : "inherit",
            color: !passwordsMatch ? "red" : "inherit",
            outline: !passwordsMatch ? "red" : "inherit",
          }}
          required
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {(!passwordsMatch || userExists) && (
          <p className="absolute -b-4 left-1/2 -translate-x-1/2 text-ruby text-center">
            {!passwordsMatch
              ? "Missmatch"
              : userExists
              ? "User exists, please login"
              : ""}
          </p>
        )}
      </div>
      <RegularButton
        text="Register"
        className="mt-4 text-center"
        onClick={handleRegister}
      />
    </form>
  );
};

export default RegisterForm;
