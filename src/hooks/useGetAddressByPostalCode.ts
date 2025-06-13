import { useState } from "react";

interface IPostalCodeResult {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export const useGetAddressByPostalCode = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [postalCodeAddress, setPostalCodeAddress] =
    useState<IPostalCodeResult>();

  const getAddress = async (
    postalCode: string
  ): Promise<IPostalCodeResult | void> => {
    const newPostalCode = postalCode.replace(/\D/g, "");

    if (
      !newPostalCode.length ||
      newPostalCode.length < 8 ||
      newPostalCode.length > 8
    ) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://viacep.com.br/ws/${newPostalCode}/json/`
      );
      const data = await response.json();

      setPostalCodeAddress(data as IPostalCodeResult);
    } catch (error) {
      setPostalCodeAddress(undefined);
      console.error(error);
      setErrorMessage(
        "Não foi possivel buscar o endereço para o cep informado."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    errorMessage,
    getAddress,
    postalCodeAddress,
  };
};
