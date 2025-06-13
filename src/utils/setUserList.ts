import { userListKey } from "../constants/localStorageKeys";
import { IUser } from "../types/user";

export const setUserList = (users: IUser[]) => {
  localStorage.setItem(userListKey, JSON.stringify(users));
};
