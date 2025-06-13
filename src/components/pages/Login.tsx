import { JSX } from "react";
import { LoginForm } from "../organisms/LoginForm";
import { AppTitle } from "../atoms/AppTitle";
import { Link } from "react-router-dom";

export const Login = (): JSX.Element => {
  return (
    <div className="self-center bg-[#f3f3f3c9] rounded-md min-h-[50vh] w-full max-w-[500px] px-4 py-8 flex flex-col gap-8">
      <AppTitle classesList={["text-center"]}>Login</AppTitle>

      <LoginForm />

      <div className="flex flex-col justify-center border-t border-[#3e6f51]">
        <div className="self-center pt-4">
          <Link
            to="/criar-conta"
            className="text-[#3e6f51] uppercase font-semibold"
          >
            Cadastrar-se
          </Link>
        </div>
      </div>
    </div>
  );
};
