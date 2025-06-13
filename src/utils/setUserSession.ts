import { userSessionKey } from "../constants/localStorageKeys";
import { IUserInfo } from "../types/user";

export const setUserSession = (user: IUserInfo) => {
  sessionStorage.setItem(userSessionKey, JSON.stringify(user));
};
