import { FC } from "react";
import { ITableColumn } from "../../types/table";

interface IAppTableProps {
  data: { [x: string]: any }[];
  columns: ITableColumn[];
  getRowKey: (row: { [x: string]: any }) => React.Key;
}

export const AppTable: FC<IAppTableProps> = ({ data, columns, getRowKey }) => {
  return (
    <div className="p-2 bg-white rounded-md">
      <table className="min-w-full text-left rounded-md">
        <thead className="bg-white">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="p-2 border-b border-gray-500 text-gray-500"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.length > 0 ? (
            data.map((row) => (
              <tr key={getRowKey(row)} className="hover:bg-gray-50">
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className="p-2 border-b border-gray-500"
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : String(row[col.key])}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center text-gray-500 py-10 italic"
              >
                Ops! Nenhum usuário encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
