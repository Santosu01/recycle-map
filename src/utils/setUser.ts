import { IUser } from "../types/user";
import { getUserList } from "./getUserList";
import { setUserList } from "./setUserList";

export const setUser = (user: IUser) => {
  const oldUSers = getUserList();

  setUserList([...oldUSers, user]);
};
