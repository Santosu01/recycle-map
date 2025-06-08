import { JSX } from "react";

export const NoPageFound = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-4xl font-semibold text-center">404</h2>
      <div className="flex flex-col justify-center">
        <p className="text-center">Pagina não encontrada</p>
      </div>
    </div>
  );
};
