import { FC } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { AccountCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { AppFormInputText } from "../molecules/AppFormInputText ";
import { getUserList } from "../../utils/getUserList";
import { cleanUsername } from "../../utils/cleanUsername";
import { setUserSession } from "../../utils/setUserSession";
import { AppFormPasswordInput } from "../molecules/AppFormPasswordInput";

export const LoginForm: FC = () => {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    username: yup.string().required("Usuário é obrigatório."),
    password: yup.string().required("Senha é obrigatório."),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit((data) => {
    const users = getUserList();

    const foundedUser = users.find(
      (user) =>
        user.cpf === cleanUsername(data.username) &&
        user.password === data.password
    );

    if (foundedUser) {
      setUserSession(foundedUser);

      navigate("/session/dashboard");
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <AppFormInputText
          control={control}
          name="username"
          label="Usuário"
          placeholder="Informe se usuário"
          startIcon={
            <AccountCircle
              color={errors.username?.message ? "error" : undefined}
            />
          }
        />

        <AppFormPasswordInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Informe sua senha"
          error={Boolean(errors.password?.message)}
        />
      </div>

      <div></div>

      <div className="w-full flex flex-col justify-center">
        <Button
          type="submit"
          variant="contained"
          color="success"
          className="w-full max-w-[350px] h-12 self-center"
          endIcon={<LoginIcon />}
        >
          Entrar
        </Button>
      </div>
    </form>
  );
};
