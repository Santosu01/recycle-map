import { useNavigate } from "react-router-dom";
import { userSessionKey } from "../constants/localStorageKeys";

export const useLogout = () => {
  const navigate = useNavigate();

  return () => {
    sessionStorage.removeItem(userSessionKey);

    navigate("/login");
  };
};
