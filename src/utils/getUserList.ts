import { userListKey } from "../constants/localStorageKeys";
import { IUser } from "../types/user";

export const getUserList = () => {
  const users = localStorage.getItem(userListKey);

  if (users) {
    return JSON.parse(users) as IUser[];
  }

  return [];
};
