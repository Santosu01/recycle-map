import { FC } from "react";

interface IDashboardProps {
  value: string;
  title: string;
}

export const DashboardCard: FC<IDashboardProps> = ({ title, value }) => {
  return (
    <div className="px-4 py-8 w-full max-w-[350px] rounded-md bg-white shadow-md text-gray-500">
      <div className="w-full flex flex-col justify-center">
        <span className="self-center text-2xl font-semibold w-[90px] h-[90px] p-6 flex flex-col justify-center rounded-full bg-blue-100 text-center transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#48d17d5e]">
          {value}
        </span>
      </div>
      <div className="flex flex-col justify-center mt-2">
        <span className="text-center font-semibold text-lg">{title}</span>
      </div>
    </div>
  );
};
