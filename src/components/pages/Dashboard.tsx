import { JSX } from "react";
import { DashboardCard } from "../molecules/DashboardCard";
import { CollectionLocationsList } from "../organisms/CollectionLocationsList";
import { getUserList } from "../../utils/getUserList";
import { getCollectionLocationList } from "../../utils/getCollectionLocationList";

export const Dashboard = (): JSX.Element => {
  const usersLength = String(getUserList().length);
  const collectionLocationsLength = String(getCollectionLocationList().length);

  return (
    <div className="flex flex-col gap-8 py-8 md:px-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <DashboardCard title="Usuários" value={usersLength} />
        <DashboardCard
          title="Pontos de coleta"
          value={collectionLocationsLength}
        />
      </div>

      <div>
        <CollectionLocationsList />
      </div>
    </div>
  );
};
