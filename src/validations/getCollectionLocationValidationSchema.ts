import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const getCollectionLocationValidationSchema = () => {
  return yupResolver(
    yup.object({
      locationName: yup.string().required("Nome do local é obrigatório."),
      locationDescription: yup
        .string()
        .required("Descrição do local é obrigatório."),
      userIdentify: yup.string().required("Usuário é obrigatório."),
      typesWasteAccepted: yup
        .string()
        .required("Tipo de residuos aceitos é obrigatório."),
      postalCode: yup
        .string()
        .required("CEP é obrigatório.")
        .test("invalid-postal-code", "CEP inválido", (value) => {
          const newPostalCode = value?.replace(/\D/g, "");

          if (!value) {
            return true;
          } else if (Number.isNaN(newPostalCode)) {
            return false;
          } else if (newPostalCode.length < 8) {
            return false;
          }

          return newPostalCode.length === 8;
        }),
      country: yup.string().required("País é obrigatório."),
      city: yup.string().required("Cidade é obrigatório."),
      state: yup.string().required("Estado é obrigatório."),
      street: yup.string().required("Rua é obrigatório."),
      addressNumber: yup.string().required("Número é obrigatório."),
      neighborhood: yup.string().required("Bairro é obrigatório."),
      complement: yup.string(),
    })
  );
};
