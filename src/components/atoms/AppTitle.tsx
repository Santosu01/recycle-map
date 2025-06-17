import React, { FC, JSX } from "react";

interface IAppTitleProps {
  children: React.ReactNode;
  classesList?: string[];
}

export const AppTitle: FC<IAppTitleProps> = ({
  children,
  classesList,
}): JSX.Element => {
  return (
    <h2
      className={`text-[#3e6f51] font-semibold text-xl md:text-2xl ${classesList?.join(
        " "
      )}`}
    >
      {children}
    </h2>
  );
};
