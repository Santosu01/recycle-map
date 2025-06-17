import { FC } from "react";
import { AppTitle } from "../atoms/AppTitle";
import { CollectionLocationForm } from "../organisms/CollectionLocationForm";
import { ICollectionLocation } from "../../types/collectionLocation";
import { updateCollectionLocationItem } from "../../utils/updateCollectionLocationItem";
import { useNavigate, useParams } from "react-router-dom";

export const CollectionLocationEdit: FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const updateData = (data: ICollectionLocation) => {
    updateCollectionLocationItem({
      ...data,
      id: params.id ?? "",
    });

    navigate("/session/pontos-de-coleta");
  };

  return (
    <div>
      <div>
        <AppTitle>Editar ponto de coleta</AppTitle>
      </div>

      <div>
        <CollectionLocationForm setData={updateData} />
      </div>
    </div>
  );
};
