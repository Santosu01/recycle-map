import { JSX } from "react";
import { DashboardCard } from "../molecules/DashboardCard";
import { ITableColumn } from "../../types/table";
import { AppTable } from "../molecules/AppTable";

export const Dashboard = (): JSX.Element => {
  const collectionLocationHeaders: ITableColumn[] = [
    { key: "localName", title: "Nome do local" },
    { key: "localDescription", title: "Descrição do local " },
    { key: "user", title: "Identificador do Usuário " },
    { key: "address", title: "Endereço" },
    { key: "acceptedWaste", title: "Resíduos aceitos" },
  ];

  return (
    <div className="p-8 flex flex-col gap-8">
      <div className="flex gap-8">
        <DashboardCard title="Usuários" value="50" />
        <DashboardCard title="Locais de coleta" value="40" />
      </div>

      <div className="max-w-[1440px]">
        <AppTable
          columns={collectionLocationHeaders}
          data={[]}
          getRowKey={(data) => data.id}
        />
      </div>
    </div>
  );
};
