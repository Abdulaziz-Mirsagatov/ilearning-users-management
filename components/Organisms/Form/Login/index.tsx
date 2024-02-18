"use client";

import RegularButton from "@/components/Atoms/Button/Regular";

const LoginForm = () => {
  return (
    <form className="grid gap-4">
      <input type="email" className="input" placeholder="email" required />
      <input
        type="password"
        className="input"
        placeholder="password"
        required
      />
      <RegularButton text="Login" className="mt-4 text-center" />
    </form>
  );
};

export default LoginForm;
