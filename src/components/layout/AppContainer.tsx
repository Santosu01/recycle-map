import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { FC, useState } from "react";
import { AppProfileMenu } from "../molecules/AppProfileMenu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import MyLocationIcon from "@mui/icons-material/MyLocation";

interface IAppContainerProps {
  children: React.ReactNode;
}

interface ISidebarNavItems {
  key: string;
  label: string;
  icon: React.ReactNode;
  to: string;
}

export const AppContainer: FC<IAppContainerProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const sidebarNavItems: ISidebarNavItems[] = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <DashboardIcon />,
      to: "/session/dashboard",
    },
    {
      key: "collection-location",
      label: "Locais de coleta",
      icon: <MyLocationIcon />,
      to: "/session/collection-location",
    },
  ];

  return (
    <div className="relative w-screen h-screen flex">
      <header className="fixed z-50 w-full h-16 bg-green-800 shadow-xl/30 border-b border-green-900 px-8">
        <div className="self-end flex flex-col justify-center h-full w-full relative">
          <div className="self-end">
            <AppProfileMenu />
          </div>
        </div>
      </header>
      <div className="flex w-full">
        <aside
          className={`relative h-full bg-green-700 border-r border-green-800/70 transition-all duration-200 ease-in-out ${
            open ? "w-[240px]" : "w-12"
          }`}
        >
          <div className="flex flex-col justify-center w-fit absolute top-[70px] -right-[15px]">
            <button
              onClick={handleDrawerOpen}
              className="bg-green-800 rounded-full h-[30px] w-[30px] cursor-pointer flex flex-col justify-center text-white"
            >
              <ArrowForwardIosIcon
                sx={{ fontSize: 16 }}
                className={`transition-all duration-200 ease-in-out self-center ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          <div className="mt-[100px] flex flex-col w-full divide-y divide-white/40 justify-center text-white">
            {sidebarNavItems.map((navItem) => (
              <div
                key={navItem.key}
                className="flex flex-col justify-center w-full px-3 py-4"
              >
                <div>
                  <Link to={navItem.to}>
                    <span className="flex gap-4">
                      <span>{navItem.icon}</span>
                      <span className="uppercase whitespace-nowrap">
                        {navItem.label}
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div
          className={`pt-[70px] w-full px-6 ${
            open ? "w-[calc(100vw-(240px))]" : "w-[calc(100vw-(48px))]"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
