import { RegisterFormData } from "@/components/Organisms/Form/Register";

export const registerUser = async (form: RegisterFormData) => {
  const res = await fetch("/api/register", {
    method: "POST",
    body: JSON.stringify(form),
  });
  if (!res.ok) throw new Error(res.statusText);

  return res.json();
};
