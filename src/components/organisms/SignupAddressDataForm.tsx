import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AppFormInputText } from "../molecules/AppFormInputText ";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { IUserAddressInfo } from "../../types/user";
import { useDebounce } from "../../hooks/useDebounce";
import { useGetAddressByPostalCode } from "../../hooks/useGetAddressByPostalCode";

interface ISignupAddressDataFormProps {
  setAddressData: (data: IUserAddressInfo) => void;
}

export const SignupAddressDataForm: FC<ISignupAddressDataFormProps> = ({
  setAddressData,
}) => {
  const getAddressByPostalCode = useGetAddressByPostalCode();

  const validationSchema = yup.object({
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
  });

  const { control, handleSubmit, watch, setValue } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit((data) => {
    setAddressData({
      ...data,
      postalCode: data.postalCode.replace(/\D/g, ""),
    });
  });

  const postalCodeValue = watch("postalCode");
  const debouncedSearch = useDebounce(postalCodeValue, 800);

  useEffect(() => {
    if (debouncedSearch) {
      getAddressByPostalCode.getAddress(debouncedSearch);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    const data = getAddressByPostalCode.postalCodeAddress;

    setValue("country", "Brasil");
    setValue("city", data?.localidade ?? "");
    setValue("complement", data?.complemento ?? "");
    setValue("state", data?.estado ?? "");
    setValue("street", data?.logradouro ?? "");
    setValue("neighborhood", data?.bairro ?? "");
  }, [getAddressByPostalCode.postalCodeAddress]);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <AppFormInputText
          control={control}
          name="postalCode"
          label="CEP"
          placeholder="Informe o CEP do seu endereço"
          loading={getAddressByPostalCode.loading}
        />

        <AppFormInputText
          control={control}
          name="country"
          label="País"
          placeholder="Informe o país"
        />

        <AppFormInputText
          control={control}
          name="state"
          label="Estado"
          placeholder="Informe o Estado"
        />

        <AppFormInputText
          control={control}
          name="city"
          label="Cidade"
          placeholder="Informe a cidade"
        />

        <AppFormInputText
          control={control}
          name="street"
          label="Rua"
          placeholder="Informe a rua"
        />

        <AppFormInputText
          control={control}
          name="neighborhood"
          label="Bairro"
          placeholder="Informe o bairro"
        />

        <AppFormInputText
          control={control}
          name="addressNumber"
          label="Número"
          placeholder="Informe o número"
        />

        <AppFormInputText
          control={control}
          name="complement"
          label="Complemento"
          placeholder="Informe o complemento"
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
          Salvar
        </Button>
      </div>
    </form>
  );
};
