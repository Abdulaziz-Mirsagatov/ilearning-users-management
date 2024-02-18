"use client";

import RegularButton from "@/components/Atoms/Button/Regular";

const RegisterForm = () => {
  return (
    <form className="grid gap-4">
      <input type="text" className="input" placeholder="name" required />
      <input type="email" className="input" placeholder="email" required />
      <input type="text" className="input" placeholder="position (optional)" />
      <input
        type="password"
        className="input"
        placeholder="password"
        required
      />
      <input
        type="password"
        className="input"
        placeholder="confirm password"
        required
      />
      <RegularButton text="Register" className="mt-4 text-center" />
    </form>
  );
};

export default RegisterForm;
