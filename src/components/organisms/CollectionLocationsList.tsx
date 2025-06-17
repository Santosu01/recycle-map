import { FC, useState } from "react";
import { ITableColumn } from "../../types/table";
import { AppTable } from "../molecules/AppTable";
import { getCollectionLocationList } from "../../utils/getCollectionLocationList";
import { translateWasteType } from "../../utils/translateWasteType";
import {
  ICollectionLocation,
  ICollectionLocationAddress,
} from "../../types/collectionLocation";
import EditDocumentIcon from "@mui/icons-material/EditDocument";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeCollectionLocation } from "../../utils/removeCollectionLocation";
import { useNavigate } from "react-router-dom";
import { translateUserIdentify } from "../../utils/translateUserIdentify";

interface ICollectionLocationsProps {
  showActions?: boolean;
}

const CollectionLocationAddress: FC<{
  address: ICollectionLocationAddress;
}> = ({ address }) => {
  const {
    street,
    addressNumber,
    neighborhood,
    city,
    state,
    country,
    postalCode,
    complement,
  } = address;

  return (
    <div className="w-2xs">
      <p>{`${street}, ${addressNumber}, ${neighborhood}, ${city}`}</p>
      <p>{`CEP: ${postalCode}, ${state}, ${country}`}</p>

      {complement ? <p>{complement}</p> : undefined}
    </div>
  );
};

const CollectionListActions: FC<{ id: string; refreshData: () => void }> = ({
  id,
  refreshData,
}) => {
  const navigate = useNavigate();

  const remove = () => {
    removeCollectionLocation(id);
    refreshData();
  };

  return (
    <div className="flex gap-4">
      <Button
        type="button"
        variant="contained"
        color="success"
        className="w-full max-w-[350px] h-12 self-center"
        endIcon={<EditDocumentIcon />}
        size="small"
        onClick={() => navigate(`/session/editar-ponto-de-coleta/${id}`)}
      >
        Editar
      </Button>

      <Button
        type="button"
        variant="contained"
        color="error"
        className="w-full max-w-[350px] h-12 self-center"
        endIcon={<DeleteIcon />}
        size="small"
        onClick={() => remove()}
      >
        Remover
      </Button>
    </div>
  );
};

export const CollectionLocationsList: FC<ICollectionLocationsProps> = ({
  showActions,
}) => {
  const [collectionLocationList, setCollectionLocationList] = useState<
    ICollectionLocation[]
  >(getCollectionLocationList());

  const refreshData = () => {
    setCollectionLocationList(getCollectionLocationList());
  };

  const collectionLocationHeaders: ITableColumn[] = [
    { key: "locationName", title: "Nome do local" },
    { key: "locationDescription", title: "Descrição do local " },
    {
      key: "userIdentify",
      title: "Identificador do Usuário ",
      render: (value) => {
        return translateUserIdentify(value);
      },
    },
    {
      key: "address",
      title: "Endereço",
      render: (value) => {
        return <CollectionLocationAddress address={value} />;
      },
    },
    {
      key: "typesWasteAccepted",
      title: "Resíduos aceitos",
      render: (value) => {
        return translateWasteType(value);
      },
    },
    ...(showActions
      ? [
          {
            key: "actions",
            title: "Ações",
            render: (_v: any, row: any) => {
              return (
                <CollectionListActions id={row.id} refreshData={refreshData} />
              );
            },
          },
        ]
      : []),
  ];

  return (
    <AppTable
      columns={collectionLocationHeaders}
      data={collectionLocationList}
      getRowKey={(data) => data.id}
    />
  );
};
