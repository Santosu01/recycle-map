import { FC } from "react";
import { CollectionLocationsList } from "../organisms/CollectionLocationsList";
import { AppTitle } from "../atoms/AppTitle";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const CollectionLocations: FC = () => {
  const navigate = useNavigate();

  const goToAddCollectionLocation = () =>
    navigate("/session/adicionar-ponto-de-coleta");

  return (
    <div className="py-8 flex flex-col gap-4">
      <AppTitle>Pontos de coleta</AppTitle>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-end">
          <div className="self-end">
            <Button
              type="button"
              variant="contained"
              color="success"
              className="w-full max-w-[350px] h-12 self-center"
              endIcon={<AddIcon />}
              size="small"
              onClick={goToAddCollectionLocation}
            >
              Adicionar
            </Button>
          </div>
        </div>
        <div>
          <CollectionLocationsList showActions />
        </div>
      </div>
    </div>
  );
};
