import LoginForm from "@/components/Organisms/Form/Login";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="grid gap-8 p-12 bg-lighter-gray rounded-xl md:w-[500px]">
      <h1 className="text-xl text-medium-gray text-center font-bold">
        Enter Credentials
      </h1>
      <LoginForm />
      <p className="text-medium-gray text-sm text-center">
        Don't have an account?{" "}
        <Link href={"register"} className="underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
