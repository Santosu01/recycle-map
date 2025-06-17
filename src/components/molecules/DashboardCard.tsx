import { FC } from "react";

interface IDashboardProps {
  value: string;
  title: string;
}

export const DashboardCard: FC<IDashboardProps> = ({ title, value }) => {
  return (
    <div className="px-4 py-4 w-full max-w-[350px] rounded-md bg-white shadow-md text-gray-500 md:py-8">
      <div className="w-full flex flex-col justify-center">
        <span className="self-center text-2xl font-semibold flex flex-col w-[75px] h-[75px] p-4 justify-center rounded-full bg-blue-100 text-center transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#48d17d5e] md:w-[90px] md:h-[90px] md:p-6">
          {value}
        </span>
      </div>
      <div className="flex flex-col justify-center mt-2">
        <span className="text-center font-semibold text-lg">{title}</span>
      </div>
    </div>
  );
};
