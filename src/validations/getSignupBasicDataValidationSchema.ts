import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IGender } from "../types/user";
import { uniqueCpfValidation } from "../utils/uniqueCpfValidation";
import { isValidCPF } from "../utils/isValidCPF";
import { uniqueEmailValidation } from "../utils/uniqueEmailValidation";

export const getSignupBasicDataValidationSchema = () => {
  return yupResolver(
    yup.object({
      name: yup.string().required("Usuário é obrigatório."),
      gender: yup.string<IGender>().required("Gênero é obrigatório."),
      cpf: yup
        .string()
        .required("CPF é obrigatório.")
        .test(
          "unique-cpf",
          "O cpf informado não esta disponível para cadastro.",
          (value) => uniqueCpfValidation(value)
        )
        .test("is-valid-cpf", "Cpf inválido", (value) => {
          if (!value) {
            return true;
          }

          return isValidCPF(value);
        }),
      birthdate: yup.string().required("Data de nascimento é obrigatório."),
      email: yup
        .string()
        .email()
        .required("Email é obrigatório.")
        .test(
          "unique-email",
          "O email informado não esta disponível para cadastro.",
          (value) => uniqueEmailValidation(value)
        ),
      password: yup.string().required("Senha é obrigatório."),
      confirmPassword: yup
        .string()
        .required("Confirmar senha é obrigatório.")
        .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    })
  );
};
