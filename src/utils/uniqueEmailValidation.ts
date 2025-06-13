import { getUserList } from "./getUserList";

export const uniqueEmailValidation = (email: string) => {
  if (!email) {
    return true;
  }

  const userList = getUserList();
  return !userList.some(
    (user) => user.email.toLowerCase() === email?.toLowerCase()
  );
};
