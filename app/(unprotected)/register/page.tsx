import RegisterForm from "@/components/Organisms/Form/Register";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="grid gap-8 p-12 bg-lighter-gray rounded-xl md:w-[500px]">
      <h1 className="text-xl text-medium-gray text-center font-bold">
        Enter User Information
      </h1>
      <RegisterForm />
      <p className="text-medium-gray text-sm text-center">
        Already have an account?{" "}
        <Link href={"login"} className="underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
