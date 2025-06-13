import { FC } from "react";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { AccountCircle, Email } from "@mui/icons-material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { AppFormInputText } from "../molecules/AppFormInputText ";
import { AppFormSelect } from "../molecules/AppFormSelect";
import { AppFormInputDate } from "../molecules/AppFormInputDate";
import { ISignupBasicInfoPayload } from "../../types/user";
import { AppFormPasswordInput } from "../molecules/AppFormPasswordInput";
import { getSignupBasicDataValidationSchema } from "../../validations/getSignupBasicDataValidationSchema";

interface ISignupFormProps {
  setBasicData: (payload: ISignupBasicInfoPayload) => void;
}

export const SignupBasicDataForm: FC<ISignupFormProps> = ({ setBasicData }) => {
  const validationSchema = getSignupBasicDataValidationSchema();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: validationSchema,
  });

  const onSubmit = handleSubmit((data) => {
    const { birthdate, cpf, email, gender, name, password } = data;
    const newBirthdate = dayjs(birthdate);

    setBasicData({
      birthdate: newBirthdate.format("YYYY-MM-DD"),
      cpf: cpf.replace(/\D/g, ""),
      email,
      gender,
      name,
      password,
    });
  });

  const genderOptions = [
    { label: "Masculino", key: "male" },
    { label: "Feminino", key: "female" },
    { label: "Prefiro não informar", key: "none" },
  ];

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <AppFormInputText
          control={control}
          name="name"
          label="Nome"
          placeholder="Informe seu nome completo"
          startIcon={
            <AccountCircle color={errors.name?.message ? "error" : undefined} />
          }
        />

        <AppFormInputText
          control={control}
          name="cpf"
          label="CPF"
          placeholder="Informe se CPF"
          startIcon={
            <AccountCircle color={errors.cpf?.message ? "error" : undefined} />
          }
        />

        <AppFormInputDate
          control={control}
          name="birthdate"
          label="Data de nascimento"
        />

        <AppFormSelect
          control={control}
          name="gender"
          label="Gênero"
          items={genderOptions}
        />

        <AppFormInputText
          control={control}
          name="email"
          label="E-mail"
          placeholder="Informe se e-mail"
          startIcon={
            <Email color={errors.email?.message ? "error" : undefined} />
          }
        />

        <AppFormPasswordInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Informe sua senha"
          error={Boolean(errors.password?.message)}
        />

        <AppFormPasswordInput
          control={control}
          name="confirmPassword"
          label="Confirmar senha"
          placeholder="Repita a senha"
          error={Boolean(errors.confirmPassword?.message)}
        />
      </div>

      <div className="w-full flex flex-col justify-center">
        <Button
          type="submit"
          variant="contained"
          color="success"
          className="w-full max-w-[350px] h-12 self-center"
          endIcon={<AppRegistrationIcon />}
        >
          Próximo
        </Button>
      </div>
    </form>
  );
};
