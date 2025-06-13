import { Outlet } from "react-router-dom";
import recycleMapImage from "../../assets/recycle-bg-image-row-item.png";

export const SignupLayout = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center relative">
      <div
        className="absolute z-10 w-full h-full bg-center bg-repeat bg-size-[300px] opacity-90"
        style={{ backgroundImage: `url(${recycleMapImage})` }}
      ></div>
      <div className="absolute z-20 w-full h-full bg-[#69b5795e] after:content-[' ']"></div>

      <div className="w-full z-50 flex flex-col justify-center px-4">
        <Outlet />
      </div>
    </div>
  );
};
