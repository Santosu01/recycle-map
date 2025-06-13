import { userSessionKey } from "../constants/localStorageKeys";
import { IUser } from "../types/user";

export const getUserSession = () => {
  const user = sessionStorage.getItem(userSessionKey);

  if (user) {
    return JSON.parse(user) as IUser;
  }

  return undefined;
};
