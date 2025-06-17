import { getUserList } from "./getUserList";

export const translateUserIdentify = (cpf: string) => {
  const userList = getUserList();

  return userList.find((user) => user.cpf === cpf)?.name ?? cpf ?? "-";
};
