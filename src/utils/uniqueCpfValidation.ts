import { getUserList } from "./getUserList";

export const uniqueCpfValidation = (cpf: string) => {
  if (!cpf) {
    return true;
  }

  const userList = getUserList();
  return !userList.some((user) => user.cpf === cpf.replace(/\D/g, ""));
};
