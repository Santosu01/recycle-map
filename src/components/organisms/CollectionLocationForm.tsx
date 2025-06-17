import { FC, useEffect } from "react";
import { AppFormInputText } from "../molecules/AppFormInputText ";
import { getCollectionLocationValidationSchema } from "../../validations/getCollectionLocationValidationSchema";
import { useForm } from "react-hook-form";
import SaveIcon from "@mui/icons-material/Save";
import { Button } from "@mui/material";
import { AppFormSelect } from "../molecules/AppFormSelect";
import {
  EWasteTypes,
  ICollectionLocation,
} from "../../types/collectionLocation";
import { AppFormAutocomplete } from "../molecules/AppFormAutocomplete";
import { getUserList } from "../../utils/getUserList";
import { useDebounce } from "../../hooks/useDebounce";
import { useGetAddressByPostalCode } from "../../hooks/useGetAddressByPostalCode";
import { useParams } from "react-router-dom";
import { getCollectionLocationItem } from "../../utils/getCollectionLocationItem";

interface ICollectionLocationFormProps {
  setData: (data: ICollectionLocation) => void;
}

export const CollectionLocationForm: FC<ICollectionLocationFormProps> = ({
  setData,
}) => {
  const params = useParams();
  const users = getUserList();
  const validationSchema = getCollectionLocationValidationSchema();
  const getAddressByPostalCode = useGetAddressByPostalCode();

  const typesWasteAcceptedOptions = Object.entries(EWasteTypes).map(
    ([key, value]) => ({ label: value, key })
  );

  const userIdentifyOptions = users
    .map((user) => ({
      label: user.name,
      key: user.cpf,
    }))
    .sort((a, b) =>
      a.label.localeCompare(b.label, "pt", { sensitivity: "base" })
    );

  const { control, handleSubmit, watch, setValue } = useForm({
    resolver: validationSchema,
  });

  const postalCodeValue = watch("postalCode");
  const debouncedSearch = useDebounce(postalCodeValue, 800);

  const onSubmit = handleSubmit((formValues) => {
    const {
      addressNumber,
      city,
      country,
      postalCode,
      neighborhood,
      state,
      street,
      complement,
      ...rest
    } = formValues;

    setData({
      ...rest,
      id: String(Date.now()),
      address: {
        addressNumber,
        city,
        country,
        postalCode,
        neighborhood,
        state,
        street,
        complement,
      },
    });
  });

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

  useEffect(() => {
    if (params?.id) {
      const data = getCollectionLocationItem(params.id);

      setValue("locationName", data?.locationName ?? "");
      setValue("locationDescription", data?.locationDescription ?? "");
      setValue("userIdentify", data?.userIdentify ?? "");
      setValue("typesWasteAccepted", data?.typesWasteAccepted ?? "");

      setValue("postalCode", data?.address?.postalCode ?? "");
      setValue("country", data?.address?.country ?? "");
      setValue("city", data?.address?.city ?? "");
      setValue("complement", data?.address?.complement ?? "");
      setValue("state", data?.address?.state ?? "");
      setValue("street", data?.address?.street ?? "");
      setValue("neighborhood", data?.address?.neighborhood ?? "");
      setValue("addressNumber", data?.address?.addressNumber ?? "");
    }
  }, []);

  return (
    <div className="mt-8">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-8 w-full bg-white rounded-md md:p-4"
      >
        <div className="grid grid-cols-1 divide-x divide-gray-300 max-h-[69vh] overflow-auto md:grid-cols-2">
          <div className="flex flex-col gap-4 p-4">
            <AppFormInputText
              control={control}
              name="locationName"
              label="Nome do local"
              placeholder="Informe o nome"
            />

            <AppFormInputText
              control={control}
              name="locationDescription"
              multiline
              label="Descrição do local"
              placeholder="Informe a descrição"
            />

            <AppFormAutocomplete
              control={control}
              name="userIdentify"
              label="Usuário"
              placeholder="Informe o usuário"
              items={userIdentifyOptions}
            />

            <AppFormSelect
              control={control}
              name="typesWasteAccepted"
              label="Tipo de residuo"
              items={typesWasteAcceptedOptions}
            />
          </div>

          <div className="flex flex-col gap-4 p-4">
            <AppFormInputText
              control={control}
              name="postalCode"
              label="CEP"
              placeholder="Informe o CEP do seu endereço"
              loading={getAddressByPostalCode.loading}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                name="neighborhood"
                label="Bairro"
                placeholder="Informe o bairro"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-7">
              <div className="col-span-1 md:col-span-5">
                <AppFormInputText
                  control={control}
                  name="street"
                  label="Rua"
                  placeholder="Informe a rua"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <AppFormInputText
                  control={control}
                  name="addressNumber"
                  label="Número"
                  placeholder="Informe o número"
                />
              </div>
            </div>

            <AppFormInputText
              control={control}
              name="complement"
              label="Complemento"
              placeholder="Informe o complemento"
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center p-4">
          <Button
            type="submit"
            variant="contained"
            color="success"
            className="w-full max-w-[350px] h-12 self-center"
            endIcon={<SaveIcon />}
          >
            Salvar
          </Button>
        </div>
      </form>
    </div>
  );
};
