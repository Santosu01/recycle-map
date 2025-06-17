import { FC } from "react";
import { CollectionLocationForm } from "../organisms/CollectionLocationForm";
import { AppTitle } from "../atoms/AppTitle";
import { ICollectionLocation } from "../../types/collectionLocation";
import { setCollectionLocation } from "../../utils/setCollectionLocation";
import { useNavigate } from "react-router-dom";

export const CollectionLocationAdd: FC = () => {
  const navigate = useNavigate();

  const saveData = (data: ICollectionLocation) => {
    setCollectionLocation(data);

    navigate("/session/pontos-de-coleta");
  };

  return (
    <div>
      <div>
        <AppTitle>Adicionar ponto de coleta</AppTitle>
      </div>

      <div>
        <CollectionLocationForm setData={saveData} />
      </div>
    </div>
  );
};
