export const cleanUsername = (username: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(username)) {
    return username;
  }

  return username.replace(/\D/g, "");
};
