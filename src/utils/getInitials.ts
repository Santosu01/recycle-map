export const getInitials = (text: string) => {
  if (!text || text?.trim() === "") {
    return "---";
  }

  return `${text.split(" ")?.[0]?.[0]}${text.split(" ")?.[1]?.[0]}`;
};
