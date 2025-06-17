import { EWasteTypes } from "../types/collectionLocation";

export const translateWasteType = (wasteType: string) => {
  return EWasteTypes[wasteType as keyof typeof EWasteTypes] ?? wasteType ?? "-";
};
